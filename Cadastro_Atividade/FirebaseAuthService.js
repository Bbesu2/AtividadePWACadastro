import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

class FirebaseAuthService {
    #auth;
    constructor(app){
        this.#auth = getAuth(app);
    }

    criarUsuarioComEmailESenha(email,senha){
        createUserWithEmailAndPassword(this.#auth, email, senha)
            .then((credencialdoUsuario) => {
                console.log('Usuario criado com sucesso: ', credencialdoUsuario.user);
                window.location.href = `perfil.html?email=${encodeURIComponent(email)}`;
      })
        .catch((erro) => {
            console.error("Erro ao criar o usuario: ", erro)
        }) 
    }
}

export default FirebaseAuthService;
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import {validatePassword, signOut} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const auth = getAuth();

const status = await validatePassword(getAuth(), passwordFromUser);
if (!status.isValid) {
// Password could not be validated. Use the status to show what
// requirements are met and which are missing.
}



signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

    criarUsuarioComEmailESenha(email,senha){
        createUserWithEmailAndPassword(this.#auth, email, senha)
            .then((credencialdoUsuario) => {
                console.log('Usuario criado com sucesso: ', credencialdoUsuario.user);
      })
        .catch((erro) => {
            console.error("Erro ao criar o usuario: ", erro)
        })
}

export default FirebaseAuthService;
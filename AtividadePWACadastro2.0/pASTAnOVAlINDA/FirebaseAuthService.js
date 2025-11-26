import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//criando conta

const auth = getAuth();

SignInMethod: {
  readonly EMAIL_PASSWORD: "password";
}

criarUsuarioComEmailESenha(email,senha){
  createUserWithEmailAndPassword(this.#auth, email, senha)
      .then((credencialdoUsuario) => {
          console.log('Usuario criado com sucesso: ', credencialdoUsuario.user);
})
  .catch((erro) => {
      console.error("Erro ao criar o usuario: ", erro);
  })
}

// 

signInWithEmailAndPassword(auth, email, senha)
.then((credencialdoUsuario) => {
  // Signed in 
  const user = credencialdoUsuario.user;
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
})

//Validando senha
const status = await validatePassword(getAuth(), passwordFromUser);
if (!status.isValid) {

  const needsLowerCase = status.containsLowercaseLetter !== true;

}

import { getAuth, signOut } from "firebase/auth";

// logout
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
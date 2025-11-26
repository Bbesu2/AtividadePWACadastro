  // Import the functions you need from the SDKs you need
   import FireBaseAuthService from './FirebaseAuthService.js';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, validatePassword, singInWithEmailAndPassoword} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXI-PjsWDmwddmlt6DnfF4M4pC59XDS7o",
  authDomain: "aulapwahambuguermenu.firebaseapp.com",
  projectId: "aulapwahambuguermenu",
  storageBucket: "aulapwahambuguermenu.firebasestorage.app",
  messagingSenderId: "1056583419682",
  appId: "1:1056583419682:web:92b22388925334008dc77b",
  measurementId: "G-MNMPRFEDRT"
};

  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(window.fbApp);
  console.log(app);
 
  const auth = getAuth(app);

//criqando usuuario

criarUsuarioComEmailESenha(email,senha){
  createUserWithEmailAndPassword(auth, email, senha)
      .then((credencialdoUsuario) => {
          console.log('Usuario criado com sucesso: ', credencialdoUsuario.user);
})
  .catch((erro) => {
      console.error("Erro ao criar o usuario: ", erro)
  })
}

//Entrando na conta
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

singInWithEmailAndPassoword(auth, email, senha)


// codigo para linkar o formulario com o arquivo FirebaseAuthService
  document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("cadastroForm");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    //mandando dados do form para o FireBase
    const FirebaseAuthService = new FireBaseAuthService(window.fbApp);
    FirebaseAuthService.criarUsuarioComEmailESenha(email, senha);
    //se o login ocorrer de forma correta ira levar o usuario a pagina de perfil
      if (FirebaseAuthService.criarUsuarioComEmailESenha(email, senha) = erro)
      {console.log("Erro")} else{
        document.getElementById("Enviar").addEventListener("click",() => {
  location.href = "perfil.html"})}

});
});



const authService = new FireBaseAuthService(app);


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
   import FireBaseAuthService from './FirebaseAuthService.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD-SRYy77JnjS7dsg5BrJ7kb_bop7ALyMA",
    authDomain: "logincadastro-atividade.firebaseapp.com",
    projectId: "logincadastro-atividade",
    storageBucket: "logincadastro-atividade.firebasestorage.app",
    messagingSenderId: "1064947047897",
    appId: "1:1064947047897:web:55b216afa0489352afcdc8",
    measurementId: "G-SZFE6N0TZQ"
  };

  window.fbApp = initializeApp(firebaseConfig);
  window.analytics = getAnalytics(window.fbApp);
  console.log(window.fbApp);


// codigo para linkar o formulario com o arquivo FirebaseAuthService
  document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("cadastroForm");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    //mandando dados do form para o FireBase
    const FirebaseAuthService = new FireBaseAuthService(window.fbApp);
    FirebaseAuthService.criarUsuarioComEmailESenha(email, senha);
    //se o login ocorrer de forma correta ira levar o usuario a pagina de perfil
      if (FirebaseAuthService.criarUsuarioComEmailESenha(email, senha) = erro)
      {console.log("Erro")} else{
        document.getElementById("Enviar").addEventListener("click",() => {
  window.location.href = "perfil.html"})}

});
});
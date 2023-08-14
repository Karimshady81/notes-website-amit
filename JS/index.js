var loginButton = document.getElementById("LoginBtn");
var registerButton = document.getElementById("RegisterBtn");

loginButton.addEventListener("click", goToLoginPage);
registerButton.addEventListener("click", goToRegisterPage);

function goToLoginPage(){
    window.location.href = `../HTML/Login.html`
    console.log("login")
}

function goToRegisterPage(){
    window.location.href = `../HTML/Register.html`
    console.log("register");
}
//NOTES:
//make setitem and getitem and compare the entered values

//VARABLES FOR LOGIN PAGE:
var registerButton = document.getElementById("RegisterBtn")
var loginEmail = document.getElementById("LoginEmail");
var loginPassword = document.getElementById("LoginPassword");
var loginButton = document.querySelector("#LoginBtn");
var blank = document.getElementById("blank-data");
var usersFromLocalStorage = JSON.parse(localStorage.getItem("details"));
var currentUser;

//WATCHERS
loginButton.addEventListener("click", checkDetails);
registerButton.addEventListener("click", goToRegisterPage);


//FUNCTIONS
function checkDetails() {
    var messages = [];
    if (loginEmail.value == "" || loginPassword.value == "") {
        messages.push(`<p class="text-danger">*Please enter email/password</p>`);
        blank.innerHTML = messages.join("");
    } else {
        var user = usersFromLocalStorage.find(user => user.Email === loginEmail.value);
        if (!user) {
            messages.push(`<p class="text-danger">*Wrong Email</p>`);
            blank.innerHTML = messages.join("");
        } else if (user.Password1 !== loginPassword.value) {
            messages.push(`<p class="text-danger">*Wrong password</p>`);
            blank.innerHTML = messages.join("");
        } else {
            currentUser = user;
            localStorage.setItem("loggedInEmail",user.Email);
            console.log(currentUser.Email);
            window.location.href = `../HTML/Notes.html`;
            console.log("Logged in successfully");
        }
    }
}

function goToRegisterPage() {
    window.location.href = `../HTML/Register.html`;
}
//*************************** */
//VARABLES FOR REGISTER PAGE:
//*************************** */
var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPassword1 = document.getElementById("userPassword1");
var userPassword2 = document.getElementById("userPassword2");
var form = document.getElementById("form");
var submitButton = document.querySelector("#submitBtn");
var loginButton = document.getElementById("LoginBtn");
var errorMessage = document.getElementById("passwordVerify");
var blank = document.getElementById("blank-data");
var allDetails;

//WATCHERS
submitButton.addEventListener("click",addDetails);
loginButton.addEventListener("click",GoTologinPage);

//note:
//Validate by making if condition if value is empty 

// CONDITION 
if(localStorage.getItem("details")){
    allDetails = JSON.parse(localStorage.getItem("details"));
}else{
    console.log("else");
    allDetails = [];
}


//FUNCTIONS
function addDetails(){
    var emailExists = allDetails.some(user => user.Email === userEmail.value);
    var userNameExists = allDetails.some(user => user.Name === userName.value);
    var messages = [];
    
    if(userName.value == "" || userEmail.value == ""){
        messages.push(`<p class="text-danger">*Please enter the required data</p>`);
        blank.innerHTML = messages.join("");
        console.log("Please enter the required data")
    }
    else if (userPassword1.value == "" || userPassword2.value == ""){
        messages.push(`<p class="text-danger">*Please enter a password</p>`);
        blank.innerHTML = messages.join("");
    }
    else if(userPassword1.value != userPassword2.value){
        messages.push(`<p class="text-danger fs-5">*Passwords do not match</p>`);        
        blank.innerHTML = messages.join("");
        console.log("Passwords do not match")
    }
    else if (userNameExists) {
        messages.push(`<p class="text-danger">*Username already exists</p>`);
        blank.innerHTML = messages.join("");
        console.log("username already exists")
    }
    else if (emailExists) {
            messages.push(`<p class="text-danger">*Email already exists</p>`);
            blank.innerHTML = messages.join("");
            console.log("email already exists")
    }
    else {
        var details = {
            Name : userName.value ,
            Email : userEmail.value ,
            Password1 : userPassword1.value ,
            password2 : userPassword2.value ,   
            Notes : []
        }
        allDetails.unshift(details);
        localStorage.setItem("details",JSON.stringify(allDetails));
        console.log("Added details")
        window.location.href = '../HTML/Login.html';
    }
}

function GoTologinPage(){
    window.location.href = '../HTML/Login.html';
}
//VARABLES
var noteNumber = location.search.split("note-id=")[1];

var users = JSON.parse(localStorage.getItem("details"));
var loggedInEmail = localStorage.getItem("loggedInEmail");
var currentUser = users.find(user => user.Email === loggedInEmail);

var notesArray = currentUser.Notes;
var note = notesArray[noteNumber];

var noteContent = document.getElementById("content");
noteContent.innerHTML = `<p>${note.note}</p>`;

var noteTitle = document.getElementById("title");
noteTitle.innerHTML = `<p>${note.title}</p>`;

var displayUserName = document.getElementById("display-username");
displayName();

//FUNCTION
function homePage(){
    window.location.href = "Notes.html";
    displayName();
}

function displayName(){
    var welcome = `welcome ${currentUser.Name}`;
    displayUserName.innerHTML = `<h3>${welcome}</h3>`
}
  

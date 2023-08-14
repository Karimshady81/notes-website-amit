// VARABLES
var noteInput = document.getElementById("note-input");
var title = document.getElementById("title");
var saveButton = document.querySelector("#save-button");
var displayNotesDetails = document.getElementById("display-notes");
var displayUserName = document.getElementById("display-username")
var allInputs = document.querySelectorAll(".form-control");
var blankInput = document.getElementById("blank-input");
var allNotes;
var currentUser;

//WATCHERS
saveButton.addEventListener("click", saveNote);

//CONDITIONS
if (localStorage.getItem("details")){
  var allDetails = JSON.parse(localStorage.getItem("details"));
  var loggedInEmail = localStorage.getItem("loggedInEmail");

  currentUser = allDetails.find(user => user.Email === loggedInEmail);
  if(!currentUser){
    console.log("Couldn't find details")
  }
  displayNotes();
  displayName();
}
//FUNCTIONS
function saveNote() {
  var message = [];
  if(title.value == ""){
    message.push(`<p class="text-danger">*Please type a title</p>`)
    blankInput.innerHTML = message.join("");
  }
  else if(noteInput.value == ""){
    message.push(`<p class="text-danger">*Please type in the content section</p>`)
    blankInput.innerHTML = message.join("");
  }
  else{
    console.log("saved");
    var newNote = {
        title: title.value,
        note: noteInput.value
    }
    currentUser.Notes.push(newNote);
    localStorage.setItem("details", JSON.stringify(allDetails));
    clearInput();
}
}

//FUCNTION TO DISPLAY NOTES 
function displayNotes(){
    var temp = "";
    for (var i=0 ; i<currentUser.Notes.length ; i++) {
        temp += `
        <div class="col-lg-4 col-md-6 py-3">
          <div class="card" style="width: 18rem;">
            <img src="../Images/charlesdeluvio-Wd3DG2ABwzE-unsplash.jpg" class="card-img-top" alt="Notes">
              <div class="card-body" style=""text-overflow: ellipsis;>
                <h5 class="card-title">Title:${currentUser.Notes[i].title}</h5>
                <p class="card-text">Preview:${currentUser.Notes[i].note.substring(0,15)}</p>
                <a onclick="showNote(${i})" class="btn btn-warning btn-sm">Show</a>
                <a onclick="deleteNote(${i})" class="btn btn-warning btn-sm">Delete</a>
                <a href="#" class="btn btn-warning btn-sm">Edit</a>
              </div>
          </div>
        </div>
      `;
    }
    displayNotesDetails.innerHTML = temp;
}

//FUNCTION TO CLEAR INPUTS
function clearInput() {
  for (var i=0; i<allInputs.length;i++) {
    allInputs[i].value = "";
  }
}

//FUNCTION TO DELTE NOTE
function deleteNote (index){
  var deltedNote = currentUser.Notes.splice(index,1);
  localStorage.setItem("details", JSON.stringify(allDetails));
  displayNotes();
}

//FUNCTION TO SHOW NOTES
function showNote(index){
  location.href = `../HTML/ShowNote.html?note-id=${index}`;
}

function displayName(){
  var welcome = `welcome ${currentUser.Name}`;
  displayUserName.innerHTML = `<h3>${welcome}</h3>`
}

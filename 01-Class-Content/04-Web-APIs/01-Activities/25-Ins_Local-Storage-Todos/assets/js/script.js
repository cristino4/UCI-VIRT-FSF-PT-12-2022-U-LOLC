var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

function saveLastGrade() {

}

function renderLastGrade() {

}

saveButton.addEventListener("click", function(event) {
event.preventDefault();
saveLastGrade();
renderLastGrade();
});

// The init() function fires when the page is loaded 
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderLastGrade();
}
init();

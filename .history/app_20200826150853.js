console.log("this is app.js");
// cunstructer
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// Display Constructer
function Display() {}
// add method to display prototype
Display.prototype.add = function (book) {
  console.log("adding to UI");
  let tableBody = document.getElementById("tableBody");
  let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                      </tr>`;

  tableBody.innerHTML += uiString;
};

//
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");

  libraryForm.reset();
};

// Add submit event listeners to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("you have submitted library form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;
  // fiction programing cooking
  let fiction = document.getElementById("fiction");
  let programing = document.getElementById("programing");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programing.checked) {
    type = programing.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);
  let display = new Display();
  if(Display.validate(book)){
  display.add(book);
  display.clear();
  display.show('success');
  }else{
    // show error to the user
    display.show('error');
  }


  e.preventDefault();
}

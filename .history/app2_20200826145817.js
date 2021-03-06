// Constructer
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// display constucter
function Display() {}

// add method to display prototype
Display.prototype.add = function (book) {
  console.log("UI adding");
  let tableBody = document.getElementById("tableBody");
  uiString = `
    <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
    </tr>`;
  tableBody.innerHTML += uiString;
  
};

Display.prototype.clear = function (e) {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
  e.preventDefault();
};

// add eventlisteners for submit
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;
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
  display.add(book);
  display.clear();

  e.preventDefault();
}

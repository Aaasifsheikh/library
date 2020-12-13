class Book {
   constructor(name, author, type){
    this.name = name;
    this.author =author;
    this.type = type;
} 
}
class Display {
    add(book) {
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
    clear(){
        let libraryForm = document.getElementById("libraryForm");

  libraryForm.reset();
    }
    validate(book){
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
          } else {
            return true;
          }
    }
    function (type, displaymessage) {
  document.getElementById("message");
  message.innerHTML += `
                          <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>message:</strong> ${displaymessage}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>`;

  setTimeout(function(){
    message.innerHTML = '';
  },2000);
};

// Add submit event listeners to libraryForm
let libraryForm = document.getElementById('.libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
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

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your book has been succesfully added");
  } else {
    // show error to the user
    display.show("danger", "sorry you can not add this book");
  }

  e.preventDefault();
}
// Constructer
function Book('name', 'author', 'type');
this.name = name;
this.author = author;
this.type = type;

// display constucter
function Display(){};

// add method to display prototype




// add eventlisteners for submit
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    let name = document.getElementById("booName").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let programing = document.getElementById("programing");
    let cooking = document.getElementById("cooking");

    



    e.preventDefault();
}

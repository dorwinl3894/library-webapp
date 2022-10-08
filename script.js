const bookTitle = document.getElementById("form-book-title");
const bookAuthor = document.getElementById("form-book-author");
const bookPages = document.getElementById("form-book-pages");
const libraryGrid = document.getElementById("library-grid")

const addBookButton = document.getElementById("add-book")
let readToggle = false;

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
Book.prototype.read = function() {

}
Book.prototype.remove = function() {
    
}

function addBookToLibrary() {
    //console.log("haii");
    if (bookTitle.value == "" || bookAuthor.value == "" || bookPages.value == "") {
        alert("Please fill in all the inputs");
    }
    else {
        let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
        //console.log(newBook);
        //push object into Array
        myLibrary.push(newBook);
        console.log(myLibrary);
        bookTitle.value = "";
        bookAuthor.value = "";
        bookPages.value = "";
    
        libraryGrid.innerHTML = "";
    
        myLibrary.forEach(displayBook);
    }
    
}

function displayBook(book, index) {

    const newLibraryBook = document.createElement("div");
    newLibraryBook.classList.add("library-book");

    libraryGrid.appendChild(newLibraryBook);

    const newBookTitle = document.createElement("h1");
    newBookTitle.classList.add("library-book-title");
    newBookTitle.textContent = book.title;

    const newBookAuthor = document.createElement("h2");
    newBookAuthor.classList.add("library-book-author");
    newBookAuthor.textContent = book.author;

    const newBookPages = document.createElement("h3");
    newBookPages.classList.add("library-book-pages");
    newBookPages.textContent = book.pages + " pages";

    const newBookButtonRead = document.createElement("button");
    newBookButtonRead.classList.add("library-book-readToggle");
    newBookButtonRead.textContent = "Read";
    newBookButtonRead.dataset.indexNumber = index;

    const newBookButtonRemove = document.createElement("button");
    newBookButtonRemove.classList.add("library-book-remove");
    newBookButtonRemove.textContent = "Remove";
    newBookButtonRemove.dataset.indexNumber = index;

    newLibraryBook.appendChild(newBookTitle);
    newLibraryBook.appendChild(newBookAuthor);
    newLibraryBook.appendChild(newBookPages);
    newLibraryBook.appendChild(newBookButtonRead);
    newLibraryBook.appendChild(newBookButtonRemove);
}

addBookButton.addEventListener("click", addBookToLibrary);

//button Toggle
libraryGrid.addEventListener("click", function(event) {
    let selectedBookIndex;
    let selectedBook
    //console.log(event.target);
    //Read Button Toggle
    if (event.target.classList.value == 'library-book-readToggle') {
        //console.log("hi");
        selectedBookIndex = event.target.dataset.indexNumber;
        //console.log(selectedBookIndex);
        //console.log(myLibrary[event.target.dataset.indexNumber]);
        //console.log(libraryGrid)
        selectedBook = document.querySelector(`[data-index-number="${selectedBookIndex}"]`);
        
        if (selectedBook.parentNode.classList.contains("BookIsRead")) {
            selectedBook.parentNode.classList.remove("BookIsRead"); 
        }
        else {
            selectedBook.parentNode.classList.add("BookIsRead"); 
        }
    };

    //remove Button Toggle
    if (event.target.classList.value == 'library-book-remove') {
        selectedBookIndex = event.target.dataset.indexNumber;
        selectedBook = document.querySelector(`[data-index-number="${selectedBookIndex}"]`);
        console.log(selectedBookIndex);
        console.log(selectedBook);

        selectedBook.parentNode.classList.add("removedBook");
        //myLibrary.splice(selectedBookIndex, 1);
    }
});


"use strict";
class LibraryBook {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    ischeckedOut() {
        return !!this.checkedOutBy;
    }
    checkOut(patron) {
        if (this.ischeckedOut()) {
            console.log("This book is already checked out.");
        }
        else {
            this.checkedOutBy = patron;
            patron.checkedOutBooks.push(this);
            console.log(`${this.title} has been checked out by ${patron.name}`);
        }
    }
    returnBook() {
        if (this.ischeckedOut()) {
            console.log(`${this.title} has been returned`);
            this.checkedOutBy = undefined;
        }
        else {
            console.log("This book is not currently checked out.");
        }
    }
}
class LibraryPatron {
    constructor(name) {
        this.name = name;
        this.checkedOutBooks = [];
    }
}
class Library {
    constructor(books) {
        this.books = books;
    }
    checkOutBook(book, patron) {
        book.checkOut(patron);
    }
    returnBook(book) {
        book.returnBook();
    }
}
const book1 = new LibraryBook("Book 1", "Author 1");
const book2 = new LibraryBook("Book 2", "Author 2");
const patron1 = new LibraryPatron("Patron 1");
const patron2 = new LibraryPatron("Patron 2");
const books = [book1, book2];
const library = new Library(books);
library.checkOutBook(book1, patron1);
library.checkOutBook(book2, patron2);
library.checkOutBook(book1, patron2);
library.returnBook(book1);
library.returnBook(book1);

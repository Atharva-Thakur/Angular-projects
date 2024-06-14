interface Book {
    title: string;
    author: string;
    checkedOutBy?: Patron;
    ischeckedOut(): boolean;
    checkOut(patron: Patron): void;
    returnBook(): void;
}

interface Patron{
    name: string;
    checkedOutBooks: Book[];
}


class LibraryBook implements Book{
    title: string;
    author: string;
    checkedOutBy?: Patron;

    constructor(title:string,author:string){
        this.title = title;
        this.author = author;
    }

    ischeckedOut(): boolean {
        return !!this.checkedOutBy;
    }

    checkOut(patron: Patron): void {
        if(this.ischeckedOut()){
            console.log("This book is already checked out.")
        }else{
            this.checkedOutBy = patron;
            patron.checkedOutBooks.push(this as Book);
            console.log(`${this.title} has been checked out by ${patron.name}`)
        }

    }

    returnBook(): void {
        if(this.ischeckedOut()){
            console.log(`${this.title} has been returned`);
            this.checkedOutBy=undefined;
        }else{
            console.log("This book is not currently checked out.")
        }
    }
}   

class LibraryPatron implements Patron {
    name: string;
    checkedOutBooks: Book[];

    constructor(name: string) {
        this.name = name;
        this.checkedOutBooks = [];
    }
}


class Library {
    books: Book[];
    constructor(books:Book[]){
        this.books=books;
    }

    checkOutBook(book: Book,patron:Patron){
        book.checkOut(patron);
    }

    returnBook(book:Book){
        book.returnBook();
    }
}

// Create instances of books
const book1: Book = new LibraryBook("Book 1", "Author 1");
const book2: Book = new LibraryBook("Book 2", "Author 2");

// Create instances of patrons
const patron1: Patron = new LibraryPatron("Patron 1");
const patron2: Patron = new LibraryPatron("Patron 2");

// Create an array of books for the library
const books: Book[] = [book1, book2];

// Create an instance of the library
const library: Library = new Library(books);

// Test check-out and return operations
library.checkOutBook(book1, patron1); // Check out Book 1 to Patron 1
library.checkOutBook(book2, patron2); // Check out Book 2 to Patron 2

// Try to check out Book 1 again
library.checkOutBook(book1, patron2); // This should print "This book is already checked out."

// Return Book 1
library.returnBook(book1); // Return Book 1

// Try to return Book 1 again
library.returnBook(book1); // This should print "This book is not currently checked out."
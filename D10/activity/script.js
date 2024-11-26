class Book {
    constructor(title, author, genre) {
      this.title = title || '';
      this.author = author || '';
      this.genre = genre || '';
      this.isAvailable = true;
    }
  
    borrowBook() {
      if (!this.isAvailable) {
        return `Can't borrow "${this.title}". It's not available.`;
      }
      this.isAvailable = false;
      return `The book "${this.title}" was borrowed successfully.`;
    }
  
    returnBook() {
      if (this.isAvailable) {
        return `The book "${this.title}" was already returned.`;
      }
      this.isAvailable = true;
      return `The book "${this.title}" was returned successfully.`;
    }
  
    displayInfo() {
      console.log(`| ${this.title.padEnd(30)} | ${this.author.padEnd(20)} | ${this.genre.padEnd(15)} | ${this.isAvailable ? 'Available' : 'Not Available'.padEnd(15)} |`);
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(title, author, genre) {
      const newBook = new Book(title, author, genre);
      this.books.push(newBook);
      console.log(`The book "${title}" was successfully added to the library.`);
    }
  
    removeBook(title) {
      const bookIndex = this.books.findIndex((book) => book.title === title);
      if (bookIndex === -1) {
        return `No book found with title "${title}".`;
      }
      this.books.splice(bookIndex, 1);
      return `The book "${title}" was removed from the library.`;
    }
  
    searchBooks(title) {
      console.log(`Searching for books with title: "${title}"`);
      const results = this.books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
      if (results.length === 0) {
        return `No books found with title containing "${title}".`;
      }
      return results;
    }
  
    displayBooks() {
      if (this.books.length === 0) {
        return "No books in the library.";
      }
      console.log("+------------------------------+----------------------+-----------------------+-------------------+");
      console.log("| Title                        | Author               | Genre                 | Availability      |");
      console.log("+------------------------------+----------------------+-----------------------+-------------------+");
  
      this.books.forEach((book) => {
        book.displayInfo();
        console.log("+------------------------------+----------------------+-----------------------+-------------------+");
      });
    }
  }
  
  const myLibrary = new Library();
  myLibrary.addBook("Book 1", "Author 1", "Genre 1");
  myLibrary.addBook("Book 2", "Author 2", "Genre 2");
  myLibrary.addBook("Book 3", "Author 3", "Genre 3");
  
  console.log(myLibrary.searchBooks("Book 1"));
  myLibrary.displayBooks();
  
  console.log(myLibrary.removeBook("Book 2"));
  myLibrary.displayBooks();
  
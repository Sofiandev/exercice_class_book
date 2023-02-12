class Book {
  #page = 1;

  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }

  get page() {
    return this.#page;
  }

  nextPage() {
    if (this.#page < this.pages) {
      return this.#page++;
    }
  }

  previousPage() {
    return this.#page--;
  }

  close() {
    return (this.#page = 1);
  }
}

class Library {
  #books = [];

  addBook(book) {
    this.#books.push(book);
  }

  addBooks(books) {
    books.forEach((book) => this.addBook(book));
    // for (let book of books) {
    //   this.addBook(book);
    // }
  }

  //   filter by letter
  findBookByLetter(letter) {
    const found = [];
    for (let book of this.#books) {
      if (book.title[0].toLowerCase() === letter.toLowerCase()) {
        found.push(book);
      }
    }
    return found;
  }
}

const b = new Book("Seigneur des anneaux", 200);
const c = new Book("Gomorra", 250);
console.log(b.page);
b.nextPage();
console.log(b.page);
b.close();
console.log(b.page);

const l = new Library();
l.addBook(b);
l.addBooks([
  new Book("Ready player one", 100),
  new Book("Oui-oui", 10),
  new Book("Sillage", 50),
]);
console.log(l.findBookByLetter("s"));

//Create an array of book objects, with title and author
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "Moby-Dick", author: "Herman Melville" }
];

//loops over the array of book objects and create a new <li> for 
//each book object and add the title and author to the <li> and insert it into the <ul>.
const bookListElement = document.querySelector(".book-list");
books.forEach((book) => {
    const bookInfo = document.createElement("li");

    bookInfo.textContent = `Book Title: "${book.title}". Book author: "${book.author}"`;
    bookListElement.appendChild(bookInfo);
})
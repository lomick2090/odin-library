let myLibrary = [];

const cardHolder = document.querySelector('.cardholder');
const titleBox = document.getElementById('title');
const authorBox = document.getElementById('author');
const pagesBox = document.getElementById('pages');
const readBox = document.getElementById('read');
const addButton = document.getElementById('add');

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let inputTitle = titleBox.value;
    titleBox.value = '';
    let inputAuthor = authorBox.value;
    authorBox.value = '';
    let inputPages = pagesBox.value;
    pagesBox.value = '';
    let inputRead = readBox.checked;
    readBox.checked = false;

    let newBook = new book(inputTitle, inputAuthor, inputPages, inputRead);

    myLibrary.push(newBook);
    addCard();
}
function deleteBook() {
    console.log(this.parentNode);
}



addButton.addEventListener('click', addBookToLibrary);

function addCard() {
    let card = document.createElement('div');
    let i = myLibrary.length - 1;
    card.setAttribute('data-index', i);
    card.className = 'card';

    let newTitle = myLibrary[i].title;
    let cardTitle = document.createElement('h1');
    cardTitle.className = 'title';
    cardTitle.innerHTML = newTitle;

    let newAuthor = myLibrary[i].author;
    let cardAuthor = document.createElement('h2');
    cardAuthor.className = 'author';
    cardAuthor.innerHTML = `By: ${newAuthor}`;

    let newPages = myLibrary[i].pages;
    let cardPages = document.createElement('h2');
    cardPages.className = 'pages';
    cardPages.innerHTML = `Page #: ${newPages}`;

    let hasRead = myLibrary[i].read;
    let cardRead = document.createElement('input');
    cardRead.type = 'checkbox'; 
    if (hasRead) {
        cardRead.checked = true
    } else {
        cardRead.checked = false;;
    }

    let xButton = document.createElement('button');
    xButton.innerHTML = 'X';
    xButton.className = 'exitbutton';

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardRead);
    card.appendChild(xButton);
    cardHolder.appendChild(card);

    const exitButtons = document.getElementsByClassName('exitbutton');


    exitButtons[exitButtons.length - 1].addEventListener('click', deleteBook);
}



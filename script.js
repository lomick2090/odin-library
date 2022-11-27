let myLibrary = [];

const cardHolder = document.querySelector('.cardholder');
const titleBox = document.getElementById('title');
const authorBox = document.getElementById('author');
const pagesBox = document.getElementById('pages');
const readBox = document.getElementById('read');
const addButton = document.getElementById('add');

//constructor for new books
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

    //stores and deletes input instead of using the traditional 'submit' button
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

function addCard() {
    let card = document.createElement('div');
    var i = myLibrary.length - 1;

    //data-index is used later in other functions to connect the DOM elements to their corresponding data in myLibrary array
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
    cardRead.id = 'read';
    cardRead.className = 'readbox';
    cardRead.type = 'checkbox'; 
    if (hasRead) {
        cardRead.checked = true
    } else {
        cardRead.checked = false;
    }

    let labelRead = document.createElement('label')
    labelRead.className = 'readlabel';
    labelRead.id = 'read';
    labelRead.innerHTML = 'Read?';

    let xButton = document.createElement('button');
    xButton.innerHTML = 'X';
    xButton.className = 'exitbutton';

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    labelRead.appendChild(cardRead);
    card.appendChild(labelRead);
    card.appendChild(xButton);
    cardHolder.appendChild(card);

    let exitButtons = document.getElementsByClassName('exitbutton');
    let readChecks = document.getElementsByClassName('readbox');

    readChecks[readChecks.length - 1].addEventListener('click', toggleRead);
    exitButtons[exitButtons.length - 1].addEventListener('click', deleteBook);
}


function deleteBook() {
    var index = this.parentNode.getAttribute('data-index');
    myLibrary.splice(index, 1);
    let cards = document.getElementsByClassName('card');
    for (var j = (parseInt(index) + 1); j < cards.length; j++) {
        console.log(j)
        console.log(cards[j])
        cards[j].setAttribute('data-index', j - 1);
    }
    cards[index].remove()
}

function toggleRead () {
    var index = this.parentNode.getAttribute('data-index');
    if (this.checked == true) {
        myLibrary[index].read = true;
    } else if (this.checked == false) {
        myLibrary[index].read = false;
    }
}

addButton.addEventListener('click', addBookToLibrary);
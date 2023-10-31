// This is an array of objects that contains the quotes
const quotes = [
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Life is what happens when you’re busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "Be yourself; everyone else is already taken",
        author: "Oscar Wilde"
    },
    {
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison"
    },

];


const authorImages = {
    "Franklin D. Roosevelt": "/images/franklin_roosevelt.jpg",
    "Eleanor Roosevelt": "/images/eleanor_roosevelt.jpg",
    "John Lennon": "/images/john_lennon.jpg",
    "Oscar Wilde": "/images/oscar_wilde.jpg",
    "Thomas Edison": "/images/thomas_edison.jpg",
};



const quoteText = document.getElementById('quote-text');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
    const { text, author } = getRandomQuote();
    quoteText.textContent = text;
    updateAuthor(author); 
    updateBackgroundImage(author);
}

function updateAuthor(authorName) {
    authorElement.textContent = authorName; 
}

function updateBackgroundImage(author) {
    
    const imagePath = authorImages[author];
    document.body.style.backgroundImage = `url('${imagePath}')`;
}

newQuoteButton.addEventListener('click', displayQuote);

// Display an initial random quote
displayQuote();


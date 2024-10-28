
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors({
  origin: [
    'https://reader-space-backend.vercel.app',
    'https://reader-space-frontend.vercel.app',
    'http://localhost:4000',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST'],
}));


const booksFilePath = path.join(__dirname, 'books.js');


const getBooks = () => {
  delete require.cache[require.resolve(booksFilePath)]; 
  return require(booksFilePath);
};


const saveBooks = (books) => {
  const data = `module.exports = ${JSON.stringify(books, null, 2)};`;
  fs.writeFileSync(booksFilePath, data);
};


app.get('/api/books', (req, res) => {
  const books = getBooks();
  res.json(books);
});


app.post('/api/books', (req, res) => {
  const bookData = req.body;
  const books = getBooks();
  books.push(bookData);
  saveBooks(books); 
  res.status(201).send(books);
});

app.get('/', (req, res) => {
  res.send('<h1>Books Api</h1>');
});


app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

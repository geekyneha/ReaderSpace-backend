const { json } = require('body-parser');
const express= require('express');
const app= express();
const cors= require('cors')

app.get('/',(req,res)=>{
    res.send('<h1>Hello world!</h1>');
})
app.use(express.json());
app.use(cors({
    origin:'https://reader-space-backend.vercel.app',
    origin:'https://reader-space-frontend.vercel.app',
    methods: ['GET', 'POST'],
}))


const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      coverImage: "https://media.glamour.com/photos/56e1f3c562b398fa64cbd310/master/w_1600%2Cc_limit/entertainment-2016-02-07-main.jpg"
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRue5i7Tq64O8WH3ECvx6BEt_dyUtMfHodWRA&s"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkwBoPqiz64V2C8SkBTJYd9DCwcfntLgQRQ&s"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      coverImage: "https://i.pinimg.com/236x/0c/ee/7e/0cee7e54fda8ac99ec11459448e89c7d.jpg"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      coverImage: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      coverImage: "https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      genre: "Adventure",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLDu2kcgjif8l5JNz7R9ROLFNIjNCULyTtQ&s"
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      genre: "Historical Fiction",
      coverImage: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524864989/war-and-peace-9781524864989_lg.jpg"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Philosophical",
      coverImage: "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7mscBLXbU8E1SFRB8fU_6tnuL0l4O9FF4Q&sg"
    }
  ];
  
 
app.post('/api/books',(req,res)=>{
    const bookData = req.body;
    books.push(bookData);
    res.status(201).send(books);

     

})
app.get('/api/books',(req,res)=>{
   res.json(books);
})
app.listen(4000,()=>{
    console.log('Server is running on port 4000')
})
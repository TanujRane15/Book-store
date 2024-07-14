import React from 'react';
import '../styles/BooksSection.css';

const books = [
    { id: 1, title: "Book Title 1", author: "Author 1", price: "$10", image: "images/book1.jpg" },
    { id: 2, title: "Book Title 2", author: "Author 2", price: "$15", image: "images/book2.jpg" },
    { id: 3, title: "Book Title 3", author: "Author 3", price: "$20", image: "images/book3.jpg" },
    // Add more books as needed
];

const BooksSection = () => {
    return (
        <section className="books-section">
            <div className="container">
                <h2>Our Books</h2>
                <div className="books-grid">
                    {books.map(book => (
                        <div className="book-card" key={book.id}>
                            <img src={book.image} alt={book.title} className="book-image" />
                            <div className="book-info">
                                <h3 className="book-title">{book.title}</h3>
                                <p className="book-author">{book.author}</p>
                                <p className="book-price">{book.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BooksSection;

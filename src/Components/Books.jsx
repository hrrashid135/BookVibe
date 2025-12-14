import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book.jsx';

const Books = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div>
            <h1 className="text-4xl mt-12 mb-4 text-center font-semibold">Books</h1>
            <div className="grid md:grid-cols-4 gap-4 mx-8">
                {
                books.map( book => (
                    <Book key={book.bookId} book={book}></Book>
                ))
            }
            </div>
        </div>
    );
};

export default Books;
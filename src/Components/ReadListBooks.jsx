import React from 'react';
import Book from './Book';

const ReadListBooks = ({ books, loading }) => {
    if (loading) return <div className="text-center mt-20">Loading...</div>;

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center my-8">My Read List ({books.length})</h1>
            {books.length === 0 ? (
                <p className="text-center text-gray-500">No books in your read list yet.</p>
            ) : (
                <div className="grid md:grid-cols-3 gap-4 mx-8">
                    {books.map(book => (
                        <Book key={book.bookId} book={book}></Book>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReadListBooks;


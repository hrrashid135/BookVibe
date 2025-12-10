import React, { use } from 'react';
import { useLoaderData } from 'react-router-dom';


const BookDetails = () => {

    const book = useLoaderData();
    const { bookId, bookName, author, totalPages, image, rating, review, category, tags, publisher, yearOfPublication } = book;
    console.log(book);
    return (
        
        <div>
           
            <div className="left">
                <div className="w-1/2 mx-auto mt-12">
                    <img className="h-full w-auto object-contain" src={image} alt={bookName} />
                </div>
                <div className="right">
                    <h1>{bookName}</h1>
                    <p>By: {author}</p>
                    <p>Category: {category}</p>
                    <p>Review : {review}</p>
                    {tags && tags.map((tag, index) => (
                        <span key={index} className="px-4 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                            {tag}
                        </span>
                    ))}
                    <p>Number of pages : {totalPages}</p>
                    <p>Publisher : {publisher}</p>
                    <p>Year of Publication : {yearOfPublication}</p>
                    <p>Rating : {rating} ⭐</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
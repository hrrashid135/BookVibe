import React from 'react';
import { Link } from 'react-router-dom';


const Book = ({book}) => {
    const {bookId, bookName, author, image, rating, category, tags} = book;
    console.log(bookId);
    return (
        <div>
            <Link to={`/book/${bookId}`} >
            <div className="border border-gray-100 rounded-2xl p-2 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300 bg-white">
            
            <div className="bg-gray-100 rounded-xl p-8 flex justify-center items-center h-64">
                <img src={image} alt={bookName} className="h-full w-auto object-contain"/>
            </div>
            
            
            <div className="flex gap-2">
                {tags && tags.map((tag, index) => (
                    <span key={index} className="px-4 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                        {tag}
                    </span>
                ))}
            </div>
            
            
            <div className="flex flex-col gap-3 ">
                <h3 className="text-2xl font-bold text-gray-900">{bookName}</h3>
                <p className="text-gray-600 font-medium">By: {author}</p>
            </div>
            
            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-gray-700 font-semibold">{category}</span>
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">{rating}</span>
                    <span className="text-yellow-400 text-xl">⭐</span>
                </div>
            </div>
        </div>
            </Link>
        </div>
    );
};

export default Book;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const BookDetailsPage = () => {
    const book = useLoaderData();
    
    if (!book) {
        return (
            <div>
                <Navbar />
                <div className="text-center mt-20">
                    <h1 className="text-2xl font-bold">Book not found</h1>
                </div>
            </div>
        );
    }

    const { bookId, bookName, author, totalPages, image, rating, review, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto p-8 mt-8">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left - Image */}
                    <div className="bg-gray-100 rounded-2xl p-12 flex justify-center items-center">
                        <img className="h-96 w-auto object-contain" src={image} alt={bookName} />
                    </div>
                    
                    {/* Right - Details */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-gray-900">{bookName}</h1>
                        <p className="text-lg text-gray-600">By: {author}</p>
                        
                        <div className="border-y border-gray-200 py-4">
                            <p className="text-gray-700 font-semibold">{category}</p>
                        </div>
                        
                        <p className="text-gray-700"><span className="font-semibold">Review:</span> {review}</p>
                        
                        <div className="flex gap-2 flex-wrap">
                            <span className="font-semibold">Tags:</span>
                            {tags && tags.map((tag, index) => (
                                <span key={index} className="px-4 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        
                        <div className="border-t border-gray-200 pt-4 space-y-2">
                            <p className="text-gray-700"><span className="font-semibold">Number of Pages:</span> {totalPages}</p>
                            <p className="text-gray-700"><span className="font-semibold">Publisher:</span> {publisher}</p>
                            <p className="text-gray-700"><span className="font-semibold">Year of Publishing:</span> {yearOfPublishing}</p>
                            <p className="text-gray-700 flex items-center gap-2">
                                <span className="font-semibold">Rating:</span> 
                                <span className="text-xl">{rating}</span>
                                <span className="text-yellow-400">⭐</span>
                            </p>
                        </div>
                        
                        <div className="flex gap-4 mt-6">
                            <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-100 font-semibold transition-colors">
                                Read
                            </button>
                            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold transition-colors">
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;
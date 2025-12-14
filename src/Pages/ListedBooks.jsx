import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WistListBooks from '../Components/WistListBooks.jsx';
import ReadListBooks from '../Components/ReadListBooks.jsx';
import { getStoredBook, getReadListedBook } from '../utility';

const ListedBooks = () => {
    const [key, setKey] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [readListBooks, setReadListBooks] = useState([]);
    const [wishListBooks, setWishListBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data once in parent
    useEffect(() => {
        const fetchAllBooks = async () => {
            const response = await fetch('/booksData.json');
            const allBooks = await response.json();

            const readListIds = getReadListedBook();
            const wishListIds = getStoredBook();

            const filteredRead = allBooks.filter(book => readListIds.includes(book.bookId));
            const filteredWish = allBooks.filter(book => wishListIds.includes(book.bookId));

            setReadListBooks(filteredRead);
            setWishListBooks(filteredWish);
            setLoading(false);
        };

        fetchAllBooks();
    }, [key]);

    // Sort function
    const handleSort = (type) => {
        if (type === 'rating') {
            const sortedRead = [...readListBooks].sort((a, b) => b.rating - a.rating);
            const sortedWish = [...wishListBooks].sort((a, b) => b.rating - a.rating);
            setReadListBooks(sortedRead);
            setWishListBooks(sortedWish);
        } else if (type === 'pages') {
            const sortedRead = [...readListBooks].sort((a, b) => a.totalPages - b.totalPages);
            const sortedWish = [...wishListBooks].sort((a, b) => a.totalPages - b.totalPages);
            setReadListBooks(sortedRead);
            setWishListBooks(sortedWish);
        }
        setIsDropdownOpen(false);
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-8">
                <h1 className="text-4xl mt-12 mb-8 text-center font-bold">My Books Collection</h1>
                
                {/* React Dropdown */}
                <div className="relative inline-block mb-6">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors font-semibold"
                    >
                        Sort By ▼
                    </button>

                    {isDropdownOpen && (
                        <ul className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-lg p-2 z-10 border border-gray-200">
                            <li>
                                <button 
                                    onClick={() => handleSort('rating')}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                                >
                                    Rating
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleSort('pages')}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                                >
                                    Number of Pages
                                </button>
                            </li>
                        </ul>
                    )}
                </div>

                <Tabs onSelect={() => setKey(prev => prev + 1)}>
                    <TabList className="flex justify-center gap-4 mb-8 border-b-2 border-gray-200">
                        <Tab 
                            className="px-8 py-3 font-semibold text-gray-600 cursor-pointer transition-all outline-none hover:text-green-600"
                            selectedClassName="text-green-600 border-b-4 border-green-600 -mb-0.5"
                        >
                            Read Books
                        </Tab>
                        <Tab 
                            className="px-8 py-3 font-semibold text-gray-600 cursor-pointer transition-all outline-none hover:text-blue-600"
                            selectedClassName="text-blue-600 border-b-4 border-blue-600 -mb-0.5"
                        >
                            Wishlist Books
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <ReadListBooks books={readListBooks} loading={loading}></ReadListBooks>
                    </TabPanel>
                    <TabPanel>
                        <WistListBooks books={wishListBooks} loading={loading}></WistListBooks>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;
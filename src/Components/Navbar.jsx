import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="border-b border-gray-200 shadow-sm bg-white">
            <nav className="flex flex-row justify-between items-center p-6 max-w-7xl mx-auto">
                <div className="left">
                    <Link to="/" className="text-3xl font-bold text-gray-900 hover:text-green-600 transition-colors">
                        Book Vibe
                    </Link>
                </div>
                
                <div className="middle flex gap-8">
                    <NavLink 
                        to="/" 
                        className={({isActive}) => 
                            isActive 
                                ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1" 
                                : "text-gray-700 hover:text-green-600 transition-colors font-medium"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/listed-books" 
                        className={({isActive}) => 
                            isActive 
                                ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1" 
                                : "text-gray-700 hover:text-green-600 transition-colors font-medium"
                        }
                    >
                        Listed Books
                    </NavLink>
                    
                </div>
                
                <div className="right flex gap-4">
                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md">
                        Login
                    </button>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-md">
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
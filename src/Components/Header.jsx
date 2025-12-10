import React from 'react';

import bookimg from '../assets/books.jpg';
import NavBar from './Navbar.jsx';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex justify-between items-center  p-8 bg-gray-100">
                <div className="left">
                    <div className="text-4xl font-semibold space-y-4">
                        <h1 >Books to freshen up  </h1>
                        <h1>your mind</h1>
                    </div>
                    
                    <button className="py-2 px-4 mt-8 bg-green-500 text-white rounded">View Your list</button>
                </div>
                <div className="right">
                    <img src={bookimg} />
                </div>
            </div>
        </div>
    );
};

export default Header;
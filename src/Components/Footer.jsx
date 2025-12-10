import React from 'react';

const Footer = () => {
    return (
        <div className="w-full-screen flex justify-between items-center gap-4 bg-gray-800 text-white p-8 mt-8">
            <div>
                <h1 className="text-2xl font-semibold">Book Vibe</h1>
                <p className="mt-4">© 2024 Book Vibe. All rights reserved.</p>

            </div>
            <div>
                <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
                <p className="mt-2">Email: contact@bookvibe.com</p>
                <p className="mt-2">Phone: +1 (123) 456-7890</p>

            </div>
            <div>
                <h2 className="text-xl font-semibold mt-4">Follow Us</h2>
                <p className="mt-2">Facebook | Twitter | Instagram</p>
            </div>
            
        </div>
    );
};

export default Footer;
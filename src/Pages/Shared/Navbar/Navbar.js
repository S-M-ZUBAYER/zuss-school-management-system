import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../Assets/Images/School.jpg"

const Navbar = () => {
    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 text-slate-200 bg-gradient-to-t from-blue-900 via-slate-900 to-black">
            <div className="container flex justify-between h-16 mx-auto">
                <Link rel="noopener noreferrer" to="/home" aria-label="Back to homepage" className="flex items-center p-2">
                    <img className="h-10 w-10 rounded-full" src={img} alt="school logo" />
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="/teacher" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Teacher</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="/student" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Student</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="admin" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Admin</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="/contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact</Link>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <Link to="/login"><button className="self-center px-8 py-3 rounded">Sign in</button></Link>
                    <Link to="/register"><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button></Link>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
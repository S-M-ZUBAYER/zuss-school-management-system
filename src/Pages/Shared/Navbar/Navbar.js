import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../../../Assets/Images/School.jpg"
import { AuthContext } from '../../../context/UserContext';

const Navbar = () => {
    // console.log(globalVariable)
    const { logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    const { schoolName } = useContext(AuthContext);
    console.log(schoolName)

    const handleToLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err)
            })
        console.log("successful")
    }

    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 text-slate-200 bg-gradient-to-t from-blue-900 via-slate-900 to-black">
            <div className="container flex justify-between h-16 mx-auto">
                <Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img className="h-10 w-10 rounded-full" src={img} alt="school logo" />
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link rel="noopener noreferrer" to={`/${schoolName}`} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to={`/${schoolName}/intro`} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Introduction</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to={`/${schoolName}/teacher`} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Teacher</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to={`/${schoolName}/student`} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Student</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to={`/${schoolName}/staff`} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Staff</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to={`/${schoolName}/admin`} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Admin</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to={`/${schoolName}/contact`} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact</Link>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <Link to={`/${schoolName}/login`}><button className="self-center px-8 py-3 rounded">Sign in</button></Link>
                    {/* <Link to={`/${schoolName}/register`}><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button></Link> */}
                    {/* <Link to={`/${schoolName}/register`}><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" onClick={handleToLogOut} >Log Out</button></Link> */}
                </div>
                <div>
                    <button onClick={toggleMenu} className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="origin-top-right z-20 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div
                                className="py-1"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <Link
                                    to={`/${schoolName}/`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                >
                                    Home
                                </Link>
                                <Link
                                    to={`/${schoolName}/teacher`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                >
                                    Teacher
                                </Link>
                                <Link
                                    to={`/${schoolName}/intro`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                >
                                    Introduction
                                </Link>
                                <Link
                                    to={`/${schoolName}/student`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                >
                                    Student
                                </Link>
                                <Link
                                    to={`/${schoolName}/staff`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                >
                                    Staff
                                </Link>
                                <Link
                                    to={`/${schoolName}/admin`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                >
                                    Admin
                                </Link>
                                <Link
                                    to={`/${schoolName}/contact`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                >
                                    Contact
                                </Link>

                            </div>
                        </div>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Navbar;
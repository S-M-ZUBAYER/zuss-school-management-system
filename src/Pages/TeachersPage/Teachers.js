import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Teachers = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gradient-to-l from-blue-900 via-slate-900 to-black">

                    <div className="text-white pt-12 pb-5">
                        <img data-aos="fade-down" data-aos-duration="2000" className="h-40 w-40 rounded-full border-8 border-x-fuchsia-500 border-yellow-300 mx-auto"
                        // src={user?.photoURL} alt="" 
                        />
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <h1 className="text-2xl font-bold" >
                                {/* Hi <span className="text-lime-400">{user?.displayName}</span> */}
                                Hi
                            </h1>
                            <p className="text-xl text-green-300">
                                Welcome to your dashboard
                            </p>
                        </div>

                    </div>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side text-gray-200 font-bold text-xl bg-gradient-to-l from-blue-900 via-slate-900 to-black">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul data-aos="fade-up-right" data-aos-duration="2000" className="menu p-4 w-80 ">

                        {
                            // isAdmin && 
                            <>
                                <li><Link to='/teacher/information'>Student Information</Link></li>
                                <li><Link to='/teacher/routine'>Class Routine</Link></li>
                                <li><Link to='/teacher/calender'>Calender</Link></li>
                            </>
                        }
                        {/* {users?.accountType === "Buyer" && !isAdmin && */}
                        <>
                            <li><Link to='/teacher/leave'>Leave Application</Link></li>
                            <li><Link to='/teacher/payment'>Payment Collection</Link></li>
                        </>
                        {/* } */}

                        {/* {users?.accountType === "Seller" && !isAdmin && */}
                        <>
                            <li><Link to='/teacher/result'>Add Result</Link></li>
                            <li>


                                <div>
                                    <button className="relative" onClick={toggleMenu}>
                                        Certificate Generate
                                    </button>
                                    {isOpen && (
                                        <div className=" z-20 absolute left-20 top-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div
                                                className="py-1"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="options-menu"
                                            >
                                                <Link
                                                    to="/transfer"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Transfer Certificate
                                                </Link>
                                                <Link
                                                    to="/character"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Character Certificate
                                                </Link>
                                                <Link
                                                    to="/completion"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Course Completion Certificate
                                                </Link>
                                                {/* <Link
                                                to="/staff"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                Staff
                                            </Link>
                                            <Link
                                                to="/admin"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                Admin
                                            </Link>
                                            <Link
                                                to="/contact"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                Contact
                                            </Link> */}

                                            </div>
                                        </div>
                                    )}
                                </div>
                            </li>

                        </>
                        {/* } */}



                        <Link className="text-left" to='/'>
                            <button className='px-4 py-2 mt-8 ml-0 font-semibold text-black lg:text-lg rounded bg-green-300'>
                                Back to homepage
                            </button>
                        </Link>
                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Teachers;
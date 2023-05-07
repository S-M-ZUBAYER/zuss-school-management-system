import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Teachers = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    const { schoolName } = useContext(AuthContext);

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gradient-to-l from-blue-900 via-slate-900 to-black">

                    {/* <div className="text-white pt-12 pb-5">
                        <img data-aos="fade-down" data-aos-duration="2000" className="h-40 w-40 rounded-full border-8 border-x-fuchsia-500 border-yellow-300 mx-auto"
                        src={user?.photoURL} alt="" 
                        />
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <h1 className="text-2xl font-bold" >
                                Hi <span className="text-lime-400">{user?.displayName}</span>
                                Hi
                            </h1>
                            <p className="text-xl text-green-300">
                                Welcome to your dashboard
                            </p>
                        </div>

                    </div> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side text-gray-200 font-bold text-xl bg-gradient-to-l from-blue-900 via-slate-900 to-black">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul data-aos="fade-up-right" data-aos-duration="2000" className="menu p-4 w-80 ">

                        {
                            // isAdmin && 
                            <>
                                <li><Link to={`/${schoolName}/teacher/profile`}>My Profile</Link></li>
                                <li><Link to={`/${schoolName}/teacher/information`}>Student Information</Link></li>
                                <li><Link to={`/${schoolName}/teacher/routine`}>Class Routine</Link></li>
                                <li><Link to={`/${schoolName}/teacher/calender`}>Calender</Link></li>
                            </>
                        }
                        {/* {users?.accountType === "Buyer" && !isAdmin && */}
                        <>
                            <li><Link to={`/${schoolName}/teacher/leave`}>Leave Application</Link></li>
                            <li><Link to={`/${schoolName}/teacher/payment`}>Payment Collection</Link></li>
                        </>
                        {/* } */}

                        {/* {users?.accountType === "Seller" && !isAdmin && */}
                        <>
                            <li><Link to={`/${schoolName}/teacher/result`}>Add Result & Calculation</Link></li>
                            <li>


                                <div>
                                    <button className="relative flex  items-center justify-between" onClick={toggleMenu}>
                                        <>Certificate Generate</>
                                        <MdOutlineArrowDropDown className="font-bold text-3xl"></MdOutlineArrowDropDown>
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
                                                    to={`/${schoolName}/teacher/transfer`}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Transfer Certificate
                                                </Link>
                                                <Link
                                                    to={`/${schoolName}/teacher/character`}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Character Certificate
                                                </Link>
                                                <Link
                                                    to={`/${schoolName}/teacher/completion`}
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
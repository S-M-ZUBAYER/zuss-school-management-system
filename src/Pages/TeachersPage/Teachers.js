import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AuthContext } from '../../context/UserContext';

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

                    <Outlet></Outlet>


                </div>
                <div className="drawer-side text-gray-200 font-bold text-xl bg-gradient-to-l from-blue-900 via-slate-900 to-black">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul data-aos="fade-up-right" data-aos-duration="2000" className="menu py-4 w-70 text-base">

                        {
                            // isAdmin && 
                            <>

                                <li><Link to={`/${schoolName}/teacher/TeacherProfile`}>My Profile</Link></li>
                                <li><Link to={`/${schoolName}/teacher/salaryStatus`}>My Salary Status</Link></li>
                                <li><Link to={`/${schoolName}/teacher/routine`}>Class Routine</Link></li>
                                <li><Link to={`/${schoolName}/teacher/calender`}>Calender</Link></li>
                            </>
                        }

                        <li><Link to={`/${schoolName}/teacher/leave`}>Leave Application</Link></li>
                        <li><Link to={`/${schoolName}/teacher/attendance`}>Attendance</Link></li>
                        <li>


                            {/* <div>
                                <button className="relative flex  items-center justify-between" onClick={toggleMenu}>
                                    <>Certificate Generate</>
                                    <MdOutlineArrowDropDown className="font-bold text-3xl"></MdOutlineArrowDropDown>
                                </button>
                                {isOpen && (
                                    <div className=" z-20 absolute left-0 top-10 mt-2 w-45 text-base text-start text-white shadow-lg bg-gradient-to-l from-blue-900 via-slate-900 to-black">

                                        <div
                                            className="py-1"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="options-menu"
                                        >
                                            <Link
                                                to={`/${schoolName}/teacher/transfer`}
                                                className="block px-4 py-2 text-base text-gray-100 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                                onClick={toggleMenu}
                                            >
                                                Transfer Certificate
                                            </Link>
                                            <Link
                                                to={`/${schoolName}/teacher/character`}
                                                className="block px-4 py-2 text-base text-gray-100 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                                onClick={toggleMenu}
                                            >
                                                Character Certificate
                                            </Link>
                                            <Link
                                                to={`/${schoolName}/teacher/completion`}
                                                className="block px-4 py-2 text-base text-gray-100 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                                onClick={toggleMenu}
                                            >
                                                Course Completion Certificate
                                            </Link>

                                        </div>
                                    </div>
                                )}
                            </div> */}
                        </li>
                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Teachers;
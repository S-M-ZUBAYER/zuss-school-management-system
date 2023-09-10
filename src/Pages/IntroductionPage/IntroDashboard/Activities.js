import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';
import { Link } from 'react-router-dom';

const Activities = () => {

    const { currentSchoolCode, schoolName, events, setEvents } = useContext(AuthContext)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/schoolEvents/?schoolCode=${currentSchoolCode}`);
                if (response.ok) {
                    const eventsData = await response.json();
                    setEvents(eventsData);
                } else {
                    throw new Error('Failed to fetch events');
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle error case
            }
        };

        fetchEvents();
    }, [currentSchoolCode]);



    return (
        <div className="grid grid-cols-3 gap-4">
            {
                events.map((element, index) => {
                    return <div key={index} className="max-w-lg border-2 rounded-lg m-6 p-4 shadow-md text-white dark:bg-gray-900  dark:text-gray-100">

                        <div className="flex items-center justify-between mx-2">
                            <p rel="noopener noreferrer" href="#" className="mb-0 capitalize text-lime-400  dark:text-gray-100">{element?.date}</p>
                            <p rel="noopener noreferrer" href="#" className="mb-0 capitalize text-lime-400  dark:text-gray-100">{element?.time}</p>
                        </div>


                        <div className="space-y-4">
                            <img className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" src={element?.image} alt="" />
                            <div className="space-y-2 mb-3">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold text-emerald-300 dark:text-violet-400">{element?.eventName}</h3>
                                </a>
                                <p>Place: {element?.destination}</p>
                                <p className="leading-snug dark:text-gray-400">
                                    {element?.description.length > 100
                                        ? `${element?.description.slice(0, 100)}  ...`
                                        : element?.description}
                                </p>

                            </div>
                            <Link to={`/${schoolName}/intro/activities/details/${element?._id}`}>
                                <button className="bg-pink-400 font-semibold px-3 py-1 mt-3 w-full rounded-lg">Details</button>
                            </Link>

                        </div>
                    </div>

                })
            }
        </div>

    );
};

export default Activities;
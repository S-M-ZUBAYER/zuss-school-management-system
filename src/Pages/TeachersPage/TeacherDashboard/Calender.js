import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';
import axios from 'axios';
import { useRef } from 'react';
import DisplaySpinner from '../../Shared/Spinners/DisplaySpinner';

const Calender = () => {

    const divRef = useRef();

    const handlePrint = () => {

        const printableContent = divRef.current.innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printableContent;
        window.print();
        document.body.innerHTML = originalContents;
    };

    const { schoolName, currentSchoolCode } = useContext(AuthContext);
    // const { schoolName, currentSchoolCode, year, startMonth, endMonth, events, eventColor, setShowModal, setSelectedDate, eventName, uploadedImage } = useContext(AuthContext)
    // console.log(schoolName, currentSchoolCode, year, startMonth, endMonth, events, eventColor, setShowModal, setSelectedDate, eventName, uploadedImage)
    // const [uploadedImage, setUploadedImage] = useState(null)
    // const [year, setYear] = useState(null)
    // const [startMonth, setStartMonth] = useState(null)
    // const [endMonth, setEndMonth] = useState(null)
    // const [events, setEvents] = useState(null)

    const [calendarData, setCalendarData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchCalendarData = async () => {
            try {
                const response = await axios.get(`https://zuss-school-management-system-server-site.vercel.app/api/calendar/${currentSchoolCode}`);
                setCalendarData(response.data);
                console.log(response.data)
                setLoading(false);
            } catch (error) {
                console.error('Error retrieving calendar:', error);
                setLoading(false);
            }
        };

        fetchCalendarData();
    }, [currentSchoolCode]);

    if (loading) {
        return <DisplaySpinner></DisplaySpinner>
    }

    if (!calendarData) {
        return <p>Calendar not found</p>;
    }



    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];


    // const generateCalendar = () => {
    //     const calendar = [];

    //     for (let month = startMonth; month <= endMonth; month++) {
    //         const daysInMonth = new Date(year, month, 0).getDate();

    //         const monthName = months[month - 1];

    //         calendar.push(
    //             <div key={monthName} className="text-center font-bold mt-4 text-black bg-lime-300 text-3xl border-2 mx-auto px-1 py-1 rounded-tl-lg rounded-br-lg">
    //                 {monthName}
    //             </div>
    //         );

    //         for (let day = 1; day <= daysInMonth; day++) {
    //             const date = new Date(year, month - 1, day);
    //             const formattedDate = date.toISOString().split('T')[0];
    //             const dayEvents = events.filter((event) => event.date === formattedDate);

    //             const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    //             const isFriday = dayName === 'Fri';
    //             const dayStyle = isFriday ? 'bg-red-500' : '';

    //             calendar.push(
    //                 <div
    //                     key={formattedDate}
    //                     className={`relative border border-gray-300 p-2 text-sm text-white ${dayStyle}`}
    //                 >
    //                     <div className="flex justify-between items-center">
    //                         <div className="mx-auto">
    //                             {dayName}, {day}
    //                         </div>
    //                     </div>
    //                     {dayEvents.map((event) => (
    //                         <div
    //                             key={event.id}
    //                             className="bg-gray-200 p-1 mt-1 rounded"
    //                             style={{ backgroundColor: event.color }}
    //                         >
    //                             {event.name}
    //                         </div>
    //                     ))}
    //                 </div>
    //             );
    //         }
    //     }

    //     return calendar;
    // };
    const generateCalendar = () => {
        const calendar = [];

        for (let month = calendarData?.startMonth; month <= calendarData?.endMonth; month++) {
            const daysInMonth = new Date(calendarData?.year, month, 0).getDate();

            const monthName = months[month - 1];

            calendar.push(
                <div key={monthName} className="text-center font-bold text-black bg-lime-300 text-3xl border-2 mx-auto px-1 py-1 rounded-tl-lg rounded-br-lg mt-5 mb-3">
                    {monthName}
                </div>
            );

            calendar.push(
                <div className="grid grid-cols-7 gap-4 mx-5">
                    <div className="invisible">.</div> {/* Empty element to align days */}
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                        const date = new Date(calendarData?.year, month - 1, day);
                        const formattedDate = date.toISOString().split('T')[0];
                        const dayEvents = (calendarData?.events).filter(event => {
                            return event.date.split("T")[0] === formattedDate
                        })

                        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                        const isFriday = dayName === 'Fri';
                        const dayStyle = isFriday ? 'bg-red-500' : '';

                        return (
                            <div
                                key={formattedDate}
                                className={`relative border min-h-16 border-gray-300 p-2 text-sm text-white ${dayStyle}`}
                            >
                                <div className="flex justify-between items-center">
                                    <div className="mx-auto">
                                        {dayName}, {day}
                                    </div>
                                </div>
                                {dayEvents.map(event => (
                                    <div
                                        key={event.id}
                                        className="bg-gray-200 p-1 mt-1 rounded"
                                        style={{ backgroundColor: event.color }}
                                    >
                                        {event.name}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            );
        }

        return calendar;
    };


    return (
        <div>

            <button onClick={handlePrint}>Print</button>
            <div ref={divRef}>
                {calendarData?.calendarImg && (
                    <div className="mt-12 h-96 w-full flex justify-center">
                        <img src={calendarData?.calendarImg} alt="Uploaded" className="w-5/6 rounded-lg" />
                    </div>
                )}
                <h1 className="text-2xl text-white font-bold">Year:- {calendarData?.year}</h1>
                <h1 className="text-2xl text-white font-bold">School:-{schoolName}</h1>
                {/* <div className="my-4 grid grid-cols-7 gap-4 mx-5 mb-32">
                {generateCalendar()}
            </div> */}
                <div className="my-4 mx-5 mb-32">
                    {generateCalendar()}
                </div>

            </div>
        </div>
    );
};

export default Calender;
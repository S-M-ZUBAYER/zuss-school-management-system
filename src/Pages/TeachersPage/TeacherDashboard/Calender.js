import React, { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';

const Calender = () => {

    const { schoolName, year, startMonth, endMonth, events, eventColor, setShowModal, setSelectedDate, eventName, uploadedImage } = useContext(AuthContext)
    console.log(schoolName, year, startMonth, endMonth, events, eventColor, setShowModal, setSelectedDate, eventName, uploadedImage)
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

    console.log(events)
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

        for (let month = startMonth; month <= endMonth; month++) {
            const daysInMonth = new Date(year, month, 0).getDate();

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
                        const date = new Date(year, month - 1, day);
                        const formattedDate = date.toISOString().split('T')[0];
                        const dayEvents = events.filter(event => event.date === formattedDate);

                        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                        const isFriday = dayName === 'Fri';
                        const dayStyle = isFriday ? 'bg-red-500' : '';

                        return (
                            <div
                                key={formattedDate}
                                className={`relative border border-gray-300 p-2 text-sm text-white ${dayStyle}`}
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

            {uploadedImage && (
                <div className="mt-12 h-96 w-full flex justify-center">
                    <img src={uploadedImage} alt="Uploaded" className="w-5/6 rounded-lg" />
                </div>
            )}
            <h1 className="text-2xl text-white font-bold">Year:- {year}</h1>
            <h1 className="text-2xl text-white font-bold">School:-{schoolName}</h1>
            {/* <div className="my-4 grid grid-cols-7 gap-4 mx-5 mb-32">
                {generateCalendar()}
            </div> */}
            <div className="my-4 mx-5 mb-32">
                {generateCalendar()}
            </div>

        </div>
    );
};

export default Calender;
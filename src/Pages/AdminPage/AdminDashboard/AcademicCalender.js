import React from 'react';
import { format } from "date-fns";
const events = [
    {
        title: "First day of school",
        date: new Date("2023-09-04"),
    },
    {
        title: "Thanksgiving break",
        date: new Date("2023-11-22"),
    },
    {
        title: "Winter break",
        date: new Date("2023-12-22"),
    },
    {
        title: "Last day of school",
        date: new Date("2024-05-31"),
    },
];
const AcademicCalender = () => {


    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return (
        <div>
            <h1>This is calender</h1>

            <div className="p-4">
                <h1 className="text-3xl font-bold mb-4">Academic Calendar 2023-2024</h1>
                <div className="grid grid-cols-3 gap-4">
                    {months.map((month, index) => {
                        const monthEvents = events.filter(
                            (event) => event.date.getMonth() === index
                        );
                        const daysInMonth = new Date(2023, index + 1, 0).getDate();

                        return (
                            <div key={index} className="col-span-1 bg-white rounded-lg shadow-md">
                                <div className="px-4 py-2 bg-gray-100 border-b border-gray-200">
                                    <h2 className="text-lg font-bold">{month}</h2>
                                </div>
                                <div className="p-4">
                                    <table className="w-full">
                                        <tbody>
                                            {Array.from(Array(daysInMonth).keys()).map((day) => {
                                                const date = new Date(2023, index, day + 1);
                                                const event = monthEvents.find(
                                                    (event) => event.date.getTime() === date.getTime()
                                                );

                                                return (
                                                    <tr key={day}>
                                                        <td className="p-2 font-bold">{day + 1}</td>
                                                        <td className="p-2">{event?.title}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AcademicCalender;
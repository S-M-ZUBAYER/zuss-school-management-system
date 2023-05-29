import React, { useState } from 'react';

const CalenderEventInputField = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [startMonth, setStartMonth] = useState('January');
    const [endMonth, setEndMonth] = useState('December');
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState('');

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const handleAddEvent = () => {
        if (newEvent.trim() === '') return;

        const event = {
            month: startMonth,
            day: 1, // You can modify this based on your calendar logic
            description: newEvent
        };

        setEvents([...events, event]);
        setNewEvent('');
    };

    const generateCalendar = () => {
        // Logic to generate the calendar based on the selected year, startMonth, and endMonth
        // ...

        // Return the generated calendar
        return (
            <div>
                {/* Display the generated calendar here */}
            </div>
        );
    };

    return (
        <div>
            <h2>Calendar</h2>

            <div className="my-4">
                <label htmlFor="year">Year:</label>
                <select
                    id="year"
                    className="ml-2 p-1 border border-gray-300 rounded"
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value))}
                >
                    {/* Generate options for years */}
                    {Array.from({ length: 10 }, (_, i) => (
                        <option key={i} value={year + i}>{year + i}</option>
                    ))}
                </select>
            </div>

            <div className="my-4">
                <label htmlFor="startMonth">Start Month:</label>
                <select
                    id="startMonth"
                    className="ml-2 p-1 border border-gray-300 rounded"
                    value={startMonth}
                    onChange={(e) => setStartMonth(e.target.value)}
                >
                    {/* Generate options for months */}
                    {months.map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
            </div>

            <div className="my-4">
                <label htmlFor="endMonth">End Month:</label>
                <select
                    id="endMonth"
                    className="ml-2 p-1 border border-gray-300 rounded"
                    value={endMonth}
                    onChange={(e) => setEndMonth(e.target.value)}
                >
                    {/* Generate options for months */}
                    {months.map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
            </div>

            <div className="my-4">
                <label htmlFor="event">Event:</label>
                <input
                    id="event"
                    type="text"
                    className="ml-2 p-1 border border-gray-300 rounded"
                    value={newEvent}
                    onChange={(e) => setNewEvent(e.target.value)}
                />
                <button
                    className="ml-2 px-4 py-1 bg-blue-500 text-white rounded"
                    onClick={handleAddEvent}
                >
                    Add Event
                </button>
            </div>

            {/* Call the generateCalendar function to display the generated calendar */}
            {generateCalendar()}
        </div>
    );
};

export default CalenderEventInputField;

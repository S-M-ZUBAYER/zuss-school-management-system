import React, { useState } from 'react';

const SchoolStartEndField = () => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleStartTimeChange = (e) => {
        setStartTime(e.target.value);
    };

    const handleEndTimeChange = (e) => {
        setEndTime(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Do something with the start time and end time values
        console.log('Start Time:', startTime);
        console.log('End Time:', endTime);

        // Clear the input fields
        setStartTime('');
        setEndTime('');
    };

    return (
        <form className="text-white" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mt-5 text-sky-400 mb-2">Set Start&End Time </h1>
            <p className="mb-10">Please set start and end time for teacher entry and exit time in your school to get the proper attendance.</p>
            <div className="mb-2" >
                <label htmlFor="start-time">School Start Time:</label>
                <input
                    type="time"
                    className="ml-2 bg-slate-800"
                    id="start-time"
                    value={startTime}
                    onChange={handleStartTimeChange}
                />
            </div>
            <div>
                <label htmlFor="end-time">School End Time:</label>
                <input
                    type="time"
                    className="ml-2 bg-slate-800"
                    id="end-time"
                    value={endTime}
                    onChange={handleEndTimeChange}
                />
            </div>
            <button className="bg-green-300 py-1 px-4 rounded-tr-lg rounded-bl-lg mt-5 mb-10" type="submit">Save</button>
        </form>
    );
};

export default SchoolStartEndField;

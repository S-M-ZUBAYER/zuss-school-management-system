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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="start-time">School Start Time:</label>
                <input
                    type="time"
                    id="start-time"
                    value={startTime}
                    onChange={handleStartTimeChange}
                />
            </div>
            <div>
                <label htmlFor="end-time">School End Time:</label>
                <input
                    type="time"
                    id="end-time"
                    value={endTime}
                    onChange={handleEndTimeChange}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default SchoolStartEndField;

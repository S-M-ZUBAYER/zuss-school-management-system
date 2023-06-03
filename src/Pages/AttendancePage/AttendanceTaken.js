import React from 'react';
import SchoolStartEndField from './SchoolStartEndField';
import StudentAttendance from './AttendanceList';

const AttendanceTaken = () => {
    return (
        <div>
            <SchoolStartEndField></SchoolStartEndField>
            <StudentAttendance></StudentAttendance>
        </div>
    );
};

export default AttendanceTaken;
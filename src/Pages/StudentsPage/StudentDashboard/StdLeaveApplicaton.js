import React from 'react';
import LeaveApplication from '../../TeachersPage/TeacherDashboard/LeaveApplication';

const StdLeaveApplication = () => {
    const name = "Leave application"
    return (
        <div>
            <LeaveApplication
                name={name}
                color={"bg-lime-800"}
            ></LeaveApplication>
        </div>
    );
};

export default StdLeaveApplication;
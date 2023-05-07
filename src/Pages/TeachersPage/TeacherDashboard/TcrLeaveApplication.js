import React from 'react';
import LeaveApplication from './LeaveApplication';

const TcrLeaveApplication = () => {
    const name = "LeaveApplication"
    return (
        <div>
            <LeaveApplication
                name={name}
                color={"bg-lime-300"}
            ></LeaveApplication>
        </div>
    );
};

export default TcrLeaveApplication;
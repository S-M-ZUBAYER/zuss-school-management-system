import React, { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';

const StudentPaymentSystem = () => {
    // const { payments, } = UserContext(AuthContext);
    const class_name = "Class9";
    const { schoolName, className, setClassName, purpose, setPurpose, amount, setAmount, payments, setPayments } = useContext(AuthContext);

    // console.log(schoolName, className, setClassName, purpose, setPurpose, amount, setAmount, payments, setPayments)
    console.log(payments[class_name])

    return (
        <div>
            This is student payment system of
            {/* {
                payments.class_name.map
            } */}
        </div>
    );
};

export default StudentPaymentSystem;
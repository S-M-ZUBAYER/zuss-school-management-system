import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useSyncExternalStore } from 'react';
import { useEffect } from 'react';

const ResultAddPage = ({ student }) => {

    const [allSubjectList, setAllSubjectList] = useState([]);
    const [stdSubjectList, setStdSubjectList] = useState([]);

    console.log(stdSubjectList, "subjectList")
    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get(`https://zuss-school-management-system-server-site.vercel.app/api/termSubject/${student?.schoolCode}?year=${new Date().getFullYear()}`);
                setAllSubjectList(response.data);
            } catch (error) {
                console.error('Error fetching payment information:', error);
            }
        };

        fetchPayment();

    }, [student?.schoolCode, student?.email]);


    useEffect(() => {
        // Use a separate effect for setting 'stdPayment' based on 'student' and 'allPayment'
        let filteredPayment = allSubjectList;

        if (student.shift) {
            filteredPayment = allSubjectList.filter(pay => pay.shiftName === student.shift && pay.className === student?.className);
        } else if (student?.section) {
            filteredPayment = allSubjectList.filter(pay => pay.sectionName === student.section && pay.className === student?.className);
        } else {
            filteredPayment = allSubjectList.filter(pay => pay.className === student?.className);
        }

        setStdSubjectList(filteredPayment.length > 0 ? filteredPayment : null); // Set to null if no data found

    }, [student, allSubjectList]);

    return (
        <div>
            This is the page to add Result
        </div>
    );
};

export default ResultAddPage;
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const GenerateClassRoutine = () => {
    const [className, setClassName] = useState('');
    const [sectionName, setSectionName] = useState('');
    const [shiftName, setShiftName] = useState('');
    const [routine, setRoutine] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
    });
    const [subject, setSubject] = useState('');
    const [time, setTime] = useState('');

    const { schoolName, currentSchoolCode } = useContext(AuthContext);
    console.log(schoolName, currentSchoolCode)


    const handleAddSubject = (day) => {
        const newRoutine = { ...routine };
        newRoutine[day].push({ subject, time });
        setRoutine(newRoutine);
        // Clear input fields
        setSubject('');
        setTime('');
    };

    const handleSaveRoutine = async () => {
        // You can save the routine data here
        const savedRoutine = {
            year: new Date().getFullYear(),
            schoolName,
            schoolCode: currentSchoolCode,
            className: className, // Assuming you want to store the class name
            routine: routine, // Assuming you want to store the class routine
        };
        const response = await axios.post('http://localhost:5000/api/classRoutine/add', savedRoutine);
        if (response.status === 201) {
            toast.success("class routine added successfully")
        }
        else {
            toast.error("class routine added failed")
        }
        console.log('Saved Routine:', savedRoutine);

        // Clear input fields
        setClassName('');
        setSectionName('');
        setShiftName('');
        setRoutine({
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
            Sunday: [],
        });
    };

    const handleCancelRoutine = () => {
        // Clear input fields
        setClassName('');
        setSectionName('');
        setShiftName('');
        setRoutine({
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
            Sunday: [],
        });
    };


    return (
        <div className="text-white mt-5">
            <h1 className="text-green-400 font-bold text-3xl">{schoolName}</h1>
            <h1 className="text-yellow-400 font-semibold text-2xl mb-10">Generate Class Routine</h1>

            <div className=" my-2">
                <label className="text-lg mr-3" htmlFor="className">Class Name:</label>
                <input
                    type="text"
                    id="className"
                    className="text-black"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                />
            </div>
            <div className=" my-2">
                <label className="text-lg mr-3" htmlFor="sectionName">Section Name:</label>
                <input
                    type="text"
                    id="sectionName"
                    className="text-black"
                    value={sectionName}
                    onChange={(e) => setSectionName(e.target.value)}
                />
            </div>
            <div className=" my-2 mb-10">
                <label className="text-lg mr-3" htmlFor="shiftName">Shift Name:</label>
                <input
                    type="text"
                    id="shiftName"
                    className="text-black"
                    value={shiftName}
                    onChange={(e) => setShiftName(e.target.value)}
                />
            </div>


            {Object.entries(routine).map(([day, subjects]) => (
                <div key={day}>
                    <h3 className="font-semibold text-lg text-lime-400">{day}</h3>
                    {subjects.map((subject, index) => (
                        <div key={index}>
                            Subject: {subject.subject}, Time: {subject.time}
                        </div>
                    ))}
                    <div>
                        <input
                            type="text"
                            placeholder="Subject Name"
                            className="text-black"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Time"
                            className="text-black"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                        <button className="bg-blue-400 px-2 py-1 rounded-lg ml-5" onClick={() => handleAddSubject(day)}>Add Subject</button>
                    </div>
                </div>
            ))}

            <button className="bg-green-400 px-2 py-1 rounded-lg ml-5 mt-5 mb-10" onClick={handleSaveRoutine}>Save Routine</button>
            <button className="bg-yellow-400 px-2 py-1 rounded-lg ml-5 mt-5 mb-10" onClick={handleCancelRoutine}>Cancel</button>
        </div>
    );
};

export default GenerateClassRoutine;

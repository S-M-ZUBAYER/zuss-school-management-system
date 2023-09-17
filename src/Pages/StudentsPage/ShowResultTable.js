import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ShowResultTable = ({ termData, student }) => {
    // Destructure termData to access term name and allSubjects
    console.log(termData, "termdata")

    const [termAverage, setTermAverage] = useState(termData?.termAverage);
    const [termGrade, setTermGrade] = useState(termData?.termGrade);
    const { term } = termData;

    // State to store marks for each subject
    const [subjectMarks, setSubjectMarks] = useState(termData?.subjectMarks);

    // Function to update marks for a specific subject
    const updateMarks = (subjectIndex, field, value) => {
        setSubjectMarks((prevMarks) => {
            const updatedMarks = [...prevMarks];
            updatedMarks[subjectIndex][field] = parseFloat(value);
            return updatedMarks;
        });
    };



    // Function to calculate the total marks for a specific subject
    const calculateTotalMarks = (subjectIndex) => {
        const { theoryMarks, mcqMarks, practicalMarks } = subjectMarks[subjectIndex];
        return theoryMarks + mcqMarks + practicalMarks;
    };

    // Function to calculate the average mark for a specific subject
    const calculateAverageMark = (subjectIndex) => {
        const { outOf } = subjectMarks[subjectIndex];
        const totalMarks = calculateTotalMarks(subjectIndex);
        return ((totalMarks / outOf) * 100).toFixed(2);
    };

    // Function to calculate the grade based on average mark
    const calculateGrade = (averageMark) => {
        if (averageMark >= 80) return 'A+';
        if (averageMark >= 70) return 'A';
        if (averageMark >= 60) return 'A-';
        if (averageMark >= 50) return 'B';
        if (averageMark >= 40) return 'C';
        if (averageMark >= 33) return 'D';
        return 'F';
    };


    return (
        <div>
            <div className="p-4 border rounded-lg shadow-lg mb-20 mx-20  text-white">
                <h3 className="underline mb-4 text-2xl font-bold text-lime-400">Term: {term}</h3>
                <table className="w-full mb-8">
                    {/* Table headers */}
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Theory Marks</th>
                            <th>MCQ Marks</th>
                            <th>Practical Marks</th>
                            <th>Out Of</th>
                            <th>Total Marks</th>
                            <th>Average Mark</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody>
                        {subjectMarks && subjectMarks.length > 0 && subjectMarks.map((subject, index) => (
                            <tr className="border" key={index}>
                                {termData?.allSubjects && (termData?.allSubjects).length > 0 && <td>{(termData?.allSubjects)[index]}</td>}
                                <td>
                                    <input

                                        readOnly
                                        className="text-black"
                                        value={subject.theoryMarks}
                                        onChange={(e) => updateMarks(index, 'theoryMarks', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input

                                        readOnly
                                        className="text-black"
                                        value={subject.mcqMarks}
                                        onChange={(e) => updateMarks(index, 'mcqMarks', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input

                                        readOnly
                                        className="text-black"
                                        value={subject.practicalMarks}
                                        onChange={(e) => updateMarks(index, 'practicalMarks', e.target.value)}
                                    />
                                </td>
                                <td>{subject.outOf}</td>
                                <td>{calculateTotalMarks(index)}</td>
                                <td>{calculateAverageMark(index)}</td>
                                <td>{calculateGrade(calculateAverageMark(index))}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>

                <p className="font-bold text-2xl text-lime-400" ><span className="font-bold text-2xl text-green-500">Term Average:</span>  {termAverage}</p>
                <p className="font-bold text-2xl text-lime-400"><span className="font-bold text-2xl text-green-500">Term Grade:</span>  {termGrade}</p>
            </div>
        </div>
    );
};

export default ShowResultTable;

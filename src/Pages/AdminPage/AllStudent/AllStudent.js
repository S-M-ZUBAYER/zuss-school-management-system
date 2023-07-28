// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Modal from 'react-modal';

// const AllStudent = () => {
//     const [students, setStudents] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedStudent, setSelectedStudent] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     console.log(students)
//     useEffect(() => {
//         const fetchStudents = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/students');
//                 setStudents(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch students:', error);
//             }
//         };

//         fetchStudents();
//     }, []);

//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const handleDelete = async (id) => {
//         try {
//             const confirmed = window.confirm('Are you sure you want to delete this student?');
//             if (confirmed) {
//                 await axios.delete(`http://localhost:5000/api/students/${id}`);
//                 setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
//                 alert('Student deleted successfully!');
//             }
//         } catch (error) {
//             console.error('Failed to delete student:', error);
//         }
//     };

//     const handleOpenModal = (student) => {
//         setSelectedStudent(student);
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setSelectedStudent(null);
//         setIsModalOpen(false);
//     };

//     const handleUpdateStudent = async (formData) => {
//         try {
//             await axios.put(`http://localhost:5000/api/students/${selectedStudent._id}`, formData);
//             setStudents((prevStudents) =>
//                 prevStudents.map((student) => (student._id === selectedStudent._id ? { ...student, ...formData } : student))
//             );
//             alert('Student updated successfully!');
//             handleCloseModal();
//         } catch (error) {
//             console.error('Failed to update student:', error);
//         }
//     };

//     return (
//         <div>
//             <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by Class Roll" />

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>School Name</th>
//                         <th>Class Roll</th>
//                         <th>Edit</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students
//                         .filter((student) => student.classRoll.includes(searchTerm))
//                         .map((student) => (
//                             <tr key={student._id}>
//                                 <td>{student.name}</td>
//                                 <td>{student.schoolName}</td>
//                                 <td>{student.classRoll}</td>
//                                 <td>
//                                     <button onClick={() => handleOpenModal(student)}>Edit</button>
//                                 </td>
//                                 <td>
//                                     <button onClick={() => handleDelete(student._id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                 </tbody>
//             </table>

//             <Modal className="w-3/6 mx-auto" isOpen={isModalOpen} onRequestClose={handleCloseModal}>
//                 {selectedStudent && (
//                     <div>
//                         <h2>Edit Student Information</h2>
//                         <form onSubmit={handleUpdateStudent}>
//                             <div>
//                                 <label>Name:</label>
//                                 <input type="text" defaultValue={selectedStudent.name} />
//                             </div>
//                             <div>
//                                 <label>School Name:</label>
//                                 <input type="text" defaultValue={selectedStudent.schoolName} />
//                             </div>
//                             <div>
//                                 <label>Class Roll:</label>
//                                 <input type="text" defaultValue={selectedStudent.classRoll} disabled />
//                             </div>
//                             <div>
//                                 <label>Designation:</label>
//                                 <input type="text" defaultValue={selectedStudent.designation} />
//                             </div>
//                             <div>
//                                 <label>Phone:</label>
//                                 <input type="text" defaultValue={selectedStudent.phone} />
//                             </div>
//                             <div>
//                                 <label>Address:</label>
//                                 <input type="text" defaultValue={selectedStudent.address} />
//                             </div>
//                             <div>
//                                 <button type="submit">Update</button>
//                                 <button onClick={handleCloseModal}>Cancel</button>
//                             </div>
//                         </form>
//                     </div>
//                 )}
//             </Modal>
//         </div>
//     );
// };

// export default AllStudent;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const AllStudent = () => {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/students');
                setStudents(response.data);
            } catch (error) {
                console.error('Failed to fetch students:', error);
            }
        };

        fetchStudents();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDelete = async (id) => {
        try {
            const confirmed = window.confirm('Are you sure you want to delete this student?');
            if (confirmed) {
                await axios.delete(`http://localhost:5000/api/students/${id}`);
                setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
                alert('Student deleted successfully!');
            }
        } catch (error) {
            console.error('Failed to delete student:', error);
        }
    };

    const handleOpenModal = (student) => {
        setSelectedStudent(student);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedStudent(null);
        setIsModalOpen(false);
    };

    const handleUpdateStudent = async (formData) => {
        try {
            await axios.put(`http://localhost:5000/api/students/${selectedStudent._id}`, formData);
            setStudents((prevStudents) =>
                prevStudents.map((student) => (student._id === selectedStudent._id ? { ...student, ...formData } : student))
            );
            alert('Student updated successfully!');
            handleCloseModal();
        } catch (error) {
            console.error('Failed to update student:', error);
        }
    };

    const groupStudentsByClass = () => {
        const groupedStudents = {};
        students.forEach((student) => {
            const key = `${student.className}-${student.section}-${student.shift}`;
            if (groupedStudents[key]) {
                groupedStudents[key].push(student);
            } else {
                groupedStudents[key] = [student];
            }
        });
        return groupedStudents;
    };

    const renderStudentGroups = () => {
        const groupedStudents = groupStudentsByClass();

        return Object.keys(groupedStudents).map((key) => {
            const studentsInGroup = groupedStudents[key];
            return (
                <div key={key}>
                    <h3>Class: {studentsInGroup[0].className}</h3>
                    <h4>Section: {studentsInGroup[0].section}</h4>
                    <h4>Shift: {studentsInGroup[0].shift}</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>School Name</th>
                                <th>Class Roll</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsInGroup
                                .filter((student) => student.classRoll.includes(searchTerm))
                                .map((student) => (
                                    <tr key={student._id}>
                                        <td>{student.name}</td>
                                        <td>{student.schoolName}</td>
                                        <td>{student.classRoll}</td>
                                        <td>
                                            <button onClick={() => handleOpenModal(student)}>Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(student._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            );
        });
    };

    return (
        <div>
            <h2>Student List</h2>
            <div>
                <label>Search by Class Roll:</label>
                <input type="text" value={searchTerm} onChange={handleSearch} />
            </div>
            {renderStudentGroups()}
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                {selectedStudent && (
                    <div>
                        <h2>Edit Student Information</h2>
                        <form onSubmit={handleUpdateStudent}>
                            <div>
                                <label>Name:</label>
                                <input type="text" defaultValue={selectedStudent.name} />
                            </div>
                            <div>
                                <label>School Name:</label>
                                <input type="text" defaultValue={selectedStudent.schoolName} />
                            </div>
                            <div>
                                <label>Class Roll:</label>
                                <input type="text" defaultValue={selectedStudent.classRoll} disabled />
                            </div>
                            <div>
                                <label>Designation:</label>
                                <input type="text" defaultValue={selectedStudent.designation} />
                            </div>
                            <div>
                                <label>Phone:</label>
                                <input type="text" defaultValue={selectedStudent.phone} />
                            </div>
                            <div>
                                <label>Address:</label>
                                <input type="text" defaultValue={selectedStudent.address} />
                            </div>
                            <div>
                                <button type="submit">Update</button>
                                <button onClick={handleCloseModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default AllStudent;

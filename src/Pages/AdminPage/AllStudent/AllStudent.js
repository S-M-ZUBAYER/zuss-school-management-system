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
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';
import EachStaff from '../../IntroductionPage/IntroDashboard/EachStaff';

const AllStudent = () => {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [allStudents, setAllStudents] = useState([]);
    const [classSearchQuery, setClassSearchQuery] = useState([]);
    const [sectionSearchQuery, setSectionSearchQuery] = useState([]);
    const [shiftSearchQuery, setShiftSearchQuery] = useState([]);
    const [nameSearchQuery, setNameSearchQuery] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());


    const { currentSchoolCode } = useContext(AuthContext);

    const [allClasses, setAllclasses] = useState([]);


    function getAllYears(startYear) {
        const currentYear = new Date().getFullYear();
        const years = [];

        for (let year = startYear; year <= currentYear; year++) {
            years.push(year);
        }

        return years;
    }
    const years = getAllYears(2020);
    console.log(year)
    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/students/${currentSchoolCode}`, {
                    params: { year }
                });
                setAllStudents(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };


        fetchApplications();
    }, [currentSchoolCode, year]);



    const handleClassSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSectionSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleShiftSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleNameSearch = (event) => {
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
                                .filter((student) => student && student.classRoll && student.classRoll.toString().includes(searchTerm))
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
        <div className="text-white">
            <h1 className="text-3xl font-bold text-lime-300 mb-8 mt-10">
                Available Students In {' '}
                <span className="bg-black">
                    <select className="bg-black px-2" value={year} onChange={(e) => setYear(e.target.value)}>
                        {years.map((year, index) => (
                            <option key={index} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </span>
            </h1>
            <div className="flex items-center justify-center mb-5 text-black">
                <select
                    id="classList"
                    value={classSearchQuery}
                    onChange={handleClassSearch}
                    className="bg-yellow-100 px-3 py-1 rounded-lg mr-3"
                >
                    <option value="" disabled>Select a class</option>
                    {allClasses.map((classItem, index) => (
                        <option key={index} value={classItem}>{classItem}</option>
                    ))}
                </select>
                <select
                    id="sectionList"
                    value={sectionSearchQuery}
                    onChange={handleSectionSearch}
                    className="bg-yellow-100 px-3 py-1 rounded-lg mr-3"
                >
                    <option value="" disabled>Select a Section</option>
                    {allClasses.map((classItem, index) => (
                        <option key={index} value={classItem}>{classItem}</option>
                    ))}
                </select>
                <select
                    id="classList"
                    value={shiftSearchQuery}
                    onChange={handleShiftSearch}
                    className="bg-yellow-100 px-3 py-1 rounded-lg mr-3"
                >
                    <option value="" disabled>Select a Shift</option>
                    {allClasses.map((classItem, index) => (
                        <option key={index} value={classItem}>{classItem}</option>
                    ))}
                </select>
                <input
                    type="text"
                    className="bg-yellow-100 px-3 py-1 rounded-lg"
                    placeholder="Search by name"
                    value={nameSearchQuery}
                    onChange={handleNameSearch}
                />
            </div>

            <div data-aos="flip-up" data-aos-duration="2000" className="overflow-x-auto mb-20 w-11/12 mx-auto mt-12">
                <table className="table w-full text-black">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Student Name</th>
                            <th>Class Roll</th>
                            <th>Attendance</th>
                            <th>Payment</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {allStudents.length !== 0 &&
                        allStudents.map((student, index) => (
                            <EachStaff
                                name={student?.name}
                                image={student?.image}
                                designation={student?.designation}
                                phone={student?.phone}
                                bloodGroup={student?.bloodGroup}
                                key={index}
                                // handleToDelete={() => handleDeleteStaff(staff._id)}
                                // handleUpdateStaff={handleUpdateStaff}
                                handleOpenModal={() => handleOpenModal(student)}
                            />
                        ))}
                </table>
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

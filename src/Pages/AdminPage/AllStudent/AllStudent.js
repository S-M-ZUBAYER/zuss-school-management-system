import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';
import EachStaff from '../../IntroductionPage/IntroDashboard/EachStaff';
import StudentInfoTable from './StudentInfoTable';

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
    const [date, setDate] = useState(new Date().getFullYear());
    const [className, setClassName] = useState('');
    const [classNameElement, setClassNameElement] = useState({});
    const [sectionElement, setSectionElement] = useState({});
    const [shiftElement, setShiftElement] = useState({});
    const [sectionName, setSectionName] = useState('');
    const [shiftName, setShiftName] = useState('');
    const [allClasses, setAllClasses] = useState([]);
    const [sections, setSections] = useState([]);
    const [shifts, setShifts] = useState([]);
    const [classInfo, setClassInfo] = useState([]);
    const [name, setName] = useState("");


    const { currentSchoolCode } = useContext(AuthContext);

    console.log(allClasses, students)


    function getAllYears(startYear) {
        const currentYear = new Date().getFullYear();
        const years = [];

        for (let year = startYear; year <= currentYear; year++) {
            years.push(year);
        }

        return years;
    }
    const years = getAllYears(2020);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/students/${currentSchoolCode}`, {
                    query: { date } // Send date as a query parameter
                });
                setAllStudents(response.data);
                console.log(response?.data, "allstudetn");
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };

        fetchApplications();
    }, [currentSchoolCode, date]);







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
        setName(event.target.value);
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

    useEffect(() => {
        // Fetch class information based on schoolCode
        const fetchClassInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/classes/${currentSchoolCode}`);
                const classInfoData = response.data?.classInfo;
                console.log(classInfoData)
                setClassInfo(classInfoData)
                if (classInfoData) {
                    const classNames = classInfoData.map((element) => element?.name);
                    // setClassInfo(classInfoData?.classInfo)
                    setAllClasses(classNames);
                    setClassNameElement(classInfoData.filter(everyClass => everyClass?.name === className));

                }

            } catch (error) {
                console.error('Error fetching classInfo:', error);
            }
        };


        fetchClassInfo();
    }, [currentSchoolCode]);


    const handleToSelectClassName = (e) => {
        classInfo?.map(info => {
            if (info.name === className) {
                setSections(info.sections);
                setSectionElement(info);
            }
        })


    }

    const handleToShiftName = (e) => {
        className && sectionName && (sectionElement?.sections)?.map(info => {
            if (info.name === sectionName) {
                setShifts(info.shifts);
                setShiftElement(info);
            }
        })

    }

    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold text-lime-300 mb-8 mt-10">
                Available Students In {' '}
                <span className="bg-black">
                    <select className="bg-black px-2" value={date} onChange={(e) => setDate(e.target.value)}>
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
                    id="className"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="bg-yellow-100 px-3 py-1 rounded-lg mr-3"
                >
                    <option value="" disabled>Select a class</option>
                    {allClasses.map((classItem, index) => (
                        <option key={index} value={classItem}>{classItem}</option>
                    ))}
                </select>
                <select
                    id="sectionList"
                    value={sectionName}
                    onChange={(e) => setSectionName(e.target.value)}
                    onClick={handleToSelectClassName}
                    className="bg-yellow-100 px-3 py-1 rounded-lg mr-3"
                >
                    <option value="">Please Select Section</option>
                    {className && (sections?.map((sectionItem, index) => (
                        <option key={index} value={sectionItem?.name}>
                            {sectionItem?.name}
                        </option>
                    )))}
                </select>
                <select
                    id="shift"
                    onChange={(e) => setShiftName(e.target.value)}
                    onClick={handleToShiftName}
                    className="bg-yellow-100 px-3 py-1 rounded-lg mr-3"
                >
                    <option value="">Please Select Shift</option>
                    {className && sectionName && shifts.map((shiftItem, index) => (
                        <option key={index} value={shiftItem}>
                            {shiftItem}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    className="bg-yellow-100 px-3 py-1 rounded-lg"
                    placeholder="Search by name"
                    value={name}
                    onChange={handleNameSearch}
                />
            </div>

            {/* <div data-aos="flip-up" data-aos-duration="2000" className="overflow-x-auto mb-20 w-11/12 mx-auto mt-12">
                <table className="table w-full text-black">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Student Name</th>
                            <th>Student Id</th>
                            <th>Class Roll</th>
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
            </div> */}
            {renderStudentGroups()}
            <Modal className="w-8/12 h-8/12 rounded-lg p-5  bg-white text-black mx-auto mt-24" isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                {selectedStudent && (
                    <div>
                        <h2 className=" text-emerald-500 font-semibold text-2xl text-center">Edit Student Information</h2>
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
                            <div className="text-end">
                                <button className="bg-green-500 mr-5 px-3 py-1" type="submit">Update</button>
                                <button className=" bg-yellow-300 px-3 py-1" onClick={handleCloseModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )}
            </Modal>
            <StudentInfoTable
                allStudents={allStudents}
                classInfoData={classInfo}
                handleOpenModal={handleOpenModal}
                className={className}
                sectionName={sectionName}
                shiftName={shiftName}
                name={name}
            ></StudentInfoTable>
        </div>
    );
};

export default AllStudent;

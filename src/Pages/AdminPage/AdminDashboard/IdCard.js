import React, { useContext, useState } from 'react';
import img1 from "../../../Assets/IdCard/id_1.jpg"
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import IdCard1 from './StudentIdCardShared/IdCard1';
import IdCard2 from './StudentIdCardShared/IdCard2';
import IdCard3 from './StudentIdCardShared/IdCard3';
import IdCard4 from './StudentIdCardShared/IdCard4';
import TeacherIdCard1 from './TeacherIdCardShare/TeacherIdCard1';
import TeacherIdCard2 from './TeacherIdCardShare/TeacherIdCard2';
import TeacherIdCard3 from './TeacherIdCardShare/TeacherIdCard3';
import TeacherIdCard4 from './TeacherIdCardShare/TeacherIdCard4';


const IdCard = () => {

    //Student from part

    const { schoolName } = useContext(AuthContext);
    const [stdId, setStdId] = useState('');
    const [stdEmail, setStdEmail] = useState('');
    const [stdName, setStdName] = useState('');
    const [stdClass, setStdClass] = useState('');
    const [stdGender, setStdGender] = useState('');
    const [stdCardIssue, setStdCardIssue] = useState('');
    const [stdDateBirth, setStdDateBirth] = useState('');
    const [stdCardExpire, setStdCardExpire] = useState('');
    const [stdImg, setStdImg] = useState("")


    //Teacher from part
    const [teacherId, setTeacherId] = useState('');
    const [teacherEmail, setTeacherEmail] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [teacherGender, setTeacherGender] = useState('');
    const [teacherCardIssue, setTeacherCardIssue] = useState('');
    const [teacherDateBirth, setTeacherDateBirth] = useState('');
    const [teacherCardExpire, setTeacherCardExpire] = useState('');
    const [teacherImg, setTeacherImg] = useState("")

    const handleSubmitStudent = (e) => {
        e.preventDefault();
        console.log(schoolName, stdImg, stdName, teacherEmail, stdId, stdClass, stdDateBirth, stdCardIssue, stdCardExpire, stdGender,)

        // code to generate the ID card using the input values
    };

    const handleToStdImg = (event) => {
        setStdImg(event.target.value)
    }

    const handleToStdId = (event) => {
        setStdId(event.target.value)
    }

    const handleToStdName = (event) => {  //data of birth // expire date // gender // Card issue date // class
        setStdName(event.target.value)
    }
    const handleToStdEmail = (event) => {
        setStdEmail(event.target.value)
    }
    const handleToStdClass = (event) => {
        setStdClass(event.target.value)
    }
    const handleToStdGender = (event) => {
        setStdGender(event.target.value)
    }
    const handleToStdCardIssue = (event) => {
        setStdCardIssue(event.target.value)
    }
    const handleToStdCardExpire = (event) => {
        setStdCardExpire(event.target.value)
    }
    const handleToStdDateBirth = (event) => {
        setStdDateBirth(event.target.value)
    }



    //Teacher from part

    const handleSubmitTeacher = (e) => {
        e.preventDefault();
        console.log(schoolName, teacherImg, teacherName, teacherEmail, teacherId, teacherDateBirth, teacherCardIssue, teacherCardExpire, teacherGender,)

        // code to generate the ID card using the input values
    };

    const handleToTeacherImg = (event) => {
        setTeacherImg(event.target.value)
    }

    const handleToTeacherStdId = (event) => {
        setTeacherId(event.target.value)
    }

    const handleToTeacherName = (event) => {
        setTeacherName(event.target.value)
    }
    const handleToTeacherEmail = (event) => {
        setTeacherEmail(event.target.value)
    }

    const handleToTeacherGender = (event) => {
        setTeacherGender(event.target.value)
    }
    const handleToTeacherCardIssue = (event) => {
        setTeacherCardIssue(event.target.value)
    }
    const handleToTeacherCardExpire = (event) => {
        setTeacherCardExpire(event.target.value)
    }
    const handleToTeacherDateBirth = (event) => {
        setTeacherDateBirth(event.target.value)
    }


    return (
        <div>
            {/* ************************** This is the section for Student to generate the Student ID card ********************************** */}

            <h1 className="text-2xl text-lime-200 font-bold my-5 mt-10">
                Student Id Card Section
            </h1>
            <div className="grid grid-cols-3 text-white my-20 mb-10">
                <div>
                    <div>
                        <h1 className="text-xl font-bold text-yellow-200 mb-3">
                            Student ID Card
                        </h1>
                        <h1>
                            Please provide student information to generate Student id card
                        </h1>
                    </div>



                    {/* ************************** This is the form section to input student information to generate the student ID card ********************************** */}

                    <div>
                        <h1>
                            Student Information
                        </h1>
                        <div className="mx-3 my-5">
                            <form onSubmit={handleSubmitStudent}>
                                <input type="url" className="w-full bg-black pl-2 text-white" placeholder=" please provide Student image url" id="StdImg" value={stdImg} onChange={handleToStdImg} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide Student Full name" id="StdName" value={stdName} onChange={handleToStdName} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="digit" className="w-full bg-black pl-2 text-white" placeholder="please provide Student ID" id="StdId" value={stdId} onChange={handleToStdId} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="email" className="w-full bg-black pl-2 text-white" placeholder="please provide student Email ID" id="StdEmail" value={stdEmail} onChange={handleToStdEmail} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="digit" className="w-full bg-black pl-2 text-white" placeholder="please provide student Class" id="stdClass" value={stdClass} onChange={handleToStdClass} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <label>Date of Birth</label>
                                <input type="date" className="w-full bg-black pl-2 text-white" id="StdDateOfBirth" value={stdDateBirth} onChange={handleToStdDateBirth} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <label>Date of Card Issue</label>
                                <input type="date" className="w-full bg-black pl-2 text-white" id="StdCardIssue" value={stdCardIssue} onChange={handleToStdCardIssue} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <label>Date of Card Expire</label>
                                <input type="date" className="w-full bg-black pl-2 text-white" id="StdCardExpire" value={stdCardExpire} onChange={handleToStdCardExpire} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide student Gender" id="StdGender" value={stdGender} onChange={handleToStdGender} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <button type='submit' className="bg-amber-100 text-slate-700 font-semibold px-3 py-1 rounded-lg">Id Card Generate</button>
                            </form>
                        </div>

                    </div>


                </div>

                <div className="col-span-2 grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg shadow-md p-8 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img1})` }}>
                        <div className="flex justify-center items-center mb-6">
                            <img
                                className="w-24 h-24 rounded-full"
                                src="https://s.yimg.com/fz/api/res/1.2/IfHPji1C1Il0NM5LyT_UQg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/880eb131-c93c-3bb5-98e5-076c4f996c4f/t_500x300"
                                alt="messi"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{stdName}</h2>
                        <p className="text-gray-600 mb-4">{stdEmail}</p>
                        <div className="border-t border-gray-300 pt-4">
                            <p className="text-gray-700 font-bold mb-2">Student ID:</p>
                            <p className="text-gray-600">{stdId}</p>
                        </div>
                    </div>


                    <IdCard2
                        name={stdName}
                        img={stdImg}
                        stdClass={stdClass}
                        email={stdEmail}
                        id={stdId}
                        dateOfBirth={stdDateBirth}
                        cardIssue={stdCardIssue}
                        expire={stdCardExpire}
                        gender={stdGender}
                    ></IdCard2>
                    <IdCard3
                        name={teacherName}
                        img={teacherImg}
                        email={teacherEmail}
                        stdClass={stdClass}
                        id={teacherId}
                        dateOfBirth={teacherDateBirth}
                        cardIssue={teacherCardIssue}
                        expire={teacherCardExpire}
                        gender={teacherGender}
                    ></IdCard3>
                    <IdCard4
                        name={teacherName}
                        img={teacherImg}
                        stdClass={stdClass}
                        email={teacherEmail}
                        id={teacherId}
                        dateOfBirth={teacherDateBirth}
                        cardIssue={teacherCardIssue}
                        expire={teacherCardExpire}
                        gender={teacherGender}
                    ></IdCard4>
                </div>
            </div>

            {/* ************************** This is the section for teacher to generate the Teacher ID card ********************************** */}

            <h1 className="text-2xl text-lime-800 font-bold my-5 mt-20">
                Teacher Id Card Section
            </h1>
            <div className="grid grid-cols-3 text-white my-20">
                <div>
                    <div>
                        <h1 className="text-xl font-bold text-yellow-200 mb-3">
                            Teacher ID Card
                        </h1>
                        <h1>
                            Please provide student information to generate Teacher id card
                        </h1>
                    </div>

                    <div>
                        <div>
                            <h1>
                                Student Information
                            </h1>


                            {/* ************************** This is the section for teacher to generate the Teacher ID card input information form ********************************** */}
                            <div className="mx-3 my-5">
                                <form onSubmit={handleSubmitTeacher}>
                                    <input type="url" className="w-full bg-black pl-2 text-white" placeholder=" please provide Teacher image url" id="TeacherImg" value={teacherImg} onChange={handleToTeacherImg} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide Teacher name" id="TeacherName" value={teacherName} onChange={handleToTeacherName} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="digit" className="w-full bg-black pl-2 text-white" placeholder="please provide Teacher ID" id="TeacherId" value={teacherId} onChange={handleToTeacherStdId} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="email" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="TeacherEmail" value={teacherEmail} onChange={handleToTeacherEmail} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Birth</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="TeacherDateOfBirth" value={teacherDateBirth} onChange={handleToTeacherDateBirth} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Card Issue</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="TeacherCardIssue" value={teacherCardIssue} onChange={handleToTeacherCardIssue} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Card Expire</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="TeacherCardExpire" value={teacherCardExpire} onChange={handleToTeacherCardExpire} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide your Gender" id="TeacherGender" value={teacherGender} onChange={handleToTeacherGender} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <button type='submit' className="bg-amber-100 text-slate-700 font-semibold px-3 py-1 rounded-lg">Id Card Generate</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                {/* teacherImg, teacherName, teacherEmail, teacherId, teacherDateBirth, teacherCardIssue, teacherCardExpire, teacherGender */}

                <div className="col-span-2 grid grid-cols-2 gap-3">
                    <TeacherIdCard1
                        name={teacherName}
                        img={teacherImg}
                        email={teacherEmail}
                        id={teacherId}
                        dateOfBirth={teacherDateBirth}
                        cardIssue={teacherCardIssue}
                        expire={teacherCardExpire}
                        gender={teacherGender}
                    ></TeacherIdCard1>
                    <TeacherIdCard2
                        name={teacherName}
                        img={teacherImg}
                        email={teacherEmail}
                        id={teacherId}
                        dateOfBirth={teacherDateBirth}
                        cardIssue={teacherCardIssue}
                        expire={teacherCardExpire}
                        gender={teacherGender}
                    ></TeacherIdCard2>
                    <TeacherIdCard3
                        name={teacherName}
                        img={teacherImg}
                        email={teacherEmail}
                        id={teacherId}
                        dateOfBirth={teacherDateBirth}
                        cardIssue={teacherCardIssue}
                        expire={teacherCardExpire}
                        gender={teacherGender}
                    ></TeacherIdCard3>
                    <TeacherIdCard4
                        name={teacherName}
                        img={teacherImg}
                        email={teacherEmail}
                        id={teacherId}
                        dateOfBirth={teacherDateBirth}
                        cardIssue={teacherCardIssue}
                        expire={teacherCardExpire}
                        gender={teacherGender}
                    ></TeacherIdCard4>
                </div>
            </div>


        </div>
    );
};

export default IdCard;
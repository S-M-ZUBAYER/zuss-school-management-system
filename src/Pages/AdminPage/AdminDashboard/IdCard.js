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
    const [StdId, setStdId] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [stdClass, setStdClass] = useState('');
    const [gender, setGender] = useState('');
    const [cardIssue, setCardIssue] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [expire, setExpire] = useState('');
    const [img, setImg] = useState("")

    const handleSubmitStudent = (e) => {
        e.preventDefault();
        console.log(name, schoolName, img, email, StdId, stdClass, dateBirth, cardIssue, expire, gender,)

        // code to generate the ID card using the input values
    };

    const handleToImg = (event) => {
        setImg(event.target.value)
    }

    const handleToStdId = (event) => {
        setStdId(event.target.value)
    }

    const handleToName = (event) => {  //data of birth // expire date // gender // Card issue date // class
        setName(event.target.value)
    }
    const handleToEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleToStdClass = (event) => {
        setStdClass(event.target.value)
    }
    const handleToGender = (event) => {
        setGender(event.target.value)
    }
    const handleToCardIssue = (event) => {
        setCardIssue(event.target.value)
    }
    const handleToCardExpire = (event) => {
        setExpire(event.target.value)
    }
    const handleToDateBirth = (event) => {
        setDateBirth(event.target.value)
    }



    //Teacher from part




    return (
        <div>
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

                    <div>
                        <h1>
                            Student Information
                        </h1>
                        <div className="mx-3 my-5">
                            <form onSubmit={handleSubmitStudent}>
                                <input type="url" className="w-full bg-black pl-2 text-white" placeholder=" please provide your image url" id="img" value={img} onChange={handleToImg} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide your name" id="img" value={name} onChange={handleToName} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="digit" className="w-full bg-black pl-2 text-white" placeholder="please provide your Student ID" id="img" value={StdId} onChange={handleToStdId} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="email" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="img" value={email} onChange={handleToEmail} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="digit" className="w-full bg-black pl-2 text-white" placeholder="please provide your Class" id="img" value={stdClass} onChange={handleToStdClass} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <label>Date of Birth</label>
                                <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="img" value={dateBirth} onChange={handleToDateBirth} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <label>Date of Card Issue</label>
                                <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="img" value={cardIssue} onChange={handleToCardIssue} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <label>Date of Card Expire</label>
                                <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="img" value={expire} onChange={handleToCardExpire} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide your Gender" id="img" value={gender} onChange={handleToGender} />
                                <hr className="border-slate-300 mb-8 mx-1"></hr>

                                <button type='submit' className="bg-amber-100 text-slate-700 font-semibold px-3 py-1 rounded-lg">Id Card Generate</button>
                            </form>
                        </div>

                    </div>


                </div>

                <div className="col-span-2 grid grid-cols-2 gap-3">
                    {/* <IdCard1
                        name={name}
                        stdClass={stdClass}
                        gender={gender}
                    ></IdCard1> */}
                    <div className="bg-white rounded-lg shadow-md p-8 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img1})` }}>
                        <div className="flex justify-center items-center mb-6">
                            <img
                                className="w-24 h-24 rounded-full"
                                src="https://s.yimg.com/fz/api/res/1.2/IfHPji1C1Il0NM5LyT_UQg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/880eb131-c93c-3bb5-98e5-076c4f996c4f/t_500x300"
                                alt="messi"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{name}</h2>
                        <p className="text-gray-600 mb-4">{email}</p>
                        <div className="border-t border-gray-300 pt-4">
                            <p className="text-gray-700 font-bold mb-2">Student ID:</p>
                            <p className="text-gray-600">{StdId}</p>
                        </div>
                    </div>


                    <IdCard2></IdCard2>
                    <IdCard3></IdCard3>
                    <IdCard4></IdCard4>
                </div>
            </div>
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
                            <div className="mx-3 my-5">
                                <form onSubmit={handleSubmitStudent}>
                                    <input type="url" className="w-full bg-black pl-2 text-white" placeholder=" please provide your image url" id="img" value={img} onChange={handleToImg} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide your name" id="img" value={name} onChange={handleToName} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="digit" className="w-full bg-black pl-2 text-white" placeholder="please provide your Student ID" id="img" value={StdId} onChange={handleToStdId} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="email" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="img" value={email} onChange={handleToEmail} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="digit" className="w-full bg-black pl-2 text-white" placeholder="please provide your Class" id="img" value={stdClass} onChange={handleToStdClass} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Birth</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="img" value={dateBirth} onChange={handleToDateBirth} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Card Issue</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="img" value={cardIssue} onChange={handleToCardIssue} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <label>Date of Card Expire</label>
                                    <input type="date" className="w-full bg-black pl-2 text-white" placeholder="please provide your Email ID" id="img" value={expire} onChange={handleToCardExpire} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <input type="text" className="w-full bg-black pl-2 text-white" placeholder="please provide your Gender" id="img" value={gender} onChange={handleToGender} />
                                    <hr className="border-slate-300 mb-8 mx-1"></hr>

                                    <button type='submit' className="bg-amber-100 text-slate-700 font-semibold px-3 py-1 rounded-lg">Id Card Generate</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="col-span-2 grid grid-cols-2 gap-3">
                    <TeacherIdCard1></TeacherIdCard1>
                    <TeacherIdCard2></TeacherIdCard2>
                    <TeacherIdCard3></TeacherIdCard3>
                    <TeacherIdCard4></TeacherIdCard4>
                </div>
            </div>


        </div>
    );
};

export default IdCard;
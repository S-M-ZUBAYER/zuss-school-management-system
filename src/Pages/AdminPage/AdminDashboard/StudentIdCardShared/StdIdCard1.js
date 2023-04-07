import React, { useContext } from 'react';
import img1 from "../../../../Assets/IdCard/id_1.jpg"
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const StdIdCard1 = ({ name, email, id, gender, stdClass, expire, cardIssue, dateOfBirth, img }) => {
    const { schoolName } = useContext(AuthContext);
    console.log(schoolName)
    return (

        // <div className="bg-white rounded-lg shadow-md py-3 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img1})` }}>
        //     <h1 className='text-base text-gray-700 font-bold'>{schoolName}</h1>


        //     <div className="flex justify-center items-center mb-6">
        //         <img
        //             className="w-24 h-24 rounded-full"
        //             src="https://s.yimg.com/fz/api/res/1.2/IfHPji1C1Il0NM5LyT_UQg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/880eb131-c93c-3bb5-98e5-076c4f996c4f/t_500x300"
        //             alt="messi"
        //         />
        //     </div>
        //     <div className="">
        //         <div className="font-semibold flex justify-start ml-5">
        //             <p className="text-gray-700">Student Name:</p>
        //             <p className="text-gray-700">{name}</p>
        //         </div>
        //         <div className="font-semibold flex justify-center">
        //             <p className="text-gray-700">Email:</p>
        //             <p className="text-gray-700">{email}</p>
        //         </div>
        //         <div className="font-semibold flex justify-center">
        //             <p className="text-gray-700">Student ID:</p>
        //             <p className="text-gray-700">{id}</p>
        //         </div>
        //         <div className="flex justify-center">
        //             <div className="font-semibold flex justify-center">
        //                 <p className="text-gray-700">Class:</p>
        //                 <p className="text-gray-700">{stdClass}</p>
        //             </div>
        //             <div className="font-semibold flex justify-center">
        //                 <p className="text-gray-700">Gender:</p>
        //                 <p className="text-gray-700">{gender}</p>
        //             </div>
        //         </div>
        //         <div className="font-semibold flex justify-center">
        //             <p className="text-gray-700">Date OF Birth:</p>
        //             <p className="text-gray-700">{dateOfBirth}</p>
        //         </div>
        //         <div className="font-semibold flex justify-center">
        //             <p className="text-gray-700">Card Issue:</p>
        //             <p className="text-gray-700">{cardIssue}</p>
        //         </div>
        //         <div className="font-semibold flex justify-center">
        //             <p className="text-gray-700">Card Expire:</p>
        //             <p className="text-gray-700">{expire}</p>
        //         </div>
        //     </div>

        // </div>

        <div className="w-72 h-96 rounded-md overflow-hidden shadow-lg flex flex-col justify-between bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img1})` }}>
            <div className="flex flex-col items-center justify-center h-24 bg-blue-500 text-white">
                <h2 className="text-lg font-bold">{schoolName}</h2>
                <p className="mt-1">Student ID</p>
            </div>
            <div className="flex-grow flex flex-col justify-between p-3">
                <div className="flex flex-col items-center">
                    <img src="https://s.yimg.com/fz/api/res/1.2/IfHPji1C1Il0NM5LyT_UQg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/880eb131-c93c-3bb5-98e5-076c4f996c4f/t_500x300" alt={name} className="w-24 h-24 rounded-full border-2 border-gray-300 " />
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="text-gray-700">{email}</p>
                </div>
                <div className="flex flex-col mt-4">
                    <div className="flex justify-between ">
                        <p className="text-sm font-bold text-gray-800">ID Number:</p>
                        <p className="text-gray-700">{id}</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-sm font-bold text-gray-800">Gender:</p>
                        <p className="text-gray-700">{gender}</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-sm font-bold text-gray-800">Class:</p>
                        <p className="text-gray-700">{stdClass}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="text-sm font-bold text-gray-800">Expires:</p>
                        <p className="text-gray-700">{expire}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm font-bold text-gray-800">Card Issue:</p>
                        <p className="text-gray-700">{cardIssue}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm font-bold text-gray-800">Date of Birth:</p>
                        <p className="text-gray-700">{dateOfBirth}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StdIdCard1;
import React from 'react';
import img3 from "../../../../Assets/IdCard/id_3.jpg"

const IdCard3 = ({ name, email, id, gender, stdClass, expire, cardIssue, dateOfBirth, img }) => {
    console.log(name, email, id, gender, stdClass, expire, cardIssue, dateOfBirth, img)
    return (
        <div className="bg-white rounded-lg shadow-md p-8 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img3})` }}>
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
                <p className="text-gray-600">{id}</p>
            </div>
        </div>
    );
};

export default IdCard3;
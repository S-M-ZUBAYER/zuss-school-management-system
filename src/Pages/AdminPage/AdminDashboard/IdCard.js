import React, { useState } from 'react';

const IdCard = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [idNumber, setIdNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // code to generate the ID card using the input values
    };
    return (
        <div>
            <h1 className="text-lg font-semibold text-red-300 my-8">
                This is the filed to generate Id card:-
            </h1>

            <div className="container mx-auto mt-10">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-5">
                        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
                            Age:
                        </label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your age"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="idNumber" className="block text-gray-700 font-bold mb-2">
                            ID Number:
                        </label>
                        <input
                            type="text"
                            id="idNumber"
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your ID number"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Generate ID Card
                    </button>
                </form>
                {/* code to display the generated ID card */}
            </div>


        </div>
    );
};

export default IdCard;
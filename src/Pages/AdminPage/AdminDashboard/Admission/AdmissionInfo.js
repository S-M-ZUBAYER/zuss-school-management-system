import React, { useState } from 'react';

const AdmissionForm = () => {
    const [notice, setNotice] = useState('');
    const [term, setTerm] = useState('');
    const [termsAndConditions, setTermsAndConditions] = useState([]);
    const [feeType, setFeeType] = useState('free');
    const [applicationFee, setApplicationFee] = useState('');

    const handleAddTerm = () => {
        if (term.trim() !== '') {
            setTermsAndConditions([...termsAndConditions, term]);
            setTerm('');
        }
    };

    const handleLog = () => {
        console.log('Admission Notice:', notice);
        console.log('Terms and Conditions:', termsAndConditions);
        console.log('Fee Type:', feeType);
        if (feeType === 'applicationFee') {
            console.log('Application Fee:', applicationFee);
        }
    };

    return (
        <div className="p-4 text-white">
            <h1 className="text-2xl font-bold mb-4">Admission Form</h1>

            <div className="mb-4">
                <label className="block mb-2">Admission Declaration Notice:</label>
                <textarea
                    className="w-full text-black px-4 py-2 border rounded-md"
                    rows="5"
                    value={notice}
                    onChange={(e) => setNotice(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2">Term and Condition:</label>
                <div className="flex">
                    <textarea
                        className="flex-1 text-black px-4 py-2 border rounded-l-md"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded-r-md"
                        onClick={handleAddTerm}
                    >
                        Add Term
                    </button>
                </div>
            </div>

            <div className="mb-4">
                {termsAndConditions.map((item, index) => (
                    <div key={index} className="flex justify-between mb-2">
                        <p>{item}</p>
                        <button
                            className="px-2 py-1 text-red-600"
                            onClick={() => {
                                const updatedTerms = termsAndConditions.filter((_, i) => i !== index);
                                setTermsAndConditions(updatedTerms);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="mb-4">
                <label className="block mb-2">Fee Type:</label>
                <div className="flex items-center">
                    <label className="mr-4">
                        <input
                            type="radio"
                            value="free"
                            checked={feeType === 'free'}
                            onChange={() => setFeeType('free')}
                        />
                        Free
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="applicationFee"
                            checked={feeType === 'applicationFee'}
                            onChange={() => setFeeType('applicationFee')}
                        />
                        Application Fee
                    </label>
                </div>
            </div>

            {feeType === 'applicationFee' && (
                <div className="mb-4">
                    <label className="block mb-2">Application Fee:</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md"
                        value={applicationFee}
                        onChange={(e) => setApplicationFee(e.target.value)}
                    />
                </div>
            )}

            <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleLog}>
                Log
            </button>
        </div>
    );
};

export default AdmissionForm;

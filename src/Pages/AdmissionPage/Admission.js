import React from 'react';

const Admission = () => {


    const admissionNotice = 'Welcome to XYZ School! We are now accepting admissions for the upcoming academic year. Apply now to secure your spot in our school.';

    const requirements = [
        'Completed application form',
        'Previous academic records',
        'Passport-sized photographs',
        'Birth certificate',
        'Medical examination report',
        'Recommendation letters (if applicable)',
    ];

    return (
        <div className="p-4 bg-gradient-to-l from-blue-900 via-slate-900 to-black text-slate-100 lg:px-24 h-screen">
            <h1 className="text-2xl font-bold mb-4">Admission Notice</h1>
            <p>{admissionNotice}</p>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Requirements</h2>
                <ul className="list-disc list-inside">
                    {requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
            </div>

            <button className="px-4 py-2 mt-8 bg-blue-500 text-white rounded-md">Apply Now</button>
        </div>
    );
};

export default Admission;
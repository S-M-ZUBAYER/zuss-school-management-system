import { useState } from 'react';
import { format } from 'date-fns';
import noticeBanner from "../../../Assets/Images/notice.jpg"

function Notice() {
    const [heading, setHeading] = useState('');
    const [message, setMessage] = useState('');
    const [notices, setNotices] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNotice = {
            heading: heading,
            message: message,
            date: new Date(),
        };
        setNotices([newNotice, ...notices]);
        setHeading('');
        setMessage('');
    };

    return (
        <div className=" w-4/5 mx-auto">

            <form onSubmit={handleSubmit} className=" border-2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-2xl font-bold text-lime-100 mb-5">
                    Please fill the form to add new notice
                </h1>
                <div className="mb-4 text-start">
                    <label className="block text-gray-200 font-bold mb-2" htmlFor="heading">
                        Notice Heading
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="heading"
                        type="text"
                        placeholder="Enter notice heading"
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                    />
                </div>

                <div className="mb-4 text-start">
                    <label className="block text-gray-200 font-bold mb-2" htmlFor="message">
                        Notice Message
                    </label>
                    <textarea
                        className="shadow resize-none min-h-16 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        placeholder="Enter notice message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex items-center">
                    <button
                        className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div className=" mx-auto my-20">
                <div className="flex justify-center mb-20">
                    <img className='rounded-lg' src={noticeBanner} alt="" />
                </div>
                {notices.map((notice, index) => (
                    <div key={index} className=" shadow-md text-start rounded px-8 py-5 mb-4">
                        <p className="text-base mt-2 text-teal-600 font-semibold">{format(notice.date, 'EEEE, MMMM d, yyyy')}</p>
                        <h2 className="font-bold text-lg mb-2 text-lime-400">{notice.heading}</h2>
                        <p className="text-gray-200 text-base">{notice.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notice;

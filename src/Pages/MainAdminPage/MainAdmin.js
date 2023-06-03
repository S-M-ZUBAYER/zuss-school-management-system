import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';
// import { globalVariable } from '../../App';

const MainAdmin = () => {
    const { schoolName, setSchoolName } = useContext(AuthContext)


    const [schools, setSchools] = useState([
        {
            name: "School 1",
            code: "123",
            address: "Address 1",
            about: "About school 1",
            bgSchoolImg: "bg-img-1.jpg",
            schoolImg: "https://ibb.co/MZXqbCf",
            email: "school1@example.com",
        },
        {
            name: "School 2",
            code: "456",
            address: "Address 2",
            about: "About school 2",
            bgSchoolImg: "bg-img-2.jpg",
            schoolImg: "https://ibb.co/MZXqbCf",
            email: "school2@example.com",
        },
    ])

    //declare useState to get the update value
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [bgSchoolImg, setBgSchoolImg] = useState('');
    const [schoolImg, setSchoolImg] = useState('');
    const [address, setAddress] = useState('');
    const [about, setAbout] = useState('');
    const [number, setNumber] = useState([])


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, code, address, about, bgSchoolImg, schoolImg, about);
        const newSchool = {
            name,
            code,
            email,
            address,
            about,
            bgSchoolImg,
            schoolImg
        }

        const newSchools = [...schools, newSchool];
        setSchools(newSchools)

        console.log(schools)
        // Do something with the form values, e.g. send them to a server or display them on the page
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];

        // Check if a file is selected
        if (file) {
            try {
                // Create a FormData object to send the file to the server
                const formData = new FormData();
                formData.append('image', file);

                // Send the image to the hosting service (imgbb in this case)
                const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbKey}`, {
                    method: 'POST',
                    body: formData,
                });

                // Parse the response JSON
                const data = await response.json();

                // Access the image URL from the response and log it
                const imageUrl = data.data.url;
                setSchoolImg(imageUrl);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
        else {
            toast.error("Please provide proper Image")
        }
    };
    const handleBgImageUpload = async (event) => {
        const file = event.target.files[0];

        // Check if a file is selected
        if (file) {
            try {
                // Create a FormData object to send the file to the server
                const formData = new FormData();
                formData.append('image', file);

                // Send the image to the hosting service (imgbb in this case)
                const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbKey}`, {
                    method: 'POST',
                    body: formData,
                });

                // Parse the response JSON
                const data = await response.json();

                // Access the image URL from the response and log it
                const imageUrl = data.data.url;
                setBgSchoolImg(imageUrl);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
        else {
            toast.error("Please provide proper Image")
        }
    };


    const [editingSchool, setEditingSchool] = useState(null);

    const deleteSchool = (index) => {
        const updatedSchools = [...schools];
        updatedSchools.splice(index, 1);
        setSchools(updatedSchools);
    };

    const editSchool = (index) => {
        setEditingSchool(schools[index]);
    };

    const updateSchool = () => {
        console.log(editingSchool)
        // Perform the update logic here
        // You can use the editingSchool state to access the updated values
        // and update the schools array accordingly
        // After updating, setEditingSchool(null) to close the modal
        setEditingSchool(null);
    };

    const handleToSetSchoolName = (schoolName) => {
        setSchoolName(schoolName);
        console.log(schoolName)
    }



    return (
        <div className="bg-lime-200 pt-5 pb-10 md:w-8/12 md:mx-auto">
            <h1 className="text-center text-lg font-bold my-5 bg-emerald-300 py-2 md:w-8/12 md:mx-auto">Please input the School information</h1>
            <form className="mt-10 text-start md:w-7/12 mx-auto bg-fuchsia-300 p-4" onSubmit={handleSubmit} >
                <label className="mr-2" htmlFor="name">School Name:</label>
                <input type="text" className="my-3 w-9/12 pl-1" id="name" value={name} onChange={(event) => setName(event.target.value)} /><br />

                <label className="mr-3" htmlFor="email">School Email:</label>
                <input type="email" className="my-3 w-9/12 pl-1" id="email" value={email} onChange={(event) => setEmail(event.target.value)} /><br />

                <label className="mr-3" htmlFor="code">School code:</label>
                <input type="digit" className="my-3 w-9/12 pl-1" id="code" value={code} onChange={(event) => setCode(event.target.value)} /><br />

                <label className="mr-3 mt-2" htmlFor="code">School Address:</label>
                <textarea type="test" className="my-3 w-8/12 pl-1" id="code" value={address} onChange={(event) => setAddress(event.target.value)} /><br />

                <label className="mr-3 mt-2" htmlFor="code">About Shool:</label>
                <textarea type="text" className="my-3 w-9/12 pl-1" id="code" value={about} onChange={(event) => setAbout(event.target.value)} /><br />

                {/* <label htmlFor="name">School Address:</label>
                <input type="text" className="my-3" id="name" value={address} onChange={(event) => setAddress(event.target.value)} /><br />

                <label htmlFor="message">About:</label>
                <textarea id="message" value={about} onChange={(event) => setAbout(event.target.value)}></textarea><br /> */}

                <label htmlFor="" className="py-2 mt-5">Please select a image for Banner</label>
                <div>
                    <input type="file" className="mt-2 " accept="image/*" onChange={handleBgImageUpload} />
                </div>

                <label htmlFor="" className="py-2 ">Please select a image for about section</label>
                <div>
                    <input type="file" className="mt-2 " accept="image/*" onChange={handleImageUpload} />
                </div>

                <button className="bg-yellow-200 py-2 px-5 rounded-lg  my-5" type="submit">Submit</button>
            </form>



            <h1 className="text-3xl text-center text-lime-600 bg-cyan-200 py-2 md:w-8/12 md:mx-auto font-bold mt-20">Available School sites</h1>
            <div>

            </div>
            <div>
                {schools.map((school, index) => (
                    <div key={index} className="border border-gray-300 p-2 mb-4 flex justify-between bg-purple-400 w-8/12 mt-8 mx-auto">
                        <Link to={`/${school.name}`} onClick={() => handleToSetSchoolName(school?.name)} className="flex items-center justify-between w-10/12">
                            <img src={school?.schoolImg} alt="School" className="w-8 h-8 rounded-full" />
                            <div className="mt-2">
                                {school.name}
                            </div>
                            <div>
                                {school.email}
                            </div>
                            <div>
                                {school.code}
                            </div>
                        </Link>

                        <div className="flex mt-2 ml-4 w-2/12">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2"
                                onClick={() => editSchool(index)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2"
                                onClick={() => deleteSchool(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}

                {editingSchool && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded-lg  w-8/12">
                            <h2 className="text-lg font-bold mb-4">Update School Information</h2>
                            <div>
                                <label htmlFor="" className="mr-2">
                                    School Name:
                                </label>
                                <input
                                    type="text"
                                    value={editingSchool.name}
                                    onChange={(e) =>
                                        setEditingSchool({ ...editingSchool, name: e.target.value })
                                    }
                                    className="border border-gray-300 p-2 mb-2 w-8/12"
                                    placeholder="Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="" className="mr-2">
                                    School Email:
                                </label>
                                <input
                                    type="text"
                                    value={editingSchool.email}
                                    onChange={(e) =>
                                        setEditingSchool({ ...editingSchool, email: e.target.value })
                                    }
                                    className="border border-gray-300 p-2 mb-2 w-8/12"
                                    placeholder="Email"
                                />
                            </div>

                            <div>
                                <label htmlFor="" className="mr-2">
                                    School code:
                                </label>
                                <input
                                    type="text"
                                    value={editingSchool.code}
                                    onChange={(e) =>
                                        setEditingSchool({ ...editingSchool, code: e.target.value })
                                    }
                                    className="border border-gray-300 p-2 mb-2 w-8/12"
                                    placeholder="Code"
                                />
                            </div>

                            <div>
                                <label htmlFor="" className="mr-2">
                                    School Address:
                                </label>
                                <textarea
                                    type="text"
                                    value={editingSchool.address}
                                    onChange={(e) =>
                                        setEditingSchool({ ...editingSchool, address: e.target.value })
                                    }
                                    className="border border-gray-300 p-2 mb-2 w-8/12"
                                    placeholder="About"
                                />
                            </div>
                            <div>
                                <label htmlFor="" className="mr-2">
                                    About School:
                                </label>
                                <textarea
                                    type="text"
                                    value={editingSchool.about}
                                    onChange={(e) =>
                                        setEditingSchool({ ...editingSchool, about: e.target.value })
                                    }
                                    className="border border-gray-300 p-2 mb-2 w-8/12"
                                    placeholder="About"
                                />
                            </div>

                            <div className="mt-8">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
                                    onClick={updateSchool}
                                >
                                    Save
                                </button>
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4"
                                    onClick={() => setEditingSchool(null)}
                                >
                                    Close
                                </button>
                            </div>

                        </div>
                    </div>

                )}
            </div>

        </div >
    );
};

export default MainAdmin;


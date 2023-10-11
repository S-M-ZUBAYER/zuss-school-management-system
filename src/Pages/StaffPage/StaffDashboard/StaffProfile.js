import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Modal from 'react-modal';
import { AuthContext } from '../../../context/UserContext';
import DisplaySpinner from '../../Shared/Spinners/DisplaySpinner';

const StaffProfile = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');
    const [userImage, setUserImage] = useState('');
    // const [imagePublicId, setImagePublicId] = useState('');
    const [userProfileData, setUserProfileData] = useState({})

    const { currentSchoolCode, user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://zuss-school-management-system-server-site.vercel.app/api/staffs/${currentSchoolCode}/${user?.email}`)
            .then((response) => {
                if (!response.ok) {
                    setLoading(false);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                setLoading(false);
                return response.json();

            })
            .then((data) => {
                // Handle the staff data received from the API
                console.log('Staff Data:', data[0]);
                setUserProfileData(data[0])
                setLoading(false);
            })
            .catch((error) => {
                // Handle errors
                setLoading(false);
                console.error('Fetch Error:', error);
            });
    }, [user?.email, currentSchoolCode]);

    console.log(userProfileData)
    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleDesignationChange(event) {
        setDesignation(event.target.value);
    }

    function handleAddressChange(event) {
        setAddress(event.target.value);
    }

    function handlePhoneChange(event) {
        setPhone(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleAboutChange(event) {
        setAbout(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        const image = event.target.image.files[0];

        const formData = new FormData();
        formData.append('image', image);


        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.display_url)
                setUserImage(imgData.data.display_url)
                console.log(userImage)
            })
            .catch(err => console.log(err));




        const profileData = {
            name,
            designation,
            address,
            phone,
            email,
            about,
            userImage
        };
        console.log(profileData);
        setUserProfileData(profileData);
        localStorage.setItem('staffProfile', JSON.stringify(profileData));
        closeModal();
    }

    if (loading) {
        return <DisplaySpinner></DisplaySpinner>
    }

    return (
        <div>
            <FaEdit className="edit-icon text-white ml-auto text-2xl mt-5 mr-5" onClick={openModal} />

            <div className="class=" text-white pt-12 pb-5>
                <img class="h-40 w-40 rounded-full border-8 border-x-fuchsia-500 border-yellow-300 mx-auto aos-init aos-animate" src={userProfileData ? userProfileData?.image : "https://i.ibb.co/Pwm3jKS/tom.jpg"}
                    alt="" ></img>
            </div>
            <div data-aos="fade-up" id='userName' class="aos-init aos-animate">
                <h1 class="text-2xl text-lime-400 font-bold mt-5">
                    Name: {
                        userProfileData ? userProfileData?.name : "User Name"
                    }
                </h1>
                <p class="text-2xl text-orange-300 font-semibold mt-3">
                    Designation: {
                        userProfileData ? userProfileData?.designation : "Designation"
                    }
                </p>
                <p className="text-lg font-semibold text-orange-300 mt-3">
                    Phone: {
                        userProfileData ? userProfileData?.phone : "Phone"
                    }
                </p>
                <p className="text-lg font-semibold text-orange-300 mt-3">
                    Email: {
                        userProfileData ? userProfileData?.email : "Email"
                    }
                </p>
                <p className="text-lg text-white mt-3">
                    Address: {
                        userProfileData ? userProfileData?.address : "Address"
                    }
                </p>
                <p className="text-base text-white w-5/6 mx-auto mt-3">
                    <span className="text-lg">About:</span> {
                        userProfileData ? userProfileData?.about : "About"
                    }
                </p>
            </div>
            {/* Rest of the page content */}
            <Modal isOpen={modalIsOpen} className=" w-3/6 rounded-2xl mx-auto bg-white mt-20" onRequestClose={closeModal}>
                <h2 className="font-bold text-2xl text-center py-3">Edit Profile</h2>
                <form onSubmit={handleSubmit} className="pb-10 pt-3 px-20 text-lg">
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input className="border ml-2 pl-1" type="text" id="name" value={name} onChange={handleNameChange} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="designation">Designation:</label>
                        <input className="border ml-2 pl-1" type="text" id="designation" value={designation} onChange={handleDesignationChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="phone">Phone:</label>
                        <input className="border ml-2 pl-1" type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input className="border ml-2 pl-1" type="email" id="email" value={email} onChange={handleEmailChange} />
                    </div>

                    <label htmlFor="address">Address:</label>
                    <div className="mb-2">
                        <textarea className="border ml-2 pl-1 w-4/6" id="address" value={address} onChange={handleAddressChange}></textarea>
                    </div>

                    <label htmlFor="about">About Me:</label>
                    <div className="mb-2">

                        <textarea className="border ml-2 pl-1 w-4/6" id="about" value={about} onChange={handleAboutChange}></textarea>
                    </div>


                    <div>
                        <label htmlFor='image' className='block mb-2 text-lg text-left'>
                            Select Image:
                        </label>
                        <input
                            type='file'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                            id='image'
                            name='image'
                            accept='image/*'
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-lime-300 text-lg font-semibold px-5 py-1 mt-3 rounded-md">Save</button>
                    </div>

                </form>
            </Modal>
        </div>
    );
}

export default StaffProfile;
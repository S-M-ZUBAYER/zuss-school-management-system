// import React, { useContext, useEffect, useState } from 'react';
// import EachStaff from '../../../IntroductionPage/IntroDashboard/EachStaff';

// const AllStaffInfo = () => {

//     const [staffs, setStaffs] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://zuss-school-management-system-server.vercel.app/api/staffs');
//                 const data = await response.json();
//                 setStaffs(data);
//                 console.log(data)
//             } catch (error) {
//                 console.error('Failed to fetch staffs:', error);
//             }
//         };

//         fetchData();
//     }, []);


//     return (


//         <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black pt-12">
//             <h2 data-aos="fade-down" data-aos-duration="2000" className="text-3xl text-lime-500 font-bold mb-5">
//                 Available staffs In your school!!!
//             </h2>


//             <div data-aos="flip-up" data-aos-duration="2000" className="overflow-x-auto mb-20 w-11/12 mx-auto ">
//                 <table className="table w-full">

//                     <thead>
//                         <tr>
//                             <th >Image</th>
//                             <th >Staff Name</th>
//                             <th>Designation</th>
//                             <th>email</th>
//                             <th>Phone No</th>
//                             <th>Blood Group</th>
//                             <th>Edit</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>

//                     {staffs?.length !== 0 && staffs?.map((staff, index) =>
//                         <EachStaff
//                             name={staff?.name}
//                             designation={staff?.designation}
//                             email={staff?.email}
//                             phone={staff?.phone}
//                             bloodGroup={staff?.bloodGroup}
//                             key={index}
//                             handleToDelete={handleToDelete}
//                             handleMakeAdmin={handleMakeAdmin}
//                         ></EachStaff>
//                     )}

//                 </table>
//             </div>
//         </div>
//     );
// };

// export default AllStaffInfo;


// import React, { useEffect, useState } from 'react';
// import EachStaff from '../../../IntroductionPage/IntroDashboard/EachStaff';
// import Modal from 'react-modal';
// import { useForm } from 'react-hook-form';

// const AllStaffInfo = () => {
//     const [staffs, setStaffs] = useState([]);
//     const [selectedStaff, setSelectedStaff] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://zuss-school-management-system-server.vercel.app/api/staffs');
//                 const data = await response.json();
//                 setStaffs(data);
//                 console.log(data);
//             } catch (error) {
//                 console.error('Failed to fetch staffs:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleOpenModal = (staff) => {
//         setSelectedStaff(staff);
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setSelectedStaff(null);
//         setIsModalOpen(false);
//     };

//     const { register, handleSubmit } = useForm();

//     const handleUpdateStaff = async (formData) => {
//         try {
//             const response = await fetch(`https://zuss-school-management-system-server.vercel.app/api/staffs/${selectedStaff.id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 const updatedStaff = await response.json();
//                 // Update the staffs state with the updated staff information
//                 setStaffs((prevStaffs) =>
//                     prevStaffs.map((staff) => (staff.id === updatedStaff.id ? updatedStaff : staff))
//                 );
//             } else {
//                 console.error('Failed to update staff');
//             }

//             handleCloseModal();
//         } catch (error) {
//             console.error('Failed to update staff:', error);
//         }
//     };

//     const handleToDelete = (staffId) => {
//         // Implement the delete functionality
//     };

//     const handleMakeAdmin = (staffId) => {
//         // Implement the make admin functionality
//     };

//     return (
//         <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black pt-12">
//             <h2
//                 data-aos="fade-down"
//                 data-aos-duration="2000"
//                 className="text-3xl text-lime-500 font-bold mb-5"
//             >
//                 Available staffs In your school!!!
//             </h2>

//             <div data-aos="flip-up" data-aos-duration="2000" className="overflow-x-auto mb-20 w-11/12 mx-auto ">
//                 <table className="table w-full">
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>Staff Name</th>
//                             <th>Designation</th>
//                             <th>email</th>
//                             <th>Phone No</th>
//                             <th>Blood Group</th>
//                             <th>Edit</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>

//                     {staffs?.length !== 0 &&
//                         staffs?.map((staff, index) => (
//                             <EachStaff
//                                 name={staff.name}
//                                 designation={staff.designation}
//                                 email={staff.email}
//                                 phone={staff.phone}
//                                 bloodGroup={staff.bloodGroup}
//                                 key={index}
//                                 handleToDelete={handleToDelete}
//                                 handleMakeAdmin={handleMakeAdmin}
//                                 handleOpenModal={() => handleOpenModal(staff)}
//                             />
//                         ))}
//                 </table>
//             </div>

//             <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
//                 {selectedStaff && (
//                     <div>
//                         <h2>Edit Staff Information</h2>
//                         <form onSubmit={handleSubmit(handleUpdateStaff)}>
//                             <input
//                                 type="text"
//                                 defaultValue={selectedStaff.name}
//                                 {...register('name')}
//                                 placeholder="Staff Name"
//                             />
//                             <input
//                                 type="text"
//                                 defaultValue={selectedStaff.designation}
//                                 {...register('designation')}
//                                 placeholder="Designation"
//                             />
//                             <input
//                                 type="email"
//                                 defaultValue={selectedStaff.email}
//                                 {...register('email')}
//                                 placeholder="Email"
//                             />
//                             <input
//                                 type="text"
//                                 defaultValue={selectedStaff.phone}
//                                 {...register('phone')}
//                                 placeholder="Phone No"
//                             />
//                             <input
//                                 type="text"
//                                 defaultValue={selectedStaff.bloodGroup}
//                                 {...register('bloodGroup')}
//                                 placeholder="Blood Group"
//                             />
//                             <div>
//                                 <button type="submit">Update</button>
//                                 <button onClick={handleCloseModal}>Cancel</button>
//                             </div>
//                         </form>
//                     </div>
//                 )}
//             </Modal>
//         </div>
//     );
// };

// export default AllStaffInfo;


import React, { useEffect, useState } from 'react';
import EachStaff from '../../../IntroductionPage/IntroDashboard/EachStaff';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AllStaffInfo = () => {
    const [staffs, setStaffs] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://zuss-school-management-system-server.vercel.app/api/staffs');
                const data = await response.json();
                setStaffs(data);
            } catch (error) {
                console.error('Failed to fetch staffs:', error);
            }
        };

        fetchData();
    }, []);

    const handleOpenModal = (staff) => {
        setSelectedStaff(staff);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedStaff(null);
        setIsModalOpen(false);
    };

    const { register, handleSubmit } = useForm();

    const handleUpdateStaff = async (formData) => {
        try {
            const response = await fetch(`https://zuss-school-management-system-server.vercel.app/api/staffs/${selectedStaff.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const updatedStaff = await response.json();
                setStaffs((prevStaffs) =>
                    prevStaffs.map((staff) => (staff.id === updatedStaff.id ? updatedStaff : staff))
                );
            } else {
                console.error('Failed to update staff');
            }

            handleCloseModal();
        } catch (error) {
            console.error('Failed to update staff:', error);
        }
    };

    const handleDeleteStaff = async (staffId) => {
        try {
            const confirmed = window.confirm('Are you sure you want to delete this staff?');

            if (confirmed) {
                const response = await fetch(`https://zuss-school-management-system-server.vercel.app/api/staffs/${staffId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setStaffs((prevStaffs) => prevStaffs.filter((staff) => staff.id !== staffId));
                    toast.success("Delete successfully")
                } else {
                    toast.error('Failed to delete staff');
                }
            }
        } catch (error) {
            toast.error('Failed to delete staff:', error);
        }
    };



    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredStaffs = staffs.filter((staff) =>
        staff.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black pt-12">
            <h2
                data-aos="fade-down"
                data-aos-duration="2000"
                className="text-3xl text-lime-500 font-bold mb-5"
            >
                Available staffs In your school!!!
            </h2>
            <div className="flex items-center justify-center mb-5">
                <input
                    type="text"
                    className="bg-yellow-100 px-3 py-1 rounded-lg mr-3"
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button
                    className="bg-lime-400 px-3 py-1 rounded-lg"
                    onClick={() => setSearchQuery('')}
                >
                    Clear
                </button>
            </div>

            <div data-aos="flip-up" data-aos-duration="2000" className="overflow-x-auto mb-20 w-11/12 mx-auto ">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Staff Name</th>
                            <th>Designation</th>
                            <th>email</th>
                            <th>Phone No</th>
                            <th>Blood Group</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {filteredStaffs.length !== 0 &&
                        filteredStaffs.map((staff, index) => (
                            <EachStaff
                                name={staff.name}
                                designation={staff.designation}
                                email={staff.email}
                                phone={staff.phone}
                                bloodGroup={staff.bloodGroup}
                                key={index}
                                handleToDelete={() => handleDeleteStaff(staff._id)}
                                handleUpdateStaff={handleUpdateStaff}

                                handleOpenModal={() => handleOpenModal(staff)}
                            />
                        ))}
                </table>
            </div>

            <Modal className="mx-auto pt-5 w-3/6 border-2 px-10 mt-40 bg-yellow-100 rounded-lg" isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                {selectedStaff && (
                    <div>
                        <h2 className="text-center font-bold text-2xl text-green-500">Edit Staff Information</h2>
                        <form onSubmit={handleSubmit(handleUpdateStaff)}>
                            <div>
                                <label className="mr-2" htmlFor="">Staff Name</label>
                                <input
                                    type="text"
                                    className="bg-yellow-100 mb-1"
                                    defaultValue={selectedStaff.name}
                                    {...register('name')}
                                    placeholder="Staff Name"
                                />
                            </div>

                            <div>
                                <label className="mr-2" htmlFor="">Designation</label>

                                <input
                                    type="text"
                                    className="bg-yellow-100 mb-1"
                                    defaultValue={selectedStaff.designation}
                                    {...register('designation')}
                                    placeholder="Designation"
                                />
                            </div>

                            <div>
                                <label className="mr-2" htmlFor="">Email</label>

                                <input
                                    type="email"
                                    className="bg-yellow-100 mb-1"
                                    defaultValue={selectedStaff.email}
                                    {...register('email')}
                                    placeholder="Email"
                                />
                            </div>

                            <div>
                                <label className="mr-2" htmlFor="">Phone</label>

                                <input
                                    type="text"
                                    className="bg-yellow-100 mb-1"
                                    defaultValue={selectedStaff.phone}
                                    {...register('phone')}
                                    placeholder="Phone No"
                                />
                            </div>

                            <div>
                                <label className="mr-2" htmlFor="">Blood Group</label>

                                <input
                                    type="text"
                                    className="bg-yellow-100 mb-1"
                                    defaultValue={selectedStaff.bloodGroup}
                                    {...register('bloodGroup')}
                                    placeholder="Blood Group"
                                />
                            </div>

                            <div className="text-center my-5">
                                <button className="rounded-tl-lg rounded-br-lg bg-lime-400 px-3 py-1 mr-2" type="submit">Update</button>
                                <button className="rounded-tl-lg rounded-br-lg bg-yellow-400 px-3 py-1" onClick={handleCloseModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default AllStaffInfo;




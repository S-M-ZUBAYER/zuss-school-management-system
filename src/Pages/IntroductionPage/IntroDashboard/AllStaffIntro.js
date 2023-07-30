import React, { useContext, useEffect, useState } from 'react';
import EachStaff from './EachStaff';
import EachStaffIntro from './EachStaffIntro';
import OurTeam from './OurSchoool/OurTeam';
// import axios from 'axios';
// import EachUser from './EachUser';
// import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
// import { useQuery } from '@tanstack/react-query';
// import toast from 'react-hot-toast';
// import DisplaySpinner from '../../../../components/Sprinners/DisplaySpinner/DisplaySpinner';

const AllStaffIntro = () => {

    const allStaff = [
        {
            name: "S M Zubayer",
            designation: "Teacher",
            email: "smzubayer@gmail.com",
            phone: "+880139849347",
            bloodGroup: "B+"
        },
        {
            name: "S M Sabit",
            designation: "Teacher",
            mail: "smsvit@gmail.com",
            phone: "+880139849347",
            bloodGroup: "B+"
        },
        {
            name: "MD datan",
            designation: "Night Guard",
            email: "mdDatan@gmail.com",
            phone: "+88013345347",
            bloodGroup: "A+"
        },
    ]


    // const { user, loading, setLoading } = useContext(AuthContext);
    // const [users, setUsers] = useState([])
    // const url = `https://cricket-lover-server-site-s-m-zubayer.vercel.app/users`;

    // const { data: users = [], isLoading, refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    //             }
    //         });
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    // useEffect(() => {
    //     fetch('https://cricket-lover-server-site-s-m-zubayer.vercel.app/users')

    //         .then(res => res.json())
    //         .then(data => {
    //             setLoading(true)
    //             setUsers(data);
    //             console.log(data)
    //             setLoading(false)
    //         });

    // }, [])

    // if (loading) {
    //     return <DisplaySpinner></DisplaySpinner>
    // }

    // const handleToDelete = (user) => {
    //     console.log(`${user?.userName} deleted successfully`)
    //     fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/users/${user._id}`, {
    //         method: "DELETE",
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount > 0) {
    //                 toast.success(`${user.name} deleted successfully`)
    //                 const newUsers = users?.filter(usr => usr._id !== user?._id);
    //                 setUsers(newUsers);
    //             }
    //             console.log(data);

    //         })
    // }
    // const handleMakeAdmin = id => {
    //     fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/users/admin/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 toast.success('Make admin successfully');
    //                 refetch();
    //             }
    //         })

    // }

    // if (loading) {
    //     return <DisplaySpinner></DisplaySpinner>
    // }
    return (


        <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black mt-[-100px] text-white">
            {/* <h2 data-aos="fade-down" data-aos-duration="2000" className="text-3xl text-lime-500 font-bold mb-5">
                Available user In your site .......
            </h2> */}


            <OurTeam></OurTeam>
        </div>
    );
};

export default AllStaffIntro;
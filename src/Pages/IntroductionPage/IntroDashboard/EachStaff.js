import React from 'react';
// import toast from 'react-hot-toast';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import img from "../../../Assets/Images/School.jpg"

const EachStaff = ({ name, designation, email, phone, bloodGroup, key, handleToDelete, handleMakeAdmin, handleOpenModal }) => {


    return (
        <tbody key={key}>
            <td>

                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt="img" />
                    </div>
                </div>

            </td>

            <td>{name}</td>
            <td>{designation}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{bloodGroup}</td>
            <td onClick={handleOpenModal} ><FaEdit></FaEdit></td>
            <td onClick={handleToDelete}><MdDelete></MdDelete></td>

        </tbody>
    );
};

export default EachStaff;
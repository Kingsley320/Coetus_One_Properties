import React from "react";
import "./css/Preview.css";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbJewishStar } from "react-icons/tb";
import { LuView } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { BsFillCircleFill, BsFillPersonCheckFill } from "react-icons/bs";
import { BsHouseUp } from "react-icons/bs";
import { BsCalendar4Week } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import logo from "../assets/images/Group 7.png";
const Preview = ({ isOpen }) => {
    if (!isOpen) {
        return null;
    }

    const handleLogout = () => {
        sessionStorage.removeItem("user-name");
        sessionStorage.removeItem("user-id");
        sessionStorage.removeItem("user-token");
    }

    return (
        <div className="preview">
            <div className="dropdown-content3">
                <div className="flex">
                    <img src={logo} alt="" />
                    <b className="mx-8">{sessionStorage.getItem("user-name")}</b>
                </div>
                <hr className="size-hr" />
                <ul>
                    <Link to="/view-wishlist"><li>
                        <TbJewishStar className="icons-" />
                        Wishlist
                    </li></Link>
                    <li><LuView className="icons-" />View Properties</li>
                    <li><FiEye className="icons-" />Recently Viewed</li>
                    <hr className="size-hr" />
                    <li> <Link to="/properties-page" className="flex gap-4 hover:text-white"><BsHouseUp className="icons- my-auto" />Available Properties</Link> </li>
                    <li><BsFillPersonCheckFill className="icons-" />Available Agents</li>
                    <hr className="size-hr" />
                    <li><BsCalendar4Week className="icons-" />View Appointment</li>
                    <li><MdOutlineEventAvailable className="icons-" />Book An Appointment</li>
                    <hr className="size-hr" />
                    <li><FiSettings className="icons-" />Settings</li>
                    <li className="text-red-500 font-semiold " onClick={handleLogout}><BsFillCircleFill className="text-red-600" />Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default Preview;

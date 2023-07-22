import React from "react";
import "./css/Preview.css";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbJewishStar } from "react-icons/tb";
import { LuView } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsHouseUp } from "react-icons/bs";
import { BsCalendar4Week } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import logo from "../assets/images/Group 7.png";
const Preview = ({ isOpen }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="preview">
            <div className="dropdown-content3">
                <img src={logo} alt="" />
                <hr className="size-hr" />
                <ul>
                    <li><MdOutlineFavoriteBorder className="icons-" />Favorites</li>
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
                </ul>
            </div>
        </div>
    );
};

export default Preview;

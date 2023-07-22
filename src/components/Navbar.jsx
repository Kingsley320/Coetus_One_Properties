import "./css/Navbar.css"
import logo1 from "../assets/images/Group 7.png";
import React from "react";
import { BsList } from "react-icons/bs";
import { useState } from "react";
import Modal from "./Login";
import Modal2 from "./LoginForm";
import Modal3 from "./SignIN";
import Modal4 from "./AgentLogin";
import Preview from "./Preview";
import { Link } from "react-router-dom";
const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };


    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenModal2 = () => {
        setIsModalOpen2(true);
    };

    const handleCloseModal2 = () => {
        setIsModalOpen2(false);
    };
    const handleOpenModal3 = () => {
        setIsModalOpen3(true);
    };

    const handleCloseModal3 = () => {
        setIsModalOpen3(false);
    };
    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
    };


    return (
        <div className="border-b-2 border-orange-600 shadow-lg ">
            <nav
                id="">
                <ul className="h-16 text-black flex justify-between mx-20 ">
                    <li onClick={handleOpenModal4} className="font-bold hover:text-white">I'm an Agent</li>
                    <Link to="/properties-page" className="my-auto font-bold hover:text-white"><li>Featured Properties</li></Link>
                    <Link to="/">
                        <li ><img src={logo1} alt="logo" className="h-16 " /></li>
                    </Link>

                    <li onClick={handleOpenModal2} className="text-orange-500 font-bold hover:text-white">Register </li>

                    <li onClick={handleOpenModal3} className="text-orange-500 font-bold hover:text-white">
                        {
                            sessionStorage.getItem("user-name") ? <p> Welcome, {sessionStorage.getItem("user-name")} </p> : <p>Sign In</p>
                        }
                    </li>
                    <li><BsList onClick={toggleDropdown} className="text-3xl my-auto border-black border-2 rounded-full hover:text-white hover:border-white" /></li>
                </ul>
            </nav>
            <div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
            <Modal2 isOpen={isModalOpen2} onClose={handleCloseModal2} />
            <Modal3 isOpen={isModalOpen3} onClose={handleCloseModal3} />
            <Modal4 isOpen={isModalOpen4} onClose={handleCloseModal4} />
            <Preview isOpen={isDropdownOpen} />
        </div>

    );
};


export default Navbar;
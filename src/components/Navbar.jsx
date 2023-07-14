import "./css/Navbar.css"
import logo1 from "../assets/images/Group 7.png";
import React from "react";
import { PiUserRectangleLight } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import Modal from "./Login";
import Modal2 from "./LoginForm";
import Modal3 from "./SignIN";
import Modal4 from "./AgentLogin";
const Navbar = () => {
    // Add a state to keep track of the scroll position
    const [scrollPosition, setScrollPosition] = React.useState(0);

    // Update the scroll position whenever the user scrolls
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    // Add an event listener for scroll events when the component mounts
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Define the CSS class for the navbar based on the scroll position
    const navbarClassName = scrollPosition > 0 ? 'navbar fixed' : 'navbar';

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
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


    // }
    return (
        <div>
            <nav className={navbarClassName} id="navbar">
                {/* Navbar content */}
                <ul>
                    <li onClick={handleOpenModal4} className="nav-text">Find an Agent</li>
                    <li><img src={logo1} alt="" className="Logo" /></li>
                    <li onClick={handleOpenModal2} className="colorReg">Register </li>
                    <li onClick={handleOpenModal3} className="SIGNIN nav-text">/ Sign In <PiUserRectangleLight className="Icon" /><BsThreeDotsVertical className="dots" /></li>
                    {/* <li></li> */}
                    {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> */}
                </ul>
            </nav>
                <div>
                </div>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                <Modal2 isOpen={isModalOpen2} onClose={handleCloseModal2} />
                <Modal3 isOpen={isModalOpen3} onClose={handleCloseModal3} />
                <Modal4 isOpen={isModalOpen4} onClose={handleCloseModal4} />
        </div>

    );
};


export default Navbar;
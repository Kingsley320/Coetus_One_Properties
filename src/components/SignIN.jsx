// User Sign In

import { MdFacebook } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "./css/SignIN.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const Modal3 = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const [logindicate, setLogIndicate] = useState(0);
    const baseURL = "http://property.reworkstaging.name.ng/v1/auth/login";


    const handleUserSignIn = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setErr(true);

        }
        else {
            const user = {
                email: email,
                password: password
            }
            // console.log(user);
            try {
                const userLogin = await axios.post(baseURL, user);
                // console.log(userLogin);
                sessionStorage.setItem("user-token", userLogin.data.data.token)
                sessionStorage.setItem("user-id", userLogin.data.data.id)
                sessionStorage.setItem("user-name", userLogin.data.data.first_name + " " + userLogin.data.data.last_name)
                setLogIndicate(1);
                setTimeout(() => {
                    onClose()
                }, 2000);
            } catch (err) {
                console.log(err);
            }
        }

    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    {
                        logindicate === 1 ? <div className="bg-green-600 text-center h-10 rounded-md"> <p className="text-white font-bold h-full">Sucessful</p> </div> : null
                    }
                </div>
                <div className="d-flex">
                    <h2>User Sign into Your Account</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <h5 className="SignIn">Or, <strong>create an account</strong></h5>
                <form action="">
                    <div className="email-i">
                        <label htmlFor="">Email Address</label><br /><br />
                        {err === true && email === '' ? <span className="text-red-600">Email Required</span> : null}
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password-i">
                        <label htmlFor="">Password</label><br /><br />
                        {err === true && password === '' ? <span className="text-red-600">Password Required</span> : null}
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <p className="forgot">Forgot your password?</p>
                    <button className="hover:bg-orange-700" onClick={handleUserSignIn}>Sign In</button>
                    <hr />
                    <div className="links">
                        <h5 className="google-i"> <FcGoogle className="Icons-1" /> Continue with Google</h5>
                        <h5 className="facebook-i"><MdFacebook className="Icons-2" />Continue with Facebook</h5>
                        <h5 className="apple-i"><BsApple className="Icons-3" />Continue with Apple</h5>
                    </div>
                    <p>By signing in, I accept the <strong>Terms of Use</strong>.</p>
                </form>
                <h5></h5>
            </div>
        </div>
    );
};

export default Modal3;
// User Sign In

import {MdFacebook} from "react-icons/md";
import {BsApple} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import "./css/SignIN.css";
import { useState, useEffect } from "react";
const Modal3 = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);

    const handleUserSignIn = () => {
        if(fname === "" || password === ""){
            setErr(true);
        }
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="d-flex">
                    <h2>User Sign into Your Account</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <h5 className="SignIn">Or, <strong>create an account</strong></h5>
                <form action="">
                    <div className="email-i">
                        <label htmlFor="">Email Address</label><br /><br />
                        {
                            err === true && email ? (
                                <span className="text-red">Email Required</span>
                            ) :
                            (
                                null
                            )
                        }
                        <input type="text" value={fname} onChange={(e) => setFname(e.target.value)}/>
                    </div>
                    <div className="password-i">
                        <label htmlFor="">Password</label><br /><br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <p className="forgot">Forgot your password?</p>
                    <button className="hover:bg-orange-700" onClick={handleUserSignIn()}>Sign In</button>
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
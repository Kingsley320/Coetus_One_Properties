// Register User
import "./css/LoginForm.css";
import cap from "../assets/images/Group 7.png";
import { MdFacebook } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Modal2 = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const [logindicate, setLogIndicate] = useState(0);

    const handleRegister = async (e) => {
        e.preventDefault();
        if (
            firstname === '' || lastname === '' || phone === '' | email === '' | password === ''
        ) {
            setErr(true);
            return;
        }
        const user = {
            first_name: firstname,
            last_name: lastname,
            email: email,
            phone: phone,
            password: password,
        }

        setFirstname('');
        setLastname('');
        setPhone('');
        setEmail('');
        setPassword('');
        // console.log((user));

        const baseURL = "http://property.reworkstaging.name.ng/v1";
        // const config = {
        //     headers: {
        //         "Authorization": `Bearer ${sessionStorage.getItem("admin-token")}`
        //     }
        // }
        try {
            const resp = await axios.post(`${baseURL}/users`, user);
            // console.log(resp);
            setLogIndicate(1);

        } catch (err) {
            setLogIndicate(2);
            console.log(err);
        }
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    {
                        logindicate === 1 ?  <div className='text-white rounded-lg bg-red-600 h-10 pt-2'>Successful</div> : null
                    }
                    {
                        logindicate === 2 ?  <div className='text-white rounded-lg bg-red-600 h-10 pt-2'>Unathourized</div> : null
                    }
                </div>
                <div className=" flex justify-center align-middle">
                    <img src={cap} alt="logo" className="h-10" />
                    <h2 className="my-auto">User Create Your Account</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <h5 className="SignIn">Or, <strong>sign into your account</strong></h5>
                <form action="">
                    <div className="first-last">
                        <div className="firstt">
                            <label htmlFor="First">First Name</label><br /><br />
                            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                            {err === true && firstname === '' ? <span className="text-red-500">First Name Required</span> : null}
                        </div>
                        <div className="lastt">
                            <label htmlFor="Last">Last Name</label><br /><br />
                            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            {err === true && lastname === '' ? <span className="text-red-500">Last Name Required</span> : null}
                        </div>
                    </div>
                    <div className="first-last">
                        <div className="firstt">
                            <label>Phone</label><br /><br />
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            {err === true && phone === '' ? <span className="text-red-500">Phone Required</span> : null}
                        </div>
                        <div className="lastt">
                            <label htmlFor="Last">Password</label><br /><br />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {err === true && password === '' ? <span className="text-red-500">Password Required</span> : null}
                        </div>
                    </div>
                    <div className="emaill mb-4">
                        <label htmlFor="">Email Address</label><br /><br />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {err === true && email === '' ? <span className="text-red-500">Email Required</span> : null}
                    </div>

                    <button className=' w-full bg-orange-600 hover:bg-orange-900 text-white font-semibold text-sm mx-auto mt-2 my-2 py-2 rounded-md' onClick={handleRegister}>Register</button>

                    <p className="my-3 underline">OR</p>
                    <hr />
                    <div className="other-accounts">
                        <h5 className="googlee hover:shadow-md"> <FcGoogle className="Iconss1" /> Continue with Google</h5>
                        <h5 className="facebookk hover:shadow-md"><MdFacebook className="Iconss2" />Continue with Facebook</h5>
                        <h5 className="applee hover:shadow-md"><BsApple className="Iconss3" />Continue with Apple</h5>
                    </div>
                    <p>By registering, I accept the CO-etus-ne!<strong>Terms of Use</strong>.</p>
                </form>
                <h5></h5>
            </div>
        </div>
    );

};

export default Modal2;
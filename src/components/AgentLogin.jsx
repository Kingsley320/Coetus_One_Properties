// Agent Sign In
import { MdFacebook } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "./css/AgentLogin.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Modal4 = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const baseURL = "http://property.reworkstaging.name.ng/v1/auth/login";
    const [err, setErr] = useState(false);
    const [auth, setAuthErr] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === '' || email === '') {
            setErr(true);
        }
        else {
            const auth = {
                "email": email,
                "password": password
            }
            try {
                const login = await axios.post(baseURL, auth)
                sessionStorage.clear();
                sessionStorage.setItem("agent-token", login.data.data.token);
                sessionStorage.setItem("agent-id", login.data.data.id);
                sessionStorage.setItem("agent-name", `${login.data.data.first_name} ${login.data.data.last_name}`);
                console.log(login.data.data.id);
                if (login.data.data.token) {
                    
                }
                else {
                    // setTimeout(() => {
                    setAuthErr(true);
                    // }, 2000);
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="modal">
            <div className="modal-content">
                {
                    auth === true ? (
                        <div className='text-white rounded-lg bg-red-600 h-10 pt-2'>Unathourized</div>
                    ) : (
                        null
                    )
                }
                <div className="d-flex">
                    <h2>Agent Sign into Your Account</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <h5 className="SignIn">Or, <strong>create an account</strong></h5>
                <form action="">
                    <div className="email-a">
                        <label htmlFor="">Email Address</label><br /><br />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {err === true && email === '' ? <span className='text-red-600'>Full Name Required</span> : null}
                    </div>
                    <div className="password-a">
                        <label htmlFor="">Password</label><br /><br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {err === true && password === '' ? <span className='text-red-600'>Password Required</span> : null}
                    </div>
                    <p className="forgot-pass">Forgot your password?</p>
                    <button onClick={handleSubmit}>Sign In</button>
                    <hr />
                    <div className="iconss-a">
                        <h5 className="google-a"> <FcGoogle className="Icons-a1" /> Continue with Google</h5>
                        <h5 className="facebook-a"><MdFacebook className="Icons-a2" />Continue with Facebook</h5>
                        <h5 className="apple-a"><BsApple className="Icons-a3" />Continue with Apple</h5>
                    </div>
                    <p>By signing in, I accept the <strong>Terms of Use</strong>.</p>
                </form>
                <h5></h5>
            </div>
        </div>
    );
};

export default Modal4;
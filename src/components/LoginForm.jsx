import "./css/LoginForm.css";
import cap from "../assets/images/Group 7.png";
import { MdFacebook } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
const Modal2 = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    // Register User
    return (
        <div className="modal">
            <div className="modal-content">
                <div className=" flex justify-center align-middle">
                    <img src={cap} alt="logo"className="h-10" />
                    <h2 className="my-auto">User Create Your Account</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <h5 className="SignIn">Or, <strong>sign into your account</strong></h5>
                <form action="">
                    <div className="first-last">
                        <div className="firstt">
                            <label htmlFor="First">First Name</label><br /><br />
                            <input type="text" />
                        </div>
                        <div className="lastt">
                            <label htmlFor="Last">Last Name</label><br /><br />
                            <input type="text" />
                        </div>
                    </div>
                    <div className="first-last">
                        <div className="firstt">
                            <label>Phone</label><br /><br />
                            <input type="text" />
                        </div>
                        <div className="lastt">
                            <label htmlFor="Last">Password</label><br /><br />
                            <input type="password" />
                        </div>
                    </div>
                    <div className="emaill mb-4">
                        <label htmlFor="">Email Address</label><br /><br />
                        <input type="text" />
                    </div>
                    <button className="hover:bg-orange-500">Continue</button>
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
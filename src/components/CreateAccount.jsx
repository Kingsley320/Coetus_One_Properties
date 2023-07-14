import "./css/CreateAccount.css";
import cap from "../assets/images/Group 1.png";
import {MdFacebook} from "react-icons/md";
import {BsApple} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";

const CreateAccount = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="d-flex">
                    <h2>Create Your Account</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <h5 className="SignIn">Or, <strong>sign into your account</strong></h5>
                <form action="">
                    <div className="first-last">
                        <div className="first">
                            <label htmlFor="First">First Name</label><br /><br />
                            <input type="text" />
                        </div>
                        <div className="last">
                            <label htmlFor="Last">Last Name</label><br /><br />
                            <input type="text" />
                        </div>
                    </div>
                    <div className="email">
                        <label htmlFor="">Email Address</label><br /><br />
                        <input type="text" />
                    </div>
                    <img src={cap} alt="" />
                    <button className="button">Continue</button>
                    <hr />
                    <h5 className="google"> <FcGoogle className="Icons"/> Continue with Google</h5>
                    <h5 className="facebook"><MdFacebook className="Icons"/>Continue with Facebook</h5>
                    <h5 className="apple"><BsApple className="Icons"/>Continue with Apple</h5>
                    <p>By registering, I accept the Homes.com <strong>Terms of Use</strong>.</p>
                </form>
                <h5></h5>
            </div>
        </div>
    );
};

export default CreateAccount;
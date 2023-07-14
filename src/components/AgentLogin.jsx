
import {MdFacebook} from "react-icons/md";
import {BsApple} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import "./css/AgentLogin.css";
const Modal4 = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }


    return (
        <div className="modal">
            <div className="modal-content">
                <div className="d-flex">
                    <h2>Sign into Your Account</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <h5 className="SignIn">Or, <strong>create an account</strong></h5>
                <form action="">
                    <div className="email">
                        <label htmlFor="">Email Address</label><br /><br />
                        <input type="text" />
                    </div>
                    <div className="password">
                        <label htmlFor="">Password</label><br /><br />
                        <input type="password" />
                    </div>
                    <p>Forgot your password?</p>
                    <button>Sign In</button>
                    <hr />
                    <h5 className="google"> <FcGoogle className="Icons" /> Continue with Google</h5>
                    <h5 className="facebook"><MdFacebook className="Icons" />Continue with Facebook</h5>
                    <h5 className="apple"><BsApple className="Icons" />Continue with Apple</h5>
                    <p>By signing in, I accept the <strong>Terms of Use</strong>.</p>
                </form>
                <h5></h5>
            </div>
        </div>
    );
};

export default Modal4;
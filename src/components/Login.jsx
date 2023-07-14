import "./css/Login.css";
import logo1 from "../assets/images/Group 7.png";
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }


    return (
        <div className="modal">
            <div className="modal-content">
                <div className="d-flex">
                    <h2>Confirm Your Account</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="image">

                </div>
                <h5>Thank you for joining CO-etus-ne!</h5>
                <p>Please activate your Account via the confirmation email we sent to example@gmail.com.</p>
                <button>Resend Email</button>
            </div>
        </div>
    );
};

export default Modal;
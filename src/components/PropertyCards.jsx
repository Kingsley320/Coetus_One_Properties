import { IoEye, IoHeartOutline } from "react-icons/io5";
import img1 from "../assets/images/1961546823-544968651-original.jpg";

function PropertyCards(props) {
    return(
        <div className="property-card">
            <div className="top">
                <IoEye />
                <h4>{props.views} views</h4>
            </div>
            <div className="middle">
                <img src={props.image} alt="" />
            </div>
            <div className="bottom">
                <div className="price-like">
                    <h3>${props.price}</h3>
                    {/* <IoHeartOutline className="property-heart"/> */}
                </div>
                <p>{props.area} Sq ft</p>
                <p>{props.street}</p>
                <p>{props.city}</p>
            </div>
            <div className="btns">
                <button id="edit">Edit</button>                
            </div>
        </div>                      
    )
}


export default PropertyCards;
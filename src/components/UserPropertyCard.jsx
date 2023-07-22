import { IoEye, IoHeartOutline } from "react-icons/io5";

function UserPropertyCard(props) {
    return (
        <div className="property-card group">
            {/* <div className="top">
                <IoEye />
                <h4>{props.views} views</h4>
            </div> */}
            <div className="middle">
                <img src={props.image} alt="" className="h-40"/>
            </div>
            <div className="bottom ">
                <div className="price-like">
                    <h3>${props.price}</h3>
                    <IoHeartOutline className="property-heart group-hover:text-orange-600 group-hover:animate-bounce" />
                </div>
                <p>{props.area} Sq ft</p>
                <p>{props.street}</p>
                <p>{props.city}</p>
            </div>
        </div>
    )
}

export default UserPropertyCard;
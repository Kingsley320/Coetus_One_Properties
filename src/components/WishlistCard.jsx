import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function (props) {
    return (
        <>
            <div className="w-80 border-2 border-orange-500 rounded-xl overflow-hidden text-black text-left shadow-lg hover:shadow-xl my-3">
                <img src={props.image} alt="property" />
                <div className="">
                    <h3>{props.name}</h3>
                    <h4>{props.plot}</h4>
                    <h4>{props.city}</h4>
                    <p>${props.price}</p>
                    <div className="flex justify-between mx-5 py-4 ">
                        <div className="flex gap-2 rounded-lg px-2 bg-orange-500 radius-xl hover:brightness-95 group">
                            <button className="bg-transparent border-none">Remove</button>
                            <IoIosRemoveCircleOutline className="my-auto text-white  font-bold text-2xl group-hover:scale-110" />
                        </div>
                        <button className="bg-orange-500 hover:brightness-95 text-white w-24" >View</button>
                    </div>
                </div>
            </div>
        </>
    )
}
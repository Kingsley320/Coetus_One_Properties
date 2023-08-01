import { BsColumnsGap, BsTextRight, BsFillBagFill, BsFillBagPlusFill, BsFillPersonPlusFill, BsFillPersonFill, BsPower } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";


function SideBar() {
    const navigate = useNavigate();
    function handleLogout(e) {
        sessionStorage.removeItem("agent-token");
        sessionStorage.removeItem("agent-id");
        sessionStorage.removeItem("agent-name");
        navigate("/");
    }
    return (
        <>
            <div className="h-screen w-56 rounded-ee-2xl rounded-tr-2xl  py-8 bg-orange-600 text-white fixed top-0 z-10">
                <h1 className="flex justify-between text-2xl font-semibold mb-10 px-5">Agent <BsTextRight /></h1>
                <div>
                    <Link to="/create-property" className="w-full flex gap-4 my-1 py-4 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsColumnsGap className="text-lg my-auto group-hover:scale-125 group-focus:scale-125 " /> Create Property</Link>

                    <Link to="/agent-properties" className=" w-full flex gap-4 my-1 py-4 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillBagFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />View Properties</Link>

                    <Link to="/agent-appointments" className=" w-full flex gap-4 my-1 py-4 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillBagPlusFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Appointments</Link>
                    <Link to="/property-status" className=" w-full flex gap-4 my-1 py-4 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillPersonFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Property Status</Link>
                    <Link to="/wishlist" className=" w-full flex gap-4 my-1 py-4 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillPersonFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Wishlist</Link>
                    <button className=" w-full flex gap-4 my-1 py-3 px-5 border-none bg-orange-600 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800" onClick={(e) => handleLogout(e)}><BsPower className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Logout</button>

                </div>
            </div>
        </>
    )
}
export default SideBar
import { BsColumnsGap, BsTextRight, BsFillBagFill, BsFillBagPlusFill, BsFillPersonPlusFill, BsFillPersonFill, BsPower } from "react-icons/bs";
import { Link } from "react-router-dom";


function SideBar() {
    return (
        <>
            <div className="h-screen w-56 rounded-ee-2xl rounded-tr-2xl  py-8 bg-orange-600 text-white fixed top-0 z-10">
                <h1 className="flex justify-between text-2xl font-semibold mb-10 px-5">Agent <BsTextRight /></h1>
                <div>
                    <Link to="create-properties" className="w-full flex gap-4 my-1 py-4 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsColumnsGap className="text-lg my-auto group-hover:scale-125 group-focus:scale-125 " /> Create Property</Link>

                    <Link to="/view-properties" element className=" w-full flex gap-4 my-1 py-4 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillBagFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />View Properties</Link>

                    <Link to="/appointments" element className=" w-full flex gap-4 my-1 py-4 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillBagPlusFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Appointments</Link>
                    <Link to="/property-status" element className=" w-full flex gap-4 my-1 py-4 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillPersonFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Property Status</Link>
                    <Link to="/wishlist" element className=" w-full flex gap-4 my-1 py-4 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillPersonFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Wishlist</Link>

                </div>
            </div>
        </>
    )
}
export default SideBar
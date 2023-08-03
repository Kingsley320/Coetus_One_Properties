import Card1 from "../assets/images/1961546823-544968651-original.jpg";
import Card2 from "../assets/images/image (7).jpg";
import "./css/AgentWishlist.css";
import WishlistCard from "../components/WishlistCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { BsBasket3 } from "react-icons/bs";

function UserWishlist() {
    const { id } = useParams();
    const [wishlist, setWishlist] = useState([]);
    // console.log(sessionStorage.getItem("user-token"));

    const handleWishlist = async () => {
        // console.log(id);

        const baseURL = "http://property.reworkstaging.name.ng/v1";
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem("user-token")}` }
        }

        try {
            const resp = await axios.get(`${baseURL}/users/${id}/wishlist`, config);
            console.log(resp.data.data);
            setWishlist(resp.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleWishlist();
    }, [])


    return (
        <div className="">
            <Navbar />
            <div className="Wishlist pt-1[0">
                <h1>WishList</h1>
                {
                    wishlist.length > 0 ? (
                        <div className="cards w-full text-white grid grid-cols-3 lg:grid-cols-4 md:grid-cols-2">
                            {
                                wishlist.map((property) => (
                                    <WishlistCard key={property.id} image={property.property.image || Card1} name={property.agent.full_name} company={property.agent.company} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className="h-96 flex justify-center text-black text-2xl w-full mx-auto ">
                            <p className="my-auto gap-3  flex">No property in Wishlist <BsBasket3 className="my-auto"/></p>
                        </div>
                    )
                }
                {/* <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card2} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card2} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} /> */}



            </div>
            <Footer />
        </div>
    )
}

export default UserWishlist;
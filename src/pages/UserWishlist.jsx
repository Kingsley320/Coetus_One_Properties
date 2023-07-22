import Card1 from "../assets/images/1961546823-544968651-original.jpg";
import Card2 from "../assets/images/image (7).jpg";
import "./css/AgentWishlist.css";
import WishlistCard from "../components/WishlistCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function UserWishlist() {
    return (
        <div className="">
            <Navbar />
            <div className="Wishlist pt-1[0">
                <h1>WishList</h1>

                <div className="cards text-white grid grid-cols-3 lg:grid-cols-4 md:grid-cols-2">
                    <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card2} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card2} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserWishlist;
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import "./css/Home.css";
import { IoPaperPlaneOutline, IoSearch, IoSearchSharp } from "react-icons/io5";
import homeImage1 from "../assets/images/0961546823-544968651-original (1).jpg";
import homeImage2 from "../assets/images/0961546823-544968651-original (1).jpg";
import homeImage3 from "../assets/images/0961546823-544968651-original (1).jpg";
import homeImage4 from "../assets/images/0961546823-544968651-original (1).jpg";
import Footer from "../components/Footer";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";



function Home() {
  const inputRef = useRef(null);

  // const toggleShow = () => {
  //   if (document.activeElement !== inputRef.current) {
  //     var el = document.getElementById("box");
  //     el.classList.toggle("show");
  //   }
  // };

  return (
    <>
      <div className="topbanner-background">
        <Navbar />
        <div className="quick-search-container">
          <h1 className="homes-title">Find your home with the people you trust.</h1>
          <div className="search-container flex justify-between mx-5">
            <div className="flex">
              <p className="flex gap-1  align-middle bg-gray-100 w-28 px-3 pt-5">For Sale <BsFillCaretDownFill className="my-auto mt-1"/> </p>
              <IoPaperPlaneOutline className="mx-3 text-2xl my-auto" />

              <input
                ref={inputRef}
                type="text"
                placeholder="Place, Neighborhood, School or Agent"
                className="search__box text-gray-700 text-left w-96"
              /></div>
            <IoSearchSharp className="search__icon my-auto text-3xl text-right mr-4" />
          </div>
        </div>
      </div>


      <div className="custom-content-row">
        <div className="custom-visual-section">
          <img src={homeImage1} alt="A woman showing a document for a backyard consultation." />
        </div>
        <div className="custom-action-section">
          <div className="custom-left-margin">
            <div className="custom-header">
              <h2 className="custom-heading-large">
                <span>Local expertise for luxury homes</span>
              </h2>
            </div>
            <div className="custom-copy">
              <div className="custom-text">
                <span>Coetus One agents have years of experience buying and selling high-end homes. Get the highest level of service from our best agents.</span>
              </div>
            </div>
            <div className="custom-cta">
                <Link to="/properties-page"><span>Featured Houses</span></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-content-row">
        <div className="custom-action-section col-12 col-lg-6">
          <div className="custom-right-margin">
            <div className="custom-header">
              <h2 className="custom-heading-large">
                <span>Get the Coetus one app</span>
              </h2>
            </div>
            <div className="custom-copy">
              <div className="custom-text">
                <span>Download our top-rated real estate app for iOS or Android to get alerts the moment your dream home hits the market.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-visual-section col-12 col-lg-6">
          <img src={homeImage2} alt="Mobile phone with QR code." />
        </div>
      </div>

      <div className="custom-content-row">
        <div className="custom-visual-section">
          <img src={homeImage3} alt="Mobile phone with QR code." />
        </div>
        <div className="custom-action-section">
          <div className="custom-right-margin">
            <div className="custom-header">
              <h2 className="custom-heading-large">
                <span>Sell for more than the home next door</span>
              </h2>
            </div>
            <div className="custom-copy">
              <div className="custom-text">
                <span>For seven years running, independent research has proven that homes listed with Coetus One sell for more than comparable homes listed with other brokerages. Get started with a free consultation.</span>
              </div>
            </div>
            <div className="custom-search">
              <input type="text" className="search-input-box" placeholder="Enter your street address" title="Enter your street address" />
              <span className="custom-button ml-5">Next</span>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-content-row">
        <div className="custom-action-section">
          <div className="custom-right-margin">
            <div className="custom-header">
              <h2 className="custom-heading-large">
                <span>Find your perfect rental on Coetus one</span>
              </h2>
            </div>
            <div className="custom-copy">
              <div className="custom-text">
                <span>Whether you’re searching for houses, apartments, or condos, it's easy to find a place you'll love.</span>
              </div>
            </div>
            <div className="custom-search flex justify-center gap-5 group">
              <input type="text" className="search-input-box" placeholder="City, Address, School, Building, ZIP" title="Enter your street address" />
              <Link to="/properties-page" className="custom-button w-28"><IoSearch className="my-auto mx-auto group-hover:scale-125"/></Link>
            </div>
          </div>
        </div>
        <div className="custom-visual-section">
          <img src={homeImage4} alt="Mobile phone with QR code." />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

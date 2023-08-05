import Navbar from "../components/Navbar";
import UserPropertyCard from "../components/UserPropertyCard";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import React, { useRef } from 'react';
import img1 from "../assets/images/1961546823-544968651-original.jpg";
import img2 from "../assets/images/image (7).jpg";
import img3 from "../assets/images/1961546823-544968651-original.jpg";
import img4 from "../assets/images/image (7).jpg";
import img5 from "../assets/images/1961546823-544968651-original.jpg";
import img6 from "../assets/images/image (7).jpg";
import "./css/UserPropertyPage.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function PropertyPageUser() {
  const scrollContainerRefs = useRef([]);

  const scrollLeft = (sectionIndex) => {
    if (scrollContainerRefs.current[sectionIndex]) {
      scrollContainerRefs.current[sectionIndex].scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = (sectionIndex) => {
    if (scrollContainerRefs.current[sectionIndex]) {
      scrollContainerRefs.current[sectionIndex].scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="property-page-bg">
      <Navbar />
      <div className="property-page">
       <div className="d-block">
       <section>
          <h1>Agent 1</h1>
          <div className="property-cards-contents">
            <div onClick={() => scrollLeft(0)} className="bg-transparent">
              <IoArrowBackCircle className="property-cards-arrows text-black active:text-orange-600" />
            </div>
            <div className="property-wrapper" ref={(el) => (scrollContainerRefs.current[0] = el)}>
              <Link to="/single-property">
              <UserPropertyCard views={33} image={img1} price={"729,000"} area={2026} street={"Ozone Park NY 11417  Ozone Park"} city={"New York"} /></Link>
              <UserPropertyCard views={71} image={img2} price={"286,500"} area={3100} street={"170-25 118th Rd, Jamaica, NY 11434"} city={"New York"} />
              <UserPropertyCard views={27} image={img3} price={"888,000"} area={2473} street={"52-7 74th St Elmhurst, NY 11373"} city={"New York"} />
              <UserPropertyCard views={33} image={img4} price={"770,000"} area={4037} street={"106-20 70th Ave Unit 2-B Forest Hills, NY 11375"} city={"New York"} />
              <UserPropertyCard views={71} image={img5} price={"600,000"} area={3500} street={"1810 3rd Ave Unit A-8A"} city={"New York"} />
              <UserPropertyCard views={27} image={img6} price={"650,000"} area={2960} street={"23-02 113th Dr, Queens Village"} city={"New York"} />
            </div>
            <div onClick={() => scrollRight(0)} className="bg-transparent">
              <IoArrowForwardCircle className="property-cards-arrows text-black active:text-orange-600" />
            </div>
          </div>
        </section>
       </div>
        {/* <div className="d-block">
        <section>
          <h1>Agent 2</h1>
          <div className="property-cards-contents">
            <div onClick={() => scrollLeft(0)} className="bg-transparent">
              <IoArrowBackCircle className="property-cards-arrows text-black active:text-orange-600" />
            </div>
            <div className="property-wrapper" ref={(el) => (scrollContainerRefs.current[0] = el)}>
              <Link to="/single-property">
              <UserPropertyCard views={33} image={img1} price={"729,000"} area={2026} street={"Ozone Park NY 11417  Ozone Park"} city={"New York"} /></Link>
              <UserPropertyCard views={71} image={img2} price={"286,500"} area={3100} street={"170-25 118th Rd, Jamaica, NY 11434"} city={"New York"} />
              <UserPropertyCard views={27} image={img3} price={"888,000"} area={2473} street={"52-7 74th St Elmhurst, NY 11373"} city={"New York"} />
              <UserPropertyCard views={33} image={img4} price={"770,000"} area={4037} street={"106-20 70th Ave Unit 2-B Forest Hills, NY 11375"} city={"New York"} />
              <UserPropertyCard views={71} image={img5} price={"600,000"} area={3500} street={"1810 3rd Ave Unit A-8A"} city={"New York"} />
              <UserPropertyCard views={27} image={img6} price={"650,000"} area={2960} street={"23-02 113th Dr, Queens Village"} city={"New York"} />
            </div>
            <div onClick={() => scrollRight(0)} className="bg-transparent">
              <IoArrowForwardCircle className="property-cards-arrows text-black active:text-orange-600" />
            </div>
          </div>
        </section>
        </div>
        <div>
        <section>
          <h1>Agent 3</h1>
          <div className="property-cards-contents">
            <div onClick={() => scrollLeft(0)} className="bg-transparent">
              <IoArrowBackCircle className="property-cards-arrows text-black active:text-orange-600" />
            </div>
            <div className="property-wrapper" ref={(el) => (scrollContainerRefs.current[0] = el)}>
              <Link to="/single-property">
              <UserPropertyCard views={33} image={img1} price={"729,000"} area={2026} street={"Ozone Park NY 11417  Ozone Park"} city={"New York"} /></Link>
              <UserPropertyCard views={71} image={img2} price={"286,500"} area={3100} street={"170-25 118th Rd, Jamaica, NY 11434"} city={"New York"} />
              <UserPropertyCard views={27} image={img3} price={"888,000"} area={2473} street={"52-7 74th St Elmhurst, NY 11373"} city={"New York"} />
              <UserPropertyCard views={33} image={img4} price={"770,000"} area={4037} street={"106-20 70th Ave Unit 2-B Forest Hills, NY 11375"} city={"New York"} />
              <UserPropertyCard views={71} image={img5} price={"600,000"} area={3500} street={"1810 3rd Ave Unit A-8A"} city={"New York"} />
              <UserPropertyCard views={27} image={img6} price={"650,000"} area={2960} street={"23-02 113th Dr, Queens Village"} city={"New York"} />
            </div>
            <div onClick={() => scrollRight(0)} className="bg-transparent">
              <IoArrowForwardCircle className="property-cards-arrows text-black active:text-orange-600" />
            </div>
          </div>
        </section>
        </div> */}
      </div>
      <Footer/>
    </div>
  );
}

export default PropertyPageUser;

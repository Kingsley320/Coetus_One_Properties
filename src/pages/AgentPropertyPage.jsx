import "./css/AgentPropertyPage.css"
import AgentPropertyCards from "../components/AgentPropertyCards";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import img1 from "../assets/images/1961546823-544968651-original.jpg";
import img2 from "../assets/images/image (7).jpg";
import img3 from "../assets/images/1961546823-544968651-original.jpg";
import img4 from "../assets/images/image (7).jpg";
import img5 from "../assets/images/1961546823-544968651-original.jpg";
import img6 from "../assets/images/image (7).jpg";
import Sidebar from "../components/SideBar";
import { Link } from "react-router-dom";




function AgentPropertyPage() {
  

  return (
    <div className="property-page-bg">       
      <div className="property-page">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <h1>PROPERTY PAGE</h1>
          <section>
            <h2>Agent 1</h2>
            <div className="property-cards-contents  pl-40">            
              <div className="property-wrapper" >
             <Link to="/agent-single-property"> <AgentPropertyCards views={33} image={img1} price={"729,000"} area={2026} street={"Ozone Park NY 11417  Ozone Park"} city={"New York"}/></Link>
              <AgentPropertyCards views={71} image={img2} price={"286,500"} area={3100} street={"170-25 118th Rd, Jamaica, NY 11434"} city={"New York"}/>
              <AgentPropertyCards  views={27} image={img3} price={"888,000"} area={2473} street={"52-7 74th St Elmhurst, NY 11373"} city={"New York"}/>
              <AgentPropertyCards views={33} image={img4} price={"770,000"} area={4037} street={"106-20 70th Ave Unit 2-B Forest Hills, NY 11375"} city={"New York"}/>                           
              <AgentPropertyCards views={71} image={img5} price={"600,000"} area={3500} street={"1810 3rd Ave Unit A-8A"} city={"New York"}/>
              <AgentPropertyCards  views={27} image={img6} price={"650,000"} area={2960} street={"23-02 113th Dr, Queens Village"} city={"New York"}/>
              </div>            
            </div>
          </section> 
        </div>        
      </div>
    </div>
  );
}

export default AgentPropertyPage;

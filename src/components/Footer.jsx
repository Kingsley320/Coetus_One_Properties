import { IoLogoFacebook, IoLogoInstagram, IoLogoPinterest, IoLogoTwitter } from "react-icons/io5";
import footerImg1 from "../assets/images/appStore.png";
import footerImg2 from "../assets/images/googlePlay.png";
import footerImg3 from "../assets/images/brokerReprocity.png";
import footerImg4 from "../assets/images/US.png";
import footerImg5 from "../assets/images/canada.png";
import footerImg6 from "../assets/images/equalOppurtunity.png";
import "./css/Footer.css";

function Footer() {
  return (
    <div>
      <hr />
      <div className="footerContent">
        <div className="footer-flex1">
          <h4>Join</h4>
          <p>Become an Agent</p>
          <p>Get referrals</p>
          <p>Careers</p>
          <h4>Find homes faster</h4>
          <div className="app-pair">
            <img src={footerImg1} alt="footer" />
            <img src={footerImg2} alt="footer" />
          </div>
        </div>
        <div className="footer-flex2">
          <h4>About us</h4>
          <p>Why Coetus one?</p>
          <p>Community Impact</p>
          <p>Diversity & Inclusion</p>
          <p>Life at Coetus one</p>
          <p>Press</p>
          <p>Investors</p>
          <p>Blog</p>
          <p>Real Estate News</p>
        </div>

        <div className="footer-flex3">
          <h4>Find us</h4>
          <p>Contact us</p>
          <p>Help center</p>
          <p className="flex gap-2"><IoLogoFacebook className="footer-socialMedia"/>
            <IoLogoTwitter className="footer-socialMedia"/>
            <IoLogoPinterest className="footer-socialMedia"/>
            <IoLogoInstagram className="footer-socialMedia"/>
          </p>
          <h4>Subsidiaries</h4>
          <p>Rent</p>
          <p>Bay Equity Home Loans</p>
          <p>Title Forward</p>
          <p>Real Estate News</p>
          <h4>Countries</h4>
          <p><img src={footerImg4} alt="footer" /> United States</p>
          <p><img src={footerImg5} alt="footer" /> Canada</p>
        </div>

        <div className="footer-flex4">
          <div className="legal">
            <p className="copyright">Copyright: ©2023 Coetus one. All rights reserved.</p>
            <p className="tos-eula">Updated January 2023: By searching, you agree to the <a >Terms of Use</a>, and &nbsp;<a >Privacy Policy</a>.</p>
            <p className="do-not-sell"><a >Do not sell or share my personal information</a>.</p>
            <p className="trademark">COETUS ONE and all COETUS  variants, TITLE FORWARD, WALK SCORE, and the R logos, are trademarks of Coetus one Corporation, registered or pending in the USPTO.</p>
            <p className="ca-dre">California DRE #01521930</p>
            <p className="ny-sop"><a  >NY Standard Operating Procedures</a></p>
            <p className="trec">TREC:&nbsp;<a >Info About Brokerage Services</a>,&nbsp;<a >Consumer Protection Notice</a></p>
            <p className="helpReading">If you are using a screen reader, or having trouble reading this website, please call Coetus one Customer Support for help at <a className="phoneNumber" >1-844-759-7732</a>.</p>
            <p className="fairHousingPolicyBold">
              <span className="eho">
                <a  >
                  <img className="icon ehoLogo" src={footerImg6} alt="footer"/>
                </a>
              </span>
              <span>COETUS ONE IS COMMITTED TO AND ABIDES BY THE FAIR HOUSING ACT AND EQUAL OPPORTUNITY ACT. READ COETUS'S <a >FAIR HOUSING POLICY</a> AND THE <a >NEW YORK STATE FAIR HOUSING NOTICE</a>.</span>
            </p>
          </div>

        </div>













      </div>





    </div>
  )
}

export default Footer;
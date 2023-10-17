import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footerTitle">
        <h3>Cinephile</h3>
      </div>
      <div className="footerWrapper">
        <div className="footerDiv">
          <ul>
            <li>About</li>
            <li>Vision</li>
            <li>Memberships</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="footerDiv">
          <ul>
            <li>Contact</li>
            <li>Help</li>
            <li>Contribute</li>
            <li>Terms & Privacy</li>
          </ul>
        </div>
        <div className="iconDiv">
          <h2>On Social</h2>
          <div>
            <a
              className="footerIcon"
              href="https://www.facebook.com/mubi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              className="footerIcon"
              href="https://www.instagram.com/mubi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              className="footerIcon"
              href="https://www.youtube.com/@mubi/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p> &#169; Keta Mophinadze | 2023</p>
      </div>
    </div>
  );
};

export default Footer;

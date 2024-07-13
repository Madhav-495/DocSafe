import { Link } from "react-router-dom";
import "../styles/index.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img className="logo" src="../images/logo.svg" alt="" />
        <div className="footwrap">
          <div className="foots">
            <div className="location">
              <img src="../images/icon-location.svg" alt="" />
              <p>
                Engage with our college admin, connect with the dean, and
                effortlessly request documents. Stay updated via social media.
              </p>
            </div>
          </div>
          <div className="foots">
            <div className="contact">
              <img src="../images/icon-phone.svg" alt="" />
              <p>+91-69696969669</p>
            </div>
            <div className="contact">
              <img src="../images/icon-email.svg" alt="" />
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className="foots">
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/document">Documents</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/about">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="foots">
            <ul>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
            </ul>
          </div>
          <div className="foots">
            <ul>
              <li>
                <Link to="/">
                  <img src="images/whitefb.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="images/whitein.png" alt="" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="images/whitegithub.png" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
// import "../assets/style.css";
const Sidebar = () => {
  return (
    <>
      <div className="side-bar">
        <div id="close-btn">
          <i className="fas fa-times" />
        </div>
        <div className="profile">
          <img src="assets/images/pic-1.jpg" className="image" alt="" />
          <h3 className="name">Yash Kumar</h3>
          <p className="role">student</p>
          <Link to="/profile" className="btn">
            view profile
          </Link>
        </div>
        <nav className="navbar">
          <Link to="/">
            <i className="fas fa-home" />
            <span>home</span>
          </Link>
          <Link to="/about">
            <i className="fas fa-question" />
            <span>about</span>
          </Link>
          <Link to="/document">
            <i className="fas fa-graduation-cap" />
            <span>Documents</span>
          </Link>
          <Link to="/teachers">
            <i className="fas fa-chalkboard-user" />
            <span>teachers</span>
          </Link>
          <Link to="/contactus">
            <i className="fas fa-headset" />
            <span>contact us</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

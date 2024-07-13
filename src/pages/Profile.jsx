import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <section className="user-profile">
        <h1 className="heading">your profile</h1>
        <div className="info">
          <div className="user">
            <img src="assets/images/pic-1.jpg" className="image" alt="" />
            <h3>Yash Kumar</h3>
            <p>student</p>
            <Link to="/update" className="inline-btn">
              update profile
            </Link>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="flex">
                <i className="fas fa-bookmark" />
                <div>
                  <span>25</span>
                  <p>Total Documents</p>
                </div>
              </div>
              <Link to="/alldocuments" className="inline-btn">
                view documents
              </Link>
            </div>
            <div className="box">
              <div className="flex">
                <i className="fas fa-heart" />
                <div>
                  <span>12</span>
                  <p>total viewed</p>
                </div>
              </div>
              <Link to="/alldocuments" className="inline-btn">
                total viewed
              </Link>
            </div>
            <div className="box">
              <div className="flex">
                <i className="fas fa-comment" />
                <div>
                  <span>4</span>
                  <p>resolved documents</p>
                </div>
              </div>
              <Link to="/alldocuments" className="inline-btn">
                view documents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

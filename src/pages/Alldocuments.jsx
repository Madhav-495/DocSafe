import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";

const Alldocuments = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <section className="courses">
        <h1 className="heading">our documents</h1>
        <div className="box-container">
          <div className="box">
            <div className="tutor">
              <img src="assets/images/pic-2.jpg" className="image" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img
                src="assets/images/Docusafe 2.webp"
                className="image"
                alt=""
              />
              <span>10 Documents</span>
            </div>
            <h3 className="title">Acadmeic Certificates</h3>
            <Link to="/document" className="inline-btn">
              View Documents
            </Link>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="assets/images/pic-3.jpg" className="image" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img
                src="assets/images/Docusafe 2.webp"
                className="image"
                alt=""
              />
              <span>10 Documents</span>
            </div>
            <h3 className="title">Acadmeic Transripts</h3>
            <Link to="/document" className="inline-btn">
              View Documents
            </Link>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="assets/images/pic-4.jpg" className="image" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img
                src="assets/images/Docusafe 2.webp"
                className="image"
                alt=""
              />
              <span>10 Documents</span>
            </div>
            <h3 className="title">Previous Acadmeic Record</h3>
            <Link to="/document" className="inline-btn">
              View Documents
            </Link>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="assets/images/pic-5.jpg" className="image" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img
                src="assets/images/Docusafe 2.webp"
                className="image"
                alt=""
              />
              <span>10 Documents</span>
            </div>
            <h3 className="title">Necessary Documents</h3>
            <Link to="/document" className="inline-btn">
              View Documents
            </Link>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="assets/images/pic-6.jpg" className="image" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img
                src="assets/images/Docusafe 2.webp"
                className="image"
                alt=""
              />
              <span>10 Documents</span>
            </div>
            <h3 className="title">Dean Certificated Records</h3>
            <Link to="/document" className="inline-btn">
              View Documents
            </Link>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="assets/images/pic-7.jpg" className="image" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img
                src="assets/images/Docusafe 2.webp"
                className="image"
                alt=""
              />
              <span>10 Documents</span>
            </div>
            <h3 className="title">Achivment Certificate</h3>
            <Link to="/document" className="inline-btn">
              View Documents
            </Link>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="assets/images/pic-8.jpg" className="image" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img
                src="assets/images/Docusafe 2.webp"
                className="image"
                alt=""
              />
              <span>10 Documents</span>
            </div>
            <h3 className="title">Acadmeic Transripts</h3>
            <Link to="/document" className="inline-btn">
              View Documents
            </Link>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="assets/images/pic-9.jpg" className="image" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img
                src="assets/images/Docusafe 2.webp"
                className="image"
                alt=""
              />
              <span>10 Documents</span>
            </div>
            <h3 className="title">Achivment Certificate</h3>
            <Link to="/document" className="inline-btn">
              View Documents
            </Link>
          </div>
          <div className="box">
            <div className="tutor">
              <img src="assets/images/pic-1.jpg" className="image" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img
                src="assets/images/Docusafe 2.webp"
                className="image"
                alt=""
              />
              <span>10 Documents</span>
            </div>
            <h3 className="title">Necessary Documents</h3>
            <Link to="/document" className="inline-btn">
              View Documents
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alldocuments;

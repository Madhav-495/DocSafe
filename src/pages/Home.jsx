import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
      <>
        <div>
          <header className="header">
            <section className="flex">
              <Link to="/" className="logo">
                DocuSafe
              </Link>
              <form action="search.html" method="post" className="search-form">
                <input
                  type="text"
                  name="search_box"
                  required
                  placeholder="search documents..."
                  maxLength={100}
                />
                <button type="submit" className="fas fa-search" />
              </form>
              <div className="icons">
                <div id="menu-btn" className="fas fa-bars" />
                <div id="search-btn" className="fas fa-search" />
                <div id="user-btn" className="fas fa-user" />
                <div id="toggle-btn" className="fas fa-sun" />
              </div>
              <div className="profile">
                <img src="assets/images/pic-1.jpg" className="image" alt="" />
                <h3 className="name">Yash Kumar</h3>
                <p className="role">student</p>
                <Link href="/profile" className="btn">
                  view profile
                </Link>
                <div className="flex-btn">
                  <Link to="/login" className="option-btn">
                    login
                  </Link>
                  <Link to="/register" className="option-btn">
                    register
                  </Link>
                </div>
              </div>
            </section>
          </header>
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
          <section className="home-grid">
            <h1 className="heading">quick options</h1>
            <div className="box-container">
              <div className="box">
                <h3 className="title">Documents</h3>
                <p className="likes">
                  total documents : <span>25</span>
                </p>
                <Link to="#" className="inline-btn">
                  total documents
                </Link>
                <p className="likes">
                  total viewed : <span>12</span>
                </p>
                <Link to="#" className="inline-btn">
                  total viewed
                </Link>
                <p className="likes">
                  resolved documents : <span>4</span>
                </p>
                <Link to="#" className="inline-btn">
                  view documents
                </Link>
              </div>
              {/* <div class="box">
   <h3 class="title">top categories</h3>
   <div class="flex">
      <a href="#"><i class="fas fa-code"></i><span>development</span></a>
      <a href="#"><i class="fas fa-chart-simple"></i><span>business</span></a>
      <a href="#"><i class="fas fa-pen"></i><span>design</span></a>
      <a href="#"><i class="fas fa-chart-line"></i><span>marketing</span></a>
      <a href="#"><i class="fas fa-music"></i><span>music</span></a>
      <a href="#"><i class="fas fa-camera"></i><span>photography</span></a>
      <a href="#"><i class="fas fa-cog"></i><span>software</span></a>
      <a href="#"><i class="fas fa-vial"></i><span>science</span></a>
   </div>
</div> */}
              <div className="box">
                <h3 className="title">popular documents</h3>
                <div className="flex">
                  <Link to="#">
                    <i className="fab fa-user-graduate" />
                    <span>Transript</span>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-user" />
                    <span>Bonafide</span>
                  </Link>
                  {/* <a href="#"><i class="fab fa-js"></i><span>Marks Form</span></a> */}
                  <Link to="#">
                    <i className="fab fa-star-half-alt" />
                    <span>Complain</span>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-user-graduate" />
                    <span>Scholarship</span>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-user-graduate" />
                    <span>Registration Slip</span>
                  </Link>
                </div>
              </div>
              <div className="box">
                <h3 className="title">Upload your document</h3>
                <p className="tutor">
                  We invite you to upload any documents that you would like to
                  have reviewed.
                </p>
                <Link to="/" className="inline-btn">
                  get started
                </Link>
              </div>
            </div>
          </section>
          <section className="courses">
            <h1 className="heading">Your Documents</h1>
            <div className="box-container">
              <div className="box">
                <div className="tutor">
                  <img src="assets/images/pic-2.jpg" alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="assets/images/Docusafe 2.webp" alt="" />
                  <span>10 document</span>
                </div>
                <h3 className="title">Acadmeic Certificates</h3>
                <Link to="/document" className="inline-btn">
                  view documents
                </Link>
              </div>
              <div className="box">
                <div className="tutor">
                  <img src="assets/images/pic-3.jpg" alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="assets/images/Docusafe 2.webp" alt="" />
                  <span>10 document</span>
                </div>
                <h3 className="title">Acadmeic Transripts</h3>
                <Link to="/document" className="inline-btn">
                  view documents
                </Link>
              </div>
              <div className="box">
                <div className="tutor">
                  <img src="assets/images/pic-4.jpg" alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="assets/images/Docusafe 2.webp" alt="" />
                  <span>10 document</span>
                </div>
                <h3 className="title">Previous Acadmeic Record</h3>
                <Link to="/document" className="inline-btn">
                  view documents
                </Link>
              </div>
              <div className="box">
                <div className="tutor">
                  <img src="assets/images/pic-5.jpg" alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="assets/images/Docusafe 2.webp  " alt="" />
                  <span>10 document</span>
                </div>
                <h3 className="title">Necessary Documents</h3>
                <Link to="/document" className="inline-btn">
                  view documents
                </Link>
              </div>
              <div className="box">
                <div className="tutor">
                  <img src="assets/images/pic-6.jpg" alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="assets/images/Docusafe 2.webp" alt="" />
                  <span>10 document</span>
                </div>
                <h3 className="title">Dean Certificated Records</h3>
                <Link to="/document" className="inline-btn">
                  view documents
                </Link>
              </div>
              <div className="box">
                <div className="tutor">
                  <img src="assets/images/pic-7.jpg" alt="" />
                  <div className="info">
                    <h3>john deo</h3>
                    <span>21-10-2022</span>
                  </div>
                </div>
                <div className="thumb">
                  <img src="assets/images/Docusafe 2.webp" alt="" />
                  <span>10 document</span>
                </div>
                <h3 className="title">Achivment Certificate</h3>
                <Link to="/document" className="inline-btn">
                  view documents
                </Link>
              </div>
            </div>
            <div className="more-btn">
              <Link to="/alldocuments" className="inline-option-btn">
                view all documents
              </Link>
            </div>
          </section>
        </div>
      </>
    );
}

export default Home;
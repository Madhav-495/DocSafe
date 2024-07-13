import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";

const About = () => {
    return (
      <>
        <Sidebar />
        <Header />
        <section className="about">
          <div className="row">
            <div className="image">
              <img src="assets/images/about-img.svg" className="image" alt="" />
            </div>
            <div className="content">
              <h3>why choose us?</h3>
              <p>
                Choose DocuSafe for effortless, secure, and decentralized
                document management. Enjoy instant access to all your essential
                academic records anytime, anywhere, while reducing
                administrative overhead and enhancing your productivity.
              </p>
              <Link to="/alldocuments" className="inline-btn">
                your documents
              </Link>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <i className="fas fa-graduation-cap" />
              <div>
                <h3>+10k</h3>
                <p>online documents</p>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-user-graduate" />
              <div>
                <h3>+40k</h3>
                <p>brilliant students</p>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-chalkboard-user" />
              <div>
                <h3>+2k</h3>
                <p>expert administrators</p>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-briefcase" />
              <div>
                <h3>100%</h3>
                <p>Document Secured</p>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews">
          <h1 className="heading">student's reviews</h1>
          <div className="box-container">
            <div className="box">
              <p>
                "DocuSafe transformed my college experience. Instant access to
                all my documents, from registrations to certificates, has made
                my academic journey stress-free and organized. A must-have for
                every student!"
              </p>
              <div className="student">
                <img src="assets/images/pic-2.jpg" className="image" alt="" />
                <div>
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <p>
                "With DocuSafe, managing my semester results and event
                certificates has never been easier. The decentralized approach
                ensures my documents are always secure and accessible. Highly
                recommend it!"
              </p>
              <div className="student">
                <img src="assets/images/pic-3.jpg" className="image" alt="" />
                <div>
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <p>
                "DocuSafe's seamless document management is a game-changer. I
                love how everything is centralized and just a click away. It's
                incredibly efficient and secure, perfect for busy students like
                me."
              </p>
              <div className="student">
                <img src="assets/images/pic-4.jpg" className="image" alt="" />
                <div>
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <p>
                "DocuSafe's intuitive interface and decentralized storage give
                me peace of mind. No more scrambling for lost papers. It’s
                reliable, efficient, and essential for modern students."
              </p>
              <div className="student">
                <img src="assets/images/pic-5.jpg" className="image" alt="" />
                <div>
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <p>
                "DocuSafe is a lifesaver! All my documents are well-organized
                and easily accessible. The added security of a decentralized
                system makes it the best choice for any student."
              </p>
              <div className="student">
                <img src="assets/images/pic-6.jpg" className="image" alt="" />
                <div>
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <p>
                "I’m impressed by DocuSafe's efficiency and security. It has
                drastically reduced my document management time and kept
                everything perfectly organized. A brilliant tool for academic
                success!"
              </p>
              <div className="student">
                <img src="assets/images/pic-7.jpg" className="image" alt="" />
                <div>
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default About;
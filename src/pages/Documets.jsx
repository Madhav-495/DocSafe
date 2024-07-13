import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";

const Documents = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <section className="playlist-details">
        <h1 className="heading">Document details</h1>
        <div className="row">
          <div className="column">
            <div className="thumb">
              <img
                src="assets/images/Docusafe 2.webp"
                className="image"
                alt=""
              />
              <span>10 Documents</span>
            </div>
          </div>
          <div className="column">
            <div className="tutor">
              <img src="assets/images/pic-2.jpg" className="image" alt="" />
              <div>
                <h3>Yash Kumar</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="details">
              <h3>Acadmeic Certificate</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                minus reiciendis, error sunt veritatis exercitationem deserunt
                velit doloribus itaque voluptate.
              </p>
              <Link to="/profile" className="inline-btn">
                view profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="playlist-videos">
        <h1 className="heading">View Documents</h1>
        <div className="box-container">
          <Link className="box" to="watch-video.html">
            <i className="fas fa-play" />
            <img src="assets/images/Docusafe 2.webp" className="image" alt="" />
            <h3>Acadmeic Certificate(part 01)</h3>
          </Link>
          <Link className="box" to="watch-video.html">
            <i className="fas fa-play" />
            <img src="assets/images/Docusafe 2.webp" className="image" alt="" />
            <h3>Acadmeic Certificate (part 02)</h3>
          </Link>
          <Link className="box" to="watch-video.html">
            <i className="fas fa-play" />
            <img src="assets/images/Docusafe 2.webp" className="image" alt="" />
            <h3>Acadmeic Certificate (part 03)</h3>
          </Link>
          <Link className="box" to="watch-video.html">
            <i className="fas fa-play" />
            <img src="assets/images/Docusafe 2.webp" className="image" alt="" />
            <h3>Acadmeic Certificate (part 04)</h3>
          </Link>
          <Link className="box" to="watch-video.html">
            <i className="fas fa-play" />
            <img src="assets/images/Docusafe 2.webp" className="image" alt="" />
            <h3>Acadmeic Certificate (part 05)</h3>
          </Link>
          <Link className="box" to="watch-video.html">
            <i className="fas fa-play" />
            <img src="assets/images/Docusafe 2.webp" className="image" alt="" />
            <h3>Acadmeic Certificate (part 06)</h3>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Documents;

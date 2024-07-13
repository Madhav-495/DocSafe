import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <section id="section4">
      <div className="wrapper2">
        <div className="content2">
          <img
            className="ilustration"
            src="../images/illustration-stay-productive.png"
            alt=""
          />
        </div>
        <div className="content3">
          <h1>Seamless productivity, anytime, anywhere</h1>
          <p>
            Elevate productivity with Docusafe. Securely access files from
            anywhere, storing personal and work-related documents effortlessly.
          </p>
          <p>
            Effortlessly collaborate with secure file sharing, enabling
            real-time teamwork without email attachments. Work smarter, anywhere
            with Docusafe.
          </p>
          <div className="link">
            <Link to="/">
              See how this works
              <img src="../images/icon-arrow.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

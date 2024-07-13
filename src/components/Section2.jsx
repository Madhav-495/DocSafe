import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <section id="section2">
      <div className="wrapper">
        <div className="content">
          <h1>
            Seamless academic empowerment: Connect, request, and excel
            effortlessly.
          </h1>
          <p>
            Empowering Students: Instantly connect with college admins, request
            documents, seek professor assistance. Your educational journey
            starts here.
          </p>
        </div>
        <Link to="/home">Get Started</Link>
      </div>
    </section>
  );
};

export default Section2;

import Credits from "./Credits";
import Footer from "./Footer";
import Navbar from "./Navbar1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

const Section1 = () =>{
  return (
    <>
      <Navbar />
      <section id="section1">
        <div className="wrapper">
          <div className="image">
            <img
              className="ilustration"
              src="../images/illustration-intro.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
      <Credits />
    </>
  );
}

export default Section1;
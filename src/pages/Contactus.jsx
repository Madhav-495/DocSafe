import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";

const Contactus = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <section className="contact">
        <div className="row">
          <div className="image">
            <img src="assets/images/contact-img.svg" className="image" alt="" />
          </div>
          <form action method="post">
            <h3>get in touch</h3>
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              required
              maxLength={50}
              className="box"
            />
            <input
              type="email"
              placeholder="enter your email"
              name="email"
              required
              maxLength={50}
              className="box"
            />
            <input
              type="number"
              placeholder="enter your number"
              name="number"
              required
              maxLength={50}
              className="box"
            />
            <textarea
              name="msg"
              className="box"
              placeholder="enter your message"
              required
              maxLength={1000}
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <input
              type="submit"
              defaultValue="send message"
              className="inline-btn"
              name="submit"
            />
          </form>
        </div>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-phone" />
            <h3>phone number</h3>
            <Link href="tel:1234567890">123-456-7890</Link>
            <Link href="tel:1112223333">111-222-3333</Link>
          </div>
          <div className="box">
            <i className="fas fa-envelope" />
            <h3>email address</h3>
            <Link href="mailto:yashkumar@gmail.com">yashkumar@gmail.come</Link>
            <Link href="mailto:madhavagarwal@gmail.com">
              madhavagarwal@gmail.come
            </Link>
          </div>
          <div className="box">
            <i className="fas fa-map-marker-alt" />
            <h3>college address</h3>
            <Link href="#"> MNNIT Allahabad, Prayagraj, Uttar Pradesh, 211004</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;

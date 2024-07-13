import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;

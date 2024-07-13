import { Link } from "react-router-dom";
const Navbar = () =>  {
  return (
    <nav>
      <img className="logo" src="images/logo.svg" alt="" />
      <ul>
        <li>
          <Link to="#section3">Features</Link>
        </li>
        <li>
          <Link to="#section5">Team</Link>
        </li>
        <li>
          <Link to="/register">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
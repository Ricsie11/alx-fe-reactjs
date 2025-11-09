import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
      </nav>
    </>
  );
}

export default Navbar;

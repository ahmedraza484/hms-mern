import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className={menu ? "navbar-list active" : "navbar-list"}>
        <li className="first-link">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/appointment" onClick={closeMenu}>
            Appointment
          </Link>
        </li>
        <li>
          <Link to="/about-us" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li className="login-item">
          <button type="button" className="btn" onClick={closeMenu}>
            LOGIN
          </button>
        </li>
      </ul>

      <button type="button" className="menu-btn" onClick={() => setMenu(!menu)}>
        <IoMenu />
      </button>
    </nav>
  );
};

export default Navbar;

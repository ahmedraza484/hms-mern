import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };
  const handleLogout = async () => {
    try {
      const res = await axios.get(
        "https://hms-mern-cl5u.vercel.app/api/v1/user/logout",
        {
          withCredentials: true,
        },
      );
      toast.success(res.data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
          {isAuthenticated ? (
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn" onClick={goToLogin}>
              Login
            </button>
          )}
        </li>
      </ul>

      <button type="button" className="menu-btn" onClick={() => setMenu(!menu)}>
        <IoMenu />
      </button>
    </nav>
  );
};

export default Navbar;

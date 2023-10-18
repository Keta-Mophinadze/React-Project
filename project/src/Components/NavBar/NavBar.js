import { NavLink } from "react-router-dom";
import Path from "../../Constants/Path";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { useAppContext } from "../../Context/Provider";

const NavBar = () => {
  const navRef = useRef();
  const {
    state: { isUserLoggedIn },
  } = useAppContext();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="headerWrapper">
        <h2>Cinephile</h2>
        <nav ref={navRef} className="nav">
          <NavLink className={"navLink"} to={Path.Home}>
            Home
          </NavLink>
          <NavLink className={"navLink"} to={Path.Review}>
            Review
          </NavLink>
          <NavLink className={"navLink"} to={Path.Help_Center}>
            Help
          </NavLink>
          {!isUserLoggedIn && (
            <NavLink className={"navLink"} to={Path.Sign_Up}>
              Sign Up
            </NavLink>
          )}

          {isUserLoggedIn && (
            <NavLink className={"navLink"} to={Path.Sign_Out}>
              Sign Out
            </NavLink>
          )}
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default NavBar;

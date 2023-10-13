import { NavLink } from "react-router-dom";
import Path from "../../Constants/Path";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="headerWrapper">
      <h2>Cinephile</h2>
      <nav className="nav">
        <NavLink className={"navLink"} to={Path.Home}>
          Home
        </NavLink>
        <NavLink className={"navLink"} to={Path.Sign_Up}>
          Sign Up
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;

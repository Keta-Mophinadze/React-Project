import { NavLink } from "react-router-dom";
import Path from "../../Constants/Path";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useAppContext } from "../../Context/Provider";

const NavBar = () => {
  const {
    state: { isUserLoggedIn },
  } = useAppContext();

  const [navVisible, setNavVisible] = useState(false);
  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const closeNav = () => {
    setNavVisible(false);
  };

  return (
    <header>
      <div className="flex justify-between items-center p-8 text-secondary">
        <NavLink
          className="text-xl border-b-2 border-accent tracking-wider"
          to={Path.Home}
        >
          Cinephile
        </NavLink>

        <nav
          className={`${
            navVisible
              ? "flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-primary z-20 transition duration-500 ease-in-out"
              : "hidden"
          } md:flex max-w-3xl w-full justify-end items-center gap-x-8 text-lg tracking-wider`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent hover:text-accent" : "hover:text-accent"
            }
            to={Path.Home}
            onClick={closeNav}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent hover:text-accent" : "hover:text-accent"
            }
            to={Path.Review}
            onClick={closeNav}
          >
            Review
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent hover:text-accent" : "hover:text-accent"
            }
            to={Path.Help_Center}
            onClick={closeNav}
          >
            Help
          </NavLink>
          {!isUserLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accent hover:text-accent" : "hover:text-accent"
              }
              to={Path.Sign_Up}
            >
              Sign Up
            </NavLink>
          )}
          {isUserLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accent hover:text-accent" : "hover:text-accent"
              }
              to={Path.Sign_Out}
              onClick={closeNav}
            >
              Sign Out
            </NavLink>
          )}
        </nav>
        <button className="md:hidden text-lg z-30" onClick={toggleNav}>
          {navVisible ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default NavBar;

import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import YouTube from "../../assets/YouTube.svg";
// import { Icon } from "@iconify/react/dist/iconify.js";

const Nav = ({ isClosed, toggleMode }) => {
  return (
    <nav className={`sidebar ${isClosed ? "close" : ""}`}>
      <div className="nav-brand">
        <img className="avatar" src={YouTube} alt="YouTube - ?" />
        <span className="brand-name">YouTube</span>
      </div>
      <div className="nav-menus">
        <ul className="nav-menu">
          <li>
            <NavLink to={"/"}>
              {/* <Icon className="icons" icon="uil:home-alt" /> */}
              <i className="uil uil-estate"></i>
              <span className="link-name">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <i className="uil uil-files-landscapes"></i>
              <span className="link-name">Shorts</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <i className="uil uil-chart"></i>
              <span className="link-name">Subscriptions</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <i className="uil uil-thumbs-up"></i>
              <span className="link-name">Like</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <i className="uil uil-comments"></i>
              <span className="link-name">Comment</span>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <i className="uil uil-share"></i>
              <span className="link-name">Share</span>
            </NavLink>
          </li>

          {/* <li>
            <a href="#">
            </a>
          </li> 
          <li>
            <a href="#">
              <i className="uil uil-files-landscapes"></i>
              <span className="link-name">Content</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="uil uil-chart"></i>
              <span className="link-name">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="uil uil-thumbs-up"></i>
              <span className="link-name">Like</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="uil uil-comments"></i>
              <span className="link-name">Comment</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="uil uil-share"></i>
              <span className="link-name">Share</span>
            </a>
          </li>*/}
        </ul>
        <ul className="logout-mode">
          <li>
            <NavLink>
              <i className="uil uil-signout"></i>
              <span className="link-name">Logout</span>
            </NavLink>
          </li>
          <li className="mode">
            <NavLink className="mode-link">
              <i className="uil uil-moon"></i>
              <span className="link-name">Dark Mode</span>
            </NavLink>
            <div className="mode-toggle" id="btnMode" onClick={toggleMode}>
              <span className="switch"></span>
              {/* <!-- <input className="switch" type="checkbox" /> --> */}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
Nav.propTypes = {
  isClosed: PropTypes.bool,
  toggleMode: PropTypes.func,
};
export default Nav;

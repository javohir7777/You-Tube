import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
// import "./Section.css";

const Section = ({ toggleSidebar }) => {
  return (
    <section>
      <div className="top">
        <i className="uil uil-bars sidebar-toggle" onClick={toggleSidebar}></i>
        <form className="search-box">
          <i className="uil uil-search"></i>
          <input type="text" placeholder="Search here..." />
        </form>
        <img
          className="avatar"
          src="https://admin-panel-toggle-dark-light.netlify.app/images/profile.jpg"
          alt=""
        />
      </div>
      <div className="dash-content">
        <Outlet />
      </div>
    </section>
  );
};

Section.propTypes = {
  toggleSidebar: PropTypes.func,
};
export default Section;

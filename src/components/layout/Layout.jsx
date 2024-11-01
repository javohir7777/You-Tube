import { Fragment, useEffect, useState } from "react";
import Nav from "../nav/Nav";
import Section from "../section/Section";

const Layout = () => {
  const [isClosed, setIsClosed] = useState(window.innerWidth <= 1000);
  const [isDarkMode, setIsDarkMode] = useState(
    ()=> JSON.parse(localStorage.getItem("isDarkMode")) || false
  );

  const toggleSidebar = () => {
    setIsClosed((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setIsClosed(true);
      } else {
        setIsClosed(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    // body elementiga "dark" klassini qo'shish yoki olib tashlash
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    // Clean up: bu effekt ishlatishdan oldin `body`ni tozalash
    
      localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    
  }, [isDarkMode]);
  return <Fragment>
    <Nav isClosed={isClosed} toggleMode={toggleMode}/>
    <Section toggleSidebar={toggleSidebar}/>
  </Fragment>;
};

export default Layout;

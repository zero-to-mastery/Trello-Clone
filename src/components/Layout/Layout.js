import React from "react";
import Navbar from "./Navbar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export default Layout;

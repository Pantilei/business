import React from "react";
import logo from "../media/logoFooter.JPG";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h4>Advices</h4>
      </div>
      <div>
        <h4>Products</h4>
      </div>
      <div>
        <h4>Contacts</h4>
      </div>
      <div>
        <h4>Business</h4>
      </div>
    </div>
  );
};

export default Footer;

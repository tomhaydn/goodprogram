import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import SocialBlock from "../../components/SocialBlock/SocialBlock";

import dynamic from "next/dynamic";
dynamic(() => import("./Footer.scss"));

const Footer = () => {
  return (
    <footer className="footer grid">
      <div className="grid__col--outer" />
      <div className="grid__col--inner">
        <nav className="footer__navigation">
          <span>Copyright <AiOutlineCopyright /> 2017 - {new Date().getFullYear()} Good Program | ABN: 75 133 120 616</span>
          <SocialBlock />
        </nav>
      </div>
      <div className="grid__col--outer" />
    </footer>
  );
};

export default Footer;

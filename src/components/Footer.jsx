import React from "react";
import { FaLinkedin, FaGlobeAsia, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdPrivacyTip } from 'react-icons/md'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="footer-content flex justify-center items-center">
        <Link to="https://go.qwiklabs.com/arcade" className="social-link">
          <FaGlobeAsia className="text-white hover:text-green-500 ease-in-out duration-150" />
        </Link>
        <Link to="https://twitter.com/qwiklabs" className="social-link">
          <FaTwitter className="text-white hover:text-cyan-500 ease-in-out duration-150" />
        </Link>
        <Link to="https://www.linkedin.com/company/qwiklabs-inc-/" className="social-link">
          <FaLinkedin className="text-white hover:text-blue-500 ease-in-out duration-150" />
        </Link>
        <Link to="https://www.youtube.com/@qwiklabs1" className="social-link">
          <FaYoutube className="text-white hover:text-red-500 ease-in-out duration-150" />
        </Link>
        <Link to="/privacy" className="privacy-link">
          <MdPrivacyTip className="text-white hover:text-yellow-400 ease-in-out duration-150" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

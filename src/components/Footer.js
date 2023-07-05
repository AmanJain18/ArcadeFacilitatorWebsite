import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* Add your social media icons and links here */}
        <a href="https://example.com">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://example.com">
          <i className="fab fa-facebook"></i>
        </a>
        {/* Add your "Privacy Policy" link */}
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;

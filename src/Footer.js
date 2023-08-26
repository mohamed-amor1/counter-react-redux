import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Counter App</p>
        <p>Created by Mohamed Amor</p>
      </div>
    </footer>
  );
}

export default Footer;

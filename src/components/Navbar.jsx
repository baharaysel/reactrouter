import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <h1>Homepage/Brand name/Logo</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </div>
  );
}
export default Navbar;

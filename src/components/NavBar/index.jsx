"use client";
import { useState } from "react";
import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="logo">Vijay Rath</div>
      {/* Desktop Menu */}
      <nav className="nav-bar">
        <ul className="nav-bar-list">
          <li className="nav-list-items">Home</li>
          <li className="nav-list-items">About</li>
          <li className="nav-list-items">Service</li>
          <li className="nav-list-items">Contact</li>
          <li className="nav-list-items">Login</li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <div className="mobile-menu">
        <GiHamburgerMenu
          className="hamburger-icon"
          onClick={toggleMobileMenu}
        />
        {isOpen && (
          <div className="mobile-nav">
            <RxCross1
            className="cancle-icon"
            onClick={toggleMobileMenu}/>
            <nav className="mobile-nav-bar">
              <ul className="moblie-nav-list">
                <li className="mobile-nav-items">Home</li>
                <li className="mobile-nav-items">About</li>
                <li className="mobile-nav-items">Service</li>
                <li className="mobile-nav-items">Contact</li>
                <li className="mobile-nav-items">Login</li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

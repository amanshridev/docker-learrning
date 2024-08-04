"use client";
import { useState } from "react";
import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { navbar } from "@/data";

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
          {navbar.map((item) => (
            <li className="nav-list-items" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <button className="login-button">Login</button>
      {/* Mobile Menu */}
      <div className="mobile-menu">
        <GiHamburgerMenu
          className="hamburger-icon"
          onClick={toggleMobileMenu}
        />
        {isOpen && (
          <div className="mobile-nav">
            <RxCross1 className="cancle-icon" onClick={toggleMobileMenu} />
            <nav className="mobile-nav-bar">
              <ul className="moblie-nav-list">
                {navbar.map((item) => (
                  <li className="mobile-nav-items" key={item.id}>
                    {item.title}
                  </li>
                ))}
                <button className="login-button">Login</button>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

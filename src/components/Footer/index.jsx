
"use client";

import React from 'react';
import "./index.css";
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaFacebook, IoIosMail } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-upper-section'>
                <div className="footer-section">
                    <h3>Experty</h3>
                    <p>
                    Vijay Rath is dedicated to empowering Job Seekers in their job search journey by providing you connections of various companies.
                    </p>
                    <div className="social-icons">
                        <FaTwitter />
                        <FaInstagram />
                        <FaFacebook />
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Information</h3>
                    <p>
                    <Link href="#">About</Link>
                    </p>
                    <p>
                    <Link href="#">Contact</Link>
                    </p>
                    <p>
                    <Link href="#">Services</Link>
                    </p>
                    {/* <p>
                    <Link href="mailto:rathvijay63@gmail.com">rathvijay63@gmail.com</Link>
                    </p> */}
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2023 Brandname. All Rights Reserved.</p>
                <div className="footer-links">
                    <Link href="#">Who We Are</Link>
                    <Link href="#">Our Work</Link>
                    <Link href="#">Our Partners</Link>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;

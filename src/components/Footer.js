import React from "react";
import smallLogo from "../images/footer-logo.png"

const Footer = () => {
   return(
   <footer>
    <section>
        <div className="company-logo">
            <img src={smallLogo} alt="Small Litle Lemon Logo"></img>
        </div>
        <div>
            <h3>Navigation</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </div>
        <div>
            <h3>Contact Us</h3>
            <ul>
                <li>123 Parkway Dr. Chicago, IL</li>
                <li>777-555-4567</li>
                <li>hello@littlelemon.com</li>
            </ul>
        </div>
        <div>
            <h3>Socials</h3>
            <ul>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">LinkedIn</a></li>
            </ul>
        </div>
    </section>
    </footer>
   );
}
export default Footer
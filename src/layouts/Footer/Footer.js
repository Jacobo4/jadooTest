import React from "react";
import './Footer.scss';

//images
import footerDecor from "./../../assets/images/global/decors/ellipse-2.png";
//logos
import googleplay1 from "./../../assets/images/global/partners/googleplay-1.svg";
import googleplay2 from "./../../assets/images/global/partners/googleplay-2.svg";
import appstore1 from "./../../assets/images/global/partners/appstore-1.svg";
import appstore2 from "./../../assets/images/global/partners/appstore-2.svg";

function Header() {

    return (
        <footer className={"Footer"}>
            <img src={footerDecor} className="Footer__decor"/>
            <div className="Footer-content">
                <div>
                    <h1>Jadoo.</h1>
                    <p>Book your trip in minute, get full Control for much longer.
                    </p>
                </div>
                <div>
                    <h6 className="Footer__list-title">Company</h6>
                    <ul className="Footer__list-items">
                        <li className="Footer__list-item"><a href="/">About</a></li>
                        <li className="Footer__list-item"><a href="/">Careers</a></li>
                        <li className="Footer__list-item"><a href="/">Mobile</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="Footer__list-title">Contact</h6>
                    <ul className="Footer__list-items">
                        <li className="Footer__list-item"><a href="/">Help/FAQ</a></li>
                        <li className="Footer__list-item"><a href="/">Press</a></li>
                        <li className="Footer__list-item"><a href="/">Affilates</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="Footer__list-title">More</h6>
                    <ul className="Footer__list-items">
                        <li className="Footer__list-item"><a href="/">Airlinefees</a></li>
                        <li className="Footer__list-item"><a href="/">Airline</a></li>
                        <li className="Footer__list-item"><a href="/">Low fare tips</a></li>
                    </ul>
                </div>
                <div>
                    <div className="Footer__socialMedia">
                        <button className="icon-facebook Footer__socialMedia-item"/>
                        <button className="icon-instagram Footer__socialMedia-item"/>
                        <button className="icon-twitter Footer__socialMedia-item"/>
                    </div>
                    <div className="Footer__stores">
                        <span>Discover our app</span>
                        <button className="Footer__store">
                            <img src={googleplay1} alt=""/>
                            <img src={googleplay2} alt=""/>
                        </button>
                        <button className="Footer__store">
                            <img src={appstore1} alt=""/>
                            <img src={appstore2} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="Footer-rights">
                <p>All rights reserved@jadoo.co</p>
            </div>
        </footer>
    );
}

export default Header;

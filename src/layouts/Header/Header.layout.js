import React, {useState} from "react";
import {Link as ScrollLink } from 'react-scroll';

import {
    Link
} from "react-router-dom";

import './Header.scss';
import logo from "./../../assets/images/global/brand/logo.svg";

function Header() {

    const initialMenuDisplay= false;
    const initialDropdownDisplay= false;
    const [menuDisplay, setMenuDisplay] = useState(initialMenuDisplay);
    const [dropdownDisplay, setDropdownDisplay] = useState(initialDropdownDisplay);

    return (
        <header className={"Header"}>
            <Link to="/">
                <figure>
                    <img src={logo} alt="Jadoo logo"/>
                </figure>
            </Link>
            <nav className={`Header-nav Header-nav--${menuDisplay ? 'show':'hidden'}`}>
                <button onClick={() => setMenuDisplay(!menuDisplay)} className={"icon-menu Header-nav__burgerBtn"}/>
                <ul className={"Header-nav__options"}>
                    <li className={"Header-nav__option"}><ScrollLink to={"services"} spy={true} smooth={true} >Services</ScrollLink></li>
                    <li className={"Header-nav__option"}><ScrollLink to={"destinations"} spy={true} smooth={true} >Destinations</ScrollLink></li>
                    <li className={"Header-nav__option"}><ScrollLink to={"bookings"} spy={true} smooth={true} >Bookings</ScrollLink></li>
                    <li className={"Header-nav__option"}><ScrollLink to={"testimonials"} spy={true} smooth={true} >Testimonials </ScrollLink></li>
                    <li className={"Header-nav__option"}><button >Login</button></li>
                    <li className={"Header-nav__option Header-nav__option-signup"}><button >Sign up</button> </li>
                    <button onClick={() => setDropdownDisplay(!dropdownDisplay)}
                        className={`Header-lanDropdown Header-lanDropdown--${dropdownDisplay ? 'show':'hidden'}`}>
                        EN <i className={"icon-arrow"}/>
                        <ul className={"Header-lanDropdown__options"}>
                            <li className="Header-lanDropdown__option">EN</li>
                            <li className="Header-lanDropdown__option">ES</li>
                            <li className="Header-lanDropdown__option">RU</li>
                        </ul>
                    </button>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

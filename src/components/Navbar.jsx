import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = ()=> {
    const [navOpen, setNavOpen] = useState(false);

    const handleAccordion = ()=> {
        setNavOpen(!navOpen)
    }
    
    return(
        <header>
            <div className="navbar">
                <a className="logo" href="#hero" >
                    <div className="square1"></div>
                    <div className="square2"></div>
                </a>
                {
                    !navOpen? <RxHamburgerMenu className="menu-icon" onClick={handleAccordion}/>
                    : <IoMdClose className="close-icon" onClick={handleAccordion}/>
                }
                <div className="nav-info">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#tech-stack">Tech-Stack</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
                </div>
            </div>
            <div className={`accordion ${!navOpen ? "open" : "close"}`}>
            <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#tech-stack">Tech-Stack</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
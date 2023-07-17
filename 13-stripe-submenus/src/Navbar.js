import React from "react";
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from "./context";

const Navbar = () => {
    const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();
v
    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();       //The getBoundingClientRect() method returns the size of an element and its position relative to the viewport. The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
        const center = (tempBtn.left + tempBtn.right) / 2;  //this will give me the center of the btn where i need to move my submenu
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, {center, bottom});
    }

    const handleSubmenu = (e) => {
        if(!e.target.classList.contains('link-btn')) {
            closeSubmenu();
        }
    }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} className="nav-logo" alt="stripe" />
                <button className="btn toggle-btn" onClick={openSidebar}>
                    <FaBars/>
                </button>
            </div>
            <ul className="nav-links">
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
                </li>
            </ul>
            <button className="btn single-btn">Sign in</button>
        </div>
    </nav>
  );
};

export default Navbar;

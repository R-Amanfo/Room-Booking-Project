import React from 'react';
import { Outlet,Link } from "react-router-dom";
import styles from '../components_dark.module.css';

const NavBar = () => {
    //CODE HERE! 👇🏻


    //3 items menu aligned to right linked to the following pages: booking, manage bookings and contact
    //Clicking on the logo leads to home
    return (
        <div style={"navBarContainer"}>
            <div style={"logoContainer"}>
            <img src="https://naimuri.com/dist/images/svg/logo.svg" alt="Naimuri logo" />
            </div>
    
            <nav style={"navMenuContainer"}>
                <ul style={styles.body}>
                    <li>
                        <Link to="/managebookings">Manage Bookings</Link>
                    </li>
                    <li>
                        <Link to="/booking">Book a Room</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact/help</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default NavBar;
import React, { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavOn, toggleNavOff } from '../../redux/navToggleSlice';
import logo from './images/wisdom-logo.png';

var ScrollLink = Scroll.Link;
var scrollSpy = Scroll.scrollSpy;


const NavBar = () => {

    useEffect(() => {
        scrollSpy.update();
    })
    const navItems = [
        ['Home', 'header_page'],
        ['About', 'about_page'],
        ['Courses', 'courses_page'],
        ['Activities', 'activities_page'],
        ['Contact', 'contact_page']
    ];
    const [hamState, setHamState] = useState(true);
    const toggle = useSelector((state) => state.navToggler.toggle);
    const dispatch = useDispatch();

    function navOn() {
        dispatch(toggleNavOn());
        setHamState(false);
    }

    function navOff() {
        dispatch(toggleNavOff());
        setHamState(true);
    }

    return (
        <nav className={styles.nav_wrapper}>
            <div className={`${styles.nav_bar} ${styles.container}`}>
                {/* // responsive logos */}
                <div className={styles.wisdom_logo_sm}>
                    <Link to="/">
                        <div className={styles.img_wrapper}>
                            <img src={logo} alt="wisdom logo"/>
                        </div>
                    </Link>
                </div>
                <div className={styles.wisdom_logo_lg}>
                    <Link to="/">
                        <div className={styles.img_wrapper}>
                            <img src={logo} alt="wisdom logo"/>
                        </div>
                    </Link>
                </div>
                {/* // Nav items for large screens */}
                <ul className={`${styles.nav_items} ${styles.hide_on_mobile}`}>
                    {
                        navItems.map(item => {
                            return (
                                <li key={navItems.indexOf(item)}
                                    className={styles.nav_item}
                                >
                                    <ScrollLink 
                                        className={styles.navId}
                                        activeClass={styles.nav_active}
                                        to={item[1]} 
                                        spy={true}
                                        duration={1200} 
                                        smooth={'easeInOutCubic'}
                                    >
                                        <span>
                                            {item[0]}
                                        </span>
                                    </ScrollLink>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* // Hamburger */}
                <div onClick={() => {
                    if (hamState === true) {
                        navOn();
                    } else {
                        navOff();
                    }
                }} className={hamState === false ? `${styles.nav_hum} ${styles.hide_on_desktop} ${styles.active}` : `${styles.nav_hum} ${styles.hide_on_desktop}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* // Nav items for mobiles */}
                <ul className={toggle === true ? `${styles.nav_mobile} ${styles.hide_on_desktop} ${styles.active}` : `${styles.nav_mobile} ${styles.hide_on_desktop}`}>
                    {
                        navItems.map(item => {
                            return (

                                <li
                                    key={navItems.indexOf(item)}
                                    className={styles.nav_item}
                                >
                                    <ScrollLink
                                        className={styles.navId}
                                        activeClass={styles.nav_active}
                                        spy={true}
                                        to={item[1]}
                                        duration={1200}
                                        smooth={'easeInOutCubic'}
                                        offset={0}
                                        onClick={() => {
                                            navOff();
                                        }}
                                    >
                                        <span>
                                            {item[0]}
                                        </span>
                                        
                                    </ScrollLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;
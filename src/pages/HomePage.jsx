import React from 'react';
import * as Scroll from 'react-scroll';
import { NavBar, HomeHeader, HomeAbout, HomeCourses, HomeActivities, HomeContact } from '../components';

var Element = Scroll.Element;

const HomePage = () => {
    return (
        <>
            <NavBar />
            <Element name="header_page">
                <HomeHeader />
            </Element>
            <Element name="about_page">
                <HomeAbout />
            </Element>
            <Element name="courses_page">
                <HomeCourses />
            </Element>
            <Element name="activities_page">
                <HomeActivities />
            </Element>
            <Element name="contact_page">
                <HomeContact/>
            </Element>
        </>
    );
}

export default HomePage;

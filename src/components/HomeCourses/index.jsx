import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { client, urlFor } from '../../client';
import styles from './HomeCourses.module.scss';
import { nanoid } from '@reduxjs/toolkit';
// import { courseData } from '../../data/course-data';

const CourseCard = (props) => {
    return (
        <div className={`wow fadeIn ${styles.card_wrapper}`}>
            <div className={styles.card_img}>
                <span className={`${styles.bubble} ${styles.up}`}></span>
                <span className={styles.card_avatar}>
                    <img src={props.avatar} alt="course-avatar" width={150} height={100}/>
                </span>
                <span className={`${styles.bubble} ${styles.down}`}></span>
            </div>
            <div className={styles.card_txt}>
                <h1 className={`${styles.card_title} ${styles.eng_txt}`}>{props.title}</h1>
                <p className={styles.para_txt}>
                    {props.description}
                </p>

                <div className={styles.card_links}>
                    <button className={styles.detail_btn}>
                        အသေးစိတ် သိရှိရန်။
                    </button>

                    <div className={`${styles.d_none} ${styles.card_social}`}>
                        {/* <a href={props.telegram}>
                            <img src={Telegram} alt="telegram-icon"/>
                        </a>
                        
                        <a href={props.messenger}>
                            <img src={Messenger} alt="messenger-icon"/>
                        </a> */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const query = '*[_type == "courses"] ';

        client.fetch(query).then((data) => {
            setCourses(data);
        });
    },[])
    // const dataForCourse = courseData.slice(0, 6);

    const courseItems = courses.map(course => {
        const { title, description, avatar } = course;
        return (
            <CourseCard
                // key={course.id}
                // img={course.img}
                // {...course}
                key= {nanoid()}
                title = {title}
                description = {description}
                avatar = {urlFor(avatar)}

            />
        )
    });

    return (
        <>
            <div className={styles.courses}></div>
            <section className={styles.course_page_wrapper}>
                <div className={`${styles.container} ${styles.course_page}`}>
                    <h1 className={`${styles.title_txt} ${styles.in_dark} ${styles.under_space}`}>
                        သင်တန်းများ
                    </h1>
                    <div className={styles.course_grid}>
                        { courseItems }
                    </div>
                    {/* <Link to="/courses">
                        <button className="course-other-btn">
                            အခြား သင်တန်းများ
                        </button>
                    </Link> */}
                </div>
            </section>
        </>
    )
}

export default CoursesPage;
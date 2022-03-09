import React, { useState, useEffect } from 'react';
import styles from './HomeActivities.module.scss';
import { client, urlFor } from '../../client';
import { nanoid } from '@reduxjs/toolkit';

import Slider from 'react-slick';

// const SlideObj = [
//     {
//         "title" : "Hobby Creations",
//         "img" : "https://t-n9.github.io/wisdom-school/static/media/activity-2.5509afa6.jpg",
//         "link": "www.google.com"
//     },
//     {
//         "title" : "Hobby Creations",
//         "img" : "https://t-n9.github.io/wisdom-school/static/media/activity-5.80aee11a.jpg",
//         "link": "www.google.com"
//     },
//     {
//         "title" : "Hobby Creations",
//         "img" : "https://t-n9.github.io/wisdom-school/static/media/activity-4.2c318d5d.jpg",
//         "link": "www.google.com"
//     },
//     {
//         "title" : "Hobby Creations",
//         "img" : "https://t-n9.github.io/wisdom-school/static/media/activity-3.a8108e49.jpg",
//         "link": "www.google.com"
//     },
//     {
//         "title" : "Hobby Creations",
//         "img" : "https://t-n9.github.io/wisdom-school/static/media/activity-1.7ff3f02f.jpg",
//         "link": "www.google.com"
//     },
//     {
//         "title" : "Hobby Creations",
//         "img" : "https://t-n9.github.io/wisdom-school/static/media/activity-5.80aee11a.jpg",
//         "link": "www.google.com"
//     }
// ]

const SwiperItem = (props) => {
    return (
        // <SwiperSlide>
            <div className={styles.slideItem}>
                <a href={props.link}>
                    <div className={styles.slide_info}>
                        <img src={props.img} alt="" />
                        <h1 style={{position: "absolute"}}>{props.title}</h1>
                    </div>
                </a>
            </div>
        // </SwiperSlide>
    )
}

const ActivityPage = () => {

    const [ activities, setActivities ] = useState([]);

    useEffect(() => {
        const query = '*[_type == "activities"] ';

        client.fetch(query).then((data) => {
            setActivities(data);
        });
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive : [
            {
                breakpoint: 1024,
                settings : {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings : {
                    slidesToShow: 1,
                }
            }
            
        ]
      };

    const slideItems = activities.map(item => {
        const { title, image, link } = item;
        return (
            <SwiperItem
                key={nanoid}
                img={urlFor(image)}
                title={title}
                link={link}
            />
        ) 
    });

    return (
        <div className={styles.activities}>
            <section className={styles.activity_page_wrapper}>
                <div className={`${styles.container} ${styles.activity_page}`}>
                    <h1 className={`${styles.title_txt} ${styles.under_space}`}>
                        လှုပ်ရှားမှုများ
                    </h1>
                    <Slider {...settings}>
                    { slideItems }
                    </Slider>
                </div>
            </section>
        </div>
    )
}

export default ActivityPage;
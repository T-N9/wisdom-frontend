import React from 'react';
import styles from './HomeContact.module.scss';

const ContactPage = () => {
    return (
        <div className={styles.contact}>
            <section className={styles.contact_page_wrapper}>
                <div className={`${styles.container} ${styles.contact_page}`}>
                    <h1 className={`${styles.title_txt} ${styles.under_space}`}>ဆက်သွယ်ရန်</h1>
                    <div className={styles.flex_auto}>
                        <div className={styles.contact_wrapper}>
                            <a href="www.google.com">
                                <div className={`${styles.contact_box} ${styles.gmail}`}>
                                    <div className={styles.flex_auto}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className={styles.contact_path} d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                                    </div>
                                    <div className={styles.eng_txt}>
                                        Mail Us
                                    </div>
                                </div>
                            </a>
                            <a href="www.google.com">
                                <div className={`${styles.contact_box} ${styles.facebook}`}>
                                    <div className={styles.flex_auto}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" className="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className={styles.contact_path} d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
                                    </div>
                                    <div className={styles.eng_txt}>
                                        Our Facebook
                                    </div>
                                </div>
                            </a>
                            <a href="www.google.com">
                                <div className={`${styles.contact_box} ${styles.telegram}`}>
                                    <div className={styles.flex_auto}>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram-plane" className="svg-inline--fa fa-telegram-plane fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className={styles.contact_path} d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                                    </div>
                                    <div className={styles.eng_txt}>
                                        Join Us
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={styles.contact_quote}>
                        <h1>
                            နိုင်ငံတိုင်း၏ အခြေခံအုတ်မြစ်သည် <br className={styles.quote_br} />
                            ကလေးများ၏ ပညာရေးပင် ဖြစ်သည်။
                        </h1>

                        <p className={`${styles.learn_with} ${styles.eng_txt}`}>
                            Learn with
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Zoom</title><path fill="#2D8CFF" d="M4.585 13.607l-.27-.012H1.886l3.236-3.237-.013-.27a.815.815 0 00-.796-.796l-.27-.013H0l.014.27c.034.438.353.77.794.796l.27.013h2.43L.268 13.595l.014.269c.015.433.362.78.795.796l.27.013h4.046l-.014-.27c-.036-.443-.35-.767-.795-.795zm3.238-4.328h-.004a2.696 2.697 0 10.003 0zm1.141 3.841a1.619 1.619 0 11-2.289-2.288 1.619 1.619 0 012.289 2.288zM21.84 9.28a2.158 2.158 0 00-1.615.73 2.153 2.153 0 00-1.619-.732 2.148 2.148 0 00-1.208.37c-.21-.233-.68-.37-.949-.37v5.395l.27-.013c.45-.03.778-.349.796-.796l.013-.27v-1.889l.014-.27c.01-.202.04-.382.132-.54a1.078 1.079 0 011.473-.393 1.078 1.079 0 01.393.392c.093.16.12.34.132.54l.014.271v1.889l.013.269a.83.83 0 00.795.796l.27.013v-2.967l.012-.27c.01-.2.04-.384.134-.543.3-.514.96-.69 1.473-.39a1.078 1.079 0 01.393.393c.092.16.12.343.13.54l.015.27v1.889l.013.269c.028.443.35.77.796.796l.27.013v-3.237a2.158 2.158 0 00-2.16-2.156zm-10.263.788a2.697 2.698 0 103.811 3.816 2.697 2.698 0 00-3.811-3.816zm3.05 3.052a1.619 1.619 0 11-2.289-2.29 1.619 1.619 0 012.289 2.29z" /></svg>
                        </p>
                    </div>
                </div>

                <footer className={styles.eng_txt}>
                    Wisdom School &copy; 2021 All Rights Reserved.
                </footer>
            </section>
        </div>
    )
}

export default ContactPage;
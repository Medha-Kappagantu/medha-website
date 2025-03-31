import React from "react";
import styles from "./Experience.module.css"

export const Experience = () => {
    return <section className={styles.container} id="experience">
        <h2 className={styles.title}> Experience </h2>
        <ul className={styles.content}>
            <li className={styles.job}>
                <div className={styles.jobLeft} >
                    <img src="assets/experience/boeing.png" alt="Boeing" className={styles.jobImage}/>
                    <div className={styles.greenLine}/>
                </div>
                <div className={styles.jobRight} >
                    <h1> Intern, Boeing </h1>
                    <p className={styles.subhead}>June, 2024 - August, 2024</p>
                    <ul>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                    </ul>
                </div>
            </li>
            <li className={styles.job}>
                <div className={styles.jobLeft} >
                    <img src="assets/experience/kodewithklossy.png" alt="Kode With Klossy" className={styles.jobImage}/>
                    <div className={styles.greenLine}/>
                </div>
                <div className={styles.jobRight} >
                    <h1> Fellow, Kode With Klossy </h1>
                    <p className={styles.subhead}>June, 2024 - August, 2024</p>
                    <ul>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                    </ul>                
                </div>
            </li>
            <li className={styles.job}>
                <div className={styles.jobLeft} >
                    <img src="assets/experience/girlswhocode.png" alt="Girls Who Code" className={styles.jobImage}/>
                    <div className={styles.greenLine}/>
                </div>
                <div className={styles.jobRight} >
                    <h1> Fellow, Girls Who Code </h1>
                    <p className={styles.subhead}>June, 2024 - August, 2024</p>
                    <ul>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                    </ul>
                </div>
            </li>
            <li className={styles.job}>
                <div className={styles.jobLeft} >
                    <img src="assets/experience/codeninjas.png" alt="Code Ninjas" className={styles.jobImage}/>
                    <div className={styles.greenLine}/>
                </div>
                <div className={styles.jobRight} >
                    <h1> Head Teacher, Code Ninjas </h1>
                    <p className={styles.subhead}>June, 2024 - August, 2024</p>
                    <ul>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </li>
                        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                    </ul>
                </div>
            </li>
        </ul>
    </section>
}
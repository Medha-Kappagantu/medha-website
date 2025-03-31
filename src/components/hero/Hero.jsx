import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <div className={styles.outer}> <section className={styles.container}>
        <div className={styles.content}>
            <p className={styles.rotating}>
                <span> 
                    Student <br />
                    Leader <br />
                    Software Developer <br />
                    AI Enthusiast <br />
                    Teacher <br />
                </span>
            </p>
            <h1 className={styles.title}>Medha Kappagantu</h1>
            <p className={styles.description}> Hi! I'm Medha. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra tortor a purus imperdiet, vitae efficitur justo lacinia. </p>
            <a href="https://www.linkedin.com/in/medha-kappagantu-45725a260/" className={styles.resumeBtn}>My Resume</a>
        </div>
        <img 
            src="assets/hero/medha.JPG" 
            alt="medha headshot"
            className={styles.profilePic}
        />
        <img src="assets/nav/blob1.png" className={styles.topStar}/>
        <img src="assets/nav/blob2.png" className={styles.bottomStar}/>
        </section> </div>;
}
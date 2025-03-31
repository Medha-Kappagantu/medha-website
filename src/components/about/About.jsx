import React from "react";
import styles from "./About.module.css"

export const About = () => {
    return <div className={styles.outerContainer}  id="about">
    <section className={styles.container}>
        <h2 className={styles.title}> About </h2>
        <div className={styles.content}>
            <img 
                src="assets/about/medhaCherry.jpg" 
                alt="second-profile-photo" 
                className={styles.aboutImage}
                />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="assets/about/Globe.png" alt="The World" className={styles.icon}/>
                    <div> 
                        <h3>Tech for a Purpose</h3> 
                        <p>From using AI to help others learn ASL to building mental health apps for teens, I seek to use Tech to tackle big problems</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="assets/about/active.png" alt="Work Together" className={styles.icon}/>
                    <div>
                        <h3>Leadership</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="assets/about/curious.png" alt="Curious" className={styles.icon}/>
                    <div>
                        <h3>Curious & Eager to Learn</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    </div>
};
import React from "react";
import styles from "./Contact.module.css"

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2> Contact </h2>
            <p> Feel Free to Reach out! </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="/assets/contact/mail.png" alt="Email" />
                <a href="mailto:medhakpg@gmail.com">medhakpg@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src="/assets/contact/linkedin.png" alt="Linkedin" />
                <a href="https://www.linkedin.com/in/medha-kappagantu-45725a260/">linkedin.com/medha-kappagantu</a>
            </li>
            <li className={styles.link}>
                <img src="/assets/contact/git.png" alt="Github" />
                <a href="https://github.com/Medha-Kappagantu">github.com/Medha-Kappagantu</a>
            </li>
        </ul>
    </footer>
}
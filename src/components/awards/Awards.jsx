import React from "react";
import styles from "./Awards.module.css"

export const Awards = () => {
    return <section className={styles.container} id="awards">
        <h2 className={styles.title}>Awards</h2>
        <ul className={styles.awards}>
            <li className={styles.award}>
                <img src="/assets/awards/awardImg.png" alt="placeholder image" className={styles.awardImage}/>
                <h3>World Finalist</h3>
                <h4>Ernst and Young Inclusive AI Challenge</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className={styles.media}>
                    <a href="https://finance.yahoo.com/news/network-teaching-entrepreneurship-nfte-announces-120100052.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cubGlua2VkaW4uY29tLw&guce_referrer_sig=AQAAAGKVdI04DTsQ2zBlTdcV9emfeG5pdbswn5wqnolKqc-WUJhh43so0hFIWZjyjEBq69pTQa7fCW-KYVDG7TMCSdH4i8tiU4HnALOfW0r_kfzQc4TNafkDQoCaJnih0l33AcCLG2dCpBSQxraROaIzageLr9STW-GEn1RPXfQDuAdi">Media</a>
                </div>
            </li>
            <li className={styles.award}>
                <img src="/assets/awards/awardImg.png" alt="placeholder image" className={styles.awardImage}/>
                <h3>National Finalist</h3>
                <h4>Cyber Patriots</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className={styles.media}>
                    <a href="https://finance.yahoo.com/news/network-teaching-entrepreneurship-nfte-announces-120100052.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cubGlua2VkaW4uY29tLw&guce_referrer_sig=AQAAAGKVdI04DTsQ2zBlTdcV9emfeG5pdbswn5wqnolKqc-WUJhh43so0hFIWZjyjEBq69pTQa7fCW-KYVDG7TMCSdH4i8tiU4HnALOfW0r_kfzQc4TNafkDQoCaJnih0l33AcCLG2dCpBSQxraROaIzageLr9STW-GEn1RPXfQDuAdi">Media</a>
                </div>
            </li>
            <li className={styles.award}>
                <img src="/assets/awards/awardImg.png" alt="placeholder image" className={styles.awardImage}/>
                <h3>West Coast Finalist</h3>
                <h4>Optimist Oratorical Contest</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className={styles.media}>
                    <a href="https://finance.yahoo.com/news/network-teaching-entrepreneurship-nfte-announces-120100052.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cubGlua2VkaW4uY29tLw&guce_referrer_sig=AQAAAGKVdI04DTsQ2zBlTdcV9emfeG5pdbswn5wqnolKqc-WUJhh43so0hFIWZjyjEBq69pTQa7fCW-KYVDG7TMCSdH4i8tiU4HnALOfW0r_kfzQc4TNafkDQoCaJnih0l33AcCLG2dCpBSQxraROaIzageLr9STW-GEn1RPXfQDuAdi">Media</a>
                </div>
            </li>
        </ul>
    </section>
}
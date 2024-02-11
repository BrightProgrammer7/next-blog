import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {/* <b>Hey, lama dev here!</b> Discover my stories and creative ideas. */}
        <b>Salam, everyone 😉!</b> Discover events, traineeships, competitions, conferences, recruitments, and hackathons..</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/icon.png" alt="nei" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>New Events Info</h1>
          <p className={styles.postDesc}>
          NewEventsInfo is dedicated to sharing all new events, traineeships, competitions, conferences, recruitments, and hackathons.
          <br/>
          Share with your friends and families: https://t.me/+eD4YTkbNR3YwMjY0
          <br/>
          Useful Resources (DATA GEN XYZ): shorturl.at/bcpBS

          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

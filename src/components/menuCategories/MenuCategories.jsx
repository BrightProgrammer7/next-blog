import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";
import Image from "next/image";

const url = process.env.NEXTAUTH_URL;
const getData = async () => {
  const res = await fetch(`${url}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const MenuCategories = async () => {
  const data = await getData();

  return (

    <div className={styles.categoryList}>
      {/* {data?.map((item) => (
          // <Link
          //   href={`/blog?cat=${item.title}`}
          //   className={`${styles.category} ${styles[item.slug]}`}
          //   key={item._id}
          // >
      //        <Link
      //   href={`/blog?cat=${item.title}`} 
      //   className={`${styles.categoryItem} ${styles.style}`}
      //   key={item._id}
      // >
      //               {item.title}
      // </Link>
            //  {item.img && (
            //   <Image
            //     src={item.img}
            //     alt=""
            //     width={32}
            //     height={32}
            //     className={styles.image}
            //   />
            // )} 
          // </Link>
        ))} */}
      <Link
        href="/blog" className={`${styles.categoryItem} ${styles.style}`}
      >Events
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Conferences
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Recruitments
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Hackathons
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Competitions
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Traineeships
      </Link>
    </div>
  );
};

export default MenuCategories;

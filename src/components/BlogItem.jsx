import React from 'react'
import styles from './Blogitem.module.css'
import Image from 'next/image';
import Link from 'next/link';

const BlogItem = (props) => {
    const {blog}=props;

    return (
    <div className={styles.card}>
     <div className={`${styles.cardSide} ${styles.cardSideFront}`}>
     
              <div className={styles.image}><Image src="/bg1.jpg"  width={500}
      height={500}
      alt="Picture of the author"/></div>
                    <div className={styles.content}>
                        <div className={styles['card-specs--1']}>New</div>
                        <div className={styles['card-specs--2']}>Featured</div>
                        <div className={styles['card-specs--3']}>Featured all events </div>
                        <div className={styles.cardHeading}>ID :{blog.id}</div>
                        <div className={styles.brfdesc}>Heading :{blog.heading.slice(0,35)}</div>
                    </div>  
       </div>
      
               <div className={`${styles.cardSide} ${styles.cardSideBack}`}>
                   <div className={styles.cardbackcontent}>
                   <Link className={styles.bloglink} href={`../blog/${blog.id}`}>  <p class={styles['btn-showmore']}>Read Full </p></Link>
                    </div>
                </div>
                    
        </div>   
  )
}

export default BlogItem;
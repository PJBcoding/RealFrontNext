import React from 'react'
import styles from './Blogitem.module.css'
import Image from 'next/image';
import Link from 'next/link';

const BlogItem = (props) => {
    const {blog}=props;
    const img_url="https://mypjbckt.s3.amazonaws.com/user_upload/"
    const db_url="images/real_assam_s-removebg-preview_Ouukzm7.png"

    return (
    <div className={styles.card}>
     <div className={`${styles.cardSide} ${styles.cardSideFront}`}>
     
              <div className={styles.image}>
                {/* <Image src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"  width={500}
      height={500}
      alt="Picture of the author"/> */}
      <img src={`${img_url}${db_url}`} alt="This is alt "  />
      
      </div>
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
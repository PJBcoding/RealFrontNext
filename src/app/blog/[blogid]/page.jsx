import React  from 'react'
import styles from './Blog_Content.module.css'
import Image from 'next/image'


const Blog_Content = async({params}) => {
 
  let blg_details="First Value"
  
  const get_blog_details=async()=>{
    console.log("From Blogitem Page Blog Id is ---->"+params.blogid)
 
 
  const response= await fetch(`http://localhost:3000/api/blogdetails/${params.blogid}`,{next:{revalidate:1}})
   
  const blogdetbyid= await response.json()
   console.log("Blog response is ------>  ")
   console.log(blogdetbyid)
   
   blg_details= await blogdetbyid.blogdesc
   console.log("After dynamic api route execution ------>"+blg_details)
   return blg_details;
  }
  
  await get_blog_details();
 
return (
    <div className={styles.maincontainer}>
    <div className={styles.blogdetailgrid}>
      
      <div className={styles.imgframe}> <Image className={styles.imgspecs} src={'/blog.jpg'}  fill={true} /> </div>
        <h1 className={styles.heading}>Heading {params.heading}</h1>
        <h1 className={styles.category}>This is the content of the blog and the id is : {params.blogid}</h1>
        
        <h1 className={styles.article}>{blg_details?blg_details:get_blog_details()}</h1>
        
    </div> 
    </div>
  )
}

export default Blog_Content;
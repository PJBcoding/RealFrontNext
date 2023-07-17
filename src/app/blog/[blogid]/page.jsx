import React  from 'react'
import styles from './Blog_Content.module.css'
import Image from 'next/image'


const Blog_Content = async({params}) => {
 
  let blg_details="First Value"
  let blg_heading="This is static heading"
  
  const get_blog_details=async()=>{
    console.log("From Blogitem Page Blog Id is ---->"+params.blogid)
 
 
  const response= await fetch(`http://localhost:3000/api/blogdetails/${params.blogid}`,{next:{revalidate:1}})
   
  const blogdetbyid= await response.json()
   console.log("Blog response is ------>  ")
   console.log(blogdetbyid)
   
   blg_details= await blogdetbyid.blogdesc
   blg_heading=await blogdetbyid.blog_heading
   console.log("After dynamic api route execution ------>"+blg_details)
   return {"blg_details":blg_details,"blg_heading":blg_heading};
  }
  
  await get_blog_details();
 
return (
   
    <div className={styles.blogdetailgrid}>
      
      <div className={styles.imgframe}> <img className={styles.imgspecs} src={'/blog.jpg'}  fill={true} /> </div>
       <div className={styles.heading}> Heading : {params.heading}{(await get_blog_details()).blg_heading}</div>
       <div className={styles.category}>This is the content of the blog and the id is : {params.blogid}  </div> 
        
       <div className={styles.article}> &nbsp;&nbsp;&nbsp; {blg_details?blg_details:(await get_blog_details()).blg_details} <p></p></div>
    </div> 
    
  )
}

export default Blog_Content;
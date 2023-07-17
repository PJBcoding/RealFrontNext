import React from 'react'
import styles from './page.module.css'
import BlogItem from '@/components/BlogItem'




const Home = async() => {
   
    const response= await fetch('http://localhost:3000/api/blog',{ next: { revalidate: 1 } })
    const blog_data= await response.json()
    const blogs=blog_data.data
    console.log(blogs)
   
    /* */
  return (<>
  
    <header className={styles.header}>
    
       <p>
        <span className={styles.maintagline}> Real Assam.com</span>
        <img src={"/rlbl1.png"} className={styles.blogimg} alt="rlblogimg" />
       </p>
       <span className={styles.subtagline}>-- the real face of assam</span>
     
       <div ><span className={styles.spanText}>BLOGS | NEWS | FESTIVALS </span><img src={"/rlup1.png"} alt="this is altz" className={styles.rlup}/></div>
    </header>
      <div className={styles.mainFlexContainer} style={{ backgroundImage: `linear-gradient(to right bottom, #c57608a9, #25d06ad1), url($(bg.src))`}} > 
   

             {!blogs && <h3> Loading ...</h3>}
             {blogs.length>0 && blogs.map((blog)=>(
                  <div className={styles.flexItems} key={blog.id}>
                   <BlogItem blog={blog}/>
                  </div>
            
              ))}
          </div>
      
      </>
       )
}

export default Home;
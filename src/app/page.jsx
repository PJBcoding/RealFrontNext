import React from 'react'
import styles from './page.module.css'
import BlogItem from '@/components/BlogItem'
import bg from '../../public/blog.jpg'



const Home = async() => {
   
    const response= await fetch('http://localhost:3000/api/blog',{ next: { revalidate: 1 } })
    const blog_data= await response.json()
    const blogs=blog_data.data
      
  return (<>
  
    <header className={styles.header}>
    
       <p>
        <span className={styles.maintagline}> Real Assam.com</span>
       </p>
       <span className={styles.subtagline}>-- the real face of assam</span>
       
    </header>
      <div className={styles.mainFlexContainer} style={{ backgroundImage: `linear-gradient(to right bottom, #c57608a9, #25d06ad1), url($(bg.src))`}}> 
   

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
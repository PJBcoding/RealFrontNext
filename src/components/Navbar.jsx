'use client'
import React, { useEffect, useState } from 'react'
import Navelements from './Navelements'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HiMenu, HiX } from "react-icons/hi";


const Navbar = () => {
 
  const pathname = usePathname();
 // console.log("Active path -->  " + pathname)

  /* Setting a state for managing the mobile navigation show or hide */
  const [clicked, setClicked] = useState(false)

  /* useEffect is used to close the mobile navigation on route change i.e page change and the dependencies is given as the path change which we get from the usePathname  */
 
  useEffect(()=>{
             setClicked(false)
            
            },[pathname])
  
  /* Handler function for the mobile nav open or close status */
  const clickHandler = () => {
    setClicked(!clicked)
  }

  /* Rendering the JSX code  */
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}> Logo </h1>

      <div onClick={clickHandler} style={{ fontSize: '5rem', color: '#0bbe7a' }} className={styles.mobilemenuIcons}>
         { clicked ? <HiX/> :<HiMenu/>} 
      </div> 

  <ul className={ !clicked? styles.navlinks:`${styles.navlinks} ${styles.active}`}>
    {
      Navelements.map((item, index) => {
        console.log(item.nav_href)
        console.log(pathname == item.nav_href)
        return (

          <li className={`${styles.navbarItem} ${pathname == item.nav_href ? styles.navActive : null}`} key={index}>
            <Link className={styles.links} href={item.nav_href}> {item.nav_name}</Link>
          </li>
        )
      })}

  </ul>
    </nav >
  )
}

export default Navbar
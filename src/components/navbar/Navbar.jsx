import React from 'react'
import { motion } from "framer-motion"
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ opacity: 1, scale: 2 }}
          transition={{ duration: 0.5 }}
        >Saketh
        </motion.span>
        <div className="social">
          <motion.a href="https://github.com/saketh612" initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ opacity: 1, scale: 2 }}
            transition={{ duration: 0.5 }} target='_blank'><img src='/github.png' alt=''></img></motion.a>
          <motion.a href="https://www.linkedin.com/in/repaka-saketh-99b277241/" initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ opacity: 1, scale: 2 }}
            transition={{ duration: 0.5 }} target='_blank'><img src='/linkedin.png' alt=''></img></motion.a>
          <motion.a href="https://leetcode.com/user7684mW/" initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ opacity: 1, scale: 2 }}
            transition={{ duration: 0.5 }}target='_blank'><img src='/leetcode.png' alt=''></img></motion.a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
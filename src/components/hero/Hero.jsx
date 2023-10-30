import React from 'react';
import { motion } from 'framer-motion';



import './hero.scss';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    },
};

const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = "/resume.pdf"; // Replace with the actual path to your PDF file
    link.download = "resume"; // The name that the file will have when downloaded
    link.target = '_blank'; // Open the link in a new tab
    link.click();
    console.log("downloaded")
  };

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2>Saketh Repaka</motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 0.5 }} >Aspiring Web Developer</motion.h1>
                    <div className="buttons">
                            <button onClick={downloadPDF}>Download CV</button>
                            <a  href='#Contact'><button >Contact me</button></a>
                            
                    </div>
                    {/* <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="Scroll Icon" /> */}
                </motion.div>
            </div>

            <motion.div className="slidingcontainer" variants={sliderVariants} initial="initial" animate="animate">Eat Sleep Code Repeat</motion.div>
            {/* <div className="imageContainer">
                <img src="/hero.png" alt="Hero" />
            </div> */}
        </div>
    );
};

export default Hero;

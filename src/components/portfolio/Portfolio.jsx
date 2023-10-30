import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    img: "https://media.licdn.com/dms/image/D4D12AQGPAWnsOTQYEQ/article-cover_image-shrink_720_1280/0/1674548497069?e=2147483647&v=beta&t=LGu3mNqQTh8TOteu6UCoZOnz_0_hLtafpNsEch1Pb6E",
    desc: "Crafted a captivating personal portfolio website, employing dynamic animations and leveraging React and Vite for a cutting-edge development environment",
  },
  {
    id: 2,
    title: "News Website",
    img: "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg",
    desc: "Developed a new website using React, utilizing the News API to fetch real-time news data",
  },
  {
    id: 3,
    title: "MERN Stack Notes App",
    img: "https://i.pinimg.com/originals/b6/cd/e8/b6cde81d1c489b0e20d85a6e06c5f8f9.png",
    desc: "Designed and launched the MERN app allowing users to store notes, utilizing Express for API creation securelyImplemented MongoDB to efficiently manage note data, and incorporated hashed passwords for heightened security",
  }
];

const Single = ({ item }) => {


  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" >
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button
            whileHover={{scale:1.2}}>View code</motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 50,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
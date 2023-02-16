import React from 'react'
import './home.css'
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="home">
      <div className="content">
        <motion.div
          className="logo"
          initial={{ y: "-200%", rotate: 0}}
          animate={{ y: 0, rotate: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150,
             165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360],
          transition: { duration: 1.3, ease: "easeInOut" } }}>
          <h4>jm</h4>
        </motion.div>

        <h2 className="name">Joana Mertz - Product UX/UI Designer</h2>

        <h1 className="title"><span>I design</span> beautiful <br /> craft for <span>clients</span></h1>
      </div>
    </section>
  );
}

export default Home;

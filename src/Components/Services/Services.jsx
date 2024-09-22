import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./resume.pdf";
import { themeContext } from '../../Context'
import { motion } from 'framer-motion';

  const Services = () => {
    const transition = {duration:1, type:'spring'}
  const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode ? 'White': ''}}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum is simpley dummy text of printing Lorem <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        {/* 1st card */}
        <motion.div initial={{left: '25rem'}} whileInView={{left: '14rem'}} transition={transition} style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            details={"Figma, Chart.js, Adobe Photoshop, "}
          />
        </motion.div>
        {/* 2nd card */}
        <motion.div initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}  style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Frontend"}
            details={
              "HTML, CSS, Bootstrap, Tailwind, JavaScript, TypeScript, React"
            }
          />
        </motion.div>
        {/* 3rd card */}
        <motion.div initial={{left: '25rem'}} whileInView={{left: '14rem'}} transition={transition} style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"Backend"}
            details={"Node, Express, MongoDB, MySQL, MVC Architecture, DSA"}
          />
        </motion.div>
        <div className="blur s-blur2" style={{background: 'var(--purple)'}} ></div>
      </div>
    </div>
  );
};

export default Services;

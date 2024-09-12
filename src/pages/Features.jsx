
import React from "react";
import { motion } from "framer-motion"; 
import {Tilt} from "react-tilt";
import { features } from "./../constants/features"; 
import "./../index.css"
import { StyledSubTitle,colors } from "../components/Styles";
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" }  
  }
};

const ElectricBusFeatures = ({id}) => {
  return (
    <div id={id}>
    <StyledSubTitle color={colors.dark1} style={{fontSize:"20px",fontWeight:"bold"}}>Explore the Innovative Technologies our Behind Electric Buses</StyledSubTitle>
    <div className="features-container">
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          className="tilt-wrapper"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          whileHover={{ scale: 1.05 }} 
        >
          <Tilt
            options={{ max: 25, scale: 1, speed: 400 }} 
            className="tilt-card"
          >
            <div className="feature-card">
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default ElectricBusFeatures;

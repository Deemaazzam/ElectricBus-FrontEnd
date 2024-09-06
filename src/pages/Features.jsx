
import React from "react";
import { motion } from "framer-motion"; 
import {Tilt} from "react-tilt";
import { features } from "./../constants/features"; 
import "./../index.css"

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Initially hidden and slightly off-position
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" }  // Smooth animation on enter
  }
};

const ElectricBusFeatures = () => {
  return (
    <div className="features-container">
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          className="tilt-wrapper"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
          whileHover={{ scale: 1.05 }} // Slightly increase the card size on hover
        >
          <Tilt
            options={{ max: 25, scale: 1, speed: 400 }} // React Tilt options
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
  );
};

export default ElectricBusFeatures;

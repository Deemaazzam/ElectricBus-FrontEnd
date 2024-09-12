import { about } from "../constants/features";
import React from 'react';
import  './../index.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {Tilt} from 'react-tilt';
import { StyledSubTitle ,colors} from "../components/Styles";
const AboutComponent = () => {
    useEffect(() => {
      const root = document.documentElement;
      const marqueeElementDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
      const marqueeContent = document.querySelector('.marquee-content');
      root.style.setProperty("--marquee-elements", marqueeContent.children.length);
      
      for (let i = 0; i < marqueeElementDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }, []);
  
    return (
        <>
       <StyledSubTitle color={colors.dark1} style={{fontSize:"20px",fontWeight:"bold"}}>Uncover the innovative technology behind our electric buses.</StyledSubTitle>

      <div className="marquee">
        <ul className="marquee-content">
          {about.map((item) => (
            <li key={item.id}>
              <Tilt options={{ max: 25, scale: 1.1, speed: 300 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              </Tilt>
            </li>
          ))}
        </ul>
      </div>
      </>
    );
  };
  
  
  export default AboutComponent;
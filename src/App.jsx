import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import anita from './anita.png'; // Make sure you have this image in the src folder
import balloonsImage from './balloons.png'; // Make sure you have this image in the src folder
import cat1 from './cat1.jpg'
import cat2 from './cat2.jpg'
import cat3 from './cat3.jpg'
import cat4 from './cat4.jpg'
import song from './song.mp3'
const App = () => {
  return (
    <div className="container">
  
      <motion.div 
        className="header" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 2 }}
      >
        <h1>CONGRATS, ANITAA HIDAYAT YG CANTIKkKK BAIK DAN MEMPESONA</h1>
      </motion.div>
      <audio src={song} controls autoplay={true} loop/>
      <motion.img 
        src={anita} 
        alt="Graduation Hat" 
        className="graduation-hat"
        initial={{ y: -250 }} 
        animate={{ y: 0 }} 
        transition={{ type: "spring", stiffness: 120 , y: { duration: 3}}}
      />

      <motion.p 
        className="message" 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 1.5 }}
      >
        You did it! , congrats yah , ayo buruan kerjain revisinya, selamat menempuh hidup baru , hadapi dunia kerja dengan kebranianmu. God bless uuu
      </motion.p>



   
         <motion.img 
        src={cat3} 
        alt="Balloons" 
        className="cat3"
        initial={{ y: 250 }} 

        animate={{ y: 0 }} 
        transition={{ type: "spring", stiffness: 120 , y: { duration: 3}}}
     /> 

<motion.p 
        className="message2" 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 1.5 }}
      >
        this is for u
      </motion.p>



      </div>
  );
};

export default App;

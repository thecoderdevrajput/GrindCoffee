import { motion } from "framer-motion";
import { useState } from "react";

const positions = [
  { top: "10%", left: "20%" },
  { top: "30%", left: "70%" },
  { top: "50%", left: "40%" },
  { top: "70%", left: "10%" },
  { top: "85%", left: "60%" },
  { top: "20%", left: "80%" }
];

const Circle = ({ index }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      className="w-12 h-12 rounded-full border-4 absolute"
      initial={{ y: 0 }}
      animate={{ y: [0, -50, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#E17564" : "#F5DBDF",
        borderColor: hovered ? "#ffffff" : "#ffffff",
        top: positions[index].top,
        left: positions[index].left,
      }}
    />
  );
};

export default function BouncingCircles() {
  return (
    <div 
      className="relative w-full h-screen bg-gray-900 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('bouncingimage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {[...Array(6)].map((_, index) => (
        <Circle key={index} index={index} />
      ))}
    </div>
  );
}

import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <motion.button
        className="bg-black p-3 rounded-md"
        animate={{
          backgroundColor: "#f00",
          color: "#000",
          // transform: "scale(2) translateY(50px)",4
          scale: 2,
          // y: 100,
          // rotate: 1800,
        }}
        transition={{
          delay: 1,
          // ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
          repeatType: "reverse",
          type: "spring",
          bounce: 40,
          damping: 10,
          mass: 3,
          stiffness: 30,
          velocity: 100,
        }}
        initial={{
          backgroundColor: "#00f",
          color: "#fff",
          scale: 1,
          y: 0,
          rotate: 0,
        }}
      >
        Hello World
      </motion.button>
    </div>
  );
}

export default App;

import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <motion.div
        className="bg-black w-24 h-24"
        animate={{
          // backgroundColor: "#f00",
          // color: "#000",
          // transform: "scale(2) translateY(50px)",4
          // scale: 2,
          // y: 100,
          // rotate: 1800,

          scale: [1, 2, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%", "0%"],
        }}
        transition={{
          // delay: 1,
          // // ease: "easeInOut",
          // repeat: Infinity,
          // repeatDelay: 0.5,
          // repeatType: "reverse",
          // type: "spring",
          // bounce: 40,
          // damping: 10,
          // mass: 3,
          // stiffness: 30,
          // velocity: 100,

          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          duration: 5,
        }}
      >
        {/* Hello World */}
      </motion.div>
    </div>
  );
}

export default App;

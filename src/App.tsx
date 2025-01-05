import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex items-center flex-col justify-center p-8 min-h-screen text-white">
      <motion.button
        className="bg-red-600 h-16 px-8 rounded-full"
        whileHover={{
          scale: 2,
        }}
        whileFocus={{
          scale: 2.2,
        }}
        whileTap={{
          scale: 1.7,
        }}
      >
        Hover me
      </motion.button>
    </div>
  );
}

export default App;

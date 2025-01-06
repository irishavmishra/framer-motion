import "../index.css";

import { motion } from "framer-motion";

const Multistepanimation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[150px] overflow-hidden flex relative flex-col aspect-[2/4.5] text-[#DAF7A6] bg-[#cc1200] rounded-2xl">
        <div className="h-full fadeout">
          <motion.div
            className="text-[80px] font-monospace origin-top-left leading-[0.8] inset-1 absolute break-all"
            animate={{
              opacity: [0, 1, 1, 1, 1, 1, 0],
              scaleX: [1.5, 1.5, 2.5, 2.5, 2.5, 1.5, 1.5],
              scaleY: [0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 8],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.05, 0.2, 0.3, 0.45, 0.7, 1],
              duration: 15,
            }}
          >
            animations
          </motion.div>
        </div>
        <p className="mt-auto  p-2">
          Animation is about creating the illusion of life.
        </p>
      </div>
    </div>
  );
};

export default Multistepanimation;

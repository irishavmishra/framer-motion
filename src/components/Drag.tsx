import { motion } from "framer-motion";

const Drag = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-10 gap-40 text-[#DAF7A6]">
      <h2 className="text-[#DAF7A6] text-xl">Drag</h2>

      <motion.div
        className="rounded-md px-3 py-2 bg-[#cc1200]"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        Drag me
      </motion.div>
    </div>
  );
};

export default Drag;

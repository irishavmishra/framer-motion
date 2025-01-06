import { motion, useMotionValue, useTransform } from "framer-motion";

const Draganimation = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [1, 1, 1.5]);
  const borderRadius = useTransform(x, [-100, 0, 100], ["50%", "0%", "50%"]);
  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ["#FFC300", "#cc1200", "#10147d"]
  );

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-10 gap-40 text-[#DAF7A6]">
      <h2 className="text-[#DAF7A6] text-xl">Change Animation on drag</h2>

      <motion.div
        className="rounded-md w-32 h-32 px-3 py-2 bg-[#cc1200]"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x, scale, borderRadius, backgroundColor }}
      ></motion.div>
    </div>
  );
};

export default Draganimation;

import { motion, useMotionValue } from "framer-motion";

const Usemotionvalue = () => {
  const scale = useMotionValue(2);

  //   if we use useMotionValue(2) it will set the initial value to 2 and its also give us the ability to change the value of the scale by using scale.set(5) and we can also get the value of the scale by using scale.get().
  //   console.log(scale.get());
  //   console.log(scale.set(5));
  //   console.log(scale.get());

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-10 gap-40 text-[#DAF7A6]">
      <h2 className="text-[#DAF7A6] text-xl">Use Motion</h2>

      <motion.button
        className="rounded-full w-32 h-12 bg-[#cc1200]"
        style={{ scale }}
      >
        Scale
      </motion.button>
      <div className="bg-[#cc110067] rounded-xl px-3 py-3 flex items-center">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={2}
          onChange={handleRangeChange}
          className="appearance-none rounded-2xl cursor-pointer accent-[#DAF7A6] w-40 bg-[#cc1200]"
        />
      </div>
    </div>
  );
};

export default Usemotionvalue;

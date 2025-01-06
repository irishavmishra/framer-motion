import { motion, useMotionValue, useTransform } from "framer-motion";

const Usetransform = () => {
  const sliderValue = useMotionValue(2);
  const opacity = useTransform(sliderValue, [1, 5], [0, 1]);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    sliderValue.set(parseFloat(e.target.value));
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-10 gap-40 text-[#DAF7A6]">
      <h2 className="text-[#DAF7A6] text-xl">Use Transform</h2>

      <motion.button
        className="rounded-full w-32 h-12 bg-[#cc1200]"
        style={{ opacity: opacity }}
      >
        Opacity
      </motion.button>
      <div className="bg-[#cc110067] rounded-xl px-3 py-3 flex items-center">
        <input
          type="range"
          min={1}
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

export default Usetransform;

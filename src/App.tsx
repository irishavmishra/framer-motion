import Multistepanimation from "./components/Multistepanimation";
import Usemotionvalue from "./components/Usemotionvalue";

const App = () => {
  return (
    <div className="flex items-center flex-col justify-center min-h-scree text-white mb-[500px] ">
      <Multistepanimation />
      <Usemotionvalue />
    </div>
  );
};

export default App;

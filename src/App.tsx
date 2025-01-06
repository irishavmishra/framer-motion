import Drag from "./components/Drag";
import Draganimation from "./components/Draganimation";
import Multistepanimation from "./components/Multistepanimation";
import Usemotionvalue from "./components/Usemotionvalue";
import UseSpring from "./components/Usespring";
import Usetransform from "./components/Usetransform";

const App = () => {
  return (
    <div className="flex items-center flex-col justify-center min-h-scree text-white mb-[500px] ">
      <Multistepanimation />
      <Usemotionvalue />
      <UseSpring />
      <Usetransform />
      <Drag />
      <Draganimation />
    </div>
  );
};

export default App;

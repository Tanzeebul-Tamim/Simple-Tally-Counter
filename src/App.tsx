import {
  decrement,
  increment,
  reset,
  changeByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import useTallyCalc from "./hooks/TallyCalculator";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const countSingle = [];
  const countFive = [];

  const { fiveCount, singleCount } = useTallyCalc(count);

  for (let i = 0; i < singleCount; i++) {
    countSingle.push(i + 1);
  }

  for (let i = 0; i < fiveCount; i++) {
    countFive.push(i + 1);
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-5 border border-slate-300 rounded-md bg-slate-200 p-7">
        <div>
          <h1 className="text-3xl">{count}</h1>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="flex gap-5">
            <button
              onClick={() => dispatch(increment())}
              className="px-3 py-2 rounded-md bg-green-600 text-xl font-semibold text-white"
            >
              Increment
            </button>
            <button
              onClick={() =>
                dispatch(changeByValue({ value: 5, operation: "addition" }))
              }
              className="px-3 py-2 rounded-md bg-green-600 text-xl font-semibold text-white"
            >
              Increment by 5
            </button>
            <button
              onClick={() =>
                dispatch(changeByValue({ value: 3, operation: "subtraction" }))
              }
              className="px-3 py-2 rounded-md bg-red-600 text-xl font-semibold text-white"
            >
              Decrement by 3
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="px-3 py-2 rounded-md bg-red-600 text-xl font-semibold text-white"
            >
              Decrement
            </button>
          </div>
          <button
            onClick={() => dispatch(reset())}
            className="px-3 py-2 rounded-md bg-blue-600 w-[50%] text-xl font-semibold text-white"
          >
            Reset
          </button>
        </div>
        <div className="flex gap-[5px]">
          {countFive.map((_, i) => (
            <img key={i} className="h-10" src={img2} alt="" />
          ))}
          {countSingle.map((_, i) => (
            <img key={i} className="h-10" src={img1} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

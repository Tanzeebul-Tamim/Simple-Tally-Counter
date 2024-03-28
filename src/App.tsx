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
import React, { useState } from "react";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const countSingle = [];
  const countFive = [];

  const [selectedIncrementValue, setSelectedIncrementValue] = useState(5);
  const handleIncrementChange = (event: {
    target: { value: React.SetStateAction<number> };
  }) => {
    setSelectedIncrementValue(Number(event.target.value));
  };

  const [selectedDecrementValue, setSelectedDecrementValue] = useState(5);
  const handleDecrementChange = (event: {
    target: { value: React.SetStateAction<number> };
  }) => {
    setSelectedDecrementValue(Number(event.target.value));
  };

  const { fiveCount, singleCount } = useTallyCalc(count);

  for (let i = 0; i < singleCount; i++) {
    countSingle.push(i + 1);
  }

  for (let i = 0; i < fiveCount; i++) {
    countFive.push(i + 1);
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-600">
      <h1 className="text-white font-bold text-5xl uppercase mb-6">Simple Tally Counter</h1>
      <div className="flex flex-col items-center gap-5 border border-slate-300 rounded-md bg-slate-400 p-7">
        <div>
          <h1 className="text-5xl mb-3 text-white font-bold">{count}</h1>
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
                dispatch(
                  changeByValue({
                    value: selectedIncrementValue,
                    operation: "addition",
                  })
                )
              }
              className="px-3 py-2 rounded-md text-white bg-green-600 text-xl font-semibold"
            >
              <select
                className="rounded-lg bg-green-800 border-0 px-2"
                value={selectedIncrementValue}
                onChange={handleIncrementChange}
                onClick={(event) => event.stopPropagation()}
              >
                {[...Array(10).keys()].map((number) => (
                  <option key={number} value={number + 1}>
                    {number + 1}
                  </option>
                ))}
              </select>
              <span> Increment by {selectedIncrementValue}</span>
            </button>
            <button
              onClick={() =>
                dispatch(
                  changeByValue({
                    value: selectedDecrementValue,
                    operation: "subtraction",
                  })
                )
              }
              className="px-3 py-2 rounded-md bg-red-600 text-xl font-semibold text-white"
            >
              <span>Decrement by {selectedDecrementValue} </span>
              <select
                className="rounded-lg bg-red-800 border-0 px-2"
                value={selectedDecrementValue}
                onChange={handleDecrementChange}
                onClick={(event) => event.stopPropagation()}
              >
                {[...Array(10).keys()].map((number) => (
                  <option key={number} value={number + 1}>
                    {number + 1}
                  </option>
                ))}
              </select>
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
            <img key={i} className="h-14" src={img2} alt="" />
          ))}
          {countSingle.map((_, i) => (
            <img key={i} className="h-14" src={img1} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

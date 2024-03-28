import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TAction = {
  operation: "addition" | "subtraction";
  value: number;
};
interface TCounter {
  count: number;
}

const initialState: TCounter = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    changeByValue: (state, action: PayloadAction<TAction>) => {
      if (action.payload.operation === "addition") {
        state.count += action.payload.value;
      } else if (
        action.payload.operation === "subtraction" &&
        state.count > 0
      ) {
        if (state.count - 3 >= 0) {
          state.count -= action.payload.value;
        } else {
          state.count = 0;
        }
      }
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset, changeByValue } = counterSlice.actions;

export default counterSlice.reducer;

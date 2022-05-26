import { configureStore } from "@reduxjs/toolkit";

import gameSlice from "./gameSlice/gameSlice";

export const store = configureStore({
  reducer: {
    cardList: gameSlice,
  },
});

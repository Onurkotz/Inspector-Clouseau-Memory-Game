import { createSlice } from "@reduxjs/toolkit";
import { gameDatas } from "../../data/gameDatas";

export const gameSlice = createSlice({
  name: "cardList",
  initialState: {
    score: 0,
    items: gameDatas,
    selectedItems: [],
  },
  reducers: {
    compare: (state) => {
      if (state.selectedItems.length === 2) {
        let id1 = state.selectedItems[0].id;
        let id2 = state.selectedItems[1].id;

        if (state.selectedItems[0].name === state.selectedItems[1].name) {
          state.score += 30;
        } else {
          for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id === id1 || state.items[i].id === id2) {
              state.items[i].visible = false;
            }
          }

          state.score -= 10;
        }

        state.selectedItems = [];
      }
    },

    addSelectedItems: (state, action) => {
      state.selectedItems = [...state.selectedItems, action.payload];
    },

    shuffle: (state) => {
      for (let i = state.items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.items[i], state.items[j]] = [state.items[j], state.items[i]];
      }
    },

    setUnVisibleAllCard: (state) => {
      for (let i = 0; i < state.items.length; i++) {
        state.items[i].visible = false;
      }
    },

    setVisible: (state, action) => {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload) {
          state.items[i].visible = true;
          break;
        }
      }
    },
  },
});

export const {
  shuffle,
  setUnVisibleAllCard,
  setVisible,
  addSelectedItems,
  compare,
} = gameSlice.actions;
export default gameSlice.reducer;

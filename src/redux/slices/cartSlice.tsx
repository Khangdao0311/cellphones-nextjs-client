import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // items: [],
  },
  reducers: {
    addToCart: (state: any, action: IAction) => {
      let has: boolean = false;
      if (state[action.payload.username]) {
        state[action.payload.username] = state[action.payload.username].map((item: IStateCart) => {
          if (
            item.id === action.payload.id &&
            item.type === action.payload.type &&
            item.color === action.payload.color
          ) {
            has = true;
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });
      } else {
        state[action.payload.username] = [];
      }
      if (!has) state[action.payload.username].push(action.payload);
    },
    upQuantityItem: (state: any, action: IAction) => {
      state[action.payload.username] = state[action.payload.username].map(
        (item: IStateCart, index: number) => {
          if (index === action.payload.index) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }
      );
    },
    downQuantityItem: (state: any, action: IAction) => {
      state[action.payload.username] = state[action.payload.username].map(
        (item: IStateCart, index: number) => {
          if (index === action.payload.index) {
            return {
              ...item,
              quantity: item.quantity - 1 || 1,
            };
          }
          return item;
        }
      );
    },
    remove: (state: any, action: IAction) => {
      state[action.payload.username] = state[action.payload.username].filter(
        (item: IStateCart,index:number) => index !== action.payload.index
      );
    },
    removeMany: (state: any, action: IAction) => {
      state[action.payload.username] = state[action.payload.username].filter(
        (item: IStateCart, index: number) => !action.payload.list.includes(index)
      );
    },
  },
});
export const { addToCart, upQuantityItem, downQuantityItem, remove, removeMany } =
  cartSlice.actions;
export default cartSlice;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodoItem } from "../interfaces/todoItem";
import { RootState } from "./store";
import { IStore } from "../interfaces/todoStore";

const initialState: IStore = {
  items: [],
  filterStatusFalse: [],
  filterStatusTrue: [],
  type: 0,
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    loadTasks: (store, action: PayloadAction<ITodoItem[]>) => {
      store.items = action.payload;
      store.type = 0;
    },

    appendItem: (store, action: PayloadAction<ITodoItem>) => {
      store.items.push(action.payload);
    },
  },
});

export const { loadTasks, appendItem } = todoSlice.actions;

export const getItems = (store: RootState) => store.todoSlice.items;

export default todoSlice.reducer;

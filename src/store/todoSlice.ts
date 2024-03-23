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

    deleteItem: (store, action: PayloadAction<string>) => {
      store.items = store.items.filter((elem) => elem.id !== action.payload);
    },

    editTask: (store, action: PayloadAction<ITodoItem>) => {
      store.items = store.items.map((item) => {
        if (item.id == action.payload.id) {
          item.text = action.payload.text;
          return item;
        } else {
          return item;
        }
      });
    },

    toggleState: (store, action: PayloadAction<string>) => {
      const updatedItems = store.items.map((item) =>
        item.id === action.payload ? { ...item, status: !item.status } : item
      );
      store.items = updatedItems;
    },
  },
});

export const { loadTasks, appendItem, deleteItem, toggleState, editTask } =
  todoSlice.actions;

export const getItems = (store: RootState) => store.todoSlice.items;

export default todoSlice.reducer;

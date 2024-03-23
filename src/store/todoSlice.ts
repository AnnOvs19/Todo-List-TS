import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodoItem } from "../interfaces/todoItem";
import { RootState } from "./store";
import { IStore } from "../interfaces/todoStore";

const initialState: IStore = {
  items: [],
  filterFalse: [],
  filterTrue: [],
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

    filterTrueTasks: (store, action: PayloadAction<boolean>) => {
      store.type = 1;
      store.filterFalse = [];
      store.filterTrue = store.items.filter(
        (elem) => elem.status == action.payload
      );
    },

    filterFalseTasks: (store, action: PayloadAction<boolean>) => {
      store.type = 2;
      store.filterTrue = [];
      store.filterFalse = store.items.filter(
        (elem) => elem.status == action.payload
      );
    },

    clearFilter: (store) => {
      store.type = 0;
      store.filterTrue = [];
      store.filterFalse = [];
    },

    appendItem: (store, action: PayloadAction<ITodoItem>) => {
      store.items.push(action.payload);
    },

    deleteItem: (store, action: PayloadAction<string>) => {
      store.items = store.items.filter((elem) => elem.id !== action.payload);

      store.filterTrue = store.filterTrue.filter(
        (elem) => elem.id !== action.payload && elem.status != false
      );

      store.filterFalse = store.filterFalse.filter(
        (elem) => elem.id !== action.payload && elem.status != true
      );
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

      store.filterTrue = store.items.filter((i) => i.status != false);

      store.filterFalse = store.items.filter((i) => i.status != true);
    },
  },
});

export const {
  loadTasks,
  filterTrueTasks,
  filterFalseTasks,
  clearFilter,
  appendItem,
  deleteItem,
  toggleState,
  editTask,
} = todoSlice.actions;

export const getItems = (store: RootState) => store.todoSlice.items;

export const getTrueTasks = (store: RootState) => store.todoSlice.filterTrue;

export const getFalseTasks = (store: RootState) => store.todoSlice.filterFalse;

export const getTypeFilters = (store: RootState) => store.todoSlice.type;

export default todoSlice.reducer;

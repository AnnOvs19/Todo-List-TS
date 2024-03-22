import { ITodoItem } from "./todoItem";

export interface IStore {
  items: ITodoItem[];
  filterStatusFalse: ITodoItem[];
  filterStatusTrue: ITodoItem[];
  type: number;
}

import { ITodoItem } from "./todoItem";

export interface IStore {
  items: ITodoItem[];
  filterFalse: ITodoItem[];
  filterTrue: ITodoItem[];
  type: number;
}

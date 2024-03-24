import React, { DragEvent, FC, useEffect, useState } from "react";
import { BodyBlock } from "./todoBody.style";
import { useDispatch, useSelector } from "react-redux";
import {
  draggableSort,
  getFalseTasks,
  getItems,
  getTrueTasks,
  getTypeFilters,
  loadTasks,
} from "../../store/todoSlice";
import TodoItem from "../TodoItem/TodoItem";
import { ITodoItem } from "../../interfaces/todoItem";

const TodoBody: FC = () => {
  const itemsList = useSelector(getItems);
  const trueTaskList = useSelector(getTrueTasks);
  const falseTaskList = useSelector(getFalseTasks);
  const typeTask = useSelector(getTypeFilters);

  const [takeItem, setTakeItem] = useState<ITodoItem>();

  const dispatch = useDispatch();

  function dragStartHandler(e: DragEvent<HTMLDivElement>, item: ITodoItem) {
    setTakeItem(item);
  }

  function dragDropHandler(e: DragEvent<HTMLDivElement>, item: ITodoItem) {
    e.preventDefault();
    const dragSort = itemsList.map((task) => {
      // task.id - id карточек в массиве
      // item.id - id карточки, которую мы перемещаем
      // takeItem?.id - id карточки, котрая находится на месте, куда перемешаем друшую карточку

      if (task.id === item.id && takeItem) {
        return { ...task, order: takeItem.order };
      }

      if (task.id === takeItem?.id) {
        return { ...task, order: item.order };
      }

      return task;
    });

    dispatch(draggableSort(dragSort.sort(sortTask)));
  }

  function sortTask(a: ITodoItem, b: ITodoItem) {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  }

  useEffect(() => {
    const arrTasks: Array<ITodoItem> = JSON.parse(
      localStorage.getItem("todoList")!
    );
    if (arrTasks?.length > 0) {
      dispatch(loadTasks(arrTasks));
    }
  }, []);

  return (
    <BodyBlock>
      {typeTask == 0 &&
        itemsList.map((elem, index) => {
          return (
            <TodoItem
              item={elem}
              key={index}
              type={0}
              dragStart={dragStartHandler}
              drop={dragDropHandler}
              draggable={true}
            />
          );
        })}

      {typeTask == 1 &&
        trueTaskList.map((elem, index) => {
          return (
            <TodoItem
              item={elem}
              key={index}
              type={1}
              dragStart={dragStartHandler}
              drop={dragDropHandler}
              draggable={true}
            />
          );
        })}

      {typeTask == 2 &&
        falseTaskList.map((elem, index) => {
          return (
            <TodoItem
              item={elem}
              key={index}
              type={2}
              dragStart={dragStartHandler}
              drop={dragDropHandler}
              draggable={true}
            />
          );
        })}
    </BodyBlock>
  );
};

export default TodoBody;

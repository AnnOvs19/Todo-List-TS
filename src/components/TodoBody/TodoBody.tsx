import React, { FC } from "react";
import { BodyBlock } from "./todoBody.style";
import { useDispatch, useSelector } from "react-redux";
import {
  getFalseTasks,
  getItems,
  getTrueTasks,
  getTypeFilters,
} from "../../store/todoSlice";
import TodoItem from "../TodoItem/TodoItem";

const TodoBody: FC = () => {
  const itemsList = useSelector(getItems);
  const trueTaskList = useSelector(getTrueTasks);
  const falseTaskList = useSelector(getFalseTasks);
  const typeTask = useSelector(getTypeFilters);

  // const dispatch = useDispatch();

  console.log(itemsList);
  console.log(trueTaskList);
  console.log(falseTaskList);

  return (
    <BodyBlock>
      {typeTask == 0 &&
        itemsList.map((elem, index) => {
          return <TodoItem item={elem} key={index} type={0} />;
        })}

      {typeTask == 1 &&
        trueTaskList.map((elem, index) => {
          return <TodoItem item={elem} key={index} type={1} />;
        })}

      {typeTask == 2 &&
        falseTaskList.map((elem, index) => {
          return <TodoItem item={elem} key={index} type={2} />;
        })}
    </BodyBlock>
  );
};

export default TodoBody;

import React, { FC } from "react";
import { BodyBlock } from "./todoBody.style";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../store/todoSlice";
import TodoItem from "../TodoItem/TodoItem";

const TodoBody: FC = () => {
  const itemsList = useSelector(getItems);
  //   const dispatch = useDispatch();

  return (
    <BodyBlock>
      {itemsList.map((elem, index) => {
        return <TodoItem item={elem} key={index} />;
      })}
    </BodyBlock>
  );
};

export default TodoBody;

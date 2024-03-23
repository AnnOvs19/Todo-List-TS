import React, { FC, useState } from "react";
import {
  HeadBlock,
  HeadButton,
  HeadInput,
  HeadInputBox,
} from "./todoHead.style";
import { useDispatch } from "react-redux";
import { ITodoItem } from "../../interfaces/todoItem";
import { appendItem } from "../../store/todoSlice";
import { ButtonText } from "../../globalStyle";

const TodoHead: FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  function addItem() {
    if (inputValue?.length > 0) {
      const newItem: ITodoItem = {
        id: new Date().toLocaleTimeString(),
        status: false,
        text: inputValue,
      };

      setInputValue("");
      dispatch(appendItem(newItem));
    }
  }

  return (
    <HeadBlock>
      <HeadInputBox>
        <HeadInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a task"
        />
      </HeadInputBox>

      <HeadButton onClick={addItem}>
        <ButtonText>Add</ButtonText>
      </HeadButton>
    </HeadBlock>
  );
};

export default TodoHead;

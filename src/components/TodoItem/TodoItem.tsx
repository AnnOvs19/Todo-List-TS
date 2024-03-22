import React, { FC, useState } from "react";
import { ITodoItem } from "../../interfaces/todoItem";
import {
  ButtonPanel,
  CheckboxCheckmark,
  CheckboxContainer,
  CheckboxInput,
  CheckmarkIcon,
  ControlPanel,
  ItemBlock,
  ItemText,
  PanelImage,
} from "./todoItem.style";
import edit from "../../assets/edit.svg";
import basket from "../../assets/basket.svg";

interface IProps {
  item: ITodoItem;
  type?: number;
}

const TodoItem: FC<IProps> = ({ item, type }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <ItemBlock>
      <ItemText>{item.text}</ItemText>
      <ControlPanel>
        <CheckboxContainer>
          <CheckboxInput
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
          />
          <CheckboxCheckmark>
            {isChecked && <CheckmarkIcon />}
          </CheckboxCheckmark>
        </CheckboxContainer>
        <ButtonPanel>
          <PanelImage src={edit} alt="#" />
        </ButtonPanel>
        <ButtonPanel>
          <PanelImage src={basket} alt="#" />
        </ButtonPanel>
      </ControlPanel>
    </ItemBlock>
  );
};

export default TodoItem;

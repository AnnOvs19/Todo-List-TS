import React, { FC, useState } from "react";
import { ITodoItem } from "../../interfaces/todoItem";
import {
  ButtonPanel,
  CheckboxCheckmark,
  CheckboxContainer,
  CheckboxInput,
  CheckmarkIcon,
  ControlPanel,
  EditTextBox,
  EditTextInput,
  ItemBlock,
  ItemText,
  ItemTextEdit,
  PanelImage,
  SaveButton,
} from "./todoItem.style";
import edit from "../../assets/edit.svg";
import basket from "../../assets/basket.svg";
import { useDispatch } from "react-redux";
import { deleteItem, editTask, toggleState } from "../../store/todoSlice";
import { ButtonText } from "../../globalStyle";

interface IProps {
  item: ITodoItem;
  type?: number;
}

const TodoItem: FC<IProps> = ({ item, type }) => {
  const [taskState, setTaskState] = useState<boolean>(item.status);
  const [editActive, setEditActive] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(item.text);
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  function toggleCheckbox() {
    setIsChecked(!isChecked);
  }

  function toggleStatus() {
    dispatch(toggleState(item.id));

    if (taskState) {
      setTaskState(false);
    } else {
      setTaskState(true);
    }
  }

  function toggleEdit() {
    if (editActive) {
      setEditActive(false);
    } else {
      setEditActive(true);
    }
  }

  function deleteItems() {
    dispatch(deleteItem(item.id));
  }

  function saveItems() {
    const editItem: ITodoItem = {
      id: item.id,
      status: item.status,
      text: editValue,
    };

    dispatch(editTask(editItem));
    setEditActive(false);
  }

  return (
    <ItemBlock>
      {editActive ? (
        <ItemTextEdit>
          <EditTextBox>
            <EditTextInput
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          </EditTextBox>
          <SaveButton onClick={saveItems}>
            <ButtonText>Save</ButtonText>
          </SaveButton>
        </ItemTextEdit>
      ) : (
        <ItemText>{item.text}</ItemText>
      )}

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
          <PanelImage src={edit} alt="#" onClick={toggleEdit} />
        </ButtonPanel>
        <ButtonPanel>
          <PanelImage src={basket} alt="#" onClick={deleteItems} />
        </ButtonPanel>
      </ControlPanel>
    </ItemBlock>
  );
};

export default TodoItem;

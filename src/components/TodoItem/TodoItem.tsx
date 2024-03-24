import React, { DragEvent, FC, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  editTask,
  getItems,
  toggleState,
} from "../../store/todoSlice";
import { ButtonText } from "../../globalStyle";

interface IProps {
  item: ITodoItem;
  type?: number;
  draggable?: boolean;
  dragStart: (e: DragEvent<HTMLDivElement>, item: ITodoItem) => void;
  drop: (e: DragEvent<HTMLDivElement>, item: ITodoItem) => void;
}

const TodoItem: FC<IProps> = ({ item, type, draggable, dragStart, drop }) => {
  const [taskState, setTaskState] = useState<boolean>(item.status);
  const [editActive, setEditActive] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(item.text);
  const [isChecked, setIsChecked] = useState<boolean>(item.status);
  const [disableButton, setDisableButton] = useState<boolean>(false);

  const allTasks = useSelector(getItems);

  const dispatch = useDispatch();

  function toggleCheckbox() {
    setIsChecked(!isChecked);
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
      order: allTasks.length + 1,
    };

    dispatch(editTask(editItem));
    setEditActive(false);
  }

  useEffect(() => {
    if (editValue.length === 0) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [editValue]);

  return (
    <ItemBlock
      draggable={draggable}
      onDragStart={(e) => dragStart(e, item)}
      onDrop={(e) => drop(e, item)}
      onDragOver={(e) => e.preventDefault()}
    >
      {editActive ? (
        <ItemTextEdit>
          <EditTextBox>
            <EditTextInput
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          </EditTextBox>
          <SaveButton
            onClick={saveItems}
            state={disableButton}
            disabled={disableButton}
          >
            <ButtonText>Save</ButtonText>
          </SaveButton>
        </ItemTextEdit>
      ) : (
        <ItemText primary={taskState}>{item.text}</ItemText>
      )}

      <ControlPanel>
        <CheckboxContainer>
          <CheckboxInput
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
            placeholder="Edit the text"
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

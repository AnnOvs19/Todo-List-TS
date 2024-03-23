import React, { FC } from "react";
import { FilterBlock, FilterButton } from "./todoFilter.style";
import { ButtonText } from "../../globalStyle";
import { useDispatch } from "react-redux";
import {
  clearFilter,
  filterFalseTasks,
  filterTrueTasks,
} from "../../store/todoSlice";

const TodoFilter: FC = () => {
  const dispatch = useDispatch();

  function showAllTask() {
    dispatch(clearFilter());
  }

  function showСompleted() {
    dispatch(filterTrueTasks(true));
  }

  function showNotCompleted() {
    dispatch(filterFalseTasks(false));
  }

  return (
    <FilterBlock>
      <FilterButton onClick={showAllTask}>
        <ButtonText>All Task</ButtonText>
      </FilterButton>

      <FilterButton onClick={showСompleted}>
        <ButtonText>Сompleted</ButtonText>
      </FilterButton>

      <FilterButton onClick={showNotCompleted}>
        <ButtonText>Not completed</ButtonText>
      </FilterButton>
    </FilterBlock>
  );
};

export default TodoFilter;

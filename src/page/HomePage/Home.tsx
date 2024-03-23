import React from "react";
import { SHome } from "./home.style";
import TodoHead from "../../components/TodoHead/TodoHead";
import { Title } from "../../globalStyle";
import TodoBody from "../../components/TodoBody/TodoBody";
import TodoFilter from "../../components/TodoFilter/TodoFilter";

const Home = () => {
  return (
    <SHome>
      <Title>Todo List</Title>
      <TodoHead />
      <TodoBody />
      <TodoFilter />
    </SHome>
  );
};

export default Home;

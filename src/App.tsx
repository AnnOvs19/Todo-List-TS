import React from "react";
import Home from "./page/HomePage/Home";
import { GlobalStyle, SApp } from "./globalStyle";

function App() {
  return (
    <SApp>
      <GlobalStyle />
      <Home />
    </SApp>
  );
}

export default App;

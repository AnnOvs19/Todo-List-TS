import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color:#f1ffe8;
  font-family: "Hind Vadodara", sans-serif;
}
`;

export const SApp = styled.main`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  color: black;
`;

export const TextMedium = styled.p`
  font-size: 16px;
  transition: 0.4s;
  font-weight: 400;
  color: black;
`;

export const ButtonText = styled.p`
  font-family: "Hind Vadodara", sans-serif;
`;

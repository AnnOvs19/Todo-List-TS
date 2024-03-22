import styled from "styled-components";

export const HeadBlock = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const HeadInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 455px;
  height: 39px;
  border: 1px solid gray;
`;

export const HeadInput = styled.input`
  width: 96%;
  height: 85%;
  border: none;
  outline: none;
`;

export const HeadButton = styled.button`
  border: none;
  display: flex;
  background: #337ab7;
  font-size: 20px;
  line-height: 20px;
  padding: 10px 25px;
  color: white;
  background-color: #325c19;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transition: 0.4s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12), 0 10px 13px rgba(0, 0, 0, 0.12);
  }
`;

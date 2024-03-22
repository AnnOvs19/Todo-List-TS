import styled from "styled-components";

interface IPropText {
  primary?: boolean;
}

export const ItemBlock = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.p<IPropText>`
  color: ${(props) => (props.primary ? "#2c5215" : "black")};
  font-size: 20px;
  transition: 0.4s;
  font-weight: 400;
`;

export const ControlPanel = styled.div`
  display: flex;
  gap: 5px;
`;

export const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  transition: 0.4s;
  margin-right: 5px;
`;

export const CheckboxInput = styled.input`
  display: none;
`;

export const CheckboxCheckmark = styled.span`
  position: relative;
  display: inline-block;
  width: 27px;
  height: 27px;
  border: 1px solid #333;
  transition: 0.4s;
`;

export const CheckmarkIcon = styled.span`
  position: absolute;
  top: 3px;
  left: 8px;
  width: 9px;
  height: 14px;
  border-style: solid;
  border-color: green;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  transition: 0.4s;
`;

export const PanelImage = styled.img`
  width: 31px;
  height: 31px;
`;

export const ButtonPanel = styled.button`
  margin-top: -3px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 32px !important;
`;

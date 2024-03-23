import styled from "styled-components";
import { HeadButton } from "../TodoHead/todoHead.style";

export const FilterBlock = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterButton = styled(HeadButton)`
  justify-content: center;
  font-size: 18px;
  line-height: 100%;
  padding: 12px 10px;
  width: 185px;
`;

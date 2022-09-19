import styled from "styled-components";

export const MainHeader = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 1rem;
  text-align: left;
`;

export const Divider = styled.hr`
  border: 1px solid grey;
  margin: 1rem 0;
`;

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  height: 30px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  z-index: 1;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  // border: 1px solid red;
  margin-left: -31rem;
`;

export const StyledButton = styled.button`
  background-color: #3b7cff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 10px;
  height: 30px;
  width: 160px;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

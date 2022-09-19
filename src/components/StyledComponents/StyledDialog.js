import styled from "styled-components";

export const StyledDialog = styled.div`
  background-color: white;
  padding: 20px;
`;

export const StyledLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const StyledInput = styled.input`
  width: 32%;
  padding: 12px 20px;
  margin: 8px 3px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  outline: none;
  &:focus {
    border: 3px solid #555;
  }
`;

export const StyledSelect = styled.select`
  width: 32%;
  padding: 12px 20px;
  margin: 8px 3px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: 3px solid #555;
  }
  option {
    font-size: 1rem;
    background-color: white;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: #3b7cff;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

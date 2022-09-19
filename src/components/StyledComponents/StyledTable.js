import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TableTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #000;
  margin: 0;
  text-align: left;
`;

export const SearchBar = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid #cccccc;
  border-radius: 20px;
  padding: 0 10px;
  margin-left: 10px;
  &:focus {
    outline: none;
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 80vw;
  margin-bottom: 2rem;
  th {
    // border: 1px solid #cccccc;
    padding: 10px;
    text-align: left;
    width: 20%;
    background-color: #e7e7e7;
  }
  td {
    border-bottom: 1px solid #cccccc;
    padding: 10px;
    text-align: left;
    font-weight: 600;
  }
`;

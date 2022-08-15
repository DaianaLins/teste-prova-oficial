import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(3, 7, 26);
  font-size: 20px;
  color: #d05d1b;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  > svg {
    margin: 0 20px;
  }
  &:hover {
    background-color: #1c1717;
  }
`;
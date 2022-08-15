import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: rgb(3, 7, 26);
  > svg {
    position: fixed;
    width: 40px;
    height: 40px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
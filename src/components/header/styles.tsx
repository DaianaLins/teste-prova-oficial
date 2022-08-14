import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: black; 
  > svg {
    position: fixed;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
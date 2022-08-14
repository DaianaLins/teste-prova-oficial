import styled from 'styled-components';

interface sidebarProps{
  sidebar: boolean;
}

export const Container = styled.div<sidebarProps>`
  background-color: black;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 200px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 200px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
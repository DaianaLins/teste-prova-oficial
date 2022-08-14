import { lighten } from 'polished';
import styled from 'styled-components';
export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 600px;
  margin: 0 auto;
  display: inline-flex;
  justify-content: space-between;
  align-items: rih;

  img {
    padding-right: 20px;
    max-width: 25%;
    height: auto;
  }

  nav {
    display: flex;
    align-items: center;

    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const Navigation = styled.div`
  padding-left: 30px;
  height: 32px;
  width: 5%;
  border-left: 1px solid #ddd;

  display: flex;
  align-items: flex-start;
  a {
    margin-right: 20px;
    font-size: 15px;
    font-weight: bold;
    color: #999;
    transition: color 0.5s;

    &:hover {
      color: #7159c1;
    }

    &:active {
      color: #7159c1;
    }
  }
`;

export const Profile = styled.div`
  display: inline-flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;
    display: block;
    background: yellow;

    strong {
      display: inline;
      align-items: flex-end;
      color: #333;
    }

    button {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: red;
      background: transparent;
      border: 0;
    }
  }
`;
import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  h1{
    text-align: center;
    justify-content: flex-start;
    padding: 25px;
    display: flex;
    color: #d05d1b;
    margin: 4rem 0;

  }
`

export const MovieList = styled.ul`
  list-style-type: style none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;

`

export const Movie = styled.li`
  display: flex;
  flex-direction:column;
  align-items: center;
  
  img{
      width: 180px;
      border-radius: 1rem;
      border-color:#d05d1b;
      box-shadow: 0 0 20px 3px;
      margin-bottom: 2rem;
    }

    span{
      color: #d05d1b;
      font-weight:bold;
      text-align: center;
      font-size: 120%;
    }

    a{
      color: #d05d1b;
      transition: all 0.3s;
    }

    a:hover{
      transform: scale(1.1);
      filter: brightness(1.2);
      
    }   
`
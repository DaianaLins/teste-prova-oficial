import styled from "styled-components";

export const Container = styled.div`
  float:left;  

  img{
    height: 650px;
    margin-left: 250px;  
    display: flex;    
    padding-top: 65px;
    border-radius: 1rem;
    transition: 0.5s; 
  }
  img:hover{
      transform: scale(1.1);
      filter: brightness(1.2);
      transition: 0.5s;
      
    } 
`
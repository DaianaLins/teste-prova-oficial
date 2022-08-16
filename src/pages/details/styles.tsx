import styled from "styled-components";

export const Container = styled.div`
  float:left;  

  img{
    height: 530px;
    margin-left: 230px;  
    display: flex;    
    margin-top: 65px;
    box-shadow: 0 0 20px 3px;
    border-color:#d05d1b;
    border-radius: 1rem;
    transition: 0.5s; 
  }

  img:hover{
      transform: scale(1.1);
      filter: brightness(1.2);
      transition: 0.5s;
      
    } 
`
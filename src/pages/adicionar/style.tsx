import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    height: 450px;
    margin-left: 10px;
    margin-right: 30px;  
    /* padding-right: 30px; */
    display: flex;  
    width: 25%;  
    /* padding-top: 15px; */
    border-radius: 5rem;
    box-shadow: 0 0 20px 3px;
    /* transition: 0.5s;  */
    border-color:#d05d1b;
  }
  
`;

export const FormAd = styled.div`
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input{
    width: 600px;
    height: 50px;
    margin-bottom: 20px;
    border-radius: 10px;
    border-color: #d05d1b;
    color: white;
    -ms-input-placeholder{font-size:16px;}
    background-color: rgb(3, 7, 26);
    cursor: pointer;
  }

  input[type='file'] {
    ::-webkit-file-upload-button {
    background: #d05d1b;
    border-color: #d05d1b;
    color: white;
    border-radius:10px;
    padding: 1em;
    cursor: pointer;
  }
  }
  input[type='number'] {
    width: 100px;
    height: 50px;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 10px;
    border-color: #d05d1b;
    color: white;
  }

  textarea{
    width: 600px;
    height: 90px;
    margin-bottom: 20px;
    border-radius: 5px;
    border-color: #d05d1b;
    color: white;
    background-color: rgb(3, 7, 26);
    resize: none;
  }

  button{
  border-radius: 10px;
  height: 40px;
  width: 100px;
  background-color: #d05d1b;
  border-color: #d05d1b;
  color: white;
  margin-left: 20px;
  cursor: pointer;
  }
 
`;
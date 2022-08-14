import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
    background-color: black;
    cursor: pointer;
  }

  input[type='file'] {
    ::-webkit-file-upload-button {
    background: #d05d1b;
    color: white;
    border-radius:10px;
    padding: 1em;
    cursor: pointer;
  }
  }
  
  textarea{
    width: 600px;
    height: 90px;
    margin-bottom: 20px;
    border-radius: 5px;
    border-color: #d05d1b;
    color: white;
    background-color: black;
    resize: none;
  }

  button{
  border-radius: 10px;
  height: 40px;
  width: 100px;
  background-color: #d05d1b;
  color: white;
  margin-left: 20px;
  cursor: pointer;
  }

`;
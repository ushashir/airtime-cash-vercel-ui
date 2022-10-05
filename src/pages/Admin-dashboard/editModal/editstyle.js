import styled from "styled-components";

export const EditStyle = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .mymodal {
    width: 562px;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
  }

  .acctsuccess {
    border-bottom: 1px solid #d9d9d9;
  }
  .sucestext {
    margin-top: 5%;
    margin-bottom: 3%;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #012a4a;
  }

  input {
    border: 1px solid #d9d9d9;
    padding: 0.7rem;
    width: 100%;
    margin-top: 1%;
    margin-bottom: 7%;
    outline: none;
  }

  #amount-receive {
    background: rgba(0, 0, 0, 0.05);
    border: none;
  }

  .texts {
    /* margin: 0 4rem; */
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }

  .btnnn {
    cursor: pointer;
    display: flex;
    padding: 16.5px 71px;
    align-self: center;
    text-align: center;
    margin: auto;
    background: linear-gradient(107.45deg, #de3d6d 47.58%, #f5844c 104.23%);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #ffffff;
    border: none;
  }

  form {
    padding: 6% 10%;
  }
`;

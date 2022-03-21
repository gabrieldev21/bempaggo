import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #727b88;
`;

export const PaperForm = styled.form`
  height: 90vh;
  max-width: 600px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 10px 5px 5px #484848;
`;

export const WrapperForm = styled.div`
  padding: 0px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input {
    margin: 8px 0px;
  }
`;

export const CheckBoxContainer = styled.label`
  input {
    margin-right: 8px;
  }
  margin-bottom: 8px;
`;

export const QuantifyItem = styled.div`
  margin-top: 12px;
  button {
    padding: 4px 10px;
    font-size: 22px;
  }

  button:first-child {
    padding: 4px 13px;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  button:last-child {
    margin-left: 8px;
  }
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    margin: 10px 0px;
  }
  textarea {
    height: 120px;
    resize: none;
    padding: 8px;
  }
`;

export const FooterForm = styled.footer`
  background-color: #f3f3f3;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  Button {
    margin: 30px;
  }
`;

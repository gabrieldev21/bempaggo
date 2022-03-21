import styled from "styled-components";

export const ContainerCheckout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #727b88;
`;

export const WrapperCheckout = styled.div`
  height: 90vh;
  max-width: 600px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 10px 5px 5px #484848;

  header {
    display: flex;
    align-self: stretch;
  }
`;

export const UList = styled.ul`
  font-size: 21px;
  font-weight: bold;
  color: rgba(11, 8, 202, 0.719);
  list-style-type: none;

  li:first-child {
    margin-top: 24px;
  }
  li {
    margin-top: 8px;
    font-weight: normal;
    color: #0d0d0d;
  }
`;

export const FooterCheckout = styled.div`
  background-color: #f3f3f3;
  height: 100px;
  display: flex;
  align-self: stretch;
  justify-content: flex-end;
  Button {
    margin: 30px;
  }
`;

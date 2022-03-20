import styled from "styled-components";

export const ContainerCheckout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #F8F8FF;
`;

export const WrapperCheckout = styled.div`
  height: 90vh;
  width: 100vw;
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  display: flex;
  justify-content: center;
  align-items: flex-end;

  height: 40vh;
  button:last-child {
    margin-left: 12px;
  }
`;

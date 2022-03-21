import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  color: #fff;
  padding: 12px;
  background-color: rgba(11, 8, 202, 0.719);
  min-height: 150px;
  font-size: 24px;
  border-bottom-left-radius: 250px 40px;
  border-bottom-right-radius: 300px 100px;
  position: relative;
  span {
    width: 200px;
    margin: 20px 20px 0px 45px;
  }
  img {
    width: 150px;
    height: 145px;
    opacity: 0.4;
    position: absolute;
    right: 80px;
  }
`;
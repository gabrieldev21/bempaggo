import { HeaderStyled } from "./styleds";

import boxImg from "../../assets/images/boxshaddow.png";

const Header = () => {
  return (
    <HeaderStyled>
      <span>
        Formulário para compra de <strong>pacote de adesivos</strong>
      </span>
      <img src={boxImg} alt="boxImage" />
    </HeaderStyled>
  );
};

export default Header;

import { useLocation, useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { LocationParams } from "./type";
import {
  ContainerCheckout,
  FooterCheckout,
  UList,
  WrapperCheckout,
} from "./styleds";
import Header from "../../components/Header";

export default function Checkout() {
  const navigate = useNavigate();
  const { state } = useLocation() as LocationParams;

  return (
    <ContainerCheckout>
      <WrapperCheckout>
        <Header />

        <UList>
          Produto
          {state?.tagNames.map((tagName) => (
            <li key={tagName}>
              {" "}
              {state?.qttTag} x {tagName}
            </li>
          ))}
        </UList>

        <UList>
          Comentário
          <li>{state?.comment}</li>
        </UList>

        <FooterCheckout>
          <Button type="button" onClick={() => navigate("/")}>
            Finalizar
          </Button>
        </FooterCheckout>
      </WrapperCheckout>
    </ContainerCheckout>
  );
}

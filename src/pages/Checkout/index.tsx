import { useLocation, useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { LocationParams } from "./type";
import {
  ContainerCheckout,
  FooterCheckout,
  UList,
  WrapperCheckout,
  WrapperContent,
} from "./styleds";

export default function Checkout() {
  const navigate = useNavigate();
  const { state } = useLocation() as LocationParams;

  return (
    <ContainerCheckout>
      <WrapperCheckout>
        <WrapperContent>
          <UList>
            Produto
            {state?.tagNames.map((tagName) => 
              <li key={tagName}> {state?.qttTag} x {tagName}</li>
            )}
          </UList>

          <UList>
            Comentário
            <li>{state?.comment}</li>
          </UList>
        </WrapperContent>

        <FooterCheckout>
          <Button type="button" onClick={() => navigate("/")}>
            Finalizar
          </Button>
        </FooterCheckout>
      </WrapperCheckout>
    </ContainerCheckout>
  );
}

import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import {
  CheckBoxContainer,
  Comments,
  Container,
  FooterForm,
  HeaderForm,
  WrapperForm,
  PaperForm,
  QuantifyItem,
} from "./styleds";

export default function Home() {
  const [qttTag, setQttTag] = useState(1);
  const [tagNames, setTagNames] = useState<string[]>([]);
  const tagList = ["React", "Angular", "Vue"];
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleChangeTagNames = (evt: ChangeEvent<HTMLInputElement>) => {
    const { target } = evt;
    if (target.checked) {
      setTagNames([...tagNames, target.value]);
    } else {
      setTagNames(tagNames.filter((tagName) => tagName !== target.value));
    }
  };

  const handleChangeComment = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // console.log({ tagNames, qttTag, comment });
    navigate("/checkout", { state: { tagNames, qttTag, comment } });
  };

  return (
    <Container>
      <PaperForm onSubmit={handleSubmit}>
        <HeaderForm>
          <span>
            Formulário para compra de <strong>pacote de adesivos</strong>
          </span>
        </HeaderForm>

        <WrapperForm>
          <strong>Quais adesivos:</strong>

          {tagList.map((tag) => (
            <CheckBoxContainer key={tag}>
              <input
                type="checkbox"
                name="tagNames"
                value={tag}
                onChange={handleChangeTagNames}
              />
              {tag}
            </CheckBoxContainer>
          ))}

          <strong>Quantos adevisos de cada?</strong>

          <QuantifyItem>
            <Button
              type="button"
              onClick={() => qttTag > 1 && setQttTag(qttTag - 1)}
            >
              -
            </Button>
            <span aria-label="quantify">{qttTag}</span>
            <Button type="button" onClick={() => setQttTag(qttTag + 1)}>
              +
            </Button>
          </QuantifyItem>

          <Comments>
            <strong>Comentários?</strong>
            <textarea
              placeholder="Alguma dúvida? Recado?"
              value={comment}
              onChange={handleChangeComment}
            />
          </Comments>
        </WrapperForm>

        <FooterForm>
          <Button type="submit">ENVIAR</Button>
        </FooterForm>
      </PaperForm>
    </Container>
  );
}

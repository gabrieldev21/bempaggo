import { Normalize } from "styled-normalize";
import GlobalStyle from "./components/Fonts";
import MyRoutes from "./routes";

function App() {
  return (
    <>
      <MyRoutes />
      <Normalize />
      <GlobalStyle />
    </>
  );
}

export default App;

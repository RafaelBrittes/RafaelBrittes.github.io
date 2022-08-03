import { ThemeProvider } from "styled-components";
import Home from "./components/home/home.component";
import globalThemeStyles from "./globalTheme.styles";

function App() {
  return (
    <>
      <ThemeProvider theme={globalThemeStyles}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;

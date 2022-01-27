import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import ligth from "./styles/themes/ligth";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState('theme', ligth);

  const toggleTheme = () => {
    setTheme(theme.title === 'ligth' ? dark : ligth);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
}

export default App;

import React, {useContext } from "react";
import SettingsContext from "src/context/SettingsContext";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "src/theme";
import Header from "src/component/TopBar";
import Index from 'src/pages/HomePage/index'


function App() {
  const themeSeeting = useContext(SettingsContext);
  const theme = createTheme({
    theme: themeSeeting.settings.theme,
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header />
      <Index/>
      </ThemeProvider>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TabPanel from "./components/Panel/TabPanel";

function App() {
  const theme = createTheme({});

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TabPanel></TabPanel>
      </ThemeProvider>
    </div>
  );
}

export default App;

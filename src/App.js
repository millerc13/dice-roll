import React, { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
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

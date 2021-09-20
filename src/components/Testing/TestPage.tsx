import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import CssBaseline from "@mui/material/CssBaseline";
import Cover from "../assets/images/Mac_Miller_Live_from_Space.jpg";
import TestContainer from "./TestContainer/TestContainer";
import Test from "./All_Tests/TestDeviation";
import Stack from "@mui/material/Stack";
import TestInterface from "./All_Tests/TestInterface";
// Testing page
export const TestPage = () => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "",
            height: "500vh",
            padding: "20px",
          }}
        >
          <Stack spacing={2}>
            {/* <TestContainer></TestContainer> */}
            <Test
              testTitle="Test Case 1: Testing Deviation for 100,000 Rolls of 1 Dice"
              testInput="Dice: 1-5"
              testExpectedOutput={0.006}
            ></Test>

            <Test
              testTitle="Test Case 2: Testing Deviation for 100,000 Rolls of 2 Dice"
              testInput="Dice: 1-5"
              testExpectedOutput={0.003}
            ></Test>
            {/* <Test
              testTitle="Test Case 1: Testing Deviation for 100,000 Rolls"
              testInput="Dice: 1-5"
              testExpectedOutput="4"
            ></Test>
            <Test
              testTitle="Test Case 1: Testing Deviation for 100,000 Rolls"
              testInput="Dice: 1-5"
              testExpectedOutput="4"
            ></Test>
            <Test
              testTitle="Test Case 1: Testing Deviation for 100,000 Rolls"
              testInput="Dice: 1-5"
              testExpectedOutput="4"
            ></Test>
            <Test
              testTitle="Test Case 1: Testing Deviation for 100,000 Rolls"
              testInput="Dice: 1-5"
              testExpectedOutput="4"
            ></Test> */}
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default TestPage;

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
import TestContainer from "./Chart/TestContainer";
import Test from "./All_Tests/TestDeviation";
import Stack from "@mui/material/Stack";
import TestInterface from "./All_Tests/TestInterface";
// Testing page
export const TestPage:React.FC = () => {
  const theme = useTheme();
  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "",
            height: "fit-content",
            padding: "20px",
          }}
        >
          <Stack spacing={2}>
            <Test          
              testTitle="Test Case 1: Testing Deviation for 1,000 Rolls of 1 Dice"
              testInputDice="Input 1 Here"
              testInputRolls="Input 1,000 Here"
            ></Test>

            <Test             
              testTitle="Test Case 2: Testing Deviation for 1,000 Rolls of 2 Dice"
              testInputDice="Input 2 Here"
              testInputRolls="Input 1,000 Here"

            ></Test>
            <Test             
              testTitle="Test Case 3: Testing Deviation for 1,000 Rolls of 3 Dice"
              testInputDice="Input 3 Here"
              testInputRolls="Input 1,000 Here"

            ></Test>
            <Test             
              testTitle="Test Case 4: Testing Deviation for 1,000 Rolls of 4 Dice"
              testInputDice="Input 4 Here"
              testInputRolls="Input 1,000 Here"

            ></Test>
            <Test             
              testTitle="Test Case 5: Testing Deviation for 1,000 Rolls of 5 Dice"
              testInputDice="Input 5 Here"
              testInputRolls="Input 10,000 Here"

            ></Test>
            <Test          
              testTitle="Test Case 6: Testing Deviation for 10,000 Rolls of 1 Dice"
              testInputDice="Input 1 Here"
              testInputRolls="Input 10,000 Here"

            ></Test>

            <Test             
              testTitle="Test Case 7: Testing Deviation for 10,000 Rolls of 2 Dice"
              testInputDice="Input 2 Here"
              testInputRolls="Input 10,000 Here"

            ></Test>
            <Test             
              testTitle="Test Case 8: Testing Deviation for 10,000 Rolls of 3 Dice"
              testInputDice="Input 3 Here"
              testInputRolls="Input 10,000 Here"

            ></Test>
            <Test             
              testTitle="Test Case 9: Testing Deviation for 10,000 Rolls of 4 Dice"
              testInputDice="Input 4 Here"
              testInputRolls="Input 10,000 Here"

            ></Test>
            <Test             
              testTitle="Test Case 10: Testing Deviation for 10,000 Rolls of 5 Dice"
              testInputDice="Input 5 Here"
              testInputRolls="Input 10,000 Here"
            ></Test>
            <Test          
              testTitle="Test Case 11: Testing Deviation for 100,000 Rolls of 1 Dice"
              testInputDice="Input 1 Here"
              testInputRolls="Input 100,000 Here"

            ></Test>

            <Test             
              testTitle="Test Case 12: Testing Deviation for 100,000 Rolls of 2 Dice"
              testInputDice="Input 2 Here"
              testInputRolls="Input 100,000 Here"

            ></Test>
            <Test             
              testTitle="Test Case 13: Testing Deviation for 100,000 Rolls of 3 Dice"
              testInputDice="Input 3 Here"
              testInputRolls="Input 100,000 Here"

            ></Test>
            <Test             
              testTitle="Test Case 14: Testing Deviation for 100,000 Rolls of 4 Dice"
              testInputDice="Input 4 Here"
              testInputRolls="Input 100,000 Here"

            ></Test>
            <Test             
              testTitle="Test Case 15: Testing Deviation for 100,000 Rolls of 5 Dice"
              testInputDice="Input 5 Here"
              testInputRolls="Input 100,000 Here"
            ></Test>
            
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default TestPage;

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
import Cover from "../../assets/images/Mac_Miller_Live_from_Space.jpg";
import DataChart from "./Chart/DataChart";
import { ThemeProvider } from "@mui/private-theming";
import { generateTestData } from "./Chart/TestData";
import { TestingResults } from "./Chart/TestData";
import Test from "../All_Tests/TestDeviation";

import { CardActionArea, CardActions } from "@mui/material";

export const TestContainer = () => {
  const theme = useTheme();
  const testData: TestingResults = generateTestData(5);
  const [numberOfDice, setNumberOfDice] = React.useState<number>(1);
  // Changes Dice and slider
  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setNumberOfDice(newValue as number);
  };
  const [tests, setTests] = React.useState<TestingResults>(testData);

  const handleTestData = () => {
    setTests(generateTestData(numberOfDice));
  };

  return (
    <Card sx={{ minWidth: 900 }}>
        <CardMedia>
          <DataChart
            dice1Total={tests.dice1Total}
            dice2Total={tests.dice2Total}
            dice3Total={tests.dice3Total}
            dice4Total={tests.dice4Total}
            dice5Total={tests.dice5Total}
            dice6Total={tests.dice6Total}
          ></DataChart>
        </CardMedia>
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            Visualize Deviation
          </Typography>
          <Typography sx={{color:"#9e009e"}} gutterBottom  component="div">
          <code>{numberOfDice}</code> dice over 100,000 Rolls ({numberOfDice * 100000}) Rolls          </Typography>
          <Slider
                  min={1}
                  max={5}
                  value={numberOfDice}
                  onChange={handleChangeSlider}
                  sx={{
                    width: "50%",
                    borderColor: "divider",
                    transitionDuration: "0s",
                    msTransition: "false"
                  }}
                />
                </CardContent>
      
      <CardActions>
        <Button onClick={handleTestData} size="small" color="primary">
          Update Graph
        </Button>
      </CardActions>

    </Card>
  );
};

export default TestContainer;

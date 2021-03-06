import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import CssBaseline from "@mui/material/CssBaseline";
import Cover from "../../assets/images/Mac_Miller_Live_from_Space.jpg";
import DataChart from "./DataChart";
import { ThemeProvider } from "@mui/private-theming";
import { generateTestData } from "../TestData";
import { TestingResults } from "../TestData";
import Test from "../All_Tests/TestDeviation";
import { Container } from "@material-ui/core";
import { CardActionArea, CardActions } from "@mui/material";

export const TestContainer = () => {
  const theme = useTheme();
  const testData: TestingResults = generateTestData(5, 1000);
  const [numberOfDice, setNumberOfDice] = React.useState<number>(1);
  const [numberOfRolls, setNumberOfRolls] = React.useState<number>(10000);

  // Changes Dice and slider
  const handleChangeDice = (event: Event, newValue: number | number[]) => {
    setNumberOfDice(newValue as number);
  };

  const handleChangeRolls = (event: Event, newValue: number | number[]) => {
    setNumberOfRolls(newValue as number);
  };
  const [tests, setTests] = React.useState<TestingResults>(testData);

  const handleTestData = () => {
    setTests(generateTestData(numberOfDice, numberOfRolls));
  };

  return (
    <Container>
      <CardMedia style={{}}>
        <DataChart
          dice1Total={tests.dice1Total}
          dice2Total={tests.dice2Total}
          dice3Total={tests.dice3Total}
          dice4Total={tests.dice4Total}
          dice5Total={tests.dice5Total}
          dice6Total={tests.dice6Total}
        ></DataChart>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Visualize Deviation
        </Typography>
        <Typography sx={{ color: "#fff" }} gutterBottom component="div">
          <code>{numberOfDice}</code> dice over 100,000 Rolls (
          {numberOfDice * numberOfRolls}) Rolls{" "}
        </Typography>
        <br />
        <Typography sx={{ color: "#fff" }} gutterBottom component="div">
          # Of Dice
        </Typography>
        <Slider
          min={1}
          max={5}
          value={numberOfDice}
          onChange={handleChangeDice}
          sx={{
            width: "50%",
            borderColor: "divider",
            transitionDuration: "0s",
            msTransition: "false",
          }}
        />
        <div>
          <br />
          <Typography sx={{ color: "#fff" }} gutterBottom component="div">
            # Of Rolls
          </Typography>
          <Slider
            min={1}
            max={1000000}
            value={numberOfRolls}
            onChange={handleChangeRolls}
            sx={{
              width: "50%",
              borderColor: "divider",
              transitionDuration: "0s",
              msTransition: "false",
            }}
          />
        </div>
      </CardContent>

      <CardActions>
        <Button onClick={handleTestData} size="small" color="primary">
          Update Graph
        </Button>
      </CardActions>
    </Container>
  );
};

export default TestContainer;

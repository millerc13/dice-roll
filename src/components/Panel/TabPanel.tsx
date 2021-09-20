import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RollDice from "../../utils/RollDice";
import RollInterface from "../../utils/RollInterface";
import DiceBoard from "../Dice/DiceBoard";
import "./TabPanel.css";
import TestPage from "../Testing/TestPage";
declare type resultCallback = (myArgument: RollInterface[]) => void;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [numberOfDice, setNumberOfDice] = React.useState<number>(1);

  // Changes Dice and slider
  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setNumberOfDice(newValue as number);
  };

  // Default on startup
  var initRoll: RollInterface = { diceRolled: false, numberRolled: false };
  var initRolls: RollInterface[] = [
    initRoll,
    initRoll,
    initRoll,
    initRoll,
    initRoll,
  ];

  const [rollResults, setRollResults] =
    React.useState<RollInterface[]>(initRolls);

  const handleRollDice = () => {
    setRollResults(RollDice(numberOfDice));

    console.log(rollResults);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 2,
          borderColor: "divider",
          backgroundColor: "#ffffff00",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            borderBottom: 2,
            borderColor: "divider",
            backgroundColor: "#171717",
          }}
        >
          <Tab label="Dice Roll" {...a11yProps(0)} />
          <Tab label="Testing" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="app-bar">
          <AppBar position="static"></AppBar>
          <div className="roll-area">
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              alignSelf="center"
              sx={{
                backgroundColor: "#b32424",
                marginTop: "10vh",
                // marginLeft: "10vh",
                // marginRight: "10vh",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <Grid item>
                <Typography sx={{ color: "#EEEEEE", fontSize: "40px" }}>
                  <code>
                    Dice: {""}
                    {numberOfDice}
                  </code>
                </Typography>
              </Grid>
              <Grid item sm={6}>
                {" "}
                <Slider
                  min={1}
                  max={5}
                  value={numberOfDice}
                  onChange={handleChangeSlider}
                  sx={{
                    height: "100%",
                    color: "#fff",
                    borderColor: "divider",
                    backgroundColor: "#171717",
                  }}
                />
              </Grid>
              <div
                style={{
                  width: "100%",
                  minHeight: "20vh",
                  alignItems: "center",
                  backgroundColor: "#252525",
                  boxShadow: "5px 15px 2px 1px #171717",
                  // borderBottomWidth: "2px",
                  // borderBottomColor: "#fff",
                  // borderBottomLeftRadius: "10px",
                }}
              >
                <Box display="flex" justifyContent="center" p={12}>
                  <DiceBoard
                    numberOfDice={numberOfDice}
                    currentDie={1}
                    rollResults={rollResults}
                  ></DiceBoard>

                  <Button
                    onClick={handleRollDice}
                    size="large"
                    variant="contained"
                    color="error"
                  >
                    Roll
                  </Button>
                </Box>
              </div>
            </Grid>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TestPage></TestPage>
      </TabPanel>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import RollDice from "../../../utils/RollDice";
import RollInterface from "../../../utils/RollInterface";
import TestInterface from "./TestInterface";
import { Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { generateTestData, TestingResults } from "../TestData";

export const Test: React.FC<TestInterface> = ({
  testTitle,
  testInputDice,
  testInputRolls,
}: TestInterface) => {
  const [testRan, setTestRan] = React.useState(false);
  const [testPassed, setTestPassed] = React.useState<boolean>();
  const [input, setInput] = React.useState(100);
  const [totalRolls, setTotalRolls] = React.useState(0);
  const [tests, setTests] = React.useState<TestingResults>({
    dice1Total: 0,
    dice2Total: 0,
    dice3Total: 0,
    dice4Total: 0,
    dice5Total: 0,
    dice6Total: 0,
  });
  const [percentDeviation, setPercentDeviation] = React.useState(0);
  const [maxDeviation, setMaxDeviation] = React.useState(0);
  const [minDeviation, setMinDeviation] = React.useState(0);
  const [deviationAllowed, setDeviationAllowed] = React.useState(0);
  const [totalDiceRolled, setTotalDiceRolled] = React.useState<number>(0);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const [diceDeviations, setDiceDeviations] = React.useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var inputInt = parseInt(event.target.value);
    setInput(inputInt);
  };

  const handleRollChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var inputInt = parseInt(event.target.value);
    setTotalRolls(inputInt);
  };
  const runTest = () => {
    setTests(generateTestData(input, totalRolls));
    setTestRan(true);
  };
  const handleExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  React.useEffect(() => {
    var variance = totalRolls * input * (35 / 12);
    setTotalDiceRolled(
      tests!.dice1Total +
        tests!.dice2Total +
        tests!.dice3Total +
        tests!.dice4Total +
        tests!.dice5Total +
        tests!.dice6Total
    );
    var deviation = Math.sqrt(variance);

    var max = Math.max(
      tests!.dice1Total,
      tests!.dice2Total,
      tests!.dice3Total,
      tests!.dice4Total,
      tests!.dice5Total,
      tests!.dice6Total
    );
    var min = Math.min(
      tests!.dice1Total,
      tests!.dice2Total,
      tests!.dice3Total,
      tests!.dice4Total,
      tests!.dice5Total,
      tests!.dice6Total
    );

    var base = (totalRolls * input) / 6;
    var allowedDeviationMax = base + deviation;
    var allowedDeviationMin = base - deviation;
    var deviationAllowed = deviation;

    if (max < base + deviation) {
      setTestPassed(true);
    }
    if (min > allowedDeviationMin) {
      setTestPassed(true);
    }
    if (max > base + deviation) {
      setTestPassed(false);
    }
    if (min < allowedDeviationMin) {
      setTestPassed(false);
    }

    setMaxDeviation(allowedDeviationMax);
    setMinDeviation(allowedDeviationMin);
    setDeviationAllowed(deviationAllowed);
    setPercentDeviation(max - min);
  }, [tests]);

  return (
    <Container>
      <Card sx={{ minWidth: 275, backgroundColor: "" }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
            {testTitle}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Input:
          </Typography>
          <TextField
            id="filled-basic"
            label={testInputDice}
            variant="filled"
            type="number"
            onChange={handleChange}
          />
          <TextField
            id="filled-basic"
            label={testInputRolls}
            variant="filled"
            type="number"
            onChange={handleRollChange}
            sx={{ ml: 3 }}
          />
          <br />

          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            Expected Output:
          </Typography>
          <Typography
            sx={{ mt: 1.5, fontSize: 16 }}
            color="text.primary"
            gutterBottom
          >
            {"1:  " +
              (totalRolls * input) / 6 +
              " ± " +
              Math.sqrt(totalRolls * input * (35 / 12))}
            <br />
            {"2:  " +
              (totalRolls * input) / 6 +
              " ± " +
              Math.sqrt(totalRolls * input * (35 / 12))}
            <br />
            {"3:  " +
              (totalRolls * input) / 6 +
              " ± " +
              Math.sqrt(totalRolls * input * (35 / 12))}
            <br />
            {"4:  " +
              (totalRolls * input) / 6 +
              " ± " +
              Math.sqrt(totalRolls * input * (35 / 12))}
            <br />
            {"5:  " +
              (totalRolls * input) / 6 +
              " ± " +
              Math.sqrt(totalRolls * input * (35 / 12))}
            <br />
            {"6:  " +
              (totalRolls * input) / 6 +
              " ± " +
              Math.sqrt(totalRolls * input * (35 / 12))}
          </Typography>

          <Typography sx={{ mt: 2 }} color="text.secondary">
            Actual Output:
          </Typography>

          {input == 0 && (
            <Typography sx={{ mt: 1 }} color="text.primary">
              Run the Test to get output
            </Typography>
          )}

          {input != 100 && percentDeviation != 0 && (
            <Typography sx={{ mt: 2 }} color="text.primary">
              {"1:  " + tests.dice1Total}
              <br />
              {"2:  " + tests.dice2Total}
              <br />
              {"3:  " + tests.dice3Total}
              <br />
              {"4:  " + tests.dice4Total}
              <br />
              {"5:  " + tests.dice5Total}
              <br />
              {"6:  " + tests.dice6Total}
            </Typography>
          )}
          <Accordion
            sx={{ mt: 3, mb: 3, ml: -1 }}
            expanded={expanded === "panel1"}
            onChange={handleExpanded("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Extra Info
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Extra Test Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ mt: 1 }}>
                Total Dice Rolled: {totalDiceRolled}
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Maximum Allowed For Roll: {maxDeviation}
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Minimum Allowed For Roll: {minDeviation}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
        <CardActions sx={{ minWidth: 275, backgroundColor: {} }}>
          <Button onClick={runTest} size="large">
            Run Test
          </Button>
          {testPassed == true && (
            <Typography sx={{ color: "#009e05" }} color="#009e05">
              Passed
            </Typography>
          )}
          {testPassed == false && (
            <Typography sx={{ color: "#ff0505" }} color="#bf0000">
              Failed
            </Typography>
          )}
        </CardActions>
      </Card>
    </Container>
  );
};
export default Test;

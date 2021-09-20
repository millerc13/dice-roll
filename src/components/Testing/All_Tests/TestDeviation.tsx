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
import {
  generateTestData,
  TestingResults,
} from "../TestContainer/Chart/TestData";

export const Test: React.FC<TestInterface> = ({
  testTitle,
  testInput,
  testExpectedOutput,
}: TestInterface) => {
  const [input, setInput] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const [tests, setTests] = React.useState<TestingResults>();
  const [percentDeviation, setPercentDeviation] = React.useState(0);
  const [testPassed, setTestPassed] = React.useState<boolean>();
  const [bgColorPF, setBgColorPF] = React.useState("");

  const runTest = () => {
    var inputForTest = parseInt(input);
    console.log(inputForTest);
    const testData: TestingResults = generateTestData(inputForTest);
    setTests(testData);

    var max = Math.max(
      testData.dice1Total,
      testData.dice2Total,
      testData.dice3Total,
      testData.dice4Total,
      testData.dice5Total,
      testData.dice6Total
    );
    var min = Math.min(
      testData.dice1Total,
      testData.dice2Total,
      testData.dice3Total,
      testData.dice4Total,
      testData.dice5Total,
      testData.dice6Total
    );

    setPercentDeviation((max - min) / (inputForTest * 100000));

    if (percentDeviation < testExpectedOutput) {
      setTestPassed(true);
    } else {
      setTestPassed(false);
    }
  };

  return (
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
          onChange={handleChange}
          id="filled-basic"
          label="# of dice (1-5)"
          variant="filled"
        />
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          Expected Output:
        </Typography>
        <Typography
          sx={{ mt: 1.5, fontSize: 16 }}
          color="text.primary"
          gutterBottom
        >
          {"Deviation % < " + testExpectedOutput}
        </Typography>

        {percentDeviation == 0 && (
          <Typography sx={{ mt: 2 }} color="text.secondary">
            Actual Output:
          </Typography>
        )}

        {percentDeviation != 0 && (
          <Typography sx={{ mt: 2 }} color="text.secondary">
            Actual Output: {percentDeviation}
          </Typography>
        )}
        <Typography sx={{ mt: 4 }} color="text.secondary">
          Extra Info:
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          Dice 1: {tests?.dice1Total}
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          Dice 2: {tests?.dice2Total}
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          Dice 3: {tests?.dice3Total}
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          Dice 4: {tests?.dice4Total}
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          Dice 5: {tests?.dice5Total}
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          Dice 6: {tests?.dice6Total}
        </Typography>
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
          <Typography sx={{ color: "#009e05" }} color="#bf0000">
            Failed
          </Typography>
        )}
      </CardActions>
    </Card>
  );
};

export default Test;

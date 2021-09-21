import React from "react";
import { Container, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Documentation = () => {
  const testData =
    "var max = Math.max(\n" +
    "    testRoll!.dice1Total,\n" +
    "    testRoll!.dice2Total,\n" +
    "    testRoll!.dice3Total,\n" +
    "    testRoll!.dice4Total,\n" +
    "    testRoll!.dice5Total,\n" +
    "    testRoll!.dice6Total\n" +
    ");\n" +
    "\n" +
    "var min = Math.min(\n" +
    "    testRoll!.dice1Total,\n" +
    "    testRoll!.dice2Total,\n" +
    "    testRoll!.dice3Total,\n" +
    "    testRoll!.dice4Total,\n" +
    "    testRoll!.dice5Total,\n" +
    "    testRoll!.dice6Total\n" +
    ");";

  const rollInterface =
    "export default interface RollInterface {" +
    "\n" +
    "  diceRolled?: number | boolean | undefined;" +
    "\n" +
    "  numberRolled?: number | boolean | undefined;" +
    "\n" +
    "}";

  const diceRoll =
    "// Random Number Generator Function " +
    "\n" +
    "const RollDice = (amtDice: number) => { " +
    "\n" +
    "var results: RollInterface[] = []; " +
    "\n" +
    "  for (var i = 0; i < amtDice; i++) {" +
    "\n" +
    "    // Random Dice Number" +
    "\n" +
    "    var random = Math.floor(Math.random() * (6 - 1) + 1);" +
    "\n" +
    "     let result: RollInterface = { diceRolled: i + 1, numberRolled: random };" +
    "\n" +
    "    results.push(result);" +
    "\n" +
    "  }" +
    "\n" +
    "  for (var i = 0; i < 5 - amtDice; i++) {" +
    "\n" +
    "    let result: RollInterface = { diceRolled: false, numberRolled: false };" +
    "\n" +
    "    results.push(result);" +
    "\n" +
    " }" +
    "\n" +
    "  return results;" +
    "\n" +
    "};";
  //   for (var i = 0; i < amtDice; i++) {""
  //     // Random Dice Number
  //     var random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  //     let result: RollInterface = { diceRolled: i + 1, numberRolled: random };
  //     results.push(result);
  //   }
  //   for (var i = 0; i < 5 - amtDice; i++) {
  //     let result: RollInterface = { diceRolled: false, numberRolled: false };
  //     results.push(result);
  //   }
  //   return results;
  // };

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
            <Card sx={{ minWidth: 275, backgroundColor: "" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 20, mt: 0 }}
                  color="text.primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  DiceRoll.tsx
                </Typography>
                <SyntaxHighlighter language="typescript">
                  {diceRoll}
                </SyntaxHighlighter>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.primary"
                  gutterBottom
                >
                  The dice roll function generates a random number 1-6. This
                  number is generated and stored into custom interface named
                  RollInterface.
                </Typography>
                <Typography
                  sx={{ fontSize: 20, mt: 0 }}
                  color="text.primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  RollInterface.tsx
                </Typography>
                <SyntaxHighlighter language="typescript">
                  {rollInterface}
                </SyntaxHighlighter>

                <Typography
                  sx={{ mt: 4, fontSize: 20 }}
                  color="text.primary"
                  gutterBottom
                >
                  The <code>amtDice</code> parameter in{" "}
                  <code>DiceRoll.tsx</code>
                  dictates how many dice will be rolled (1-5).
                </Typography>
                <Typography
                  sx={{ fontSize: 20, mt: 2 }}
                  color="text.primary"
                  gutterBottom
                >
                  Once the function has generated a random number it stored it
                  to the result:RollInterface variable and then pushes it to the
                  results: RollInterface[] Array. It does this for the number of
                  dice the user input.
                </Typography>

                <Typography
                  sx={{ fontSize: 20, mt: 2 }}
                  color="text.primary"
                  gutterBottom
                >
                  The second for loop where the conditonal is 5 - amtDice, will
                  set the other non rolled dice equal to false for the other
                  components' benefit and push them to the final results Array.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 275, backgroundColor: "" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Math Calculations for Randomness Validation
                </Typography>
                <Typography
                  sx={{ fontSize: 20, mt: 5 }}
                  color="text.primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  Standard Deviation Formula:
                </Typography>
                <SyntaxHighlighter language="typescript">
                  {"var variance = totalRolls * input * (35 / 12); +\n" +
                    "var deviation = Math.sqrt(variance); // This is the standard deviation"}{" "}
                </SyntaxHighlighter>

                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.primary"
                  gutterBottom
                >
                  Once you have the standard deviation the acceptable results of
                  the dice rolls can be declared
                </Typography>
                <Typography
                  sx={{ fontSize: 20, mt: 5 }}
                  color="text.primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  Acceptable Results:
                </Typography>
                <SyntaxHighlighter language="typescript">
                  {"// Example: 1 Dice for 1000 Rolls" +
                    "\n" +
                    "var base = (totalRolls * input) / 6;" +
                    "\n" +
                    "// The together the base and deviation will give a range of acceptable results " +
                    "\n" +
                    "// ie: base ± deviance || 166.66666666666666 ± 54.00617248673217"}
                </SyntaxHighlighter>
                <Typography
                  sx={{ fontSize: 18, mt: 5 }}
                  color="text.secondary"
                  fontWeight="bold"
                  gutterBottom
                >
                  Max Acceptable Results:
                </Typography>
                <SyntaxHighlighter language="typescript">
                  {"var allowedDeviationMax = base + deviation;"}
                </SyntaxHighlighter>
                <Typography
                  sx={{ fontSize: 18, mt: 5 }}
                  color="text.secondary"
                  fontWeight="bold"
                  gutterBottom
                >
                  Min Acceptable Results:
                </Typography>
                <SyntaxHighlighter language="typescript">
                  {"var allowedDeviationMin = base - deviation;"}
                </SyntaxHighlighter>

                <Typography
                  sx={{ mt: 4, fontSize: 20 }}
                  color="text.primary"
                  gutterBottom
                >
                  With the maximum and minimum variations allowed being known,
                  we can simply just check for the highest and lowest occurences
                  in our dice roll test data.
                </Typography>
                <Typography
                  sx={{ fontSize: 20, mt: 2 }}
                  color="text.primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  Max and Min
                </Typography>
                <SyntaxHighlighter language="typescript">
                  {testData}
                </SyntaxHighlighter>

                <Typography
                  sx={{ fontSize: 20, mt: 2 }}
                  color="text.primary"
                  gutterBottom
                >
                  Now that we have the Minimum and Maximum number of dice rolled
                  Ocurrences we can easily add a tests to check and make sure
                  that:
                </Typography>
                <SyntaxHighlighter language="typescript">
                  {"max" + " < " + "allowedDeviationMax"}
                </SyntaxHighlighter>
                <Typography
                  sx={{ fontSize: 20, mt: 2, ml: 0, mb: 2 }}
                  color="text.primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  AND
                </Typography>

                <SyntaxHighlighter language="typescript">
                  {"min" + " > " + "allowedDeviationMin"}
                </SyntaxHighlighter>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Documentation;

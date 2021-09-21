import React from "react";
import RollDice from "../../utils/RollDice";
import { Paper } from "@mui/material";
import RollInterface from "../../utils/RollInterface";
import DataChart from "./Chart/DataChart";

export interface TestingResults {
  dice1Total: number;
  dice2Total: number;
  dice3Total: number;
  dice4Total: number;
  dice5Total: number;
  dice6Total: number;
}

export function generateTestData(amountOfDice: number, amountTotal: number) {
  var testRolls: RollInterface[] = [];
  var resultTestRolls: RollInterface[] = [];

  var testingResultTotals: TestingResults = {
    dice1Total: 0,
    dice2Total: 0,
    dice3Total: 0,
    dice4Total: 0,
    dice5Total: 0,
    dice6Total: 0,
  };

  var j = amountOfDice - 1;
  for (var i = 0; i < amountOfDice * amountTotal; i++) {
    if (j < 0) {
      j = amountOfDice - 1;
    }

    testRolls = RollDice(amountOfDice);

    switch (testRolls[j].numberRolled) {
      case 1: {
        testingResultTotals.dice1Total++;
        break;
      }
      case 2: {
        testingResultTotals.dice2Total++;
        break;
      }
      case 3: {
        testingResultTotals.dice3Total++;
        break;
      }
      case 4: {
        testingResultTotals.dice4Total++;
        break;
      }
      case 5: {
        testingResultTotals.dice5Total++;
        break;
      }
      case 6: {
        testingResultTotals.dice6Total++;
        break;
      }
    }
    j--;
  }
  return testingResultTotals;
}

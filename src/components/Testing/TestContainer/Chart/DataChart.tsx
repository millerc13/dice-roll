import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  Series,
  CommonSeriesSettings,
  Point,
  Legend,
  ValueAxis,
  ArgumentAxis,
  Grid,
  MinorGrid,
  CommonPaneSettings,
  Border,
} from "devextreme-react/chart";
import { Container } from "@mui/material";
// import { generateDataSource } from "./data.js";
import { TestingResults } from "./TestData";
import { generateTestData } from "./TestData";
import themes from "devextreme/ui/themes";
import { render } from "@testing-library/react";
import "./DataChart.css";
export const DataChart: React.FC<TestingResults> = ({
  dice1Total,
  dice2Total,
  dice3Total,
  dice4Total,
  dice5Total,
  dice6Total,
}: TestingResults) => {
  const testData: TestingResults = {
    dice1Total: dice1Total,
    dice2Total: dice2Total,
    dice3Total: dice3Total,
    dice4Total: dice4Total,
    dice5Total: dice5Total,
    dice6Total: dice6Total,
  };

  const dataSource: number[] = [
    testData.dice1Total,
    testData.dice2Total,
    testData.dice3Total,
    testData.dice4Total,
    testData.dice5Total,
    testData.dice6Total,
  ];

  const ds = [
    {
      dice: "Dice 1",
      rollNumber: dataSource[0],
    },
    {
      dice: "Dice 2",
      rollNumber: dataSource[1],
    },
    {
      dice: "Dice 3",
      rollNumber: dataSource[2],
    },
    {
      dice: "Dice 4",
      rollNumber: dataSource[3],
    },
    {
      dice: "Dice 5",
      rollNumber: dataSource[4],
    },
    {
      dice: "Dice 6",
      rollNumber: dataSource[5],
    },
  ];

  return (
    <Chart id="chart" dataSource={ds}>
      <Series
        valueField="rollNumber"
        argumentField="dice"
        name="Dice"
        type="bar"
        color="#ffaa66"
      />
    </Chart>
  );
};

export default DataChart;

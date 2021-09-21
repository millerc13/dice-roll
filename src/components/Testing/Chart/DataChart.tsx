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
  Tooltip

} from "devextreme-react/chart";
import { Container } from "@mui/material";
// import { generateDataSource } from "./data.js";
import { TestingResults } from "../TestData";
import { generateTestData } from "../TestData";
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
      dice1: "Dice 1",
      rollNumber: dataSource[0],
    },
    {
      dice2: "Dice 2",
      rollNumber: dataSource[1],
    },
    {
      dice3: "Dice 3",
      rollNumber: dataSource[2],
    },
    {
      dice4: "Dice 4",
      rollNumber: dataSource[3],
    },
    {
      dice5: "Dice 5",
      rollNumber: dataSource[4],
    },
    {
      dice6: "Dice 6",
      rollNumber: dataSource[5],
    },
  ];

  return (
    <Chart id="chart" dataSource={ds}>
      <Series
        valueField="rollNumber"
        argumentField="dice1"
        name="Dice 1"
        type="bar"
        color="#ffb56b"
      />
      <Series
        valueField="rollNumber"
        argumentField="dice2"
        name="Dice 2"
        type="bar"
        color="#63ebe8"
      />
      <Series
        valueField="rollNumber"
        argumentField="dice3"
        name="Dice 3"
        type="bar"
        color="#63c2eb"
      />
      <Series
        valueField="rollNumber"
        argumentField="dice4"
        name="Dice 4"
        type="bar"
        color="#c463eb"
      />
      <Series
        valueField="rollNumber"
        argumentField="dice5"
        name="Dice 5"
        type="bar"
        color="#eb63cb"
      />
      <Series
        valueField="rollNumber"
        argumentField="dice6"
        name="Dice 6"
        type="bar"
        color="#eb6363"
      />
              <Tooltip
          enabled={true}
          shared={true}
        />
      
    </Chart>
  );
};
function customizeTooltip(pointInfo: any) {
  return {
    html: `<div><div class="tooltip-header">${
      pointInfo.argumentText
    }</div><div class="tooltip-body"><div class="series-name"><span class='top-series-name'>${
      pointInfo.dataSource[0].seriesName
    }</span>: </div><div class="value-text"><span class='top-series-value'>${
      pointInfo.points[0].valueText
    }</span></div><div class="series-name"><span class='bottom-series-name'>${
      pointInfo.points[1].seriesName
    }</span>: </div><div class="value-text"><span class='bottom-series-value'>${
      pointInfo.points[1].valueText
    }</span>% </div></div></div>`
  };
}



export default DataChart;

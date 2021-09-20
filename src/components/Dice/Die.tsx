import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import diceBlank from "../../dice_images/dice_blank.svg";

import RollDice from "../../utils/RollDice";
import DiceData from "./DiceData";

export const Die: React.FC<DiceData> = ({
  numberOfDice,
  currentDie,
  numberRolled,
  diceRolled,
}: DiceData) => {
  return (
    <Box p={1}>
      {numberOfDice >= currentDie &&
        numberRolled == false &&
        diceRolled == false && (
          <div>
            <img
              src={diceBlank}
              alt="loading..."
              width="200px"
              height="200px"
            />
            <h1>{numberRolled}</h1>
            <h1>{diceRolled}</h1>
          </div>
        )}

      {numberOfDice >= currentDie &&
        numberRolled != false &&
        diceRolled != false && (
          <>
            <img
              src={"images/dice_" + numberRolled + ".svg"}
              alt="loading..."
              width="200px"
              height="200px"
            />

            <h1 style={{ marginLeft: "45%" }}>{numberRolled}</h1>
          </>
        )}
    </Box>
  );
};

export default Die;

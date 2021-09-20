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
import dice1 from "../dice_images/dice_1.svg";
import dice2 from "../dice_images/dice_2.svg";
import dice3 from "../dice_images/dice_3.svg";
import dice4 from "../dice_images/dice_4.svg";
import dice5 from "../dice_images/dice_5.svg";
import dice6 from "../dice_images/dice_6.svg";
import RollDice from "../../utils/RollDice";
import Die from "./Die";
import RollInterface from "../../utils/RollInterface";

interface DiceData {
  numberOfDice: number;
  currentDie: number;
  rollResults: RollInterface[];
}

export const DiceBoard: React.FC<DiceData> = ({
  numberOfDice,
  currentDie,
  rollResults,
}: DiceData) => {
  return (
    <>
      {numberOfDice >= 1 ? (
        <div>
          <Die
            numberOfDice={numberOfDice}
            currentDie={1}
            diceRolled={rollResults[0].diceRolled}
            numberRolled={rollResults[0].numberRolled}
          ></Die>
          <h1>{rollResults.toString}</h1>
        </div>
      ) : (
        <></>
      )}
      {numberOfDice >= 2 ? (
        <Die
          numberOfDice={numberOfDice}
          currentDie={2}
          diceRolled={rollResults[1].diceRolled}
          numberRolled={rollResults[1].numberRolled}
        ></Die>
      ) : (
        <></>
      )}
      {numberOfDice >= 3 ? (
        <Die
          numberOfDice={numberOfDice}
          currentDie={3}
          diceRolled={rollResults[2].diceRolled}
          numberRolled={rollResults[2].numberRolled}
        ></Die>
      ) : (
        <></>
      )}
      {numberOfDice >= 4 ? (
        <Die
          numberOfDice={numberOfDice}
          currentDie={4}
          diceRolled={rollResults[3].diceRolled}
          numberRolled={rollResults[3].numberRolled}
        ></Die>
      ) : (
        <></>
      )}
      {numberOfDice >= 5 ? (
        <Die
          numberOfDice={numberOfDice}
          currentDie={5}
          diceRolled={rollResults[4].diceRolled}
          numberRolled={rollResults[4].numberRolled}
        ></Die>
      ) : (
        <></>
      )}
    </>
  );
};

export default DiceBoard;

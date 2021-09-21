import React from "react";
import Box from "@material-ui/core/Box";
import diceBlank from "../../dice_images/dice_blank.svg";
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

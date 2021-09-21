import React from "react";
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

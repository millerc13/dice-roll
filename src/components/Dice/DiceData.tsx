import RollInterface from "../../utils/RollInterface";

interface DiceData {
  numberOfDice: number;
  currentDie: number;
  diceRolled?: number | boolean;
  numberRolled?: number | boolean;
}

export default DiceData;

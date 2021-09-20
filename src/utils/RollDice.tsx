import RollInterface from "../utils/RollInterface";

// Random Number Generator Function
const RollDice = (amtDice: number) => {
  var results: RollInterface[] = [];
  for (var i = 0; i < amtDice; i++) {
    // Random Dice Number
    var random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let result: RollInterface = { diceRolled: i + 1, numberRolled: random };
    results.push(result);
  }
  for (var i = 0; i < 5 - amtDice; i++) {
    let result: RollInterface = { diceRolled: false, numberRolled: false };
    results.push(result);
  }

  //console.log(results.length);

  return results;
};

export default RollDice;

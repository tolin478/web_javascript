//#1

const dice = {

    sides: 6,

    roll: function(number) {
      let diceRoll = Math.floor(Math.random() * number);
      console.log(diceRoll);
    }

}

//enter dice.roll(dice.sides); into console

const dice2 = {

    sides: 12,

    roll: function(number) {
      let diceRoll = Math.floor(Math.random() * number);
      console.log(diceRoll);
    }

}

//enter dice2.roll(dice.sides); into console

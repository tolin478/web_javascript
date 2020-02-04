//#1

let num = Math.floor(Math.random() * 10);

if(num % 2==0){
  console.log("#1: num is even: " + num);
}else if(num % 2==1){
  console.log("#1: num is odd: " + num);
}

//#2
let rolled = Math.ceil( Math.random() * 6 );

if(rolled>3){
  console.log("#2: number is greater than 3: " + rolled);
}else if(rolled<=3){
  console.log("#2: number is less than or equal to 3: " + rolled);
}

//#3
rolled2 = Math.ceil( Math.random() * 6 );
let count;

if(rolled2<=3){
  while(rolled2<=3){
    rolled2 = Math.ceil( Math.random() * 6 );
  }
}

if(rolled2>3){
  console.log("num is greater than 3");
}

//#4
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

//#5
var triangle = document.getElementById("triangle");
// for(i=0;i<10;i++){
//   for(i=0;i<5;i--)
//   console.log("#");
// }




//#6
var checkerboard = document.getElementById("checkerboard");

for (var i = 1; i < 9; i++) {
    for (var j = 1; j < 9; j++) {
        if (i % 2 == 0 || j % 2 == 0) {
            checkerboard.innerHTML = " ";
        } else {
            checkerboard.innerHTML = "#";
        }
    }
}

//#7
// initialize the variables
let hunger_state, decide_to_eat, go_out, check_fridge, pick_ingredients, grocery_store;

// get input for the first checkpoint
hunger_state = prompt( "Am I hungry? Y/N " );

// create the first decision
if ( hunger_state === "Y") {
  // i am hungry, now ask how much money
  money_in_pocket = prompt( "How much money do I have?" );
  if ( money_in_pocket >= 20 ) {
    // Ok cool! I have more than $20! Order pizza!
    console.log('Action: Order PIZZA!' );
    console.log('After pizza, play Overwatch!' );
  } else {
    // ok - not enough money, raid the fridge!
    console.log('Action: Search your fridge!' );
  }
} else if(hunger_state === "N") { // not hungry
  console.log("don't eat");
}

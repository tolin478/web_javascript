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
  console.log("#3: num is greater than 3: " + rolled2);
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
var line, triangle;
line = triangle = "";

for (var row = 1; row <= 7; row++) {
  line =""
  for (var x = 0; x < row; x++) {
    line += "#";
  }
  triangle += line + "\n";
}

console.log(triangle);


//#6
let length=9;
let board = "";

for(i=0;i<length;i++){
  for(j=0;j<length;j++){
    if((i+j)%2 == 0){
      board += " ";
    }else{
      board += "#";
    }
  }
}

console.log(board);


//#7
let hunger_state, decide_to_eat, go_out, check_fridge, pick_ingredients, grocery_store;

hunger_state = prompt( "are you hungry? y/n");

if ( hunger_state === "y") {

  decide_to_eat = prompt( "go out or check fridge?" );

  if ( decide_to_eat === "go out" ) {
    go_out = prompt("old restaurant or new restaurant?");

      if(go_out === "old restaurant"){
        console.log("you go to your favorite restaurant and eat")
      }else if(go_out === "new restaurant"){
        console.log("you find a new restaurant on yelp and go eat")
      }

  } else if(decide_to_eat === "check fridge") {

      check_fridge = prompt("are there ingredients for food? y/n");

      if(check_fridge === "y"){
        console.log("you make a meal and eat it");
      }else if(check_fridge === "n"){
        console.log("you go to the grocery store, buy ingredients, make a meal and eat it");
      }

  }
} else if(hunger_state === "n") { // not hungry
  console.log("you decide not to eat");
}

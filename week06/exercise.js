/*
 * Class 6: Class Exercises
 */

// 1. Create a simple function that can reverse the contents of a sentence, word, phrase.
function reverseString(text){

  var splitString = text.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");

  console.log(joinArray);

}

reverseString("hello");

//2. Create a function that will accept a date or year and calculate if it falls on a Leap Year.

function checkLeapYear(year){

  if(year % 4 === 0){
    if(year % 100 > 0){
      console.log(year+ " is a leap year");
    }else if(year % 100 === 0){
      if(year % 400 === 0){
        console.log(year+ " is a leap year");
      }
    }
  }else{
    console.log(year + " is not a leap year");
  }

}

checkLeapYear(2020);

//3. Create a function that can perform a word count, given a block of text. Punctuations or special characters are not to be included.

function checkWordCount(text){
  var splitText = text.split(" ");
  var wordCount = splitText.length;

  console.log("word count is " + wordCount);
}

checkWordCount("i cant wait for animal crossing to come out");

//4. Create a function that checks a string or sentence and returns true if that parameter is a palindrome, (the string is the same forward as it is backward).

function checkPalindrome(text){

  var splitString = text.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");

  if(joinArray === text){
    console.log(text + " is a palindrome");
  }else{
    console.log(text + " is not a palindrome");
  }

}

checkPalindrome("pop");

// 5. Create a para tag in html. Update the style of the first para tag to use a different font family, color and/or size.
document.getElementById("sampleText").style.font = "italic bold 20px arial,serif";

//6. create a table and paint alternative colors:

// let cellColors = document.getElementsByTagName("td").style.backgroundColor;
//
// for(i=1;i<5;i++){
//   cellColors = 	"#FF0000";
//   for(j=0;j<i;j++){
//     cellColors = "#0000FF";
//   }
// }


// 7. Write a script that, on click of a button, can randomly select an image from a list and insert it inside the section tag in the html. eg. https://source.unsplash.com/

function randomImage(){

  console.log("clicked");

  var imageArray = [
   {src: "images/1.JPG",
   width: "300"},

   {src: "images/2.PNG",
   width: "300"},

   {src: "images/3.JPG",
   width: "300"},

   {src: "images/4.PNG",
   width: "300"},

   {src: "images/5.PNG",
   width: "300"}
  ];

  var preBuffer = [];
  for (var i = 0; i<imageArray.length; i++) {
    preBuffer[i] = new Image();
    preBuffer[i].src = imageArray[i].src;
    preBuffer[i].width = imageArray[i].width;
  }

  function getRandomInt(min,max){
    imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
  }

  var newImage = getRandomInt(0, preBuffer.length - 1);

  var images = document.getElementsByTagName('img');

  for (var p = 0; p < images.length; p++) {
    images[0].parentNode.removeChild(images[0]);
  }

  // var newImage = imageArray[Math.floor(Math.random() * imageArray.length)]


  document.body.appendChild(newImage);

}

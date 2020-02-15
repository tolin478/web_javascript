//#1

//first function: make triangle

function makeTriangle(){

  var line, triangle;
  line = triangle = "";

  for (var row = 1; row <= 7; row++) {
    line =""
    for (var x = 0; x < row; x++) {
      line += "#";
    }
    triangle += line + "\n";
  }

}

console.log(triangle);

//second function: make many triangles

function repeatTriangles(triangleNum){

  for(i=0; i<triangleNum;i++){
    makeTriangle();
  }

}


//#2

//PART 1

const my_quote = "The Answer to the Great Question Of Life, the Universe and Everything is Forty-two";

function findMatch( string, pattern ) {
  var patternCount = string.search(pattern);

  if(patternCount>-1){
    console.log("match found");
  }else if(patternCount===-1){
    console.log("match not found");
  }

}
console.log( findMatch( my_quote, 'Life' ) );


//PART 2

const my_quote2 = "Use this cutting-edge AI text generator to write stories, poems, news articles, and more";

function changeMatch(string, pattern, modifier_function) {

    if (string.search(pattern) === -1) {
        return false;
    } else {
        return modifier_function(string, pattern);
    }
}

function capPattern (orig_string, orig_pattern){
  let new_string = orig_string.replace(orig_pattern, orig_pattern.toUpperCase());
  return new_string;
}

console.log(changeMatch(my_quote2,"text",capPattern));

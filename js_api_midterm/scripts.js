const getObjURL = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getRandom&access_token=14a03f0b2704635cffd7e65f9bfc170c";

var objectId;
var objectName;
var objectArtist;

var color1;
var color2;
var color3;

fetch(getObjURL)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem');
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        var objectId = data.object.id;
        var objectName = data.object.title;
        console.log("object id is " + objectId);

        var getColorsURL = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getColors&access_token=14a03f0b2704635cffd7e65f9bfc170c&id=" + objectId;
        var getAlbersURL = "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getAlbers&access_token=14a03f0b2704635cffd7e65f9bfc170c&id=" + objectId;

        fetch(getColorsURL)
          .then(
            function(response) {
              if (response.status !== 200) {
                console.log('Looks like there was a problem');
                return;
              }

              // Examine the text in the response
              response.json().then(function(data) {
                console.log(data);

              if(data.colors.length<3){

                fetch(getAlbersURL)
                  .then(
                    function(response) {
                      if (response.status !== 200) {
                        console.log('Looks like there was a problem');
                        return;
                      }

                      // Examine the text in the response
                      response.json().then(function(data) {
                        console.log(data);

                        color1 = data.rings[0].hex_color;
                        color2 = data.rings[1].hex_color;
                        color3 = data.rings[2].hex_color;

                        assignColors();

                      });
                    }
                  )
                  .catch(function(err) {
                    console.log('Fetch Error :-S', err);
                  });

              }else{

                color1 = data.colors[0].color;
                color2 = data.colors[1].color;
                color3 = data.colors[2].color;

                assignColors();

              }

              });

            }
          )
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

  function assignColors(){
    var block1 = document.getElementById("firstcolor");
    block1.style.backgroundColor = color1;
    block1.style.opacity = 1;

    var hex1 = document.getElementById("firsthex");
    hex1.textContent = color1;

    var block2 = document.getElementById("secondcolor");
    block2.style.backgroundColor = color2;
    block2.style.opacity = 1;

    var hex2 = document.getElementById("secondhex");
    hex2.textContent = color2;

    var block3 = document.getElementById("thirdcolor");
    block3.style.backgroundColor = color3;
    block3.style.opacity = 1;

    var hex3 = document.getElementById("thirdhex");
    hex3.textContent = color3;
  }

  function refresh(){
    location.reload();
  }

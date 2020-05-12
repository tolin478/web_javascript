url="https://trefle.io/api/auth/claim?token=K2plQjBFaUhNcGNMUHRSRzFGaDJSUT09";

fetch(url)
  .then(
    function(response){
      if(response.status != 200){
        console.log('looks like there was a problem');
        return;
      }

    response.json().then(function(data){
      console.log(data);
    });
  });

function compareStrings(){

}

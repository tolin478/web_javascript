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


  // var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  //     targetUrl = url="https://trefle.io/api/auth/claim?token=K2plQjBFaUhNcGNMUHRSRzFGaDJSUT09";
  // fetch(proxyUrl + targetUrl)
  //   .then(
  //     function(response){
  //       if(response.status != 200){
  //         console.log('looks like there was a problem');
  //         return;
  //       }
  //
  //     response.json().then(function(data){
  //       console.log(data);
  //     });
  //   });

function compareStrings(string1,string2){
}

function submitplant(){

}

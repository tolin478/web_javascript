form.addEventListener('submit',function(ev)){
  console.log("submitting form",)
}

//form validation — check if checkbox was clicked

let input_area = form.elements.searchArea;

const form_area_vals = [];

for (i=0; i<input_area.length;i++){
  form_area_vals.push(input_area[i].value);
}



//placeholder text for input

inp.addEventListener('focus',function() {
  console.log("focused on",inp.name);
  if(inp.value === 'Enter your search term here'){
    inp.vapue = "";
  }
});

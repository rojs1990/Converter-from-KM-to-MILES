
let result = document.getElementById("miles");

function convertKmToMiles() {
  let km = parseFloat(document.getElementById("kilometers").value);

  let miles = km * 0.621371192;
 
  result.textContent = miles + " Miles";
};

let convertButton = document.getElementById("converter");
convertButton.addEventListener("click", convertKmToMiles);
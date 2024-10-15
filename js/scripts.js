
let updateDate = "15/10/2024";
const myCountry = "Viet Nam";


function calculateStrick(isCode, totalDays) {
  if (isCode == true) {
    return totalDays+=1;
  }
  else {
    return totalDays = 0;
  } 
}

function showAleart() {
  alert("Go on!");
}

let isCode = true;
let totalDays = 1;

totalDays = calculateStrick(isCode, totalDays);
console.log(totalDays);

console.log(updateDate);
console.log(myCountry);

document.addEventListener("click", showAleart);


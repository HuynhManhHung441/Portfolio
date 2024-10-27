// Menu

const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");

menuButton.addEventListener("click", ()=>{
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
})





// let updateDate = "15/10/2024";
// const myCountry = "Viet Nam";


// function calculateStrick(isCode, totalDays) {
//   if (isCode == true) {
//     return totalDays+=1;
//   }
//   else {
//     return totalDays = 0;
//   } 
// }

// function showAleart() {
//   alert("Go on!");
// }


// const skills = ["HTML", "CSS", "JavaScript"];


// const skillsList = document.getElementById("skills");
  
// skills.forEach(skill => {
//   const skillItem = document.createElement("li");
//   skillItem.textContent = skill;
//   skillsList.appendChild(skillItem);
// });


// let isCode = true;
// let totalDays = 1;

// totalDays = calculateStrick(isCode, totalDays);
// console.log(totalDays);

// console.log(updateDate);
// console.log(myCountry);

// document.addEventListener("click", showAleart);


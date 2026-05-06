// let greet = () => {
//     console.log("hello");

// }

// const square = x => x*x;
// console.log(square(4));

// let nums = [1, 2, 3, 4 , 5 ]
// let evenNum = nums.filter (n => n % 2 === 0)
// console.log(evenNum);

// let num = [1 , 2, 3, 4, 5]
// let double = nums.map(n => n*3)
// console.log(double);

// let number = [1,2,3,4,5]
// let sum = number.reduce((total , n) => total + n ,0)
// console.log(sum);
// //timer
// //setTimeout
// //setInterval

// //addEventListner("click")





let data = ["Umra", "BSSE", "VU", "Modevo Designs"];
// var userName = data[0]
// console.log(userName);

let [userName, education, institute, organization] = data;

console.log(education, organization);

// ______________________________________Clousers

//Lexical scope
let bname = "Chrome";
function init() {
  var bname = "Mozilla";
  function displayName() {
    let bname = "Firefox";
    console.log(bname);
  }
  displayName();
}
init();
console.log(bname);

// function sum(){
//     let a = 2+2
//     console.log(a);

// }
// // console.log(sum);

// // sum()
// let myFunc = sum
// myFunc()
// // console.log(myFunc);

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }
// // console.log(makeFunc());

// const myFunc = makeFunc();
// myFunc();


var dark = document.getElementById("dark")
var light = document.getElementById("light")

// dark.onclick = function(){
//     document.body.style.backgroundColor = "black"
// }
// light.onclick = function(){
//     document.body.style.backgroundColor = "white"
// }

function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}
dark.onclick = clickHandler("black")
light.onclick = clickHandler("white")

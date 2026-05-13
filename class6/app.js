//map method
// let prices = [100,200,300];
// let discountPrice = prices.map ((price)=>{
//     return price - 10
// })
// console.log(discountPrice);



//find
// let num = [1,5,4,9,10,2,7];
// let newNum = num.find(findNum);

// function findNum (value) {
//     return value > 7;
// }
// console.log(newNum);

// reduce
// let array = [1,2,3,5,2,1];
// let newarray = array.reduce((val1,val2)=>{
//     console.log(val1,val2);

//     return val1+val2
// });
// console.log(newarray);

// let array = [1,2,3,5,2,1];
// let reduce_func = (val1,val2)=>{
//     console.log(val1,val2);

//     return val1 +val2
// }

// let newarray = array.reduce(reduce_func);
// console.log(newarray);

// let cart =[200,450,150,800]
// let total = cart.reduce((sum,price)=> sum + price , 0);
// console.log(total);

//flat
// let fruits = [
//     ["apple","mango"]
//     ["banana", "orange"]

// ];
// console.log(fruits.flat());

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = num.filter((n)=>{
//     return n%2 ===0
// })
// let even = num.filter(n => n%2===0)
// console.log(even);
// let doubled = even.map(n => n*2)
// console.log(doubled);


// var doubledEven = num.reduce((accu,n) => {
//   if (n % 2 === 0) {
//     accu.push(n*2)
//   }
//   return accu
// }, []);
// console.log(doubledEven)

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let doubled = num.reduce((accumulator, currentValue)=>{
//     if(currentValue %2 ===0){
//     //    console.log(currentValue,accumulator);
//         accumulator.push(currentValue*2)
//     }
//     return accumulator
// }, [])
// console.log(doubled);



// let users = [
//     {id:1, userName: "Ali", age:16},
//     {id:2, userName: "Ali", age:22},
//     {id:3, userName: "Ali", age:12},
//     {id:4, userName: "Ali", age:22},
//     {id:5, userName: "Ali", age:20},
// ]
// let userAge= users.filter(u => u.age >=28)
// console.log(userAge); //[]
//  let oneUserAge =users.find(u => u.age >=28)
//  console.log(oneUserAge); //undefined
 
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a = num.map(n => n*n)
let b = num.forEach(n => n*n)
console.log(a);
console.log(b);
console.log(num);

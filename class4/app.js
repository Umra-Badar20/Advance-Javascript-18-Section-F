let arr = [1,1,1 ,1 ,1 ,1,"abc", true];
let mySet = new Set([1,1,1 ,1 ,1 ,1,"abc",true]);
// console.log(arr);
// console.log(mySet);

// let newArray = [...mySet];
// console.log(newArray[1]);
// let newSet = new Set ([arr])
// console.log(newSet);
// mySet.add('xyz');
// mySet.add(false)
// mySet.delete('abc')
// mySet.clear()
// console.log(mySet);

// for (x of mySet){
//     console.log(x);
    
// }

// let obj = {
//     'userName' : "abc",
//     10 : "this is a number",
//     true : "this is a boolean"
// }

// let myMap = new Map([
//     ['userName' , 'xyz'],
//     [10 , 'this is a number'],
//     [true , 'this is a boolean']
// ])

// console.log(obj.10);
// console.log(myMap.get(10));
// console.log(myMap.values());
// myMap.set('userName','areeba sajid')
// console.log(myMap.set('number','50'));
// console.log(myMap.size);
// console.log(myMap.has('number'));
// console.log(myMap.has('num'));


// for ([x , y] of myMap){
//     console.log(x,y);
    
// }
// let fName="ali"
// Call
// const person1 = { name: "iqra" };
// const person2 = { name: "areeba" };
// const person3 = { name: "binish" };

// function greet(greeting) {
//   return greeting + " " + this.name;
// }
// console.log(greet("hello"));


// console.log(greet.call(person3, "Hello"));

// console.log(greet.call(person1, "Hello"));

// console.log(greet.call(person2, "Hello"));
//APPLY
// 
//Bind
// const person1 = { name: "John" };
// const person2 = { name: "Paul" };
// const person3 = { name: "Ringo" };

// function greet() {
//   return "Hello " + this.name;
// }

// const greetJohn = greet.bind(person1);
// console.log(greetJohn());


// let user ={
//     username :"Umra",
//     designation: "Software Engineer",
//     printUser: function(){
//         console.log("Hello",this.username);    
//     }
// }
// let user2 ={
//     username :"Iqra",
//     designation: "Software Engineer",
// }
// user.printUser()
// user.printUser.call(user2)

//   const fruits = ['apple','banana','cherry']
//   for( var i = 0; i<fruits.length-1; i++){
//     console.log(fruits[i].toUpperCase())
//   }
// //   using for each
// fruits.forEach(
//     function(a,index,arr){
//         console.log(arr)
//     }
// )

// filter method
// const bigNum= [ 1,7,4,5,9];
// var newArr = bigNum.filter(
//     function(num,index,arr){
//         console.log(arr)
//         return num >= 5 //true
//     }
// )
// console.log(newArr)


// destructing of array


// let fruit = [ "apple", "mango", "orange"]
// let fruits = [ a , b , c] = fruit
// console.log(a);

// // rest 
// let newfruits = [,,, rest] = fruits
// console.log(newfruits);

let color = [ " red" , "blue" , " green"]
let  newcolor = [ " yellow", "white"]
 let colorName = [...color, ... newcolor]
 console.log( colorName)



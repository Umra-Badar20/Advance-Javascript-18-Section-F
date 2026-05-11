// // Destructuring of array

// // let std = ["nida",["umra", "laiba"] ,"rida"]

// // // let std1 = std[0]
// // // console.log(std1);

// // let [ std1, [nestedStd1,nestedstd2], std3] = std
// // console.log(std1);
// // console.log(nestedStd1);
// // console.log(nestedstd2)

// // console.log(std3);


// //Destructuring of OBJECT


// // let stdData = {

// //     name: "hiba",
// //     lastName : "khan",
// //     present : "yes",
// //     address : {
// //         city : "karachi",
// //         zipCode : 123
// //     },
// //     course : [" web", "graphic"]
// // }

// // let newStd = stdData.name

// // console.log(newStd);

// // let { name: stdName , lastName, present , address : { city ,zipCode} , course:[course1, course2]} = stdData
// // // name = "rida"y 
// // console.log(stdName);
// // console.log(lastName)
// // console.log(present)
// // console.log( city)
// // console.log(zipCode)
// // console.log(course1)
// // console.log(course2)


// // Rest operater : array 


// // let std = ["nida","umra", "laiba","rida"]

// // let stdNAME = [std1 , ...remaining] = std
// // console.log(std1, remaining);


// //Rest operater : object

// //  let userData = {

// //     fName : "saba",
// //     lName : " khan",
// //     password : "112211"
// //  }

// //  let newUserDATA  = {fName,...remaining} = userData
// //  console.log(fName);
// //  console.log(remaining)
 

// // spread operator : array


// // let arr1 =[1, 2, 3]
// // let arr2 =[1, 5,4]
// // let newArr = [ ...arr1, ...arr2]
// // console.log(newArr);

// //spread operator : object


// // let std1 = {
// //     name : "misra",
// //     lName :"khan",
// //     class:9
// // }


// // let std2 = {
// //     name : "rabiya",
// //     lName :"khan"
// // }

// // let stdData = { ...std1,...std2}
// // console.log(stdData);

// // end of topic.....

// // let stdData = {
// //     fname:"Umra",
// //     lName:"Badar",
// //     email:"umra@gmail.com"
// // }
// // let classData ={
// //     course:"WMA",
// //     timing:"2pm-4pm",
// //     days:"MWF"
// // }
// // let enrolledStd = {...stdData,  tainer:"Umra Badar",...classData,}
// // console.log(enrolledStd);
// // console.log(stdData);


// // let arr = [1,2,3]
// // function sum(a,b,c){
// //     console.log(a+b+c);   
// // }
// // sum(...arr)

// let stdData = {
//     fname:"Umra",
//     lName:"Badar",
//     email:"umra@gmail.com"
// }
// // let updatedStud={ email:"umrabadar@gmail.com", ...stdData }
// let updatedStud={ ...stdData, email:"umrabadar@gmail.com" }
// console.log(updatedStud);


// fruits.forEach(
//     function(a,index,arr){
//         console.log(arr)
//     }
// )

// // filter method
// const bigNum= [ 1,7,4,5,9];
// var newArr = bigNum.filter(
//     function(num,index,arr){
//         console.log(arr)
//         return num >= 5 //true
//     }
// )
// console.log(newArr)

//  bigNum.forEach(
//     function(num,i,arr){
//       console.log(num,i,arr)
//     }
//  )



// // filter method

// var newArr = bigNum.filter(
//     function(num,index,arr){
//         console.log(arr)
//         return num >= 5 //true
//     }
// )
// var newArr = numbers.filter(
//     function(num){
//        return num >=5 
//     }
// )
// console.log(newArr)

// const numbers= [ 1,7,4,5,9];
// var result = numbers.some(
//     function(num){
//         console.log(num,num>5)
//       return num>5
//     }
// )
// console.log(result)
const numbers= [ 1,7,4,5,9];
var result = numbers.every(
    function(num){
        console.log(num,num>5)
      return num>5
    }
)
console.log(result)
// function greet(fName,callback){
//     console.log(fName);
//     callback()
    
// }
// function sayBye(){
//     console.log("Bye");
    
// }
// greet("Ali",sayBye);



// let user = {
//     myName : "Ali",
//     age : 12
// }
// function processUser(obj,callback){
//     console.log("myName"  + obj.myName);
//     console.log("age" +obj.age);
//     callback()
// }
// function sayBye(){
//     console.log("Bye");
    
// }
// processUser(user,function(){
//     console.log("bye")
// })


// setTimeout(function(){
//     console.log("Hello");
    
// },5000)


// setInterval(function(){
//     console.log("Hello");
    
// },5000)



// function step1(callback){
//     console.log("step1");
//     callback()
    
// }
// function step2(callback){
//     console.log("step2");
//     callback()
    
// }
// function step3(callback){
//     console.log("step3");
//     callback()
    
// }
// step1(function(){
//     step2(function(){
//     step3(function(){
//         console.log("done");
        
//     })
//     })
// })




// setTimeout(function(){
//     console.log("Step1");
//     setTimeout(function(){
//         console.log("step2");
//         setTimeout(function(){
//             console.log("step3");
            
//         },3000)
        
//     },3000)
// },3000)


// function calculate(x,y,cb){
//     return cb(x,y)
// }
// // method 1
// let add = calculate(4,6,function(num1,num2){
//     return num1 + num2
// })
// console.log(add);

// // method 2
// let subtract = (x,y)=> x-y
// let sub = calculate(5,2, subtract)
// console.log(sub);

// // method 3
// function multiply(x,y){
//     return x*y
// }
// let mult = calculate(4,3,multiply)
// console.log(mult);


function step1(callback){
    setTimeout(()=>{
        console.log("step1");
        callback()  
    },3000)
}
function step2(callback){
    setTimeout(()=>{
        console.log("step2");
        callback()  
    },1000)
}
function step3(callback){
    setTimeout(()=>{
        console.log("step3");
        callback()  
    },4000)
}
function step4(callback){
    setTimeout(()=>{
        console.log("step4");
        callback()  
    },1400)
}
// step1()
// step2()
// step3()
// step4()

step1(()=>{
    step2(()=>{
        step3(()=>{
            step4(()=>{
                console.log("All steps done");
                
            })
        })
    })
})

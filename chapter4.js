// FUNCTIONS AND METHODS IN JS
//block of code that perform a specific task, can be invoked whenevr needed
// function myFunction(){
//     console.log("mere krishna ji")
//     console.log("mera laddu")
// }
// myFunction();



//paras are local variable and remain only in block scope
//ARROR FUNCTION 
// function mul(x,y){
//     return x*y;
// }
// const arrowMul = (x,y) =>{
//     console.log(x*y);
// };

//COUNT VOWLES IN STRING

// function countvowle(str){
//     count=0
//     for( const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//           count++;  
//         }
//     }
//     return count;
// }

// forEach loops in arrays
//three parameters val,idx,arry
//  let arry =[1,6,9,5,3,6,5];
//  arry.forEach(function printval(val){
//     console.log(val);
//  });
//  let arry = ["os","ca","math","oops"];
//  arry.forEach((val)=>{
//     console.log(val);
//  })
//MAP METHOD
// let num = [23,65,21,33,61];
// let newarry = num.map((val) => {
//     return val*2;
// }
// );
// console.log(newarry)

//filter method

// let num = [22,65,44,74,90,17,35,];
// let oddarry = num.filter((val) =>{
//     return val%2!==0;
//  }
// );
// console.log("odd number in arry",oddarry);
// let arr = [1,4,6,8]
// const output=arr.reduce((res,curr)=>{
//     return res > curr? res: curr;
// }
// );
// console.log(output)
// let mark=[88,76,90,96,87,94]
// let newmark=mark.filter((val)=>{
//     return val>=90;
// });
// console.log(newmark);

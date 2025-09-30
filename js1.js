// const student= {
//     fullname: "krishna",
//     age: 1,
//     cgpa: 9.9,
//     istop: true,

// };
// student["age"] = student["age"] +1;
// console.log(student.age);
// student["name"] = "Radhaji"
// console.log(student["name"]);
// const product = {
//     pname: " ball pan",
//     rating : 4,
//     price : 270,
//     offer : 5,

// };
// console.log(product);
// const product = {
//     pname: " ball pan",
//     rating : 4,
//     price : 270,
//     offer : 5,

// };
// console.log(product);

//ARITHMETIC operator
// let a=5;
// let b=5;
// a++;
// console.log( "a+b = ",a+b);
// console.log( "a**b = ",a**b);
// console.log( "a = ",a);

//ASSIGNMENT operator 
// let a = 5;
// let b = 3;
//  a += 4
//  console.log("a = ", a);
 
 //comparision operator
//  equal ==
//  equal to & type ===
//  not equal to !=
//  not equal to type !==
// <=,>=etc
// let a = 4;
// let b = "4";
// console.log("a == b",a==b);

//logical operator
//logical &&
// logical ||
// logical !
// let a = 4;
// let b = 6;
// let cond1 = a < b;
// let cond2 = a == b;
// console.log("cond1 || cond2 =", cond1 || cond2);

//CONDITIONAL STATEMENTS
//  let color;
// let mode = "light";
//  if(mode ==="dark"){
//     color = "black";
    
//  }
//  if(mode ==="light"){
//     color = "white";  
//  }
//  console.log(color);
// let num = 45;
// if(num %2 == 0){
//    console.log("num is even" ,num);
// }
// else{
//    console.log("num is odd" ,num);
// }

//TERNARY Operator
// let age = 19;
// let r = age >= 18? "adult" : "not adult";
// console.log(r)


//MDN
 
//  let num =prompt("enter a number");
 
//  if(num % 5===0){
//    console.log(num, "is multiple of 5");
//  }
//  else{
//    console.log(num, "is not a multiple of 5");
//  }
  
// let score=97;
// let grade ;
// if(score>=90 && score<=100){
//    grade="A";
// }
// else if(score>=80 && score<=89){
//    grade="b"
// }
// else if(score>=70 && score<=79){
//    grade="c";
// }
// else if(score>=60 && score<=69){
//    grade="d";
// }
// else{
//    grade="fail";
// }
// console.log("grade is =",grade);

//loops
// let = 1;
// for(count=1; count<=100; count++){
//    console.log("radhakrishna");
// }

//print sum of 1 to 5 number
// let sum=0;
// for( i=1; i<=6; i++){
//    sum= sum+i;
// }
// console.log("sum = ",sum);

//10 even num
//  let num=1;
// for(i=1; num<=10; i++){
//  console.log(i*2);
// }
//WHILE LOOP
//
// let name=1;
// while(name<=10){
//     console.log("MADAN JI AANJANA")
//     name++;
// }

//DO-WHILE-LOOP
// let i=1;
// do{
//     console.log("i=",i);
// }while(i<=10);

//for krashnay vasudevay hareye parmantmane pradath klesh nashay govinday namo namhh
//for-of loop

// let str="krishnaji";
// for(let i of str){
//     console.log(i);
// }

// for (let num=0; num<=100; num++){
//     if(num%2==0){
//         console.log("num =", num);
// }

//  }
// let gamenum=7;
// let usernum= prompt("guess the game  number from 1 to 10 :");
// while(usernum != gamenum ){
//     usernum= prompt("you entered wrong number. guess again :");
// }
//     console.log("congratulation, you entered the right number");

//STRINGS
// let str = "mahakal ji ganesh ji krishna ji mata ji hanuman ji ballu bhaiya are my  spritual family";
// console.log(str[8]);

//template literals in js

// let spstr =`this is a temple literal`;
// console.log(spstr);
// example
// let obj={
//     item : "pen",
//     price : 10,
// };
// let output= `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
//template literals in js is a way have embedded expressions in strings
// let str = "mera laddu";
// sm.toUpperCase();
// console.log(sm);

//username question
// let fullname =prompt("enter your name whitout space");
// let username= "@" + fullname + fullname.length;
// console.log(username);

//Arrays
//for loop
// let god=[ "maa","krishnaji", "shivji", "ganeshji" , "hanumanji", "bk bhaiya"];
// for(let idx=0 ; idx< god.length; idx++){
//     console.log(god[idx]);
// }
// //for of loop
// let cities =[ "pune" ,"jaipur ","delhi","udaipur" ,"indore"];
// for(city of cities){
//     console.log(city.toUpperCase());
//}
// let markes=[66,78,99,82,78,59];
// let sum=0;
// for(let val of markes){
//     sum+=val;

// }
// let avg=sum/markes.length;
// console.log(`avg of class is = ${avg }`);


//10% offer wala with for of loop

// let item =[250,670,200,300,900,50];
// let i=0
// for(let val of item){
//     console.log(`value at index i${i} = ${val}`);
//     let offer= val/10;
//     item[i]= item[i] - offer;
//     console.log(`value after offer = ${item[i]}`);
//     i++;
// }

//using for loop
// let item =[250,670,200,300,900,50];
// for(let i = 0; i<item.length; i++){
//     let offer = item[i]/10;
//     item[i] -= offer;
// }
// console.log("value after off =", item);

//ARRAYS IN JS
// let fruits = ["banana", "mango", "papaya" ,"kiwi"];
// fruits.push("apple", "litchi");
// console.log(fruits);
//  let fruits = ["banana", "mango", "papaya" ,"kiwi"];
// console.log(fruits);
// let deletefruits = fruits.pop()
// console.log(fruits);
// console.log(deletefruits);
//concat
// let marks = [76 , 68, 55 , 33 , 59];
// let annualmrk = [300,377,366,342,365];
// let total= marks.concat(annualmrk);
// // marks.toString();
// console.log(total);

// let family = ["mummy", "papa", "sumit", "laddu" , "nikhil"];
// family.unshift("khushiya");
// console.log(family);

//slice 
// let marks = [45,55,66,77,89];
// marks.splice(1,3,35,36,37);
// console.log(marks);
// let companies = ["bloomberg", "microsoft", "uber","google","ibm","netflix"];
// companies.shift();
// companies.push("Amazone");
// companies.splice(1,1,"ola");
// console.log(companies);
function myFunction(){
    console.log("mere krishna ji")
    console.log("mera laddu")
}
myFunction();




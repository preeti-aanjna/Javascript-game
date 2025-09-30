for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
 let person={
  name :"preeti",
  age : 22,
  grade :['a', 'b', 'c','d'],
  greet : function(){
    console.log(this.name);
  }
 };

 let fruits = ["banana","mango","apple"]
 fruits.forEach(fruit => {
  console.log("i like", fruit);
  
 });

 let skin ={
  p : "tretion",
  s : "kojic",
  t : "plum"
 };
Object.values(skin).forEach(pp => {
  console.log("Skin products are:", pp);
});

function add(a,b){
  return a+b;
}
function display (n,p, add){
   
  var res = add(n,p)
  console.log(res);
}
display(6,6,add);

function heal(func){
  func();
}
function display(){
  console.log("skin");
  
  
}
heal(display);
class car {
  constructor(model,year){
    this.m= model;
    this.y = year;
  
  }
  
}
let cars=[
new car("fortuner", 2000),
new car("honda", 2002),
new car("maruti", 2009)

];
cars.forEach(c =>{
  console.log(c.m)
});

//function program to reverse of a string 

function reversS(str){
  return str.split("").reverse().join("")
}
console.log(reversS("hello preeti"));

// find logest word question
console.log(lword("i will do my best i am ambitious "))
function lword(sentence){
  const words = sentence.split(" ")
  let longestw = "";
  for(word of words){
    if(word.length > longestw.length){
      longestw = word;
    }
  }
  return longestw;
};

// a word is palindrom or not
 console.log(isPalindrom("racecar"))
function isPalindrom(str){
  let reverseStr = str.split("").reverse().join("");
  if(reverseStr === str){
    console.log("yes the word is palindrom", reverseStr);
  } else{
    console.log("no the word is not a palindrom", reverseStr);

  }
  return reverseStr;
}

let numbers = [1,33,34,1,22,33,5,7,76,33];

 function removedup(numbers){
  return [... new Set(numbers)];
 }
 console.log(removedup(numbers));

// let str = "completed";
// function countV(str){
//   let vowles = ["a", "e","i","o", 'u'];
  


console.log("preeti");
console.log("preeti");
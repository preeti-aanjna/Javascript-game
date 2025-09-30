// const student = {
//     fullName : "preeti",
//     marks : 94,
//     printmarks: function(){
//         console.log("marks=", this.marks);
//     },
// };
// const life= {
//     millinor:"preeti",
//     spritual:"me",   
//  }
//  const employee = {
//     calctax(){
//         console.log("tax rate is 10%");
//     },

//  };
//  const karanArjun = {
//     salary : 50000,

//  };
//  karanArjun.__proto__ = employee;

//class
//  class tcar {
//    constructor(brand, mileage){
//       console.log("cc new obj");
//       this.brand = brand;
//       this.mileage = mileage;
//    }
//    start(){
//       console.log("start");
//    }
//    stop(){
//       console.log("stop");
//    }
//    setbrand(brand){
//       this.brandname = brand;
//    }
// }
// let hcar= new tcar("hcar" ,10);
// console.log(hcar);
// let pcar= new tcar("pcar" ,20);
// console.log(pcar);


//INHERITANCE
//  class parent{
//    hello(){
//       console.log("hello ji");
//    }
//  }
//  class child extends parent{}
//  let obj = new child();
 class person{
   eat(){
      console.log("yes e")
   }
   sleep(){
      console.log("yahhh s")
   }
 }
 class developer extends person{
   work(){
      console.log("full stack developer");
   }
 }
 let preeti = new developer();
 
 let ev = 0;
while(ev<=21){
  console.log(ev)
  ev*2;
}
//qs2
for(let i = 11; i>=1; i--){
  console.log(i)
}

//qs3
let sum=0;
let ii= 0;
while(ii<=10){
  sum = sum + ii;
  console.log(ii)

}
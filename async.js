const promies1 = new Promise( ( resolve, rejected)=>{
 setTimeout(() => {
    console.log("1hla promise");
    

    resolve();
 }, 2000);
})
promies1.then(function(){
    console.log("promise completed");
})

 new Promise(function(resolve, rejected){
    setTimeout(() => {
        console.log("2nd p")
        resolve();
    }, 4000);
 }).then(function(){
    console.log("hogya bhai 2sra b");
 })

 const p3 = new Promise(function(resolve,rejected){
   setTimeout(()=>{
      console.log("promise3");
      resolve({username : "preeti", email : "chai@example.com"})
   },2000)
 })
 p3.then(function(user){
   console.log(user);

 })
 const p4 = new Promise(function(resolve , reject){
   setTimeout(() => {
      console.log("promise4")
      let error = false;
      if(!error){
         resolve({username : "preeti", password: "21213"})
      }
      else{
         reject("something went wrong")
      }
   }, 1000);
 })
 p4.then((userji)=>{
   console.log(userji);
   return userji.username

 }).then((username)=>{
   console.log(username);
 }).catch(function(error){
   console.log(error)
 })

 const p5 =new Promise(function(resolve , reject){
   setTimeout(() => {
      console.log("promise5")
      let error = false;
      if(!error){
         resolve({username : "javascript", password: "213"})
      }
      else{
         reject("js went wrong")
      }
   }, 1000);
})
 async function consumep5() {
   try{
      const response = await p5
      console.log(response);
   }
   catch(error){
      console.log(error)
   }
 }
 consumep5()
// event handling in js 
// let btn = document.querySelector("#btn2");
// btn.onclick = () => {
    
//      let p =prompt("jii bolo")
//      console.log(p);

// };
// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("worked");
//     alert("han ji aagya swaad");
// };
//event object
// let p = document.querySelector("p")
// p.onmouseover = (e) =>{
//     console.log(e);
//     console.log(e.type);
// };
//event listeners k through hum ek event se multiple kamm krwa skte h
// let but = document.querySelector("#lis");
// but.addEventListener("click",()=>{
//     console.log("b clicked");
// });
// but.addEventListener("click",(e)=>{
//     console.log("b2 clicked ok");
    // console.log(e.target);
// });
// but.addEventListener("click"
//     const b3 =()=>{
//     console.log("b3 clicked");
// };
// but.addEventListener("click",()=>{
//     console.log("b4 clicked");
// })
// but.removeEventListener("click", b3)
let modebtn = document.querySelector("#mode");
let currmode="light";
modebtn.addEventListener("click",()=>{
    
    if(currmode === "blue"){
        currmode = "pink";
        document.querySelector("body").style.backgroundColor = "pink";

    } else if (currmode=== "pink") {
        currmode = "yellow";
        document.querySelector("body").style.backgroundColor = "yellow";
        
    }
    else{
        currmode = "blue";
        document.querySelector("body").style.backgroundColor = "blue";
    }
console.log(currmode);
})
prompt("hello");

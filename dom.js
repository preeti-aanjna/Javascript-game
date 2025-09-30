// console.log(document);
// console.dir(document.body);
//  let heading = document.getElementById("heading");
//  console.dir(heading);
//  let headings = document.getElementsByClassName("heading-class");
//  console.log(headings);
//  console.dir(headings);
//  let parah = document.getElementsByTagName("p");
//  console.dir(parah);

//query selector
// let firstel = document.querySelector("p"); //return 1st element
// console.log(firstel);
// let allel = document.querySelectorAll("p"); //return all alements
// console.dir(allel);


// console.log(document.body.firstChild);
//inner
// let div = document.querySelector("div");
// console.dir(div);
// let he = document.querySelector("h1");

// console.dir(he);

// he.innerText= he.innerText + "from apna college";
// let div = document.getElementsByClassName("box");
// console.dir(div)
// let div= document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);
// let pr = document.querySelector("p");
// console.log(pr.setAttribute("class","bhai"));
// console.log(pr);
// let clas = pr.getAttribute("class");
// console.log(clas); 
// let div = document.querySelector("div");
// div.style.backgroundColor = "pink";
// div.style.fontSize = "28px";
// div.style.color = "black";
// div.innerText = "han bhai";
// let newBtn = document.createElement("button");
// newBtn.innerText = "click here!";
// console.log(newBtn);
// let pa =document.querySelector("p");
// pa.after(newBtn);

// to add a new heading
// let newh = document.createElement("h1");
// newh.innerHTML = "<i> hi bhai developer</i>";
// document.querySelector("body").prepend(newh);
// let para = document.querySelector("p");
// para.remove();
let butji = document.createElement("button")
butji.innerText = "click me!";
butji.style.backgroundColor = "red"
butji.style.color = "white";
document.querySelector("body").append(butji);
// q2
let para =document.querySelector("p");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turno = true;
let newgame = document.querySelector("#newgm");
let msc = document.querySelector(".container")
let msg = document.querySelector("#msg");
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetgm = () =>{
    turno = true;
    enableboxes();
    msc.classList.add("hide");
}
boxes.forEach((box)=> {
    box.addEventListener("click",() =>{
        console.log("box clicked");
        if(turno){
            //playero
            box.innerText = "o";
            turno = false;

        } else{
            box.innerText = "x";
            turno = true;

        }
        box.disabled = true;
        checkwin();
    })
    
});
const disableboxes= ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes= ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showwin = (winner)=>{
    msg.innerText=`congratulations ,winner is ${winner}` ;
    msc.classList.remove("hide");
    disableboxes();

}
const checkwin = () => {
    for (let pattern of winpattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner", val1);
                showwin(val1);
            }
        }
    } // Closing bracket for `for` loop
};
newgame.addEventListener("click",resetgm);
 reset.addEventListener("click",resetgm);


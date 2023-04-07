const selectedChoice = localStorage.getItem("selectedChoice");
const you = document.getElementById('you');
const computer = document.getElementById('computer');
// to display your selected choice.
if(selectedChoice == "cross"){
    you.innerText = "X"
    computer.innerText = "O";
}
else{
    you.innerText = "O"
    computer.innerText = "X";
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener("click", ()=>{
    const cells = Array.from(document.getElementsByClassName("cell"));
    cells.forEach((cell)=>{
        cell.innerText = "";
    })
});
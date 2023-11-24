const enterBtn = document.querySelector("#enterBtn");
const consoleContainer = document.querySelector("#console-container");
const outerContainer = document.querySelector(".metaverse-outer-container");
outerContainer.addEventListener("click", addNewRow);

function addNewRow(event){
    if(!(event.target.id === "enterBtn")) {console.log("button not pressed");return;}

    console.log(event.target);

    let consoleRow_list = document.getElementsByClassName("console-row");
    let consoleRow = consoleRow_list[consoleRow_list.length - 1];    
        
    let newRow = consoleRow.cloneNode(true); 
    consoleRow.querySelector(".cursor").remove();

    if(outerContainer.querySelector("#enterBtn").innerText == "Enter")
        {
            newRow.querySelector("#status").innerText = "Entered Metaverse";
            outerContainer.querySelector("#enterBtn").innerText = "Leave"
        }
    else if(outerContainer.querySelector("#enterBtn").innerText == "Leave")
        {
            newRow.querySelector("#status").innerText = "Enter Metaverse";
            outerContainer.querySelector("#enterBtn").innerText = "Enter";
        }


    consoleContainer.appendChild(newRow);
    if(consoleContainer.scrollHeight > consoleContainer.clientHeight){
        consoleContainer.style.overflowY="scroll";
        consoleContainer.scrollBy(0, consoleContainer.scrollHeight - consoleContainer.clientHeight - consoleContainer.scrollTop);
    }
}
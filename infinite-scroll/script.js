const container = document.getElementById("infi-list");
let count = 1;

for(let i = 0; i < 10; i++) {
	const listElement = document.createElement("li");
	listElement.innerText = `item ${count++}`;
	container.appendChild(listElement);
}

container.addEventListener("scroll", ()=>{
    if(container.scrollHeight-container.clientHeight-container.scrollTop >= 2){
        const listElement = document.createElement("li");
        listElement.innerText = `item ${count++}`;
        container.append(listElement);
        
        const newElement = document.createElement("li");
        newElement.innerText = `item ${count++}`;
        newElement.innerText = `item ${count++}`;
        container.append(newElement);
        
    }
})


const formElement = document.querySelector("#MyForm");
function volume_sphere() {
    //Write your code here
	const radius = Number(formElement.radius.value);
	const volume = (4 * Math.PI * radius**3) / 3.0;
	// formElement.volume.value= String(volume).slice(0, 4);
	formElement.volume.value= volume.toString().slice(0, 5);
    
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;


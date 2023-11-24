// setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   document.getElementById("display-date").innerHTML = d.toLocaleDateString();
//   document.getElementById("display-time").innerHTML = d.toLocaleTimeString();
// }

dial = document.querySelector("#time");
function displayClock() {
	const currDate = new Date();
    let dateString = currDate.toLocaleDateString();
    let timeString = currDate.toLocaleTimeString()
	dial.innerHTML = dateString + ", " + timeString;
}
setInterval(displayClock, 1000);

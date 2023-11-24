let obj = {
    property1 : 2
};
obj.key1 = "value1";
console.log(obj.key1);
console.log(obj);


var x = undefined;
function f(a, b=1) {
    console.log(a * b);
}
f(5, x);

delete obj.key1;
console.log(obj);


let objRepeatProperty = {
    prop1 : "some-value", 
    prop2 : "another-value",
    prop1 : "re-initialized-value"
};
console.log(objRepeatProperty);

const person = {
    name: "sarah",     
};
const birthYear = 1962;
function getInfo(member, year) {
    member.name = "new Name not sarah";
    year = 2022;
}
getInfo(person, birthYear);
console.log(person, birthYear);

let student = {
    name : "student-name", 
    latestQualification : "graduation",
    age : "23"
};
delete student.age;
console.log(student.age + " " + student.latestQualification);




// hoisted();
console.log(hoisted);
var hoisted = function() { 
    console.log("bar");
}


let array = [60, 70, 20, 10, 40, 90];

const test = function(x) {
    return x > 5;
}

if(!array.every(test)) {
    console.log("statement1");
} else{
    console.log("statement2");
}

let colors = ['red', 'blue', 'orange', 'yellow', 'green'];
let removed = colors.splice(2);
console.log(colors);
console.log(removed);


function makeArmy() {
    let shooters = [];
    let i = 0;

    while (i < 10) {
        let shooter = function() {
            console.log(i);
        }
        shooters.push(shooter);
        i++;
    }
    return shooters;
}

let army = makeArmy();
army[0]();
army[5]();


let user = {
    firstName : "Abhishikt",
    lastName : "Sinha",
    getFullName: function() {
        return () => {
            console.log(`the full name of this user is ${this.firstName} ${this.lastName}`);
        }
    }
}
user.getFullName()();




function chunkString(str, size) {
    let chunkArray = [];
    
    while(str.length > 0) {
        let chunk;

        if(str.length >= size)
            chunk = str.slice(0, size);
        else{
            chunk = str.slice(0);
        }

        str = str.slice(size);
        chunkArray.push(chunk);
    }

    return chunkArray;
}

let dateContainer = new Date("abcdefg");
console.log(typeof dateContainer.toString());
console.log(typeof dateContainer);
console.log(dateContainer);

console.log(window.location.origin);
console.log(window.location.origin.length);


// var a = 20;
// function changeA() {
//     console.log(a);
//     a = 50;
//     return;
//     function a(){ console.log("inner function") }
// }
// changeA();
// console.log(a);
// // changeA()a();

function outer() {
    console.log("outer function");

    function inner() {
        console.log("inner log");
    }
}

let arr = [1, 2,, 3, 4];
console.log(arr);

let add = (x, y) => {return (x+y);}
let operation = function(funct) {
    let x = 2, y =3;
    return funct(x, y);
}
console.log(operation(add));


function createButton(bg, color) {
    let divElement = document.querySelector("div");
    let divButton = document    .createElement("button");
    divButton.innerText = "Click me";
    divButton.style.backgroundColor = bg;
    divButton.style.color= color; 
    divButton.className = "btn";
    divElement.appendChild(divButton);
}



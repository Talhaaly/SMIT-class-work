// Quiz Check 

// const numbers = [1, 2, 8]; 
// numbers.sort();
// console.log(numbers[1])



// const number = [ 10 , 5, 2]; 
// number.sort();
// console.log(number[1])


// const isTrue = true == [];
// const isFalse = true == ![];

// console.log(isTrue + isFalse);


// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

// console.log(018 - 015);

// console.log(typeof NaN);

// X-----------------------------------------------------------X-----------------------------------------------X



// child node vs childernNode-->(White Space D/f)
// node object per forEache loop lagy ga. 
// Html collection per forEach loop nh chly ga 
// getAttribute and setAttribute 
// display none jaga bhi hatata hay 
// display hidden jaga mh hatata 




// Task 

// ===========================================================

// wrong

// let array = ["Red", "Green", "Blue", "Grey", "Black"];
// function press() {
//     if(array == "array"){
//         const value = document.getElementById("clickMe")
//         clickMe.Math.random() * 5;
//     }
// }

// =================================================================



const colors = ["Red", "Green", "Blue", "Grey", "Black", "yellow", "pink"];
var text = document.querySelector('span')
const random = Math.floor(Math.random() * 7);
function clrHndlr() {
console.log(colors[random])
text.textContent = colors[random]
document.body.style.backgroundColor = colors[random]
}
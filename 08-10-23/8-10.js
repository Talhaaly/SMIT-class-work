// similar to CSS
// Many Different Ways
// document.body.style.color/something...
//Use - .getElementById




const bulb = document.getElementById('bulb')

console.log(bulb, '-=--> bulb')

function darkHandler (){
// document.body.style.background = 'Black'
// document.body.style.color = 'white'
darkBtn.style.display = 'none'
lightBtn.style.display = 'block'
bulb.src = "./bulb1.jpg";
}

function lightHandler (){
// document.body.style.background = 'green'
// document.body.style.color = 'white'
darkBtn.style.display = 'block'
lightBtn.style.display = 'none'
bulb.src = "./bulb2.jpg";
}
















// turn ON function 


// function bulbon(){
//     let bulbobj = document.querySelector(".bulboff")
//     bulbobj.setAttribute("src", "./bulb1.jpg");
// }
// function bulboff(){
//     let bulbobj = document.querySelector(".bulboff")
//     bulbobj.setAttribute("src", "./bulb2.jpg");
// }






















































































// practice if else conditions 

// let age = 23;

// if(age > 18 ){
//     alert("you are Mature...")
// }else {
//     alert("you are not Mature")
// }

// -----Next Conditions ------ 

// let age = prompt("what is your Age ?");
// let gift = prompt("gift lia hay apne?");
// let cake = prompt("cake khaoge ? type yes Agr laye ho ap.");

// if (age > 18 && gift == "yes" || cake == "no"){
//     alert("you are Adult.")
//     let whatGift = prompt ("kiya gift laye ho ?");
//     if(gift == "cycle" || whatGift == "watch" || whatGift == "toys"){
//         alert("wow");
//     }
//     else {
//         alert("wapis jao or gift lay kr ana")
//     }
// }
// else {
//     alert("you are not Adult.")
// }





// class practice.

// variable lookup 

// const globalNmber = 5;

// function add(num1,num2) {
//     const result = (num1 + num2) + globalNmber;
//     return result;
    
// }

// console.log(add(5,3));


// callBack functions, higher order functions , functions as first class objet/citizens.

// function morning() {
//     console.log('good morning Bob');
//     return 'good morning Bob';
    
// }

// function greet(name, cb) {
//     cb();
//     const myName = "jhon";
//     console.log(` ${name}, my name is ${myName}`);
    
// }


// greet('bobo', morning);
// greet('peter', morning);




// ===========x======22-09-2023=========x================= 


let name = prompt( "what is your name");
let age = prompt ("How old are you ?");
let gift = prompt("do you have gift ?");
let invitationCard =prompt("do you have invitation Card ?");

if(name == "asad" || "talha" || "ayaz" && age >= 18 && gift == "yes" && invitationCard == "yes") {
    alert("your welcome");
}else {
    alert("you are not invited...");
}




// practice if else conditions 

// let age = 23;

// if(age > 18 ){
//     alert("you are Mature...")
// }else {
//     alert("you are not Mature")
// }

// -----Next Conditions ------ 

let age = prompt("what is your Age ?");
let gift = prompt("gift lia hay apne?");
let cake = prompt("cake khaoge ? type yes Agr laye ho ap.");

if (age > 18 && gift == "yes" || cake == "no"){
    alert("you are Adult.")
    let whatGift = prompt ("kiya gift laye ho ?");
    if(gift == "cycle" || whatGift == "watch" || whatGift == "toys"){
        alert("wow");
    }
    else {
        alert("wapis jao or gift lay kr ana")
    }
}
else {
    alert("you are not Adult.")
}
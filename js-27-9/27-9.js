// const peopele = [

//     { name: "fahad", age: 36, position: "nile" },
//      { name: "mohsin", age: 26, position: "student" },
//     { name: "saqib", age: 16, position: "shopkeeper" }

// ]


// peopele.map(function (single) {
//     console.log(single)
// })



//  .filter command Use



// const peopleMoreThan20 = peopele.filter(function(ppl){
//     if(ppl.age >=20) {

//         return ppl;
//     }
// })

// console.log(peopleMoreThan20, "==.return");




// const foodmenue = [
//     'biryani', 'sabzi', 'korma', 'daal', 'sabzi', 'chinese', 'biryani'
// ]

// const biryaniHowManyTime = foodmenue.filter(function(food){
//     if(food === "sabzi"){
// return true
//     }
// })

// console.log(biryaniHowManyTime.length)







// const arr = [0,1,2,3,4,5,6,7,8,9]

// const selected = arr.filter(function(val){
//     if (val > 2 && val < 8)   return true
// }).map(function(val){
// return val * 5
// })





// const phones = [
//     {name: 'motorola', price: 35000, model: "s20"},
//     {name: 'tecno', price: 49000, model: "s20"},
//     {name: 'infinix', price: 75000, model: "A20"},
//     {name: 'iphone', price: 250000, model: "p20"}
// ]

// const display = phones.filter(function(mobile){
//     if(mobile == "tecno") return true
// }).map(function(mobile){
//     return `We have phone ${name}, and price is ${price}, is and model no is ${model}.`
// })






const highestScore = [

    { name: "fahad", id: 10, Score: 76, favsub: "math" },
    { name: "mohsin", id: 12, score: 70, favsub: "science" },
    { name: "ali", id: 14, score: 80, favsub: "english" },
    { name: "ahsan", id: 16, score: 90, favsub: "urdu" },
    { name: "wajid", id: 18, score: 95, favsub: "social" }

]


const Score = highestScore.filter(function (highest) {
    if (highest.score >= 80) {
        return highest
    }
})


const specificId = highestScore.find(function (ids) {
    if (ids.id == "12") {
        return true
    }
})

























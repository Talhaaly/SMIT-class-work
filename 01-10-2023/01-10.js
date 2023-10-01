

// Array Reduce Method 
// iterate to a single value - number array , object...

// const alpha = ["a" , " b" , "c" , "d"]


// alpha.reduce(function(acc,curr){
//     console.log(curr)
//     console.log(acc)
//     return curr
// }, 0);




// const salaries = [ 100 , 200 , 300 , 400 , 500]

// salaries.reduce(function(prev,current){
//     return current + prev
// }, 0);







// Reduce Assignment 


// const studentScore = [

//     { name: "fahad", id: 10, score: 76 },
//     { name: "mohsin", id: 12, score: 70 },
//     { name: "ali", id: 14, score: 80 },
//     { name: "ahsan", id: 16, score: 90 },
//     { name: "wajid", id: 18, score: 95 }

// ]



// // console.log(studentScore)


// const averageScore = studentScore.reduce(function (acc, curr) {
//     console.log(`total ${acc}`)
//     console.log(`current score ${curr.score}`)
//     acc += curr.score
//     return acc

// }, 0)

// console.log(averageScore / studentScore.length);


// OR 


// const studentScore = [

//     { name: "aleem", id: 10, score: 76 },
//     { name: "faheem", id: 12, score: 50 },
//     { name: "kaleem", id: 14, score: 80 },
//     { name: "shamim", id: 16, score: 60 },
//     { name: "wasim", id: 18, score: 90 }

// ]

// const totalScore = studentScore.reduce(function(prev , curr){
//     return prev + curr.score

// }, 0)


// console.log(totalScore / studentScore.length)




const survey = [
    { name: "fahad", id: 10, score: 76, favsub: "math" },
    { name: "mohsin", id: 12, score: 70, favsub: "science" },
    { name: "ali", id: 14, score: 80, favsub: "english" },
    { name: "ahsan", id: 16, score: 90, favsub: "urdu" },
    { name: "wajid", id: 28, score: 92, favsub: "math" },
    { name: "azeem", id: 38, score: 88, favsub: "english" },
    { name: "nadeem", id: 48, score: 77, favsub: "urdu" },
    { name: "nasim", id: 58, score: 71, favsub: "math" },
    { name: "faheem", id: 68, score: 65, favsub: "english" },
    { name: "aleem", id: 78, score: 53, favsub: "science" },
    { name: "kaleem", id: 15, score: 50, favsub: "math" }
]




// chk sir github 

// const finalSurvey = survey.reduce(function(prev , curr) {
//   console.log(prev)
//   if(prev.hasOwnProperty(curr.favsub)){
//     prev[curr.favsub] = 1
//     return prev
//   }

//   return {}
// }, {})


// console.log( survey.hasOwnProperty('english'))
























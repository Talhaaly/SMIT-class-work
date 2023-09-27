// function welcome (name) {
//     var capital = name.slice(0,1).toUpperCase() + name.slice(1).toLowaeCase
//     console.log("welcome to thewebsite, Mr," + name)
// }

// function guide(name) {
//     console.log(`${name} bhai or kia janna hay apko ?`)
// }

// welcome("Talha")
// welcome("Ayaz")
// welcome("Osama")

// guide("fahad")





// Array kay functions  forEach

// const people = [
//     {name: "sultan", age : 18, position : "developer"},
//     {name: "ali", age : 29, position : "designer"},
//     {name: "ahmed", age : 37, position : "artist"}
// ]

// console.log(people[0])
// console.log(people[1])
// console.log(people[2])

// for(let i =0; i < people.length; i++){
//     console.log(people[i].name)
// }

// for(let i =0; i < people.length; i++){
//     console.log(people[i].age)
// }


// people.forEach(function(val){
// console.log(val, "===. value")
// })

// people.forEach(function(val){
// console.log(val.name, "===. value")
// })

// people.forEach(function(val){
// console.log(val.age, "===. value")
// })

// people.forEach(function(val){
// console.log(`Hi my name is ${val.name}, and i am ${val.age} years old, and my position is ${val.position}`)
// })






// const foodMenu = ["biryani", "korma", "salad"]

// foodMenu.forEach(function(food){
//     alert(food + ',')
// })






// Array kay Function map 


// const people = [
//     {name: "sultan", age : 18, position : "developer"},
//     {name: "ali", age : 29, position : "designer"},
//     {name: "ahmed", age : 37, position : "artist"},
//     {name: "sufiyan", age : 47, position : "boos"},
//     {name: "ayaz", age : 57, position : "pataNhi"}
// ]


// const peopeleArray = people.map(function(student){
// return {
//     name:student.name,
//     age:student.age,
//     position:student.age
// }
// })



const students = [
    {name: "iqbal", id : 18, score : "80%", favoriteSubject: "mathematics"},
    {name: "ahmed", id : 28, score : "86%", favoriteSubject: "physics"},
    {name: "waqar", id : 38, score : "91%", favoriteSubject: "chemistry"},
    {name: "sahfeeq", id : 48, score : "73%", favoriteSubject: "english"},
    {name: "talha", id : 58, score : "95%", favoriteSubject: "pakStudies"}
]



// students.map(students => {
//     // New properties to be added
//     const addRole= {
//       role:"student"
//     };
  
//     // Assign new properties and return
//     return Object.assign(students, addRole);
//   });


// or 

const updatedStudents = students.map(function(student){
    student.role ='student'
    return {name: student.name}
})













// var x = prompt('where does the people live ?');
// if (x ===  "karachi"){
//     alert('correct');
// }else {
//     alert("Wrong Ansawer");
// }








// var biryanishopopen=false;
// var isbiryanigaram=false;
// var fastfoodshopopen=true;
// var daalchawalshopopen=true;

// if(biryanishopopen && isbiryanigaram){
//     alert('biryani ly ana');
// }else if(fastfoodshopopen) {
//     alert('fastfood ly ana');
// }else if (daalchawalshopopen){
//     alert('dalchawal ly ana');
// }else{
//     alert('wapis ajana');
// };







// var weight=prompt('what is your body weight');
// if(weight <=200){
//     document.write('you are eligible');
// }else {
//     document.write('you are not eligible');
// };






// var percentage = prompt('what is your percentage');

// if (percentage >= 80) {
//     alert('A+ Grade');
// } else if (percentage < 80 && percentage >= 70) {
//     alert('A Grade');
// } else if (percentage < 70 && percentage >= 60) {
//     alert('B Grade');
// } else if (percentage < 70 && percentage >= 60) {
//     alert('C Grade');
// } else if (percentage < 60 && percentage >= 50){
//     alert('D Grade')} else {
//     alert('You are Fail');
// }










// var cities =['karachi','lahore','sukkur','hyderabad','faisalabad','sialkot','larkana','islamabad','jamshoro'];
// alert('welcome to' + ' ' + cities[2]);

// cities=[cities.length-1];
// document.write(cities);











// var car = {
//     addMake : "Honda",
//     model: "Civic",
//     year : 2021,
//     colors :['kala', 'hara', 'peela'],
//     hybrid: true,
//     drive: function (){
//         console.log('Drive Car')
//     },
//     stop: function(){
//         console.log(`stop car`)
//     }
// };

// console.log(car.drive)
// console.log(car.stop)
// console.log(color[1])


// x=======================================x=======================================================x 


// Quiz 



const API_URL = 'https://opentdb.com/api.php?amount=10';

async function fetchQuiz() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results[0];
}

function loadQuestion() {
  fetchQuiz().then(question => {
    const questionDiv = document.getElementById('question');
    questionDiv.innerHTML = `<p>${question.question}</p>`;
    const answersDiv = document.getElementById('answers');
    const answers = [...question.incorrect_answers, question.correct_answer];
    answers.sort(() => Math.random() - 0.5);
    answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerHTML = answer;
      button.onclick = () => checkAnswer(answer, question.correct_answer);
      answersDiv.appendChild(button);
    });
  });
}

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    alert('The Answer' + correctAnswer + 'is Correct!');
  } else {
    alert('Incorrect! The correct answer is: ' + correctAnswer);
  }
  loadQuestion();
}
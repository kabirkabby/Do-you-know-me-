var readlineSync = require('readline-sync');

var userName = readlineSync.question('Enter your name! ');
console.log('Hello '+ userName + '! Welcome to HOW WELL DO YOU KNOW ME QUIZ !.');
console.log('---------------------------------------------------');
console.log('NOTE:');
console.log('You get +1 for each right answer and -1 for each wrong answer');
console.log('---------------------------------------------------');

var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question)
  
  if(userAnswer === answer){
    console.log('Thats right!');
    score = score+1;
  }
  else{
    console.log('That was wrong! Right answer was '+ answer);
    score = score-1;
  }

  console.log('Current score : '+ score);
  console.log('----------------------------------')
}


var questions = [{
  question: "How old am I? ",
  answer: "21"
}, {
  question: "My favourite food ? ",
  answer: "Pizza"
}, {
  question: "One thing I cant live without? ",
  answer: "Music"
}, {
  question: " WHat do i do for living ? ",
  answer: "Freelancing"
}, {
  question: "which one do I like? Coffee or Tea? ",
  answer: "Tea"
}]

for(var i=0; i<questions.length; i++ ){
  var currentQuestion = questions[i];
  
  play(currentQuestion.question,currentQuestion.answer)

}

console.log('YAY! You scored: ' + score);
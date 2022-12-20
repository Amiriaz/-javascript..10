var myQuestions = [
  {
    question: "What is 10+2",
    answers: {
      a: '3',
      b: '12',
      c: '115'
    },
    correctAnswer: 'b'
  },
  {
    question: "What is 12+2",
    answers: {
      a: '3',
      b: '14',
      c: '115'
    },
    correctAnswer: 'b'
  },
  {
    question: "What is 22+2",
    answers: {
      a: '3',
      b: '12',
      c: '24'
    },
    correctAnswer: 'c'
  },
  {
    question: "What is 100+2",
    answers: {
      a: '102',
      b: '12',
      c: '115'
    },
    correctAnswer: 'a'
  },
  {
    question: "What is 30+3",
    answers: {
      a: '3',
      b: '5',
      c: '33'
    },
    correctAnswer: 'c'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

for(var i=0; i<questions.length; i++){
      
answers = [];

for(letter in questions[i].answers){

answers.push(
'<label>'
+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
+ letter + ': '
+ questions[i].answers[letter]
+ '</label>' );
      }
output.push(
'<div class="question py-3">' + questions[i].question + '</div>'
+ '<div class="answers mx-5">' + answers.join('') + '</div>'
);
}
    quizContainer.innerHTML = output.join('');
  }
  function showResults(questions, quizContainer, resultsContainer){
  var answerContainers = quizContainer.querySelectorAll('.answers');
  var userAnswer = '';
  var numCorrect = 0;
    
  for(var i=0; i<questions.length; i++){
userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
if(userAnswer===questions[i].correctAnswer){
  numCorrect++;
        
  answerContainers[i].style.color = 'lightgreen';
      }
      else{
        answerContainers[i].style.color = 'red';
      }
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }
  showQuestions(questions, quizContainer);
    submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}
Resources
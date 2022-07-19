//a start button initializes
//timer and first question
//first question has multiple choice
//if answer is correct then next question
//if answer is incorrect then next question and subtract time
//if all questions are answered or timer = 0, end game
//present quiz grade
//give opportunity to add initials to document score

//Global Variables
let arrayIndex;
let indexArray = [];
let timer;
let timeLeft = 10;
let score = 0;

//Interactions with the DOM
let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");
let answerD = document.getElementById("answerD");
let startGame = document.querySelector("#start");
// let answerEvent = answers.addEventListener('click', (e) => console.log(e.target));
let docDisplay = document.querySelector("#questionDisplay");
startGame.addEventListener("click", jsChallenge);
score = 0;

//Functions
function clock() {
  document.getElementById("timerDisplay").innerHTML = timeLeft;
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timer);
    //end quiz function to display last page with stats.
  }
 };

function jsChallenge() {
  startGame.style.display = 'none';
  answers.style.display = 'flex';
  questionDisplay.style.display = 'flex';
  timer = setInterval(clock, 1000);
  arrayIndex = Math.floor(Math.random()*6);
  indexArray.push(arrayIndex);
  manageQuestions();
  answersHandler();
  answerValidator();
};

function manageQuestions() {
  docDisplay.innerHTML = questions[arrayIndex].question;
};

function generateIndex() {
  //check if answer is correct
  //if correct update score
  //if incorrect decrease time
  //if arrayIndex > questions.length then endQuiz()
  if (indexArray.length === questions.length) {
    endQuiz();
    return;
  }
  arrayIndex = Math.floor(Math.random()*6);
  while (indexArray.includes(arrayIndex)) {
  arrayIndex = Math.floor(Math.random()*6);
 } 
  indexArray.push(arrayIndex);
  manageQuestions();
  answersHandler();
  answerValidator();
  console.log(score);
};

function answersHandler() {
  answerA.innerText = questions[arrayIndex].answers.a;
  answerB.innerText = questions[arrayIndex].answers.b;
  answerC.innerText = questions[arrayIndex].answers.c;
  answerD.innerText = questions[arrayIndex].answers.d;
  answers.onclick = generateIndex;
};

function answerValidator() {
  if (arrayIndex === 0 && questions[arrayIndex].correctAnswer === 'd') {
  score++;
} else (arrayIndex === 1 && questions[arrayIndex].correctAnswer === 'a') {
  score++;
} else (arrayIndex === 2 && questions[arrayIndex].correctAnswer === 'd') {
  score++;
} else (arrayIndex === 3 && questions[arrayIndex].correctAnswer === 'b') {
  score++;
} else (arrayIndex === 4 && questions[arrayIndex].correctAnswer === 'd') {
  score++;
} else (arrayIndex === 5 && questions[arrayIndex].correctAnswer === 'd') {
  score++;
}
}

//Question Object
const questions = [
  {
    question: "What can you do with JavaScript?",
    answers: {
      a: "a: change document text",
      b: "b: change text styles",
      c: "c: create website interactions",
      d: "d: all of the above",
    },
    correctAnswer: "d",
  },
  {
    question: "What is the DOM?",
    answers: {
      a: "a: an API",
      b: "b: an html page",
      c: "c: a domain",
      d: "d: none of the above",
    },
    correctAnswer: "a",
  },
  {
    question: "How do you access the DOM?",
    answers: {
      a: "a: using JavaScript",
      b: "b: using Python",
      c: "c: using html",
      d: "d: a and b",
    },
    correctAnswer: "d",
  },
  {
    question: "What is the BOM?",
    answers: {
      a: "a: another name for the DOM",
      b: "b: an important part of JavaScript",
      c: "c: an important part of ECMAScript",
      d: "d: b and c"
    },
    correctAnswer: "b",
  },
  {
    question: "What is ECMAScript?",
    answers: {
      a: "a: another name for JavaScript",
      b: "b: a standard maintained by ECMA International",
      c: "c: a scripting language",
      d: "d: b and c"
    },
    correctAnswer: "d",
  },
  {
    question: "What variable declarations are allowed in JavaScript?",
    answers: {
      a: "a: var",
      b: "b: const",
      c: "c: let",
      d: "d: a, b, and c"
    },
    correctAnswer: "d"
  }
];
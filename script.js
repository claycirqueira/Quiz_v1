// questions
const questions = [
    {
        // question nº1
        question:"Which is larget animal in the world?",
        answers:[
            {text: "Shark", Correct:false},
            {text: "Blue whale", Correct:true},
            {text: "Elephant", Correct:false},
            {text: "Giraffe", Correct:false},

        ]
    },
    {
        // question nº2
        question:"Which is larget animal in the world?",
        answers:[
            {text: "Shark", Correct:false},
            {text: "Blue whale", Correct:true},
            {text: "Elephant", Correct:false},
            {text: "Giraffe", Correct:false},

        ]
    },
    {
        // question nº3
        question:"Which is larget animal in the world?",
        answers:[
            {text: "Shark", Correct:false},
            {text: "Blue whale", Correct:true},
            {text: "Elephant", Correct:false},
            {text: "Giraffe", Correct:false},

        ]
    },
    {
        // question nº4
        question:"Which is larget animal in the world?",
        answers:[
            {text: "Shark", Correct:false},
            {text: "Blue whale", Correct:true},
            {text: "Elephant", Correct:false},
            {text: "Giraffe", Correct:false},

        ]
    },
    {
        // question nº5
        question:"Which is larget animal in the world?",
        answers:[
            {text: "Shark", Correct:false},
            {text: "Blue whale", Correct:true},
            {text: "Elephant", Correct:false},
            {text: "Giraffe", Correct:false},

        ]
    },
     {
        // question nº6
        question:"Which is larget animal in the world?",
        answers:[
            {text: "Shark", Correct:false},
            {text: "Blue whale", Correct:true},
            {text: "Elephant", Correct:false},
            {text: "Giraffe", Correct:false},

        ]
     }   
];

//questions
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//score
let currentQuestionIndex = 0;
let score = 0;

// start-up test
function startQuiz(){
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//managing questions
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;
}
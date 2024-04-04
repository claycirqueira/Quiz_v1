// questions
const questions = [
    {
        // question nº1
        question:"sobre lei 8.112/90: Rezende era um servidor estável, mas foi inabilitado no estágio probatório após ser aprovado em concurso para outro cargo no mesmo órgão. ",
        answers:[
            {text: "Revisão", correct: false},
            {text: "Reinclusão", correct: false},
            {text: "Recondução", correct: true},
            {text: "Reintegração", correct: false},

        ]
    },
    {
        // question nº2
        question:"sobre lei 8.112/90: Qual é o procedimento aplicável quando um servidor público estável é inabilitado no estágio probatório após ser aprovado em concurso para outro cargo no mesmo órgão?",
        answers:[
            {text: "Reintegração", correct: false},
            {text: "Recondução", correct: true},
            {text: "Revisão", correct: false},
            {text: "Reinclusão", correct: false},

        ]
    },
    {
        // question nº3
        question:"Qual é o papel do emissor na comunicação?",
        answers:[
            {text: "Privilegia a melodia e sonoridade das palavras.", correct: false},
            {text: "Utiliza uma linguagem elaborada e cuidada.", correct: false},
            {text: "Utiliza uma linguagem denotativa.", correct: false},
            {text: " Representa aquele que envia a mensagem.", correct: true},

        ]
    },
    {
        // question nº4
        question:"Quem é o receptor na comunicação?",
        answers:[
            {text: "Só existe comunicação quando a pessoa que recebe a mensagem entende o seu significado.", correct: false},
            {text: "O conceito de sociedade de massa remonta aos anos de escravidão, quando pessoas das diversas tribos africanas eram vistas como um grupo homogêneo.", correct: false},
            {text: "É representado por aquele que recebe a mensagem.", correct: true},
            {text: "A constatação da existência de uma sociedade de massa invalidou os fundamentos da teoria hipodérmica.", correct: false},

        ]
    },
                 
];

//questions
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//score
let currentQuestionIndex = 0;
let score = 0;

// start-up test
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//managing questions
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    // when clicking on an option, it should show the correct one and disable the others
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();        
    }
});

startQuiz();
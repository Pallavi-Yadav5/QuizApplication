const quizDB = [
    {
        question : "Q1 : What is JavaScript?",
        a: "JavaScript is a scripting language used to make the website interactive",
        b: "JavaScript is an assembly language used to make the website interactive",
        c: "JavaScript is a compiled language used to make the website interactive",
        d: "None of the above",
        ans: "ans1"
    },

    {
        question : "Q2 : Arrays in JavaScript are defined by which of the following statements?",
        a: "It is an ordered list of values",
        b: "It is an ordered list of objects",
        c: "It is an ordered list of string",
        d: "It is an ordered list of functions",
        ans:"ans1"
    },

    {
        question : "Q3 : Which of the following is not javascript data types?",
        a: "null type",
        b: "undefined type",
        c: "number type",
        d: "All of the above",
        ans: "ans1"
    },


    {
        question : "Q4 : In the JavaScript, which one of the following is not considered as an error:",
        a: "syntax error",
        b: "Missing of semicolons",
        c: "Division by zero",
        d: "Missing of brackets",
        ans: "ans3"
    },

    {
        question : "Q5 : Which one of the following is not a keyword:",
        a: "if",
        b: "with",
        c: "debuuger",
        d: "use strict",
        ans: "ans4"
    },

    {
        question : "Q6 : What is the basic purpose of the 'toLocateString()' method?",
        a: "It returns a localised object representation",
        b: "It returns a localized string representation of the object",
        c: "It return a parsed string",
        d: "It return a local time in the string format",
        ans: "ans2"
    },

    {
        question : "Q7 : A set of unordered properties that, has a name and value is called.....",
        a: "string",
        b: "serialized object",
        c: "object",
        d: "array",
        ans: "ans3"
    },

    {
        question : "Q8 : Which of the following is the property that is triggered in response to JS error",
        a: "onclick",
        b: "onexception",
        c: "onmessage",
        d: "onerror",
        ans: "ans4"
    },

    {
        question : "Q9 :Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        ans: "ans4"
    },

    {
        question : "Q10 :The 'function' and 'var' are known as:",
        a: "keywords",
        b: "declaration statements",
        c: "Data types",
        d: "none",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');



let count = 0;
let score=0;

const loadQuestion = () => {

    const list = quizDB[count];

    question.innerText = list.question;

    option1.innerText = list.a;
    option2.innerText = list.b;
    option3.innerText = list.c;
    option4.innerText = list.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    })
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[count].ans){
        score++;
    };
    
    count++;
    deselectAll();

    if(count < quizDB.length){
        loadQuestion();
    }

    else{
        showScore.innerHTML = `
        <h3> Your Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('ScoreArea');
    }
});

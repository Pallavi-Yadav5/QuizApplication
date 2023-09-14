const quizDB = [
    {
        question : "Q1 : What is full form of HTML?",
        a: "Hello to my Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },

    {
        question : "Q2 : How many sizes of headers are available in HTML by default?",
        a: 6,
        b: 5,
        c: 3,
        d: 1,
        ans:"ans1"
    },

    {
        question : "Q3 : What is the effect of the <b> tag?",
        a: "It converts text within it to Bold",
        b: "It is used to write Black Coloured Font",
        c: "It is used to change the font size",
        d: "None of above",
        ans: "ans1"
    },

    {
        question : "Q4 : CSS stands for :",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        ans: "ans3"
    },

    {
        question : "Q5 : The property in CSS used to change the background color of an element is:",
        a: "bgcolor",
        b: "Color",
        c: "background-color",
        d: "All of the above",
        ans: "ans3"
    },

    {
        question : "Q6 : How many types of CSS? :",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        ans: "ans3"
    },

    {
        question : "Q7 : The HTML attribute used to define the internal stylesheet is:",
        a: "<style>",
        b: "style",
        c: "<link>",
        d: "<script>",
        ans: "ans1"
    },

    {
        question : "Q8 :  Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
        a: "p {background-color : yellow;}",
        b: "p {background-color : #yellow;}",
        c: "all {background-color : yellow;}",
        d: "all p {background-color : #yellow;}",
        ans: "ans1"
    },

    {
        question : "Q9 :  1. What is JavaScript?",
        a: "JavaScript is a scripting language used to make the website interactive.",
        b: "JavaScript is an assembly language used to make the website interactive.",
        c: "JavaScript is a compiled language used to make the website interactive.",
        d: "None of Mentioned.",
        ans: "ans1"
    },

    {
        question : "Q10 :  The 'function' and 'var' are known as",
        a: "keywords",
        b: "Data Types",
        c: "Declaration Statements",
        d: "Prototypes",
        ans: "ans3"
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

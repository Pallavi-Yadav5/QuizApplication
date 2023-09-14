const quizDB = [
    {
        question : "Q1 : CSS stands for :",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        ans: "ans3"
    },

    {
        question : "Q2 : Which of the following is the correct syntax for referring the external style sheet?",
        a: "<link rel='stylesheet' type='text/css' href='example.css'>",
        b: "<style src ='example.css'>",
        c: "<stylesheet> example.css </stylesheet>",
        d: "<style src = example.css>",
        ans:"ans1"
    },

    {
        question : "Q3 : The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
        a: "writing-mode",
        b: "text-indent",
        c: "word-break",
        d: "None of above",
        ans: "ans1"
    },


    {
        question : "Q4 : How to select the elements with the class name 'example'?",
        a: "example",
        b: "#example",
        c: ".example",
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
        question : "Q6 : Which of the following is the correct syntax to select all paragraph elements in a div element? :",
        a: "div p",
        b: "p",
        c: "div#p",
        d: "div~p",
        ans: "ans1"
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
        question : "Q9 : Which of the following property is used to align the text in a table?",
        a: "text-align",
        b: "align",
        c: "text",
        d: "None of Mentioned.",
        ans: "ans1"
    },

    {
        question : "Q10 : Which of the following CSS property defines the space between cells in a table?",
        a: "border-spacing",
        b: "border-style",
        c: "border",
        d: "none",
        ans: "ans1"
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

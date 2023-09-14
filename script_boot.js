const quizDB = [
    {
        question : "Q1 : Which of the following class in Bootstrap is used to provide a responsive fixed width container?",
        a: ".container-fixed",
        b: ".container",
        c: ".container-fluid",
        d: "All of the above",
        ans: "ans1"
    },

    {
        question : "Q2 :  Which of the following class in Bootstrap is used to create a dropdown menu?",
        a: ".dropdown",
        b: ".select",
        c: ".select-list",
        d: "None",
        ans:"ans1"
    },

    {
        question : "Q3 :Who developed the bootstrap?",
        a: "Dennis Ritchie",
        b: "Mark Juckvech",
        c: "James Gosling",
        d: "Mark Otto and Jacob Thornton",
        ans: "ans4"
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
        question : "Q5 :Which of the following class in bootstrap is used to create a big box for calling extra attention?",
        a: ".box",
        b: ".container-fluid",
        c: ".container",
        d: ".jumbotron",
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
        question : "Q7 : The correct syntax of creating a standard navigation bar is -",
        a: "<nav class='navigationbar navbar'>",
        b: "<nav class='navbar navbar-default'>",
        c: "<nav class='nav navbar'>",
        d: "<nav class='navbar default'>",
        ans: "ans2"
    },

    {
        question : "Q8 :The plugin used to create a cycle through elements as a slideshow is -",
        a: "slidshow",
        b: "carousel",
        c: "scrollspy",
        d: "None",
        ans: "ans2"
    },

    {
        question : "Q9 : Which of the following class in Bootstrap is used to create a basic list group?",
        a: ".grouped-list",
        b: ".select-list",
        c: ".list-group",
        d: ".list-grouped",
        ans: "ans3"
    },

    {
        question : "Q10 :Which of the following class in Bootstrap is used to create a large button?",
        a: ".btn-xl",
        b: ".btn-lrg",
        c: ".btn-large",
        d: ".btn-lg",
        ans: "ans4"
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

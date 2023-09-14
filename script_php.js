const quizDB = [
    {
        question : "Q1 :What is PHP?",
        a: "PHP is an open-source programming language",
        b: "PHP is used to develop dynamic and interactive websites",
        c: "PHP is a server-side scripting language",
        d: "All of the above",
        ans: "ans4"
    },

    {
        question : "Q2 :Which of the following is the correct syntax to write a PHP code?",
        a: "<?php?>",
        b: "<php>",
        c: "<? ?>",
        d: "None",
        ans:"ans3"
    },

    {
        question : "Q3 :Which of the following is the default file extension of PHP files?",
        a: ".php",
        b: "php",
        c: ".xml",
        d: ".html",
        ans: "ans1"
    },


    {
        question : "Q4 :Which is the right way of declaring a variable in PHP?",
        a: "$3hello",
        b: "$_hello",
        c: "$5_Hello",
        d: "$this",
        ans: "ans2"
    },

    {
        question : "Q5 :Which of the following web servers are required to run the PHP script?",
        a: "Apache and PHP",
        b: "XAMPP",
        c: "IIS",
        d: "None",
        ans: "ans3"
    },

    {
        question : "Q6 : Which one of the following PHP function is used to determine a files last access time?",
        a: "filetime()",
        b: "fileatime()",
        c: "filectime()",
        d: "fileltime()",
        ans: "ans2"
    },

    {
        question : "Q7 :If $a = 12 what will be returned when ($a == 12) ? 5 : 1 is executed?",
        a: 1,
        b: 12,
        c: 5,
        d: "Error",
        ans: "ans3"
    },

    {
        question : "Q8 :PHP stands for -",
        a: "slidshow",
        b: "carousel",
        c: "scrollspy",
        d: "None",
        ans: "ans2"
    },

    {
        question : "Q9 : Which of the following class in Bootstrap is used to create a basic list group?",
        a: "Pretext Hypertext Preprocessor",
        b: "Personal Home Processor",
        c: "Hypertext Preprocessor",
        d: "none",
        ans: "ans3"
    },

    {
        question : "Q10 :Which of the following is not a variable scope in PHP?",
        a: "Extern",
        b: "Local",
        c: "Global",
        d: "Static",
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

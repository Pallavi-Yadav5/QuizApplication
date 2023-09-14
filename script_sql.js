const quizDB = [
    {
        question : "Q1 :In which language MYSQL is written?",
        a: "PYTHON",
        b: "JAVA",
        c: "C/C++",
        d: "COBOL",
        ans: "ans3"
    },

    {
        question : "Q2 :What do you mean by HOST in MYSQL?",
        a: "HOST is the administrations machine name.",
        b: "HOST is the representation of where the MYSQL server is running.",
        c: "HOST is the user name.",
        d: "None",
        ans:"ans2"
    },

    {
        question : "Q3 :Is a semicolon necessary after every query?",
        a: "True",
        b: "False",
        c: "Both",
        d: "None",
        ans: "ans1"
    },


    {
        question : "Q4 :To see all the databases which command is used?",
        a: "Show database;",
        b: "Show databases;",
        c: "Show database();",
        d: "Show_all database;",
        ans: "ans2"
    },

    {
        question : "Q5 :ALTER command is a type of which SQL command?",
        a: "DCL",
        b: "DML",
        c: "DDL",
        d: "DQL",
        ans: "ans3"
    },

    {
        question : "Q6 : What is the function of DESCRIBE statement?",
        a: "This statement helps us to get the details of the entire row.",
        b: "This statement helps us to get the definition of a particular table at a time.",
        c: "This statement helps us to get the definition of all the tables.",
        d: "None",
        ans: "ans2"
    },

    {
        question : "Q7 :If you are asked to delete the entire data of a table without disturbing the table definition then in such case which statement you will use?",
        a: "Truncate",
        b: "Delete",
        c: "Clear",
        d: "Drop",
        ans: "ans1"
    },

    {
        question : "Q8 :From all the clauses in MYSQL what task is performed by the DISTINT clause?",
        a: "It returns us the duplicate values",
        b: "It returns us the unique values",
        c: "It returns us the NULL values",
        d: "None",
        ans: "ans2"
    },

    {
        question : "Q9 :Suppose you are asked to display all the names which have 'a' as their second character then which query pattern you will use?",
        a: "_ _ a%",
        b: "_a%",
        c: "_a_",
        d: "_%a",
        ans: "ans2"
    },

    {
        question : "Q10 :State whether the statement is true or false? 'PRIMARY KEY and UNIQUE KEY both are the same'",
        a: "True",
        b: "False",
        c: "Both",
        d: "None",
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

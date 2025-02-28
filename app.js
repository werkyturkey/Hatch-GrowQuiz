let currentQuestion = 0;
const questions = [
    {
        question: "How do you approach challenges at work?",
        options: ["I tackle challenges head-on", "I think things through before taking action", "I like to seek advice from others", "I prefer to work on smaller tasks first"]
    },
    {
        question: "What's your preferred working style?",
        options: ["I work best alone", "I prefer collaborating with others", "I take frequent breaks", "I thrive in a fast-paced environment"]
    },
    {
        question: "How do you manage your time at work?",
        options: ["I make to-do lists", "I work on tasks as they come", "I prioritize tasks", "I delegate tasks"]
    },
    {
        question: "How do you deal with tight deadlines?",
        options: ["I stay calm and focused", "I ask for an extension", "I rush to finish as quickly as possible", "I plan my work in advance"]
    },
    {
        question: "How do you feel about taking on new tasks?",
        options: ["I love learning new things", "I feel nervous but try", "I need some encouragement", "I prefer to stick to what I know"]
    }
];

function loadQuestion() {
    const question = questions[currentQuestion];
    const questionTitle = document.getElementById('question-title');
    const optionsList = document.getElementById('options-list');
    questionTitle.innerHTML = question.question;
    optionsList.innerHTML = '';
    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.innerHTML = option;
        li.setAttribute('data-index', index);
        li.onclick = selectOption;
        optionsList.appendChild(li);
    });
    document.getElementById('next-btn').style.display = 'none';
}

function selectOption(event) {
    const selectedOption = event.target;
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    selectedOption.classList.add('selected');
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}

function restartQuiz() {
    currentQuestion = 0;
    loadQuestion();
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('results').style.display = 'none';
}

window.onload = loadQuestion;


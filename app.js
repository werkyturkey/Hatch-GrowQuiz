let currentQuestionIndex = 0;

const questions = [
  {
    question: "How do you approach challenges at work?",
    options: ["Logical and structured", "Creative and open-minded", "Data-driven and analytical", "Hands-on and practical"],
    answer: null
  },
  {
    question: "When faced with a new tool or technology, how do you typically learn to use it?",
    options: ["I read documentation and manuals", "I watch tutorials and videos", "I experiment and explore on my own", "I ask for help from others"],
    answer: null
  },
  {
    question: "How do you prioritize tasks in your daily work?",
    options: ["By deadlines and urgency", "By the importance and impact", "Based on data and metrics", "By personal preference and ease of execution"],
    answer: null
  },
  {
    question: "What’s your preferred way to work in a team?",
    options: ["I like to lead and organize", "I prefer to collaborate and brainstorm ideas", "I rely on data and analytics to guide decisions", "I take a practical, hands-on approach to get things done"],
    answer: null
  },
  {
    question: "Which skill would you like to develop further for future growth?",
    options: ["Data Literacy", "AI Literacy", "Digital Tool Literacy", "Robotic Process Automation (RPA)"],
    answer: null
  }
];

function showQuestion() {
  const quizContent = document.getElementById("quiz-content");
  const currentQuestion = questions[currentQuestionIndex];
  
  // Build the question header and options wrapped in labels
  quizContent.innerHTML = `
    <h2>${currentQuestion.question}</h2>
    <ul>
      ${currentQuestion.options.map((option, index) =>
        `<li>
           <label for="option-${index}">
             <input type="radio" id="option-${index}" name="answer" value="${option}" onclick="selectAnswer('${option}')">
             ${option}
           </label>
         </li>`
      ).join('')}
    </ul>
  `;
}

function selectAnswer(answer) {
  questions[currentQuestionIndex].answer = answer;
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    displayResults();
  }
}

function displayResults() {
  const quizContent = document.getElementById("quiz-content");
  quizContent.innerHTML = "<h2>Thank you for completing the quiz!</h2>";

  let resultsHTML = "<h3>Your Answers:</h3>";
  questions.forEach(q => {
    resultsHTML += `<p><strong>${q.question}</strong><br>Your answer: ${q.answer ? q.answer : "No answer"}</p>`;
  });
  document.getElementById("results").innerHTML = resultsHTML;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  questions.forEach(q => q.answer = null);
  document.getElementById("results").innerHTML = "";
  showQuestion();
}

showQuestion();



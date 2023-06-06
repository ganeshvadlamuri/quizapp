// Quiz data (computer science questions with Python)
const quizData = [
    {
      question: "What does CPU stand for?",
      answers: ["Central Processing Unit", "Computer Personal Unit", "Central Personal Unit", "Computer Processing Unit"],
      correctAnswer: 0
    },
    {
      question: "What is the primary function of an operating system?",
      answers: ["Execute programs", "Manage computer hardware", "Store data permanently", "Connect to the internet"],
      correctAnswer: 1
    },
    {
      question: "What does HTML stand for?",
      answers: ["HyperText Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "HyperText Model Language"],
      correctAnswer: 0
    },
    {
      question: "Which programming language is known as the 'mother of all languages'?",
      answers: ["Python", "Java", "C", "Assembly"],
      correctAnswer: 2
    },
    {
      question: "What is the syntax to print 'Hello, World!' in Python?",
      answers: ["System.out.println('Hello, World!');", "print('Hello, World!')", "console.log('Hello, World!');", "echo 'Hello, World!';"],
      correctAnswer: 1
    },
    {
      question: "Which data structure in Python is commonly used to implement a Last-In-First-Out (LIFO) behavior?",
      answers: ["Queue", "Stack", "Heap", "Tree"],
      correctAnswer: 1
    },
  ];
  
  // Function to display quiz questions
  function displayQuizQuestions() {
    const questionContainer = document.getElementById("question-container");
  
    quizData.forEach((question, index) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
      questionElement.innerHTML = `
        <h3>Question ${index + 1}</h3>
        <p>${question.question}</p>
        <div class="answers">
          ${question.answers
            .map(
              (answer, answerIndex) => `
              <label>
                <input type="radio" name="question-${index}" value="${answerIndex}">
                ${answer}
              </label>
            `
            )
            .join("")}
        </div>
      `;
  
      questionContainer.appendChild(questionElement);
    });
  }
  
  // Function to calculate and display the score
  function calculateScore() {
    const scoreContainer = document.getElementById("score-container");
    const answerContainers = document.getElementsByClassName("answers");
    let score = 0;
  
    for (let i = 0; i < quizData.length; i++) {
      const answerContainer = answerContainers[i];
      const userAnswer = parseInt(
        answerContainer.querySelector(`input[name="question-${i}"]:checked`).value
      );
      const correctAnswer = quizData[i].correctAnswer;
  
      if (userAnswer === correctAnswer) {
        score++;
      }
    }
  
    scoreContainer.textContent = `Your score: ${score}/${quizData.length}`;
  }
  
  // Function to display the leaderboard
  function displayLeaderboard() {
    const leaderboard = document.getElementById("leaderboard");
  
    // Example leaderboard data
    const leaderboardData = [
      { name: "John", score: 8 },
      { name: "Sarah", score: 7 },
      { name: "Michael", score: 6 },
    ];
  
    leaderboardData.forEach((entry) => {
      const leaderboardEntry = document.createElement("li");
      leaderboardEntry.textContent = `${entry.name}: ${entry.score}`;
      leaderboard.appendChild(leaderboardEntry);
    });
  }
  
  // Event listener for submit button
  document.getElementById("submit-btn").addEventListener("click", () => {
    calculateScore();
  });
  
  // Call functions to display quiz questions and leaderboard
  displayQuizQuestions();
  displayLeaderboard();
  
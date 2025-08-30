// Simple Quiz

const quizData = [

  {

    question: "Which language is used for web structure?",

    options: ["HTML", "Python", "Java", "C++"],

    answer: "HTML"

  },

  {

    question: "Which is used for styling webpages?",

    options: ["CSS", "PHP", "MySQL", "C#"],

    answer: "CSS"

  },

  {

    question: "Which makes webpages interactive?",

    options: ["JavaScript", "HTML", "SQL", "Node"],

    answer: "JavaScript"

  }

];

const quizContainer = document.getElementById("quiz");

quizData.forEach((q, i) => {

  let qBlock = document.createElement("div");

  qBlock.innerHTML = `<h4>${i+1}. ${q.question}</h4>`;

  q.options.forEach(opt => {

    qBlock.innerHTML += `

      <label>

        <input type="radio" name="q${i}" value="${opt}"> ${opt}

      </label><br>`;

  });

  quizContainer.appendChild(qBlock);

});

function submitQuiz() {

  let score = 0;

  quizData.forEach((q, i) => {

    const selected = document.querySelector(`input[name="q${i}"]:checked`);

    if (selected && selected.value === q.answer) {

      score++;

    }

  });

  document.getElementById("score").innerText = `You scored ${score}/${quizData.length} 🎉`;

}
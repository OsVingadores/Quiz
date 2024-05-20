import questions from "./Geral - Questões.js";

// Embaralha as perguntas no array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Seleciona elementos do DOM
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

// Variáveis para controlar o estado do quiz
let currentIndex = 0;
let questionsCorrect = 0;

// Carrega uma pergunta
function loadQuestion() {
  const item = questions[currentIndex];
  question.innerHTML = item.question;
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  answers.innerHTML = "";  // Limpa as respostas anteriores

  // Gera os botões de resposta
  item.answers.forEach(answer => {
    const button = document.createElement("button");
    button.className = "answer";
    button.dataset.correct = answer.correct;
    button.textContent = answer.option;
    button.onclick = nextQuestion;
    answers.appendChild(button);
  });
}

// Avança para a próxima pergunta ou termina o quiz
function nextQuestion(event) {
  if (event.target.dataset.correct === "true") {
    questionsCorrect++;
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    finish();
  }
}

// Finaliza o quiz
function finish() {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

// Reinicia o quiz
btnRestart.onclick = () => {
  shuffleArray(questions);  // Embaralha as perguntas
  currentIndex = 0;
  questionsCorrect = 0;
  content.style.display = "flex";
  contentFinish.style.display = "none";
  loadQuestion();
};

// Carrega a primeira pergunta
shuffleArray(questions);  // Embaralha as perguntas na carga inicial
loadQuestion();
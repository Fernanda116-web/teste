document.getElementById("submit-button").addEventListener("click", checkAnswers);

function checkAnswers() {
  const questions = document.querySelectorAll('.question');
  let correctAnswers = 0;
  const totalQuestions = questions.length;

  questions.forEach((question, index) => {
    const selectedAnswer = question.querySelector('input[type="radio"]:checked');
    const feedbackDiv = document.createElement('div'); // Cria um novo div para o feedback
    feedbackDiv.classList.add('feedback'); // Adiciona a classe feedback para estilização

    // Remove feedback antigo, se houver
    const previousFeedback = question.querySelector('.feedback');
    if (previousFeedback) {
      previousFeedback.remove();
    }

    // Checa se a resposta foi selecionada
    if (selectedAnswer) {
      if (selectedAnswer.value === 'correct') {
        feedbackDiv.textContent = "Acertou!";
        feedbackDiv.style.color = "green";
        correctAnswers++;
      } else {
        feedbackDiv.textContent = "Errou!";
        feedbackDiv.style.color = "red";
      }
    } else {
      feedbackDiv.textContent = "Você não selecionou uma resposta.";
      feedbackDiv.style.color = "orange";
    }
    question.appendChild(feedbackDiv); // Adiciona o feedback abaixo da questão
  });

  const percentage = (correctAnswers / totalQuestions) * 100;
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Você acertou ${correctAnswers} de ${totalQuestions} perguntas. Percentual de acerto: ${percentage.toFixed(2)}%`;
}

let answers = document.querySelectorAll('.answer');
let errorMessage = document.querySelector('.error-message');
let answerForm = document.querySelector('.answer-form');

function checkAnswers(event) {
    let tooLong = false;
    answers.forEach((answer) => {
        if (answer.value.length > 20) {
            tooLong = true;
        }
    });
    if (tooLong) {
        errorMessage.style.display = 'block';
        event.preventDefault();
    }
}

answerForm.addEventListener('submit', checkAnswers);

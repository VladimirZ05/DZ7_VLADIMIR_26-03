 const toggleButtons = document.querySelectorAll('.toggle-answer');

    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle('answer');
        button.textContent = answer.classList.contains('answer') ? 'Показать ответ' : 'Скрыть ответ';
      });
    });
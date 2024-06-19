document.addEventListener('DOMContentLoaded', function () {
  const continueButton = document.querySelector('.continue-button');
  const checkbox = document.getElementById('myCheckbox');

  continueButton.addEventListener('click', function (event) {
    if (!checkbox.checked) {
      alert('Devi accettare i termini e le condizioni per procedere.');
      event.preventDefault();
    }
  });
});
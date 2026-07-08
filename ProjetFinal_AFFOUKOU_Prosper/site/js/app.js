const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorMessage = document.getElementById('error-message');
const feedback = document.getElementById('form-feedback');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, errorEl, msg) {
  input.classList.add('error');
  errorEl.textContent = msg;
  errorEl.classList.add('visible');
}

function clearError(input, errorEl) {
  input.classList.remove('error');
  errorEl.textContent = '';
  errorEl.classList.remove('visible');
}

function resetForm() {
  form.reset();
  [nameInput, emailInput, messageInput].forEach(i => i.classList.remove('error'));
  [errorName, errorEmail, errorMessage].forEach(e => {
    e.textContent = '';
    e.classList.remove('visible');
  });
  feedback.className = '';
  feedback.textContent = '';
  feedback.style.display = 'none';
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  clearError(nameInput, errorName);
  clearError(emailInput, errorEmail);
  clearError(messageInput, errorMessage);
  feedback.className = '';
  feedback.textContent = '';
  feedback.style.display = 'none';

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  let hasError = false;

  if (name === '') {
    showError(nameInput, errorName, 'Veuillez entrer votre nom.');
    hasError = true;
  }

  if (email === '') {
    showError(emailInput, errorEmail, 'Veuillez entrer votre email.');
    hasError = true;
  } else if (!validateEmail(email)) {
    showError(emailInput, errorEmail, 'Email invalide. Exemple : nom@domaine.com');
    hasError = true;
  }

  if (message === '') {
    showError(messageInput, errorMessage, 'Veuillez entrer votre message.');
    hasError = true;
  } else if (message.length < 10) {
    showError(messageInput, errorMessage, 'Le message doit contenir au moins 10 caractères.');
    hasError = true;
  }

  if (!hasError) {
    feedback.className = 'success';
    feedback.textContent = 'Message envoyé avec succès ! Je vous répondrai rapidement.';
    feedback.style.display = 'block';
    alert(feedback.textContent);
    resetForm();
  }
});
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
nav.classList.remove('open');
});
});

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.register-trigger').forEach(button => {
button.addEventListener('click', () => {
document.getElementById('gameSelect').value = button.dataset.game;
document.getElementById('register').scrollIntoView({
behavior: 'smooth'
});
});
});

document.getElementById('interestForm').addEventListener('submit', event => {
event.preventDefault();

const form = event.currentTarget;
const data = Object.fromEntries(new FormData(form).entries());

const saved = JSON.parse(
localStorage.getItem('nexoraInterest') || '[]'
);

saved.push({
...data,
submittedAt: new Date().toISOString()
});

localStorage.setItem('nexoraInterest', JSON.stringify(saved));

document.getElementById('formMessage').textContent =
'Thanks! Demo submission saved on this device only.';

form.reset();
});

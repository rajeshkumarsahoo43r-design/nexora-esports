const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

document.querySelectorAll('.choose').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('eventSelect').value = button.dataset.event;
    document.getElementById('register').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.getElementById('regForm').addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const items = JSON.parse(
    localStorage.getItem('nexoraSoloInterest') || '[]'
  );

  items.push({
    ...Object.fromEntries(new FormData(form).entries()),
    submittedAt: new Date().toISOString()
  });

  localStorage.setItem('nexoraSoloInterest', JSON.stringify(items));

  document.getElementById('message').textContent =
    'Demo interest saved on this device only. It was not sent to the organizer.';

  form.reset();
});


const form = document.getElementById('contactForm') as HTMLFormElement;
const response = document.getElementById('responseMessage') as HTMLElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
  response.style.display = 'block';
  setTimeout(() => {
    response.style.display = 'none';
  }, 4000);
});

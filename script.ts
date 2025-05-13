
const phrases = ["Disiplin", "Güç", "Hedef"];
let index = 0;
const slider = document.getElementById("sliderText");

if (slider) {
  setInterval(() => {
    index = (index + 1) % phrases.length;
    slider.textContent = phrases[index];
  }, 2500);
}

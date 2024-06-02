const n1 = Math.ceil(Math.random() * 20);
const n2 = Math.ceil(Math.random() * 15);

const questionel = document.getElementById("question");

questionel.innerText = `What is ${n1} multiplied by ${n2}?`;

const scoreel = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}
if (score < 0) {
  score = 0; 
}
scoreel.innerText = `Score: ${score}`;

const inputel = document.getElementById("input");

const formel = document.getElementById("form");

formel.addEventListener("submit", () => {
  const answer = n1 * n2;
  const userel = +inputel.value;
  if (userel === answer) {
    score++;
    updatelocalstorage();
  } else {
    score--;
    if (score < 0) {
      score = 0;
    }
    updatelocalstorage();
  }
});

function updatelocalstorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

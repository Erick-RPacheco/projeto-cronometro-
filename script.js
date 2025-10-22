const display = document.getElementById("display");
const botaoStart = document.getElementById("start");
const botaoPause = document.getElementById("pause");
const botaoReset = document.getElementById("reset");


let segundos = 0;
let timer = null;

function atualizarDisplay() {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const secs = segundos % 60;

  display.textContent = `${String(horas).padStart(2, "0")}:${String(
    minutos
  ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

botaoStart.addEventListener("click", () => {
  if (timer !== null) return;
  timer = setInterval(() => {
    segundos++;
    atualizarDisplay();
  }, 1000);
});

botaoPause.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

botaoReset.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  segundos = 0;
  atualizarDisplay();
});

atualizarDisplay();

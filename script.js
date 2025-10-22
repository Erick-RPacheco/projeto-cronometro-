const display = document.getElementById("display");
const botaoStart = document.getElementById("start");
const botaoPause = document.getElementById("pause");
const botaoReset = document.getElementById("reset");
const botaoTema = document.getElementById("tema");

let segundos = 0;
let timer = null;
let tema = "claro";

function trocarTema() {
  if (tema === "claro") {
    document.body.style.background = "#2e2e2e";
    display.style.color = "#d3d3d4"
    botaoTema.style.background = "#d3d3d4"
    tema = "escuro";
    return;
  }

  if (tema === "escuro") {
    document.body.style.background = "#f5f5f5";
    display.style.color = "black"
    botaoTema.style.background = "#2e2e2e"
    tema = "claro";
   }
}

botaoTema.addEventListener("click", trocarTema);

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

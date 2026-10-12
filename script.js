alert("Bem-vindo à Dance Academy!");

function mostrarMensagem() {
  alert("Obrigado pela sua visita!");
}

const cores = ["#dbeafe", "#fce7f3", "#dcfce7", "#fef9c3", "#faf5ff"];
let indiceCor = 0;

function mudarCor() {
  document.body.style.backgroundColor = cores[indiceCor];
  indiceCor = (indiceCor + 1) % cores.length;
}

function modoEscuro() {
  document.body.classList.toggle("dark");
  document.body.style.backgroundColor = "";
  const ativo = document.body.classList.contains("dark");
  localStorage.setItem("modoEscuro", ativo);
  document.getElementById("btnEscuro").textContent =
    ativo ? "☀️ Modo claro" : "🌙 Modo escuro";
}

if (localStorage.getItem("modoEscuro") === "true") {
  document.body.classList.add("dark");
  document.getElementById("btnEscuro").textContent = "☀️ Modo claro";
}

let visitas = Number(localStorage.getItem("visitas")) || 0;

function contarVisita() {
  visitas++;
  localStorage.setItem("visitas", visitas);
  document.getElementById("contador").innerHTML = "Visitas: " + visitas;
}
contarVisita();

const frases = [
  "A dança é a linguagem escondida da alma.",
  "Dançar é sonhar com os pés.",
  "A arte transforma vidas.",
  "Quem dança nunca envelhece por dentro.",
  "Cada passo conta, continua a dançar!"
];

function novaFrase() {
  const indice = Math.floor(Math.random() * frases.length);
  document.getElementById("frase").textContent = frases[indice];
}

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => observador.observe(el));

function enviarFormulario(evento) {
  evento.preventDefault();
  const nome = document.getElementById("nome").value;
  alert("Obrigado, " + nome + "! Entraremos em contacto em breve.");
  document.getElementById("formContacto").reset();
}
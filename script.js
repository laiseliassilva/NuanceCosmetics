// Comandos de acessibilidade
let fonteAtual = 16;

function aumentarFonte() {
  if (fonteAtual < 24) {
    fonteAtual += 2;
    document.body.style.fontSize = fonteAtual + "px";
  }
}

function diminuirFonte() {
  if (fonteAtual > 12) {
    fonteAtual -= 2;
    document.body.style.fontSize = fonteAtual + "px";
  }
}

function alternarContraste() {
  document.body.classList.toggle("contraste");
}

function lerTexto() {
  if ('speechSynthesis' in window) {
    const texto = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    utterance.rate = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  } else {
    alert("Seu navegador não suporta leitura em voz alta.");
  }
}

// Reconhecimento de voz
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const reconhecimento = new SpeechRecognition();
reconhecimento.lang = 'pt-BR';
reconhecimento.interimResults = false;
reconhecimento.continuous = false;

reconhecimento.onresult = (event) => {
  const comando = event.results[0][0].transcript.toLowerCase();
  if (comando.includes("início")) document.getElementById("home").scrollIntoView();
  else if (comando.includes("produtos")) document.getElementById("produtos").scrollIntoView();
  else if (comando.includes("sobre")) document.getElementById("sobre").scrollIntoView();
  else if (comando.includes("contato")) document.getElementById("contato").scrollIntoView();
  else alert("Comando não reconhecido: " + comando);
};

function ativarReconhecimento() {
  reconhecimento.start();
}

// Atalhos de teclado
document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "1":
      document.getElementById("home").scrollIntoView();
      break;
    case "2":
      document.getElementById("produtos").scrollIntoView();
      break;
    case "3":
      document.getElementById("sobre").scrollIntoView();
      break;
    case "4":
      document.getElementById("contato").scrollIntoView();
      break;
  }
});

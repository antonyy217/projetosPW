var numeros = [];
var operação = '';

function AddNum(number) {
  document.getElementById('exibir').value += number;
}
  
function ApagarNum() {
  var Apagar = document.getElementById('exibir');
  var ValorAtual = Apagar.value;

  if (ValorAtual.length > 0) {
    Apagar.value = ValorAtual.slice(0, -1);
  }
} 

function Apagartudo() {
  document.getElementById('exibir').value = '';
  numeros = [];
  operação = '';
}

function AddOpp(op) {
  var exibir = document.getElementById('exibir');
  var valorAtual = exibir.value;

  if (valorAtual === '') return; // Evita adicionar operador se não houver número

  // Verificar se o último caractere é um operador
  if (['+', '-', '*', '/'].includes(valorAtual.charAt(valorAtual.length - 1))) {
    // Substitui o operador existente pelo novo operador
    exibir.value = valorAtual.slice(0, -1) + op;
  } else {
    numeros.push(parseFloat(valorAtual)); // Armazena o número no array
    exibir.value += op;
  }

  operação = op;
  exibir.value = '';
}

function Calcular() {
  var exibir = document.getElementById('exibir');
  var valorAtual = parseFloat(exibir.value);

  if (!isNaN(valorAtual)) {
    numeros.push(valorAtual); // Armazena o último número antes de calcular
  }

  let resultado;
  
  if (operação === '*') {
    resultado = numeros.reduce((acc, curr) => acc * curr);
  } else if (operação === '+') {
    resultado = numeros.reduce((acc, curr) => acc + curr);
  } else if (operação === '-') {
    resultado = numeros.reduce((acc, curr) => acc - curr);
  } else if (operação === '/') {
    resultado = numeros.reduce((acc, curr) => acc / curr);
  } else {
    resultado = "Erro";
  }

  document.getElementById('exibir').value = resultado;
  numeros = [];
  operação = '';
}

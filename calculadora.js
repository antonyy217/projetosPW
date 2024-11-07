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

  if (valorAtual === '') return; 

  
  if (['+', '-', '*', '/'].includes(valorAtual.charAt(valorAtual.length - 1))) {
    
    exibir.value = valorAtual.slice(0, -1) + op;
  } else {
    numeros.push(parseFloat(valorAtual)); 
    exibir.value += op;
  }

  operação = op;
  exibir.value = '';
}

function Calcular() {
  var exibir = document.getElementById('exibir');
  var valorAtual = parseFloat(exibir.value);

  if (!isNaN(valorAtual)) {
    numeros.push(valorAtual); 
    
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

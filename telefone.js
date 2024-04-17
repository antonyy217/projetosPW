function AddNum(number) {
    var NumDigitado = document.getElementById('exibir');
    NumDigitado.value += number;
  
    
  }
  
function ApagarNum() {
  var Apagar = document.getElementById('exibir')
  var ValorAtual = Apagar.value

  if(ValorAtual.length > 0){
    Apagar.value = ValorAtual.slice(0, -1)
  }
} 
 function Apagartudo(){
  document.getElementById('exibir').value = "";
 
  
 }

 
 

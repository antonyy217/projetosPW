function AddNum(number) {
    var NumDigitado= document.getElementById('exibir');

    NumDigitado.value += number;
  }
  
function ApagarNum() {
  document.getElementById('exibir').value = "" ;
}
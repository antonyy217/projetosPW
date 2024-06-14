function SenhaVisu() {
    var password = document.getElementById('senha');
    var visuSenha = document.getElementById('visuSenha');

    password.type = visuSenha.checked ? 'text' : 'password';
    }


    function MudarFoto() {
        var visu = document.getElementById('visuSenha')
        var imagem = document.getElementById('olhoAberto');
    
        if (visu.checked){
            imagem.src = "imagens/fechado/fechado.png";
            imagem.alt = "fechado";
    
        } else {
            imagem.src = "imagens/olho.png";
            imagem.alt = "olho";
        }
    }


    

    

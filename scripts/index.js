const inputAltura = document.getElementById("input-altura");
const inputLargura = document.getElementById("input-largura");
const tabuleiro = document.getElementById("tabuleiro");
const tamanhoQuadrado = 25; 

function comecarJogo(){
    
    if (inputAltura.value < 10 || inputLargura.value < 10){
        alert("o valor minimo de altura ou largura é 10")
        return;
    }
    
    const alturaTabuleiro = inputAltura.value * tamanhoQuadrado;
    const larguraTabuleiro = inputLargura.value * tamanhoQuadrado;

    tabuleiro.style.height = alturaTabuleiro + "px"
    tabuleiro.style.width = larguraTabuleiro + "px"
    tabuleiro.style.visibility = "visible"
}
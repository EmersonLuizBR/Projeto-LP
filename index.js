var setaEsquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("Bruna")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita(){
    leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55%"

}

function RolarParaEsquerda(){
    leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "dislay:flex; margin-top:55%"
    setaEsquerda.style = "display:none"
}
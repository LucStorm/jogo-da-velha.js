const player1 = "X"; //Jogador 1
const player2 = "O"; //Jogador 2

var playTime = player1; //vez do jogador
var gameOver = false; //fim de jogo

atualizarMostrarVez(); //chamando função
InicializadorEspacos(); 
VerificarVencedor();
resetar();


function atualizarMostrarVez(){

    if(gameOver) {return} // acaba o jogo ele retorna

    if (playTime == player1){ //vez jogador 1
        var player = document.querySelectorAll("div#vezdojogador img")[0]; //Vai pegar a imagem que esta na div 
        player.setAttribute("src", "x.jfif"); //pega a imagem do X
    }else{
        var player = document.querySelectorAll("div#vezdojogador img")[0]; // pega imagem da div
            player.setAttribute("src", "o.png"); //pega a imagem do O
    }
}

function InicializadorEspacos(){

    var espacos = document.getElementsByClassName("espaço") // pega elementos da class espaço
    for (let quadrados = 0; quadrados < espacos.length; quadrados++) { //vai parar no tamanho max dos espaços
        
        espacos[quadrados].addEventListener("click", function(){ //quando houver clicks nos espaços
            if(gameOver) {return}

            if(this.getElementsByTagName("img").length == 0){
                if (playTime == player1){
                
                    this.innerHTML = "<img src='x.jfif'>"
                    this.setAttribute("jogada", player1)
                    playTime = player2 //passa vez pro jogador 2

                }else{ // se for a vez do 2° jogador
                    this.innerHTML = "<img src='o.png'>";
                    this.setAttribute("jogada", player2)
                    playTime = player1 //passa vez pro jogador 1 novamente
                }
            atualizarMostrarVez();
            VerificarVencedor();
            }
        }
        );
        
    }
    
}

async function VerificarVencedor(){ //
    var a1 = document.getElementById('a1').getAttribute("jogada")
    var a2 = document.getElementById('a2').getAttribute("jogada")
    var a3 = document.getElementById('a3').getAttribute("jogada")

    var b1 = document.getElementById('b1').getAttribute("jogada")
    var b2 = document.getElementById('b2').getAttribute("jogada")
    var b3 = document.getElementById('b3').getAttribute("jogada")

    var c1 = document.getElementById('c1').getAttribute("jogada")
    var c2 = document.getElementById('c2').getAttribute("jogada")
    var c3 = document.getElementById('c3').getAttribute("jogada")

    var vencedor = "";//vazio pois nao se sabe quem é o vencedor ainda
    
    //TODAS AS POSSIBILIDADES DE VITÓRIA
    if((a1 == b1 && b1 == c1 && a1 !="") || (a1 == a2 && a2 == a3 && a1 !="") || (a1 == b2 && b2 == c3 && a1 !="")){
    vencedor = a1;
    }
    else if((b2 == b1 && b2 == b3 && b2 !="") || (b2 == a2 && b2 == c2 && b2 !="") || (b2 == a3 && b2 == c1 && b2 !="")){

    vencedor = b2;
    } else if((c3 == c2 && c2 == c1 && c3!="") || (c3 == a3 && c3 == b3 && c3!="")){
    vencedor = c3;
    }
        
    
 

    if (vencedor != ""){ //SE EXISTIR UM VENCEDOR O JOGO ACABA E MOSTRA QUEM VENCEU
        gameOver = true;

        await sleep(50);

        alert(`O Ganhador foi o ${vencedor}`)
        


    }
    

    else if(a1 != "" && a2 != "" && a3 != "" &&  b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "")
     {
        await sleep(50);
        alert(`DEU VELHA`)

     }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms ))
    }
}

function resetar(){
    document.getElementById('a1').innerHTML = "";
    document.getElementById('a2').innerHTML = "";
    document.getElementById('a3').innerHTML = "";
    document.getElementById('b1').innerHTML = "";
    document.getElementById('b2').innerHTML = "";
    document.getElementById('b3').innerHTML = "";
    document.getElementById('c1').innerHTML = "";
    document.getElementById('c2').innerHTML = "";
    document.getElementById('c3').innerHTML = "";

    var quadrados = [];


}
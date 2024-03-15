const botoes = document.querySelectorAll(".botao");
 
for(let 1=0;i <botoes.lenght;i++){
    botoes[i].onclick = function(){
       botoes(i).classList.add("ativo");
    }
    console.log();
}
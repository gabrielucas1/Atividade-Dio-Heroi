let nomeJogador = "mario";
let qtdXp = 1000;
let meuElo;
if(qtdXp < 1000){
     meuElo = "ferro";
} else if(qtdXp >= 1000 && qtdXp <= 2000){
     meuElo = "Bronze";
}else if(qtdXp > 2000 && qtdXp <= 5000){
     meuElo = "Prata";
}else if(qtdXp > 5000 && qtdXp <=7000 ){
     meuElo = "Ouro";
}else if(qtdXp > 7000 && qtdXp <= 8000){
     meuElo = "Platina";
}else if(qtdXp > 8000 && qtdXp <= 9000){
     meuElo = "Ascendente";
}else if(qtdXp > 9000 && qtd <= 10000){
     meuElo = "Imortal";
}else if(qtd > 10000){
     meuElo = "Radiante";
}


console.log("O Heroi de nome " + nomeJogador + "está no nivel "+ meuElo);
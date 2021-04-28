let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");
function calcular() {
    console.log("calculando")
    /**  o total de adultos, e sera multiplicado por 400g(a media de consumo),
     * depois a quantidade de crianças, que é a metade do consumo
    */
   let adultos = inputAdultos.value;
   let criancas = inputCriancas.value;
   let duracao = inputDuracao.value;
   
   let qtdTotalCarne = carnePP(duracao)  * adultos + (carnePP(duracao) /2 * criancas);
   let qtdTotalCerveja = cervejaPP(duracao)  * adultos;
   let qtdTotalBedida = bebidaPP(duracao)  * adultos + (carnePP(duracao) /2 * criancas);
  resultado.innerHTML = `<p>${qtdTotalCarne/1000}kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/1000)}l de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(qtdTotalBedida/2000)}garrafas de Bebida</p>`
}
/*Carne por pessoa */
function carnePP(duracao) {
if (duracao >= 6) {
return 650;

}else {
    return 400;
}

}
/*Cerveja por pessoa */
function cervejaPP(duracao) {
    if (duracao >= 6) {
    return 2000;
    
    }else {
        return 1200;
    }
    
    }
/*Bebida por pessoa */
    function bebidaPP(duracao) {
        if (duracao >= 6) {
        return 1500;
        
        }else {
            return 1000;
        }
        
        }
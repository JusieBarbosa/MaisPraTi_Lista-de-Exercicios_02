/*Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

const prompt = require('prompt-sync')();

let cigarrosFumadosDia = parseInt(prompt("Digite a quantidade de cigarros fumados por dia: "));
let anosFumando = parseInt(prompt("Digite a quantos anos você fuma: "));
const perdaVidaEmMinutos = 10; //a cada cigarro fumado, o fumante perde 10 minutos de vida
let minutosDeVidaPerdido = cigarrosFumadosDia * perdaVidaEmMinutos;
let perdaVidaAno = minutosDeVidaPerdido * (365 * anosFumando);
let diasPerdidos = (perdaVidaAno / 1440).toFixed(0);

console.log(diasPerdidos + " dias de vida perdido!!!")
//crie uma matriz que armazena o peso de 4 pessoas
var peso = [15, 22, 31, 37];

//crie uma função para calcular a média dos pesos e console o resultado
function calculate(){
  var soma = peso[0] + peso[1] + peso[2] + peso [3];
  var media = soma/peso.length;
  console.log (media); 
}




function setup() 
{
  createCanvas(400,400);
  //chame a função criada para calcular a média dos pesos
  calculate();
}

function draw() 
{
background(51);

}


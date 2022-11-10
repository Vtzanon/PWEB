var num1 = parseInt(prompt("Digite o primeiro número: "));
var num2 = parseInt(prompt("Digite o segundo número: "));
var num3 = parseInt(prompt("Digite o terceiro número: "));
var maior = 0;

var ordenar = [];

function Maior(num1, num2, num3){
    maior = Math.max(num1, num2, num3);
    return maior;
}

alert("O maior número é: " + Maior(num1, num2, num3));

var ordenar = [num1, num2, num3];

function Ordenar(s){
    var x = s.slice(0);
   return  x.sort(function(a,b){return a-b});
}

alert("Os números ordenados ficam assim: " + Ordenar(ordenar));
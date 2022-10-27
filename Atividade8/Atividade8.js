        var i = 0;
        var IdadeTotal = 0;
        var MaisVelha = 0;
        var Idade = 0;
        var MaisNova = 0;
        var Pessimo = 0;
        var BomOtimo = 0;


 for (i = 0; i < 45; i++) {
    var Idade = parseInt(prompt("Digite a sua idade: "));
    var sexo = parseInt(prompt("Escolha o sexo?\n1 - Masculino\n2 - Feminino"));
    var Opiniao = parseInt(prompt("Qual a sua opinião sobre o filme:\n1 - Péssimo\n2 - Ruim\n3 - Bom\n4 - Ótimo"));
     IdadeTotal = IdadeTotal + Idade;
    if (Opiniao == 4 || Opiniao == 3) {
        BomOtimo = BomOtimo + 1;
    }
    if (Opiniao == 1) {
        var Pessimo = Pessimo + 1;
    }
    if (i == 0) {
        MaisVelha = Idade;
        MaisNova = Idade;
    }
    else if (Idade > MaisVelha) {
        MaisVelha = Idade;
    }
    else if (Idade < MaisNova && Idade != 0) {
        MaisNova = Idade;
    }
}
var PorcentBomOtimo = (BomOtimo / i) * 100;
var Media = IdadeTotal / i;
var Qntd = i;
alert("Média de idade das pessoas é: " + Media + "\n" + "Pessoa mais velha tem: " + MaisVelha +
"\n" + "Pessoa mais nova tem: " + MaisNova + "\n" + "Quantidade de pessoas que responderam péssimo é: " + Pessimo +
"\n" + "Porcentagem de pessoas que responderam bom ou ótimo é: " + PorcentBomOtimo + "%" + "\n" + "Total de pessoas que responderam o questionário: " + Qntd);
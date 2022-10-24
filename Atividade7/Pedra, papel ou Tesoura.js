alert("Pronto para se divertir ?")

usuarioEscolha = prompt("Escolha uma opção:\n1-Pedra \n2-Papel \n3-Tesoura");

    alert("O usuario escolheu: " + usuarioEscolha);

    var computadorEscolha = (Math.random() * 3) + 1;
        
        computadorEscolha = Math.floor(computadorEscolha);
        alert("O computador escolheu " + computadorEscolha);

        var compare = function (usuarioEscolha, computadorEscolha) {
            if (usuarioEscolha == computadorEscolha)

                alert("O resultado é um empate!");

            else if (usuarioEscolha == 1 /*pedra*/) {

                if (computadorEscolha == 3/*tesoura*/)
                    alert("Pedra vence - Usuario ganhou!");
                else if (computadorEscolha == 2/*papel*/)
                    alert("Papel vence - Computador ganhou!");


            }

            else if (usuarioEscolha == 2/*papel*/) {

                if (computadorEscolha == 1/*pedra*/)

                    alert("Papel vence - Usuario ganhou!");

                else if (computadorEscolha == 3/*tesoura*/)
                    alert("Tesoura vence - Computador ganhou!");

            }

            else if (usuarioEscolha == 3/*tesoura*/) {

                if (computadorEscolha == 1/*pedra*/)

                    alert("Pedra vence - Computador ganhou!");

                else if (computadorEscolha == 2/*papel*/)
                    alert("Tesoura vence - Usuario ganhou!");


            }

        }

        compare(usuarioEscolha, computadorEscolha);
    
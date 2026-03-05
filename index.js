import dataInput from 'readline-sync';
import listaFrutas from './data.js';
import {
  validarLetraDigitada,
  verificarJogoGanho,
  verificarLetraPresenteNaPalavra,
  jogadasRestantes,
  atualizarPalavraOculta,
  exibirMensagemFimDeJogo,} from "./function.js";

const tamanhoLinha = 20;
const titulo = "Jogo da Forca";

console.log('-'.repeat(tamanhoLinha) + " " + titulo + " " + '-'.repeat(tamanhoLinha));
let nomeUsuario = dataInput.question("Qual o seu nome Jogador(a)?: ");

// teste ANSI cor Verde para o Usuário.
const verde = "\x1b[32m";
const reset = "\x1b[0m";

console.log('#'.repeat(tamanhoLinha) + " Bem-vindo ao mini-game" + verde + " " + nomeUsuario + reset + " " + '#'.repeat(tamanhoLinha));

function jogarforca() {
    const palavraEscolhida = listaFrutas[Math.floor(Math.random() * listaFrutas.length)].toLowerCase();

    let primeiraLetra = palavraEscolhida[0]
    let underline = "_".repeat(palavraEscolhida.length - 1)
    let palavraOculta = primeiraLetra + underline

    let erros = 0;
    let statusJogo = 'andamento'

    console.log(`------------JOGO DA FORCA------------`);
    console.log(`\nNome da fruta com ${palavraEscolhida.length} letras:`);

    while (statusJogo === 'andamento') { 

        console.log(`\nFruta: ${palavraOculta}`);

        
        const letraDigitada = dataInput.question("Digite uma letra: ").toLowerCase();

        if (validarLetraDigitada(letraDigitada)) {
            if (verificarLetraPresenteNaPalavra(palavraEscolhida, letraDigitada)) {
                palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida);
                if (verificarJogoGanho(palavraOculta, palavraEscolhida)) {
                    statusJogo = 'venceu'
                }
            } else {
                erros++

                const chances = jogadasRestantes(erros)

                if (chances > 0) { //
                    console.log(`OPÇÃO ERRADA! Você ainda tem ${chances} chance(s)!`);
                } else {
                    statusJogo = 'perdeu' 
                }
            }
        } else {
            console.log("\nPor favor, digite uma letra válida.");
        }
    }
    
    exibirMensagemFimDeJogo(statusJogo);

}

jogarforca(); // Inicia o jogo


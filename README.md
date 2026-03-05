# 🕹️ Jogo da Forca CLI (Hangman Node)

Uma recriação clássica do Jogo da Forca, construída para ser executada diretamente no terminal (Command Line Interface).

## 🎯 Sobre o Projeto
Este projeto foi desenvolvido com foco total na estruturação arquitetural de uma aplicação back-end simples. O código adota boas práticas de modularização, separando claramente as responsabilidades: base de dados (palavras), lógica de negócio (validações e regras do jogo) e o fluxo de execução principal.

## 🚀 Tecnologias e Arquitetura
- **Node.js**: Ambiente de execução.
- **JavaScript (ES6+)**: Lógica e estruturação.
- **ES Modules**: Arquitetura de `import/export` nativa do Node.js moderno.
- **readline-sync**: Biblioteca para captura de inputs síncronos no terminal.
- **Estruturação Modular**:
  - `data.js`: Armazena o banco de palavras.
  - `function.js`: Isola as regras de negócio puras (validação, contagem de erros, verificação de vitória).
  - `index.js`: Gerencia o estado da partida e a interface com o usuário.

## ⚙️ Como Executar na Sua Máquina

1. Clone este repositório:
   `bash
   git clone [https://github.com/kadysnaan/hangman-node.git](https://github.com/kadysnaan/hangman-node.git)

2. Acesse a pasta do projeto: cd hangman-node

3. Instale as dependências: npm install

4. Inicie o Jogo: node index.js

🧠 Aprendizados

A construção deste projeto consolidou conceitos fundamentais de manipulação de Strings e Arrays (.split(), .join(), .toLowerCase()), estruturação de loops (while, for) condicionados a estados dinâmicos e, principalmente, a capacidade de arquitetar o código dividindo responsabilidades em diferentes módulos.
export default [
  {
    question: "Em qual elemento HTML nós colocamos o javascript?",
    answers: [
      { option: "tag js", correct: false },
      { option: "tag script", correct: true },
      { option: "tag scripting", correct: false },
      { option: "tag javascript", correct: false },
    ],
  },
  {
    question: "Onde é o local certo de colocar o javascript?",
    answers: [
      { option: "Na tag body", correct: false },
      { option: "Na tag head", correct: false },
      { option: "Tanto na tag body quanto a head estão corretas", correct: true },
    ],
  },
  {
    question: "Qual a sintaxe correta para adicionar um arquivo javascript externo na tag script?",
    answers: [
      { option: 'name="xxx.js"', correct: false },
      { option: 'src="xxx.js"', correct: true },
      { option: 'href="xxx.js"', correct: false },
    ],
  },
  {
    question: "Um arquivo javascript externo precisa ter a tag script?",
    answers: [
      { option: "Verdade", correct: false },
      { option: "Falso", correct: true },
    ],
  },
  {
    question: 'Como escrever um "Olá Mundo" em um alertbox?',
    answers: [
      { option: 'alertBox("Olá Mundo")', correct: false },
      { option: 'msgBox("Olá Mundo")', correct: false },
      { option: 'msg("Olá Mundo")', correct: false },
      { option: 'alert("Olá Mundo")', correct: true },
    ],
  },
  {
    question: "Como você cria uma função no Javascript?",
    answers: [
      { option: "function:minhaFuncao()", correct: false },
      { option: "function = minhaFuncao()", correct: false },
      { option: "function minhaFuncao()", correct: true },
    ],
  },
  {
    question: 'Como chamar uma função chamada "minhaFuncao"?',
    answers: [
      { option: "call minhaFuncao", correct: false },
      { option: "call function minhaFuncao", correct: false },
      { option: "minhaFuncao()", correct: true },
    ],
  },
  {
    question: "Como escrever uma condicional IF no Javascript?",
    answers: [
      { option: "if i = 5", correct: false },
      { option: "if i == 5 then", correct: false },
      { option: "if (i == 5)", correct: true },
      { option: "if i = 5 then", correct: false },
    ],
  },
  {
    question: 'Como fazer um if que executa um código caso "i" for diferente de 5',
    answers: [
      { option: "if (i != 5)", correct: true },
      { option: "if (i <> 5)", correct: false },
      { option: "if i <> 5", correct: false },
      { option: "if i =! 5 then", correct: false },
    ],
  },
  {
    question: "Como o loop while começa?",
    answers: [
      { option: "while (i <= 10)", correct: true },
      { option: "while (i <= 10; i++)", correct: false },
      { option: "while i = 1 to 10", correct: false },
    ],
  },
  {
    question: "Como escrever um comentário em Javascript?",
    answers: [
      { option: "<!-- Isso é um comentário -->", correct: false },
      { option: "// Isso é um comentário", correct: true },
      { option: "/* Isso é um comentário */", correct: true },
      { option: "# Isso é um comentário", correct: false },
    ],
  },
  {
    question: "Qual a sintaxe correta para criar um array em JavaScript?",
    answers: [
      { option: "var arr = '1, 2, 3'", correct: false },
      { option: "var arr = (1, 2, 3)", correct: false },
      { option: "var arr = [1, 2, 3]", correct: true },
      { option: "var arr = {1, 2, 3}", correct: false },
    ],
  },
  {
    question: "Como você pode adicionar um comentário de múltiplas linhas em JavaScript?",
    answers: [
      { option: "/* Este é um comentário de múltiplas linhas */", correct: true },
      { option: "// Este é um comentário de múltiplas linhas //", correct: false },
      { option: "<!-- Este é um comentário de múltiplas linhas -->", correct: false },
      { option: "# Este é um comentário de múltiplas linhas #", correct: false },
    ],
  },
  {
    question: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
    answers: [
      { option: "variable nome = 'valor'", correct: false },
      { option: "var nome = 'valor'", correct: true },
      { option: "v nome = 'valor'", correct: false },
      { option: "vr nome = 'valor'", correct: false },
    ],
  },
  {
    question: "Qual a maneira correta de declarar um objeto em JavaScript?",
    answers: [
      { option: "var obj = (nome: 'João', idade: 30)", correct: false },
      { option: "var obj = {nome: 'João', idade: 30}", correct: true },
      { option: "var obj = [nome: 'João', idade: 30]", correct: false },
      { option: "var obj = nome = 'João', idade = 30", correct: false },
    ],
  },
];

//1. Desestruture o objeto países e imprima nome, capital, população e idiomas de todos os países.
//2. Um desenvolvedor júnior estruturou o nome do aluno, habilidades e pontuação em um array de arrays, o que pode não ser fácil de ler. Desestruture o seguinte array nome para nome, array de habilidades para habilidades, array de pontuações para pontuações, pontuação de JavaScript para jsScore e pontuação de React para reactScore em uma linha.
//3. Escreva uma função chamada *converterArrayParaObjeto* que pode converter o array em um objeto estruturado.
//4. Copie o objeto aluno para newStudent sem mutar o objeto original. No novo objeto, adicione o seguinte:

//- Adicione Bootstrap com nível 8 ao conjunto de habilidades de front-end.
//- Adicione Express com nível 9 ao conjunto de habilidades de back-end.
//- Adicione SQL com nível 8 ao conjunto de habilidades de banco de dados.
//- Adicione SQL sem nível ao conjunto de habilidades de ciência de dados

// 1. Desestruturar o objeto países
const países = [
  {
    nome: 'Brasil',
    capital: 'Brasília',
    população: 211000000,
    idiomas: ['Português']
  },
  {
    nome: 'Estados Unidos',
    capital: 'Washington, D.C.',
    população: 331000000,
    idiomas: ['Inglês']
  },
  {
    nome: 'Alemanha',
    capital: 'Berlim',
    população: 83700000,
    idiomas: ['Alemão']
  }
];

países.forEach(({ nome, capital, população, idiomas }) => {
  console.log(`Nome: ${nome}, Capital: ${capital}, População: ${população}, Idiomas: ${idiomas.join(', ')}`);
});

// 2. Desestruturar o array aluno
const Aluno = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [nome, habilidades, [htmScore, cssScore, jsScore, reactScore]] = Aluno;

console.log(nome, habilidades, jsScore, reactScore);

const Alunos = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

function converterArrayParaObjeto(alunos) {
  return Alunos.map(([nome, habilidades, pontuações]) => ({
    nome,
    habilidades,
    pontuações
  }));
}

console.log(converterArrayParaObjeto(Alunos));


const aluno = {
  nome: 'David',
  idade: 25,
  habilidades: {
    frontEnd: [
      { habilidade: 'HTML', nível: 10 },
      { habilidade: 'CSS', nível: 8 },
      { habilidade: 'JS', nível: 8 },
      { habilidade: 'React', nível: 9 }
    ],
    backEnd: [
      { habilidade: 'Node', nível: 7 },
      { habilidade: 'GraphQL', nível: 8 },
    ],
    bancoDeDados: [
      { habilidade: 'MongoDB', nível: 7.5 },
    ],
    ciênciaDeDados: ['Python', 'R', 'D3.js']
  }
};

const newStudent = {
  ...aluno,
  habilidades: {
    ...aluno.habilidades,
    frontEnd: [
      ...aluno.habilidades.frontEnd,
      { habilidade: 'Bootstrap', nível: 8 }
    ],
    backEnd: [
      ...aluno.habilidades.backEnd,
      { habilidade: 'Express', nível: 9 }
    ],
    bancoDeDados: [
      ...aluno.habilidades.bancoDeDados,
      { habilidade: 'SQL', nível: 8 }
    ],
    ciênciaDeDados: [
      ...aluno.habilidades.ciênciaDeDados,
      'SQL'
    ]
  }
};

console.log(newStudent);


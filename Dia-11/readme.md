### Exercícios: Nível 1

```js
const constantes = [2.72, 3.14, 9.81, 37, 100]
const países = ['Finlândia', 'Estônia', 'Suécia', 'Dinamarca', 'Noruega']
const retângulo = {
  largura: 20,
  altura: 10,
  área: 200,
  perímetro: 60
}
const usuários = [
{
  nome:'Brook',
  pontuações:75,
  habilidades:['HTM', 'CSS', 'JS'],
  idade:16
},
{
  nome:'Alex',
  pontuações:80,
  habilidades:['HTM', 'CSS', 'JS'],
  idade:18
},
{
  nome:'David',
  pontuações:75,
  habilidades:['HTM', 'CSS'],
  idade:22
},
{
  nome:'John',
  pontuações:85,
  habilidades:['HTML'],
  idade:25
},
{
  nome:'Sara',
  pontuações:95,
  habilidades:['HTM', 'CSS', 'JS'],
  idade: 26
},
{
  nome:'Martha',
  pontuações:80,
  habilidades:['HTM', 'CSS', 'JS'],
  idade:18
},
{
  nome:'Thomas',
  pontuações:90,
  habilidades:['HTM', 'CSS', 'JS'],
  idade:20
}
]
```

1. Desestruture e atribua os elementos do array constantes a e, pi, gravidade, temperaturaCorporalHumana, temperaturaDeFervuraDaÁgua.
2. Desestruture e atribua os elementos do array países a fin, est, sw, den, nor.
3. Desestruture o objeto retângulo por suas propriedades ou chaves.

### Exercícios: Nível 2

1. Itere através do array usuários e obtenha todas as chaves do objeto usando desestruturação.
2. Encontre as pessoas que têm menos de duas habilidades.

### Exercícios: Nível 3

1. Desestruture o objeto países e imprima nome, capital, população e idiomas de todos os países.
2. Um desenvolvedor júnior estruturou o nome do aluno, habilidades e pontuação em um array de arrays, o que pode não ser fácil de ler. Desestruture o seguinte array nome para nome, array de habilidades para habilidades, array de pontuações para pontuações, pontuação de JavaScript para jsScore e pontuação de React para reactScore em uma linha.

  ```js
    const aluno = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    console.log(nome, habilidades, jsScore, reactScore)
  ```

  ```sh
  David (4) ["HTM", "CSS", "JS", "React"] 90 95
  ```

3. Escreva uma função chamada *converterArrayParaObjeto* que pode converter o array em um objeto estruturado.

  ```js
      const alunos = [
          ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
          ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
        ]

      console.log(converterArrayParaObjeto(alunos))
      [
        {
          nome: 'David',
          habilidades: ['HTM','CSS','JS','React'],
          pontuações: [98,85,90,95]
        },
        {
          nome: 'John',
          habilidades: ['HTM','CSS','JS','React'],
          pontuações: [85, 80,85,80]
        }
      ]
  ```

4. Copie o objeto aluno para newStudent sem mutar o objeto original. No novo objeto, adicione o seguinte:

- Adicione Bootstrap com nível 8 ao conjunto de habilidades de front-end.
- Adicione Express com nível 9 ao conjunto de habilidades de back-end.
- Adicione SQL com nível 8 ao conjunto de habilidades de banco de dados.
- Adicione SQL sem nível ao conjunto de habilidades de ciência de dados.

```js
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
        bancoDeDados:[
          { habilidade: 'MongoDB', nível: 7.5 },
        ],
        ciênciaDeDados:['Python', 'R', 'D3.js']
      }
    }
  ```

O objeto copiado deve se parecer com isso:

```js
    {
    nome: 'David',
    idade: 25,
    habilidades: {
      frontEnd: [
        {habilidade: 'HTML', nível: 10},
        {habilidade: 'CSS', nível: 8},
        {habilidade: 'JS', nível: 8},
        {habilidade: 'React', nível: 9},
        {habilidade: 'BootStrap', nível: 8}
      ],
      backEnd: [
        {habilidade: 'Node', nível: 7},
        {habilidade: 'GraphQL', nível: 8},
        {habilidade: 'Express', nível: 9}
      ],
      bancoDeDados: [
        { habilidade: 'MongoDB', nível: 7.5},
        { habilidade: 'SQL', nível: 8}
      ],
      ciênciaDeDados: ['Python','R','D3.js','SQL']
    }
  }

```
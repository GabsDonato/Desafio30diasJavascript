/*### Exercícios: Nível 2

1. Itere através do array usuários e obtenha todas as chaves do objeto usando desestruturação.
2. Encontre as pessoas que têm menos de duas habilidades.

*/


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

    usuários.forEach(({ nome, pontuações, habilidades, idade }) => {
        console.log(`Nome: ${nome}, Pontuações: ${pontuações}, Habilidades: ${habilidades.join(', ')}, Idade: ${idade}`)
      });


      const pessoasComMenosDeDuasHabilidades = usuários.filter(({ habilidades }) => habilidades.length < 2)

      console.log('Usuários com menos de duas habilidades:', pessoasComMenosDeDuasHabilidades);
      
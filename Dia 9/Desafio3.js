/*

**Exercícios: Nível 3**

1. Use as informações dos países, no arquivo de dados, para ordenar os países por nome, por capital e por população.

*** Encontre as 10 línguas mais faladas:

```javascript
// Sua saída deve ser assim
console.log(mostSpokenLanguages(countries, 10))
[
  {country: 'English', count: 91},
  {country: 'French', count: 45},
  {country: 'Arabic', count: 25},
  {country: 'Spanish', count: 24},
  {country: 'Russian', count: 9},
  {country: 'Portuguese', count: 9},
  {country: 'Dutch', count: 8},
  {country: 'German', count: 7},
  {country: 'Chinese', count: 5},
  {country: 'Swahili', count: 4}
]

// Sua saída deve ser assim
console.log(mostSpokenLanguages(countries, 3))
[
  {country: 'English', count: 91},
  {country: 'French', count: 45},
  {country: 'Arabic', count: 25}
]
```

*** Use o arquivo `countries_data.js` para criar uma função que encontre os dez países mais populosos.

```javascript
console.log(mostPopulatedCountries(countries, 10))

[
  {country: 'China', population: 1377422166},
  {country: 'India', population: 1295210000},
  {country: 'United States of America', population: 323947000},
  {country: 'Indonesia', population: 258705000},
  {country: 'Brazil', population: 206135893},
  {country: 'Pakistan', population: 194125062},
  {country: 'Nigeria', population: 186988000},
  {country: 'Bangladesh', population: 161006790},
  {country: 'Russian Federation', population: 146599183},
  {country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
  {country: 'China', population: 1377422166},
  {country: 'India', population: 1295210000},
  {country: 'United States of America', population: 323947000}
]
```

*** Tente desenvolver um programa que calcule medidas de tendência central de uma amostra (média, mediana, moda) e medidas de variabilidade (faixa, variância, desvio padrão). Além dessas medidas, encontre o mínimo, máximo, contagem, percentil e distribuição de frequência da amostra. Você pode criar um objeto chamado `statistics` e criar todas as funções que realizam cálculos estatísticos como métodos para o objeto `statistics`. Confira a saída abaixo.

```javascript
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

console.log('Count:', statistics.count()); // 25
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 30
console.log('Median: ', statistics.median()); // 29
console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()); // 17.5
console.log('Standard Deviation: ', statistics.std()); // 4.2
console.log('Frequency Distribution: ', statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log(statistics.describe());
```

Count: 25
Sum: 744
Min: 24
Max: 38
Range: 14
Mean: 30
Median: 29
Mode: (26, 5)
Variance: 17.5
Standard Deviation: 4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31),
 */
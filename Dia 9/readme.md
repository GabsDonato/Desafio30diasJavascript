💻 **Exercícios**

**Exercícios: Nível 1**

```javascript
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
```

1. Explique a diferença entre `forEach`, `map`, `filter` e `reduce`.
2. Defina uma função de callback antes de usá-la em `forEach`, `map`, `filter` ou `reduce`.
3. Use `forEach` para exibir cada país no array `countries`.
4. Use `forEach` para exibir cada nome no array `names`.
5. Use `forEach` para exibir cada número no array `numbers`.
6. Use `map` para criar um novo array alterando cada país para maiúsculas no array `countries`.
7. Use `map` para criar um array com o comprimento de cada país a partir do array `countries`.
8. Use `map` para criar um novo array alterando cada número para o seu quadrado no array `numbers`.
9. Use `map` para transformar cada nome em maiúsculas no array `names`.
10. Use `map` para mapear o array `products` para seus preços correspondentes.
11. Use `filter` para filtrar países que contenham "land".
12. Use `filter` para filtrar países que tenham seis caracteres.
13. Use `filter` para filtrar países com seis letras ou mais no array `countries`.
14. Use `filter` para filtrar países que comecem com 'E'.
15. Use `filter` para filtrar apenas os preços com valores.
16. Declare uma função chamada `getStringLists` que recebe um array como parâmetro e retorna um array contendo apenas itens de string.
17. Use `reduce` para somar todos os números no array `numbers`.
18. Use `reduce` para concatenar todos os países e produzir a seguinte frase: "Estônia, Finlândia, Suécia, Dinamarca, Noruega e Islândia são países da Europa do Norte".
19. Explique a diferença entre `some` e `every`.
20. Use `some` para verificar se alguns nomes têm comprimento maior que sete no array `names`.
21. Use `every` para verificar se todos os países contêm a palavra "land".
22. Explique a diferença entre `find` e `findIndex`.
23. Use `find` para encontrar o primeiro país com exatamente seis letras no array `countries`.
24. Use `findIndex` para encontrar a posição do primeiro país com exatamente seis letras no array `countries`.
25. Use `findIndex` para encontrar a posição de Noruega. Se não existir no array, você deve obter -1.
26. Use `findIndex` para encontrar a posição da Rússia. Se não existir no array, você deve obter -1.

**Exercícios: Nível 2**

1. Encontre o preço total dos produtos encadeando dois ou mais iteradores de array (por exemplo, `arr.map(callback).filter(callback).reduce(callback)`).
2. Encontre a soma dos preços dos produtos usando apenas `reduce` (`reduce(callback)`).
3. Declare uma função chamada `categorizeCountries` que retorna um array de países que possuem um padrão comum (encontrado no arquivo `countries.js`, por exemplo: 'land', 'ia', 'island', 'stan').
4. Crie uma função que retorne um array de objetos, onde cada objeto é a letra e o número de vezes que a letra é usada para iniciar o nome de um país.
5. Declare uma função `getFirstTenCountries` que retorne um array com os primeiros dez países. Use diferentes técnicas de programação funcional para trabalhar com o array `countries.js`.
6. Declare uma função `getLastTenCountries` que retorne os últimos dez países no array `countries`.
7. Descubra qual letra é usada mais vezes como inicial do nome de um país a partir do array `countries` (por exemplo: Finlândia, Fiji, França, etc.).

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
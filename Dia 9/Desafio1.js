/***Exercícios: Nível 1**

```javascript

```

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
*/


//1. Explique a diferença entre `forEach`, `map`, `filter` e `reduce`.

//forEach - usado somente com array, usa retorno de chamada
//map - interage e modifica os elementos do array, pegauma função de retorno de chamada com elementos.
//filter -filtra itens que preenchem as condições de filtragem e retorna uma nova matriz
//reduce - recebe uma função de retorno de chamada recebe accumulator, current, e valor inicial opcionalcomoum parâmetro e retorna um valor unico

//2. Defina uma função de callback antes de usá-la em `forEach`, `map`, `filter` ou `reduce`.
      
///const callback = countries
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


//3. Use `forEach` para exibir cada país no array `countries`.
countries.forEach(countries => console.log(countries))
console.log(countries)
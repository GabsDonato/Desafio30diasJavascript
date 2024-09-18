//Exercícios: Nível 1

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
countries.forEach(countries => console.log(countries));
console.log(countries);

//4. Use `forEach` para exibir cada nome no array `names`.
names.forEach(names => console.log(names));

//5. Use `forEach` para exibir cada número no array `numbers`.
numbers.forEach(numbers => console.log(numbers))

//6. Use `map` para criar um novo array alterando cada país para maiúsculas no array `countries`.
const Mcontries = countries.map((country) => country.toUpperCase());
console.log(countries);

//7. Use `map` para criar um array com o comprimento de cada país a partir do array `countries`.
const lengths = countries.map((country) => country.length);
console.log(lengths);

//8. Use `map` para criar um novo array alterando cada número para o seu quadrado no array `numbers`.
const numbersMude = numbers.map((num) => num * num);
console.log(numbersMude);

//9. Use `map` para transformar cada nome em maiúsculas no array `names`.
const PriceProducts = products.map((product) => product.price);
console.log(PriceProducts);

//11. Use `filter` para filtrar países que contenham "land".
const FilterPaises = countries.filter((country) =>
country.includes('land')
)
console.log(FilterPaises);

//12. Use `filter` para filtrar países que tenham seis caracteres.
const SixCaracteres = countries.filter(
  (country) => country.length === 6
)
console.log(SixCaracteres);

//13. Use `filter` para filtrar países com seis letras ou mais no array `countries`.
const SixOrMore =  countries.filter(
  (country) => country.length >= 6
)
console.log(SixOrMore);

//14. Use `filter` para filtrar países que comecem com 'E'.
const countriesFirstE = countries.filter((country) => 
country.startsWith('E'))
console.log(countriesFirstE);

//15. Use `filter` para filtrar apenas os preços com valores.
const FilterPrice = products.filter((product) => product.price > 0);
console.log(FilterPrice);

//16. Declare uma função chamada `getStringLists` que recebe um array como parâmetro e retorna um array contendo apenas itens de string.

const getStringLists = (array) => {
  return array.filter(item => typeof item === 'string');
};

const colors = ['Azul', 'Amarelo', 42, true, 'Verde', null];
const stringColors = getStringLists(colors);
console.log(stringColors); 


//17. Use `reduce` para somar todos os números no array `numbers`.

const somaNumbers = numbers.reduce((acc,cur) => acc + cur, 0)
console.log(somaNumbers)

//18. Use `reduce` para concatenar todos os países e produzir a seguinte frase: "Estônia, Finlândia, Suécia, Dinamarca, Noruega e Islândia são países da Europa do Norte".

const concat = countries.reduce((acc, country, index) => {
  if (index === countries.length - 1) {
      return acc + ' e ' + country; 
  } else {
      return acc + ', ' + country; 
  }
}, '');

const frase = concat + ' são países da Europa do Norte.';
console.log(frase);

//19. Explique a diferença entre `some` e `every`.
// some - alguns, ele verifica se ealguns dos elementos são semelhantes , e retorna booleano

//exemplo:
const nameDesorveteAlguns = ['Chocolate', 23 , 'nutella']
const AlgunsSaoNumeros = nameDesorveteAlguns.some((nome) => typeof nome === 'number')

console.log(AlgunsSaoNumeros);

// every - todos , ele verifica se todos os elementos são semelhantes e retorna booleano

//exemplo:
const nomeDesorveteTodos = ['Chocolate', 'Morango', 'Baunilha', 'Flocos']
const SaoStrings = nomeDesorveteTodos.every((nome) => typeof nome === 'string')

console.log(SaoStrings);

//20. Use `some` para verificar se alguns nomes têm comprimento maior que sete no array `names`.

const VerificaName = names.some((name) => name.length > 7)
console.log(VerificaName);

//21. Use `every` para verificar se todos os países contêm a palavra "land".

//22. Explique a diferença entre `find` e `findIndex`.

//23. Use `find` para encontrar o primeiro país com exatamente seis letras no array `countries`.

//24. Use `findIndex` para encontrar a posição do primeiro país com exatamente seis letras no array `countries`.

//25. Use `findIndex` para encontrar a posição de Noruega. Se não existir no array, você deve obter -1.

/*26. Use `findIndex` para encontrar a posição da Rússia. Se não existir no array, você deve obter -1 */

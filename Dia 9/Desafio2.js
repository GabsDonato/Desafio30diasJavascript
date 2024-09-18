/*Exercícios: Nível 2*/

//1. Encontre o preço total dos produtos encadeando dois ou mais iteradores de array (por exemplo, `arr.map(callback).filter(callback).reduce(callback)`).

const precoTotalProduto = products
    .filter(product => product.price > 0) 
    .map(product => product.price) 
    .reduce((total, price) => total + price, 0); 
console.log(precoTotalProduto);

//2. Encontre a soma dos preços dos produtos usando apenas `reduce` (`reduce(callback)`).

const precoComReduce = products.reduce((total, product) => total + product.price, 0);
console.log(precoComReduce);

//3. Declare uma função chamada `categorizeCountries` que retorna um array de países que possuem um padrão comum (encontrado no arquivo `countries.js`, por exemplo: 'land', 'ia', 'island', 'stan').

const categorizeCountries = (pattern) => {
    return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
};

const result = categorizeCountries('land');
console.log(result);

//4. Crie uma função que retorne um array de objetos, onde cada objeto é a letra e o número de vezes que a letra é usada para iniciar o nome de um país.

const countStartingLetters = (countries) => {
    const letterCount = countries.reduce((acc, country) => {
        const firstLetter = country[0].toUpperCase();
        acc[firstLetter] = (acc[firstLetter] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(letterCount).map(([letter, count]) => ({ letter, count }));
};

const retorno = countStartingLetters(countries);
console.log(retorno);

//5. Declare uma função `getFirstTenCountries` que retorne um array com os primeiros dez países. Use diferentes técnicas de programação funcional para trabalhar com o array `countries.js`.

const getFirstTenCountries = () => {
    return countries.slice(0, 10);
};

console.log(getFirstTenCountries());

//6. Declare uma função `getLastTenCountries` que retorne os últimos dez países no array `countries`.

const getLastTenCountries = () => {
    return countries.slice(-10);
};

console.log(getLastTenCountries());

//7. Descubra qual letra é usada mais vezes como inicial do nome de um país a partir do array `countries` (por exemplo: Finlândia, Fiji, França, etc.).

const getMostFrequentStartingLetter = () => {
    const letterCount = countries.reduce((acc, country) => {
        const firstLetter = country[0].toUpperCase();
        acc[firstLetter] = (acc[firstLetter] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(letterCount).reduce((max, entry) => {
        return entry[1] > max[1] ? entry : max;
    }, ['', 0]); 
};

const mostFrequent = getMostFrequentStartingLetter();
console.log(`A letra mais comum como inicial é "${mostFrequent[0]}" com ${mostFrequent[1]} ocorrências.`);

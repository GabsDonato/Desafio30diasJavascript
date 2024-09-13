const countries = [
    'Albânia',
    'Bolívia',
    'Canadá',
    'Dinamarca',
    'Etiópia',
    'Finlândia',
    'Alemanha',
    'Hungria',
    'Irlanda',
    'Japão',
    'Quênia'
]


/*

4. Extraia todos os países que contêm a palavra 'land' do [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e imprima como um array.

const shortCountries = [ countries ];

const countriesWithLand = countries.filter(pais => pais.toLowerCase().includes('land'));

console.log(countriesWithLand); */

/* 
5. Encontre o país com o maior número de caracteres no [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js).

const Shortcountries = [ countries ];

const longestCountry = countries.reduce((longest, pais) => pais.length > longest.length ? pais : longest, '');

console.log(longestCountry); */

/*
6. Extraia todos os países que contêm a palavra 'land' do [array de países](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js)

const shortCountries = [ countries ];

const countriesWithLand = countries.filter(pais => pais.toLowerCase().includes('land'));

console.log(countriesWithLand);

7. Extraia todos os países que contêm apenas quatro caracteres da matriz de países [array de países](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js) e imprima-os como uma matriz

const fourcountries = [ countries ];

const fourLetterCountries = countries.filter(pais => pais.length === 4);

console.log(fourLetterCountries);

8. Extraia todos os países que contêm duas ou mais palavras da matriz de países [array de países](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js)  e imprima-os como uma matriz

const multicountries = [ countries ];

const multiWordCountries = countries.filter(pais => pais.split(' ').length >= 2);  
console.log(multiWordCountries);*/

//9. Inverta a [matriz de países](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js) e coloque cada país em maiúscula e armazene-o como uma matriz

const reversecountries = [ countries ];

const reversedAndUppercasedCountries = countries.reverse().map(pais => pais.toUpperCase());

console.log(reversedAndUppercasedCountries);







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


/*const shortCountries = [ countries ];

const countriesWithLand = countries.filter(pais => pais.toLowerCase().includes('land'));

console.log(countriesWithLand); */

/* const Shortcountries = [ countries ];

const longestCountry = countries.reduce((longest, pais) => pais.length > longest.length ? pais : longest, '');

console.log(longestCountry); */

/*const shortCountries = [ countries ];

const countriesWithLand = countries.filter(pais => pais.toLowerCase().includes('land'));

console.log(countriesWithLand);


const fourcountries = [ countries ];

const fourLetterCountries = countries.filter(pais => pais.length === 4);

console.log(fourLetterCountries);

const multicountries = [ countries ];

const multiWordCountries = countries.filter(pais => pais.split(' ').length >= 2);  
console.log(multiWordCountries);*/

const reversecountries = [ countries ];

const reversedAndUppercasedCountries = countries.reverse().map(pais => pais.toUpperCase());

console.log(reversedAndUppercasedCountries);







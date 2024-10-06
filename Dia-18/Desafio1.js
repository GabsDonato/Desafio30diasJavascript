/* ### Exercícios: Nível 1

1. Leia a API de países usando fetch e imprima o nome do país, capital, idiomas, população e área. 
*/


const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
  
    data.forEach(country => {
      const name = country.name;
      const capital = country.capital || 'N/A'; 
      const languages = country.languages.map(lang => lang.name).join(', ');
      const population = country.population;
      const area = country.area || 'N/A'; 

      console.log(`Nome: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Idiomas: ${languages}`);
      console.log(`População: ${population}`);
      console.log(`Área: ${area}`);
      console.log('-----------------------'); 
    });
  })
  .catch(error => {
    console.error('Houve um problema com a requisição:', error);
  });
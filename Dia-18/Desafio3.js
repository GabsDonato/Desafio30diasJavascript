// ### Exercícios: Nível 3


//1. Leia a API de gatos e encontre o peso médio dos gatos em unidades métricas.

const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const weights = data.map(cat => {
      const weight = cat.weight.metric.split(' - ').map(Number);
      return (weight[0] + weight[1]) / 2; 
    });

    const averageWeight = weights.reduce((sum, weight) => sum + weight, 0) / weights.length;
    console.log(`Peso médio dos gatos: ${averageWeight.toFixed(2)} kg`);
  })
  .catch(error => {
    console.error('Houve um problema com a requisição:', error);
  });


//2. Leia a API de países e descubra os 10 maiores países.

const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Ordena os países pela área e pega os 10 maiores
    const largestCountries = data
      .sort((a, b) => b.area - a.area)
      .slice(0, 10);

    largestCountries.forEach(country => {
      console.log(`Nome: ${country.name}, Área: ${country.area} km²`);
    });
  })
  .catch(error => {
    console.error('Houve um problema com a requisição:', error);
  });



//3. Leia a API de países e conte o número total de idiomas no mundo usados como oficiais.

fetch(countriesAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const languages = new Set();

    data.forEach(country => {
      country.languages.forEach(lang => {
        languages.add(lang.name);
      });
    });

    console.log(`Número total de idiomas oficiais: ${languages.size}`);
  })
  .catch(error => {
    console.error('Houve um problema com a requisição:', error);
  });


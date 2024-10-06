/* ### Exercícios: Nível 2

1. Imprima todos os nomes de gatos na variável catNames. 
*/

const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    const catNames = data.map(cat => cat.name);
    
    console.log('Nomes dos gatos:', catNames);
  })
  .catch(error => {
    console.error('Houve um problema com a requisição:', error);
  });

/*### Exercícios: Nível 3


2. **Use os dados dos países para encontrar as 10 línguas mais faladas:**

```js
   // Sua saída deve ser assim
   console.log(mostSpokenLanguages(countries, 10))
   [
     { Inglês: 91 },
     { Francês: 45 },
     { Árabe: 25 },
     { Espanhol: 24 },
     { Russo: 9 },
     { Português: 9 },
     { Holandês: 8 },
     { Alemão: 7 },
     { Chinês: 5 },
     { Suaíli: 4 },
     { Sérvio: 4 }
   ]

  // Sua saída deve ser assim
  console.log(mostSpokenLanguages(countries, 3))
  [
  {Inglês:91},
  {Francês:45},
  {Árabe:25}
  ]
```
 */

    const mostSpokenLanguages = [
      'Inglês',
      'Francês',
      'Árabe',
      'Espanhol',
      'Russo',
      'Português',
      'Holandês',
      'Alemão',
      'Chinês',
      'Chinês',
      'Suaíli',
      'Sérvia'
    ] 

//1. Quantas línguas existem no arquivo de dados dos países.
const langSet = new Set(mostSpokenLanguages);
console.log(langSet);
console.log(langSet.size); 


//2. Use os dados dos países para encontrar as 10 línguas mais faladas.
const counts = [];

for (const lang of langSet) {
  const filteredLang = mostSpokenLanguages.filter((lng) => lng === lang);
  counts.push({ lang: lang, count: filteredLang.length });
}

console.log(counts);
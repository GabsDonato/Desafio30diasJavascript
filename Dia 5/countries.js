/* 1. Crie um arquivo separado countries.js e armazene o array countries neste arquivo. Crie um arquivo separado web_techs.js e armazene o array webTechs neste arquivo. Acesse ambos os arquivos no arquivo main.js;
4. No array countries, verifique se 'Etiópia' existe no array; se existir, imprima 'ETIÓPIA'. Se não existir, adicione à lista de países;
```js
 */
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

let index = countries.indexOf('Etiópia')

if (index !== -1) {
    console.log('ETIÓPIA');
} else {
    countries.push('Etiópia');
    console.log('Etiópia foi adicionada');
}

console.log(countries);
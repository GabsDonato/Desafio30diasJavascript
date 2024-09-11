
let text = 'Eu amo ensinar e empoderar pessoas. Eu ensino HTML, CSS, JS, React, Python.';

let cleanedText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');


let words = cleanedText.split(/\s+/);

console.log(words);
console.log(words.length);

/*3. No carrinho de compras, adicione, remova e edite itens:
```js
const shoppingCart = ['Leite', 'Café', 'Chá', 'Mel']
```

- Adicione 'Carne' no início do seu carrinho de compras se ainda não tiver sido adicionado;
- Adicione Açúcar no final do seu carrinho de compras se ainda não tiver sido adicionado;
- Remova 'Mel' se você for alérgico ao mel;
- Modifique Chá para 'Chá Verde'; */


const shoppingCart = ['Leite', 'Café', 'Chá', 'Mel']
shoppingCart.unshift('Carne')
shoppingCart.push('Açúcar')
shoppingCart.splice(3)
shoppingCart.splice(2, 1, 'Chá Verde');
console.log(shoppingCart)

//6. Concatene as seguintes duas variáveis e armazene na variável fullStack:
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack);

//1. O seguinte é um array com as idades de 10 alunos:
/*   const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Ordene o array e encontre a idade mínima e máxima;
    - Encontre a idade mediana (um item do meio ou dois itens do meio divididos por dois);
    - Encontre a idade média (todos os itens divididos pelo número de itens);
    - Encontre a faixa etária (máxima menos mínima);
    - Compare o valor de (mínimo - média) e (máximo - média), use o método _abs()_; */

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

    ages.sort((a, b) => a - b);
    
    const minAge = ages[0];
    const maxAge = ages[ages.length - 1];
    
    const totalAge = ages.reduce((sum, age) => sum + age, 0);
    const averageAge = totalAge / ages.length;
    
    const middleIndex = Math.floor(ages.length / 2);
    let medianAge;
    
    if (ages.length % 2 === 0) {
        medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
    } else {
        medianAge = ages[middleIndex];
    }
    
    const ageRange = maxAge - minAge;
    
    const diffMinAverage = Math.abs(minAge - averageAge);
    const diffMaxAverage = Math.abs(maxAge - averageAge);
    
    console.log('Array ordenado:', ages);
    console.log('Idade mínima:', minAge);
    console.log('Idade máxima:', maxAge);
    console.log('Idade média:', averageAge);
    console.log('Idade mediana:', medianAge);
    console.log('Faixa etária:', ageRange);
    console.log('Diferença (mínimo - média):', diffMinAverage);
    console.log('Diferença (máximo - média):', diffMaxAverage);
    
    //2. Extraia os primeiros dez países do array [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js);

     const pais = [
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
    'Quênia',
    'Líbano',
    'Malásia',
    'Nepal',
    'Omã',
    'Paquistão',
    'Quênia',
    'Rússia',
    'Suécia',
    'Turquia',
    'Uruguai',
    'Venezuela'
  ];
  

 /* const firstTenCountries = pais.slice(0, 10);
  
  console.log(firstTenCountries); */

/*  const length = countries.length;
const middeIndex = Math.floor(length / 2);

let middleCountries;

if (length % 2 === 0) {
    middleCountries = [countries[middeIndex - 1], countries[middeIndex]];
} else {
    middleCountries = [countries[middeIndex]];
}

console.log('País(es) do meio:', middleCountries); */

    const length = countries.length;
    const middeIndex = Math.ceil(length / 2);

    const firstHalf = countries.slice(0, middeIndex);
    const secondHalf = countries.slice(middeIndex);

    console.log('Primeira metade:', firstHalf);
    console.log('Segunda metade:', secondHalf);
  
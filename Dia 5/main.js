console.log(countries)
console.log(webTechs);

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

console.log(fullStack)
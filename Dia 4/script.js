/*1. Obtenha a entrada do usuário usando prompt("Digite sua idade:"). Se o usuário tiver 18 anos ou mais, forneça o feedback: "Você é maior de idade para dirigir". Caso contrário, forneça outro feedback informando quantos anos faltam para ele completar 18 anos.

```sh
Copy code
Digite sua idade: 30
Você é maior de idade para dirigir.

Digite sua idade: 15
Faltam 3 anos para você poder dirigir.
``` */
/*      
    const idade = parseInt(prompt('Digite sua idade: '));
         if (idade >= 18) {
                console.log('Você é maior de idade para dirigir.');
            } else {
                const anosParaDirigir = 18 - idade;
                console.log(`Faltam ${anosParaDirigir} anos para você poder dirigir.`);
            }
*/

/* 2. Compare os valores de minhaIdade e suaIdade usando if … else. Com base na comparação, registre o resultado no console indicando quem é mais velho (eu ou você). Use prompt("Digite sua idade:") para obter a idade como entrada.

```sh
Copy code
Digite sua idade: 30
Você é 5 anos mais velho do que eu.
``` */

 /* const suaIdade = parseInt(prompt('Digite sua idade:'))
    const minhaIdade = 25

    if (suaIdade > minhaIdade) {
        console.log(`Você é ${suaIdade - minhaIdade} anos mais velho do que eu.`);
    } else if (suaIdade < minhaIdade) {

        console.log(`Eu sou ${minhaIdade - suaIdade} anos mais velho do que você.`);
    }*/

/* 3. Se a for maior que b, retorne 'a é maior que b', caso contrário, 'a é menor que b'. Tente implementar de duas maneiras:

- Usando if else
- Usando operador ternário

```js
Copy code
  let a = 4
  let b = 3
```

```sh
Copy code
  4 é maior que 3
```*/
    const a = 4
    const b = 3
 if (a > b){
    console.log(`${a} é maior que ${b}`)
 } else if (a < b){
    console.log(`${a} é menor que ${b}`)
 };

let A = 4;
let B = 3;

A > B
    ? console.log(`${A} é maior que ${B}`)
    : console.log(`${A} é menor que ${B}`);

/* 4. Números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número é par ou ímpar usando JavaScript?


```sh
Copy code
Digite um número: 2
2 é um número par

Digite um número: 9
9 é um número ímpar.
``` */
/*
const numeros = parseInt(prompt('Digite um número:'))
if (numeros % 2 === 0) {
    console.log(`${numeros} é um número par`);
} else {
    console.log(`${numeros} é um número ímpar`);
} */




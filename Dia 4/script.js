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

/*  1. Escreva um código que atribua notas aos alunos de acordo com suas pontuações:

- 80-100: A
- 70-89: B
- 60-69: C
- 50-59: D
- 0-49: F */
/*
let notas = parseInt(prompt("Digite sua nota:"));

if (notas >= 90 && notas <= 100) {
    console.log('Você tirou nota: A');
} else if (notas >= 80 && notas <= 89) {
    console.log('Você tirou nota: B');
} else if (notas >= 70 && notas <= 79) {
    console.log('Você tirou nota: C');
} else if (notas >= 60 && notas <= 69) {
    console.log('Você tirou nota: D');
} else {
    console.log('Você tirou nota: F');
} */

/* 2. Verifique se a estação do ano é Outono, Inverno, Primavera ou Verão. Se a entrada do usuário for:

- Setembro, Outubro ou Novembro, a estação é Outono.
- Dezembro, Janeiro ou Fevereiro, a estação é Inverno.
- Março, Abril ou Maio, a estação é Primavera.
- Junho, Julho ou Agosto, a estação é Verão.
 */

/*let estaçãoInput = prompt('Digite um mês: ')
let mes = estaçãoInput.toLowerCase()

switch (mes) {
    case 'setembro':
    case 'outubro':
    case 'novembro':
        console.log('A estação é Outono');
        break;
    case 'dezembro':
    case 'janeiro':
    case 'fevereiro':
        console.log('A estação é Inverno');
        break;
    case 'março':
    case 'abril':
    case 'maio':
        console.log('A estação é Primavera');
        break;
    case 'junho':
    case 'julho':
    case 'agosto':
        console.log('A estação é Verão');
        break;
    default:
        console.log('Este não é um mês válido');
} */
/*
        3. Verifique se um dia é fim de semana ou um dia útil. Seu script deve receber o dia como entrada.

        ```sh
        Copy code
            Qual é o dia hoje? Sábado
            Sábado é um fim de semana.
        
            Qual é o dia hoje? sabado
            Sábado é um fim de semana.
        
            Qual é o dia hoje? Sexta-feira
            Sexta-feira é um dia útil.
        
            Qual é o dia hoje? seXta-feIRa
            Sexta-feira é um dia útil.
        ```
*/        
/*
        const dias = prompt('Qual é o dia de hoje?')
        
        switch(dias){
            case 'Segunda-feira':
            case 'Terça-feira':
            case 'Quarta-feira':
            case 'Quinta-feira':
            case 'Sexata-feira':
            console.log(`${dias} é um dia útil.`)
            break
            case 'Sábado':
            case 'Domingo':
            console.log(`${dias} é um fim de semana.`)
            break
        } */

/* 1. Escreva um programa que informe o número de dias em um mês.

```sh
Copy code
  Digite um mês: Janeiro
  Janeiro tem 31 dias.

  Digite um mês: JANEIRO
  Janeiro tem 31 dias.

  Digite um mês: Fevereiro
  Fevereiro tem 28 dias.

  Digite um mês: feVereiro
  Fevereiro tem 28 dias.
```   */       

/* function diasNoMes(mes) {
    const meses = {
        janeiro: 31,
        fevereiro: 28, 
        março: 31,
        abril: 30,
        maio: 31,
        junho: 30,
        julho: 31,
        agosto: 31,
        setembro: 30,
        outubro: 31,
        novembro: 30,
        dezembro: 31
    };

    return meses[mes.toLowerCase()] || 'Mês inválido';
}

const mesInput = prompt('Digite um mês:');

const dias = diasNoMes(mesInput);

if (dias === 'Mês inválido') {
    console.log(dias);
} else {
    console.log(`${mesInput.charAt(0).toUpperCase() + mesInput.slice(1).toLowerCase()} tem ${dias} dias.`); 
}
*/

//2. Escreva um programa que informe o número de dias em um mês, considerando anos bissextos.

function isBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function diasNoMes(mes, ano) {
    const meses = {
        janeiro: 31,
        fevereiro: isBissexto(ano) ? 29 : 28,
        março: 31,
        abril: 30,
        maio: 31,
        junho: 30,
        julho: 31,
        agosto: 31,
        setembro: 30,
        outubro: 31,
        novembro: 30,
        dezembro: 31
    };

    return meses[mes.toLowerCase()] || 'Mês inválido';
}

const mesInput = prompt('Digite um mês:');
const anoInput = parseInt(prompt('Digite o ano:'));

const dias = diasNoMes(mesInput, anoInput);

if (dias === 'Mês inválido') {
    console.log(dias);
} else {
    console.log(`${mesInput.charAt(0).toUpperCase() + mesInput.slice(1).toLowerCase()} tem ${dias} dias.`);
}



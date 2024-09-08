/*Exercícios: Level 2

1. Usando o console.log() imprimir a seguinte citação:
  ```sh
    "Não há exercício melhor para o coração que ir lá em baixo e levantar as pessoas" by John Holmes nos ensina a ajudar outras pessoas.
  ```

2. Usando o console.log() imprimir a seguinte citação de Madre Teresa:
  ```sh
    "O amor não é paternalista e a caridade não tem a ver com pena, tem a ver com amor. Caridade e amor são a mesma coisa – com a caridade você dá amor, então não dê apenas dinheiro, mas estenda sua mão."
  ```

3. Verificar se typeOf "10" é exatamente igual a 10. Se não, faça ser exatamente igual.
4. Verificar se parseFloat("9.8) é igual a 10. Se não, faça ser exatamente igual com 10.
5. Verificar se "ão" é encontrado em ambos algodão e jargão.
6. _Espero que este curso não tenha muitos jargões_. Verifique se _jargões_ está na frase. 
7. Gerar um número aleatório entre incluindo 0 e 100.
8. Gerar um número aleatório entre incluindo 50 e 100.
9. Gerar um número aleatório entre incluindo 0 e 255.
10. Acesse os caracteres da string "JavaScript" usando um número aleatório.
11. Use console.log() e imprimir os caracteres no seguinte padrão.
    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```
12. Use __substr__ para retirar da frase __because because because__ da seguinte frase: __'You cannot end a sentence with because because because is a conjunction'__.       */

console.log('"Não há exercício melhor para o coração que ir lá em baixo e levantar as pessoas" by John Holmes nos ensina a ajudar outras pessoas.');
console.log('"O amor não é paternalista e a caridade não tem a ver com pena, tem a ver com amor. Caridade e amor são a mesma coisa – com a caridade você dá amor, então não dê apenas dinheiro, mas estenda sua mão." By Madre Teresa.');

let Number = 10
console.log(typeof 10);

let value = parseFloat("9.8");
if (value !== 10) {
    value = 10;
}
console.log(value); 

let SEarch = "Algodão, Jardão"

console.log(SEarch.search('ão'));

let Plavara = 'Espero que este curso não tenha muitos jargões'
console.log(Plavara.includes('jargões'));

const NumberAle = Math.floor(Math.random () * 101);
console.log(NumberAle);

const Num = Math.floor(Math.random () * 49,101);
console.log(Num);

const Num2 = Math.floor(Math.random () * 255);
console.log(Num2);

const str = "JavaScript";
const randomIndex = Math.floor(Math.random() * str.length);
console.log(randomIndex);

console.log(`\njs\n1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);

let frase = 'You cannot end a sentence with because because because is a conjunction';

let substring = 'because because because';


let inicio = frase.indexOf(substring);


if (inicio !== -1) {
   
    let comprimento = substring.length;

    let novaFrase = frase.substring(0, inicio) + frase.substring(inicio + comprimento);
    
    console.log(novaFrase);
} else {
    console.log(frase);
}

function contarPalavra(frase, palavra) {
   
    let regex = new RegExp(palavra, 'gi');
    
   
    let correspondencias = frase.match(regex);
    
    
    return correspondencias ? correspondencias.length : 0;
  }
  
  let PL = "Amor é a melhor coisa neste mundo. Alguns encontraram seu amor e alguns ainda estão procurando pelo seu amor.";
  let palavra = "amor";
  
  let resultado = contarPalavra(PL, palavra);
  console.log(`A palavra "${palavra}" aparece ${resultado} vezes na frase.`);

  let F = 'You cannot end a sentence with because because because is a conjunction';
  let P = "because";
  let regex = new RegExp(P, 'gi');
  let correspondencias = F.match(regex);
  console.log(correspondencias);

const limpar = " %I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching ";

function limparTexto(texto) {
  
  return texto
    .replace(/[^a-zA-Z\s]/g, '') 
    .toLowerCase(); 
}

function encontrarPalavraMaisRepetida(texto) {
  
  let textoLimpo = limparTexto(texto);
  

  let palavras = textoLimpo.split(/\s+/);

  let contagem = {};
  palavras.forEach(palavra => {
    if (palavra) {
      contagem[palavra] = (contagem[palavra] || 0) + 1;
    }
  });

  let palavraMaisRepetida = '';
  let maxContagem = 0;

  for (let palavra in contagem) {
    if (contagem[palavra] > maxContagem) {
      maxContagem = contagem[palavra];
      palavraMaisRepetida = palavra;
    }
  }

  return palavraMaisRepetida;
}

let palavraMaisRepetida = encontrarPalavraMaisRepetida(limpar);
console.log(`A palavra mais repetida é "${palavraMaisRepetida}".`);

let Funcionario = "Ele recebe 5000 euros de salário por mês, 10000 euros de bônus anual, 15000 euros de cursos onlines por mês."
let regEx = /\d+/
let numeros = Funcionario.match(/\d+/g)
if (numeros && numeros.length === 3) {
    
    let salarioMensal = parseInt(numeros[0], 10);
    let bonusAnual = parseInt(numeros[1], 10);
    let cursosOnlineMensal = parseInt(numeros[2], 10);

    let salarioAnual = salarioMensal * 12;
    let totalAnual = salarioAnual + bonusAnual + (cursosOnlineMensal * 12);

    console.log("Total anual: " + totalAnual + " euros");
} else {
    console.log("Não foram encontrados os números esperados no texto.");
}









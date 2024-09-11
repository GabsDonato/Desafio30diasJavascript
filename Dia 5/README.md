Claro! Aqui está a tradução do README para o português:

## 💻 Dia 5: Exercícios

### Exercício: Nível 1

1. Declare um _array vazio_;

## Resultados no devtools

<img src="./assets/imgs/image.png">

---

2. Declare um array com mais de 5 elementos;

## Resultados no devtools

<img src="./assets/imgs/image2.png">

---

3. Encontre o comprimento do seu array;

## Resultados no devtools

<img src="./assets/imgs/image3.png">

---

4. Obtenha o primeiro item, o item do meio e o último item do array;

## Resultados no devtools

<img src="./assets/imgs/image4.png">

---

5. Declare um array chamado _mixedDataTypes_, coloque diferentes tipos de dados no array e encontre o comprimento do array. O tamanho do array deve ser maior que 5;

## Resultados no devtools

<img src="./assets/imgs/image5.png">

---
6. Declare uma variável de array chamada itCompanies e atribua os valores iniciais Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon;
7. Imprima o array usando _console.log()_;
8. Imprima o número de empresas no array;
9. Imprima a primeira empresa, a do meio e a última empresa;
10. Imprima cada empresa;
11. Altere o nome de cada empresa para maiúsculas uma por uma e imprima-os;
12. Imprima o array como uma frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon são grandes empresas de TI;
13. Verifique se uma certa empresa existe no array itCompanies. Se existir, retorne a empresa; caso contrário, retorne que a empresa _não foi encontrada_;
14. Filtre empresas que tenham mais de uma letra 'o' sem usar o método filter;
15. Ordene o array usando o método _sort()_;
16. Inverta o array usando o método _reverse()_;
17. Extraia as primeiras 3 empresas do array;
18. Extraia as últimas 3 empresas do array;
19. Extraia a(s) empresa(s) de TI do meio do array;
20. Remova a primeira empresa de TI do array;
21. Remova a(s) empresa(s) de TI do meio do array;
22. Remova a última empresa de TI do array;
23. Remova todas as empresas de TI;

### Exercício: Nível 2

1. Crie um arquivo separado countries.js e armazene o array countries neste arquivo. Crie um arquivo separado web_techs.js e armazene o array webTechs neste arquivo. Acesse ambos os arquivos no arquivo main.js;

```js
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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
```
2. Primeiro remova toda a pontuação e converta a string em um array e conte o número de palavras no array:

    ```js
    let text =
    'Eu amo ensinar e empoderar pessoas. Eu ensino HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ```

    ```sh
    ["Eu", "amo", "ensinar", "e", "empoderar", "pessoas", "Eu", "ensino", "HTML", "CSS", "JS", "React", "Python"]
  
    13
    ```

3. No carrinho de compras, adicione, remova e edite itens:

    ```js
    const shoppingCart = ['Leite', 'Café', 'Chá', 'Mel']
    ```

   - Adicione 'Carne' no início do seu carrinho de compras se ainda não tiver sido adicionado;
   - Adicione Açúcar no final do seu carrinho de compras se ainda não tiver sido adicionado;
   - Remova 'Mel' se você for alérgico ao mel;
   - Modifique Chá para 'Chá Verde';

4. No array countries, verifique se 'Etiópia' existe no array; se existir, imprima 'ETIÓPIA'. Se não existir, adicione à lista de países;
5. No array webTechs, verifique se Sass existe no array e, se existir, imprima 'Sass é um pré-processador CSS'. Se não existir, adicione Sass ao array e imprima o array;
6. Concatene as seguintes duas variáveis e armazene na variável fullStack:

    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node', 'Express', 'MongoDB']
  
    console.log(fullStack)
    ```

    ```sh
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```

### Exercício: Nível 3

1. O seguinte é um array com as idades de 10 alunos:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Ordene o array e encontre a idade mínima e máxima;
    - Encontre a idade mediana (um item do meio ou dois itens do meio divididos por dois);
    - Encontre a idade média (todos os itens divididos pelo número de itens);
    - Encontre a faixa etária (máxima menos mínima);
    - Compare o valor de (mínimo - média) e (máximo - média), use o método _abs()_;

2. Extraia os primeiros dez países do array [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js);
3. Encontre o(s) país(es) do meio no [array countries](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js);
4. Divida o array de países em dois arrays iguais, se for par. Se o array de países não for par, coloque um país a mais na primeira metade.
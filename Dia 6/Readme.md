## 💻 Exercícios: Dia 6

### Exercícios: Nível 1

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

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
```

1. Itere de 0 a 10 usando o loop for, faça o mesmo usando o loop while e o loop do while.

## Resultados no devtools

<img src="">

2. Itere de 10 a 0 usando o loop for, faça o mesmo usando o loop while e o loop do while.
3. Itere de 0 a n usando o loop for.
4. Escreva um loop que faça o seguinte padrão usando console.log():

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```

5. Use um loop para imprimir o seguinte padrão:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```

6. Usando um loop, imprima o seguinte padrão:

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```

7. Use o loop for para iterar de 0 a 100 e imprimir apenas os números pares.
8. Use o loop for para iterar de 0 a 100 e imprimir apenas os números ímpares.
9. Use o loop for para iterar de 0 a 100 e imprimir apenas os números primos.
10. Use o loop for para iterar de 0 a 100 e imprimir a soma de todos os números.

    ```sh
    A soma de todos os números de 0 a 100 é 5050.
    ```

11. Use o loop for para iterar de 0 a 100 e imprimir a soma de todos os pares e a soma de todos os ímpares.

    ```sh
    A soma de todos os pares de 0 a 100 é 2550. E a soma de todos os ímpares de 0 a 100 é 2500.
    ```

12. Use o loop for para iterar de 0 a 100 e imprimir a soma de todos os pares e a soma de todos os ímpares. Imprima a soma dos pares e a soma dos ímpares como um array.

    ```sh
      [2550, 2500]
    ```

13. Desenvolva um pequeno script que gere um array de 5 números aleatórios.
14. Desenvolva um pequeno script que gere um array de 5 números aleatórios e os números devem ser únicos.
15. Desenvolva um pequeno script que gere um ID aleatório de seis caracteres:

    ```sh
    5j2khz
    ```

### Exercícios: Nível 2

1. Desenvolva um pequeno script que gere um ID aleatório com qualquer número de caracteres:

    ```sh
      fe3jo1gl124g
    ```

    ```sh
      xkqci4utda1lmbelpkm03rba
    ```

2. Escreva um script que gere um número hexadecimal aleatório.

    ```sh
    '#ee33df'
    ```

3. Escreva um script que gere um número de cor RGB aleatório.

    ```sh
    rgb(240,180,80)
    ```

4. Usando o array de países acima, crie o seguinte novo array.

    ```sh
    ["ALBÂNIA", "BOLÍVIA", "CANADÁ", "DINAMARCA", "ETIÓPIA", "FINLÂNDIA", "ALEMANHA", "HUNGRIA", "IRLANDA", "JAPÃO", "QUÊNIA"]
    ```

5. Usando o array de países acima, crie um array com o comprimento dos nomes dos países.

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```

6. Use o array de países para criar o seguinte array de arrays:

    ```sh
      [
      ['Albânia', 'ALB', 7],
      ['Bolívia', 'BOL', 7],
      ['Canadá', 'CAN', 6],
      ['Dinamarca', 'DEN', 7],
      ['Etiópia', 'ETH', 8],
      ['Finlândia', 'FIN', 7],
      ['Alemanha', 'GER', 7],
      ['Hungria', 'HUN', 7],
      ['Irlanda', 'IRE', 7],
      ['Islândia', 'ICE', 7],
      ['Japão', 'JAP', 5],
      ['Quênia', 'KEN', 5]
    ]
    ```

7. No array de países acima, verifique se há um país ou países contendo a palavra 'land'. Se houver países contendo 'land', imprima-os como um array. Se não houver países contendo a palavra 'land', imprima 'Todos esses países estão sem land'.

    ```sh
    ['Finlândia', 'Irlanda', 'Islândia']
    ```

8. No array de países acima, verifique se há um país ou países que terminam com o sufixo 'ia'. Se houver países que terminam com 'ia', imprima-os como um array. Se não houver países contendo 'ia', imprima 'Esses são os países que terminam sem ia'.

    ```sh
    ['Albânia', 'Bolívia', 'Etiópia']
    ```

9. Usando o array de países acima, encontre o país com o maior número de caracteres.

      ```sh
      Etiópia
      ```

10. Usando o array de países acima, encontre o país com exatamente 5 caracteres.

    ```sh
    ['Japão', 'Quênia']
    ```

11. Encontre a palavra mais longa no array de tecnologias web.
12. Use o array de tecnologias web para criar o seguinte array de arrays:

    ```sh
    [["HTML", 4], ["CSS", 3], ["JavaScript", 10], ["React", 5], ["Redux", 5], ["Node", 4], ["MongoDB", 7]]
    ```

13. Um aplicativo criado usando MongoDB, Express, React e Node é chamado de aplicativo MERN stack. Crie o acrônimo MERN usando o array mernStack.
14. Itere pelo array ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando um loop for ou for of e imprima os itens.
15. Este é um array de frutas, ['banana', 'laranja', 'manga', 'limão'] inverta a ordem usando um loop sem usar o método reverse.
16. Imprima todos os elementos do array conforme mostrado abaixo.

    ```js
      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    ```

    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```

### Exercícios: Nível 3

1. Copie o array de países (Evite mutação).
2. Arrays são mutáveis. Crie uma cópia do array que não modifique o original. Classifique o array copiado e armazene em uma variável chamada sortedCountries.
3. Classifique os arrays webTechs e mernStack.
4. Extraia todos os países que contêm a palavra 'land' do [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) e imprima como um array.
5. Encontre o país com o maior número de caracteres no [array de países](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js).
6. Extraia todos os países que contêm a palavra 'land' do [array de países](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js)

7. Extraia todos os países que contêm apenas quatro caracteres da matriz de países [array de países](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js) e imprima-os como uma matriz

8. Extraia todos os países que contêm duas ou mais palavras da matriz de países [array de países](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js)  e imprima-os como uma matriz

9. Inverta a [matriz de países](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js) e coloque cada país em maiúscula e armazene-o como uma matriz
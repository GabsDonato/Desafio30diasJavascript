## 💻 Exercícios

### Exercícios: Nível 1

1. Declare uma função _fullName_ que imprima seu nome completo.
2. Declare uma função _fullName_ que receba `firstName` e `lastName` como parâmetros e retorne seu nome completo.
3. Declare uma função _addNumbers_ que receba dois parâmetros e retorne a soma deles.
4. A área de um retângulo é calculada da seguinte forma: _area = comprimento x largura_. Escreva uma função que calcule _areaOfRectangle_.
5. O perímetro de um retângulo é calculado da seguinte forma: _perímetro = 2 x (comprimento + largura)_. Escreva uma função que calcule _perimeterOfRectangle_.
6. O volume de um prisma retangular é calculado da seguinte forma: _volume = comprimento x largura x altura_. Escreva uma função que calcule _volumeOfRectPrism_.
7. A área de um círculo é calculada da seguinte forma: _area = π x r x r_. Escreva uma função que calcule _areaOfCircle_.
8. A circunferência de um círculo é calculada da seguinte forma: _circunferência = 2πr_. Escreva uma função que calcule _circumOfCircle_.
9. A densidade de uma substância é calculada da seguinte forma: _densidade = massa / volume_. Escreva uma função que calcule _density_.
10. A velocidade é calculada dividindo a distância total percorrida por um objeto em movimento pelo tempo total gasto. Escreva uma função que calcule a velocidade de um objeto em movimento, _speed_.
11. O peso de uma substância é calculado da seguinte forma: _peso = massa x gravidade_. Escreva uma função que calcule _weight_.
12. A temperatura em °C pode ser convertida para °F usando a fórmula: _°F = (°C x 9/5) + 32_. Escreva uma função que converta °C para °F, _convertCelsiusToFahrenheit_.
13. O índice de massa corporal (IMC) é calculado da seguinte forma: _bmi = peso em Kg / (altura x altura) em m²_. Escreva uma função que calcule _bmi_. O IMC é usado para definir amplamente diferentes grupos de peso em adultos com 20 anos ou mais. Verifique se uma pessoa está _abaixo do peso_, _peso normal_, _acima do peso_ ou _obesa_ com base nas informações a seguir:

    - Os mesmos grupos se aplicam tanto para homens quanto para mulheres.
    - _Abaixo do peso_: IMC é menor que 18,5
    - _Peso normal_: IMC é de 18,5 a 24,9
    - _Acima do peso_: IMC é de 25 a 29,9
    - _Obeso_: IMC é 30 ou mais

14. Escreva uma função chamada _checkSeason_ que receba um parâmetro de mês e retorne a estação: Outono, Inverno, Primavera ou Verão.
15. Math.max retorna o maior argumento. Escreva uma função chamada findMax que receba três argumentos e retorne o máximo deles sem usar o método Math.max.

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```

### Exercícios: Nível 2

1. Uma equação linear é calculada da seguinte forma: _ax + by + c = 0_. Escreva uma função que calcule o valor de uma equação linear, _solveLinEquation_.
2. Uma equação quadrática é calculada da seguinte forma: _ax² + bx + c = 0_. Escreva uma função que calcule o(s) valor(es) de uma equação quadrática, _solveQuadEquation_.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) // {2, -2}
    console.log(solveQuadratic(1, -1, 0)) // {1, 0}
    ```

3. Declare uma função chamada _printArray_. Ela recebe um array como parâmetro e imprime cada valor do array.
4. Escreva uma função chamada _showDateTime_ que mostre a hora no formato: 08/01/2020 04:08 usando o objeto Date.

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```

5. Declare uma função chamada _swapValues_. Essa função troca o valor de x por y.

    ```js
    swapValues(3, 4) // x => 4, y => 3
    swapValues(4, 5) // x => 5, y => 4
    ```

6. Declare uma função chamada _reverseArray_. Ela recebe um array como parâmetro e retorna o array invertido (não use métodos).

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```

7. Declare uma função chamada _capitalizeArray_. Ela recebe um array como parâmetro e retorna o array com os itens capitalizados.
8. Declare uma função chamada _addItem_. Ela recebe um item como parâmetro e retorna um array após adicionar o item.
9. Declare uma função chamada _removeItem_. Ela recebe um índice como parâmetro e retorna um array após remover o item no índice especificado.
10. Declare uma função chamada _sumOfNumbers_. Ela recebe um número como parâmetro e soma todos os números dentro desse intervalo.
11. Declare uma função chamada _sumOfOdds_. Ela recebe um número como parâmetro e soma todos os números ímpares dentro desse intervalo.
12. Declare uma função chamada _sumOfEven_. Ela recebe um número como parâmetro e soma todos os números pares dentro desse intervalo.
13. Declare uma função chamada _evensAndOdds_. Ela recebe um número inteiro positivo como parâmetro e conta o número de pares e ímpares no número.

    ```sh
    evensAndOdds(100);
    O número de ímpares é 50.
    O número de pares é 51.
    ```

14. Escreva uma função que receba qualquer número de argumentos e retorne a soma dos argumentos.

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```

15. Escreva uma função que gere um _randomUserIp_.
16. Escreva uma função que gere um _randomMacAddress_.
17. Declare uma função chamada _randomHexaNumberGenerator_. Quando essa função for chamada, ela gera um número hexadecimal aleatório. A função deve retornar o número hexadecimal.

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```

18. Declare uma função chamada _userIdGenerator_. Quando essa função for chamada, ela gera um ID de sete caracteres. A função deve retornar o ID.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```

### Exercícios: Nível 3

1. Modifique a função _userIdGenerator_. Declare uma função chamada _userIdGeneratedByUser_. Ela não recebe parâmetros, mas solicita dois inputs usando prompt(). Um dos inputs é o número de caracteres e o segundo é o número de IDs que devem ser gerados.

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```

2. Escreva uma função chamada _rgbColorGenerator_ que gere cores RGB.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```

3. Escreva uma função chamada **_arrayOfHexaColors_** que retorne qualquer número de cores hexadecimais em um array.
4. Escreva uma função chamada **_arrayOfRgbColors_** que retorne qualquer número de cores RGB em um array.
5. Escreva uma função chamada **_convertHexaToRgb_** que converta uma cor hexadecimal para RGB e retorne a cor RGB.
6. Escreva uma função chamada **_convertRgbToHexa_** que converta uma cor RGB para hexadecimal e retorne a cor hexadecimal.
7. Escreva uma função **_generateColors_** que possa gerar qualquer número de cores hexadecimais ou RGB.

js
Copy code
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
Chame sua função shuffleArray, que recebe um array como parâmetro e retorna um array embaralhado.

8. Chame sua função factorial, que recebe um número inteiro como parâmetro e retorna o fatorial do número.

9. Chame sua função isEmpty, que recebe um parâmetro e verifica se está vazio ou não.

10. Chame sua função sum, que recebe qualquer número de argumentos e retorna a soma.

11. Escreva uma função chamada sumOfArrayItems, que recebe um array como parâmetro e retorna a soma de todos os itens. Verifique se todos os itens do array são do tipo número. Se não forem, forneça um feedback razoável.

12. Escreva uma função chamada average, que recebe um array como parâmetro e retorna a média dos itens. Verifique se todos os itens do array são do tipo número. Se não forem, forneça um feedback razoável.

13. Escreva uma função chamada modifyArray que recebe um array como parâmetro, modifica o quinto item do array e retorna o array. Se o comprimento do array for menor que cinco, deve retornar 'item não encontrado'.

js
Copy code
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
sh
Copy code
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
js
Copy code
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
sh
Copy code
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
js
Copy code
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));
sh
Copy code
  'Não Encontrado'

14. Escreva uma função chamada isPrime, que verifica se um número é primo.

15. Escreva uma função que verifica se todos os itens são únicos no array.

16. Escreva uma função que verifica se todos os itens do array são do mesmo tipo de dado.

17. Nomes de variáveis em JavaScript não suportam caracteres especiais ou símbolos, exceto $ ou _. Escreva uma função isValidVariable que verifique se uma variável é válida ou inválida.

18. Escreva uma função que retorne um array com sete números aleatórios no intervalo de 0 a 9. Todos os números devem ser únicos.

js
Copy code
sevenRandomNumbers()
[1, 4, 5, 7, 9, 8, 0]

19. Escreva uma função chamada reverseCountries, que recebe um array de países, faz uma cópia do array e retorna o array invertido.
/* ### Exercícios: Nível 2

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
    ``` */
/* 
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

19. Escreva uma função chamada reverseCountries, que recebe um array de países, faz uma cópia do array e retorna o array invertido. */
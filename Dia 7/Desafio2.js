// ### Exercícios: Nível 2

//1. Uma equação linear é calculada da seguinte forma: _ax + by + c = 0_. Escreva uma função que calcule o valor de uma equação linear, _solveLinEquation_.
        // Função para calcular x ou y na equação ax + by + c = 0
        function solveLinEquation(a, b, c, value, variable) {
            if (variable === 'x') {
                return (-(b * value) - c) / a;
            } else if (variable === 'y') {
                return (-(a * value) - c) / b;
            } else {
                throw new Error("Variável desconhecida. Use 'x' ou 'y'.");
            }
        }

        const a = 2;
        const b = 3;
        const c = -6;
        const yValue = 2; 
        const xValue = solveLinEquation(a, b, c, yValue, 'x');
        console.log(`O valor de x é: ${xValue}`);

        const xValue2 = 1;  
        const yValue2 = solveLinEquation(a, b, c, xValue2, 'y');
        console.log(`O valor de y é: ${yValue2}`);

/* 2. Uma equação quadrática é calculada da seguinte forma: _ax² + bx + c = 0_. Escreva uma função que calcule o(s) valor(es) de uma equação quadrática, _solveQuadEquation_.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) // {2, -2}
    console.log(solveQuadratic(1, -1, 0)) // {1, 0}
    ```
*/

        function solveQuadratic(a = 1, b = 0, c = 0) {
            if (a === 0) {
                throw new Error("O coeficiente 'a' não pode ser zero em uma equação quadrática.");
            }
            
            const discriminant = b * b - 4 * a * c;
            
            if (discriminant > 0) {
                const sqrtDiscriminant = Math.sqrt(discriminant);
                const x1 = (-b + sqrtDiscriminant) / (2 * a);
                const x2 = (-b - sqrtDiscriminant) / (2 * a);
                return [x1, x2];
            } else if (discriminant === 0) {
                const x = -b / (2 * a);
                return [x];
            } else {
                return [];
            }
        }

        console.log(solveQuadratic()); // {0} - Quando a=1, b=0, c=0 => x² = 0, raiz é 0
        console.log(solveQuadratic(1, 4, 4)); // {-2} - Quando a=1, b=4, c=4 => (x + 2)² = 0
        console.log(solveQuadratic(1, -1, -2)); // {2, -1} - Quando a=1, b=-1, c=-2 => x² - x - 2 = 0
        console.log(solveQuadratic(1, 7, 12)); // {-3, -4} - Quando a=1, b=7, c=12 => x² + 7x + 12 = 0
        console.log(solveQuadratic(1, 0, -4)); // {2, -2} - Quando a=1, b=0, c=-4 => x² - 4 = 0
        console.log(solveQuadratic(1, -1, 0)); // {1, 0} - Quando a=1, b=-1, c=0 => x² - x = 0

//3. Declare uma função chamada _printArray_. Ela recebe um array como parâmetro e imprime cada valor do array.
        function printArray(array) {
            if (!Array.isArray(array)) {
                throw new Error("O parâmetro deve ser um array.");
            }

            array.forEach(value => {
                console.log(value);
            });
        }

        printArray([10, 20, 30, 40]); 

/*4. Escreva uma função chamada _showDateTime_ que mostre a hora no formato: 08/01/2020 04:08 usando o objeto Date.

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```
 */
            function showDateTime() {
                const now = new Date();
            
                const day = String(now.getDate()).padStart(2, '0');
                const month = String(now.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
                const year = now.getFullYear();
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
            
                const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
            
                return formattedDateTime;
            }
                console.log(showDateTime());

/* 5. Declare uma função chamada _swapValues_. Essa função troca o valor de x por y.

    ```js
    swapValues(3, 4) // x => 4, y => 3
    swapValues(4, 5) // x => 5, y => 4
    ```
*/ 
            function swapValues(x , y){
                let temp = x;
                x = y;
                y = temp;
                return { x, y };
            }
            console.log(swapValues(3, 4));
            console.log(swapValues(4, 5));

/* 6. Declare uma função chamada _reverseArray_. Ela recebe um array como parâmetro e retorna o array invertido (não use métodos).

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```
 */
            function reverseArray(array) {
                const reversed = [];
                
                for (let i = array.length - 1; i >= 0; i--) {
                    reversed.push(array[i]);
                }
                
                return reversed;
            }
            console.log(reverseArray([1, 2, 3, 4, 5]));
            console.log(reverseArray(['A', 'B', 'C']));

//7. Declare uma função chamada _capitalizeArray_. Ela recebe um array como parâmetro e retorna o array com os itens capitalizados.
                function capitalizeArray(array) {
                    return array.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
                }

                // Exemplos de uso:
                console.log(capitalizeArray(['apple', 'banana', 'cherry'])); 

//8. Declare uma função chamada _addItem_. Ela recebe um item como parâmetro e retorna um array após adicionar o item.
                const items = [];

                function addItem(item) {
                    items.push(item);
                    return items;
                }

                console.log(addItem('apple')); 
                console.log(addItem('banana'));

//9. Declare uma função chamada _removeItem_. Ela recebe um índice como parâmetro e retorna um array após remover o item no índice especificado.
                    function removeItem(array, index) {
                        if (index >= 0 && index < array.length) {
                            array.splice(index, 1);
                        }
                        return array;
                    }

                    console.log(removeItem(['apple', 'banana', 'cherry'], 1)); 

//10. Declare uma função chamada _sumOfNumbers_. Ela recebe um número como parâmetro e soma todos os números dentro desse intervalo.
                        function sumOfNumbers(n) {
                            let sum = 0;
                            for (let i = 1; i <= n; i++) {
                                sum += i;
                            }
                            return sum;
                        }
                        console.log(sumOfNumbers(5)); 


//11. Declare uma função chamada _sumOfOdds_. Ela recebe um número como parâmetro e soma todos os números ímpares dentro desse intervalo.
                        function sumOfOdds(n) {
                            let sum = 0;
                            for (let i = 1; i <= n; i += 2) { 
                                sum += i;
                            }
                            return sum;
                        }
                        console.log(sumOfOdds(5)); 

//12. Declare uma função chamada _sumOfEven_. Ela recebe um número como parâmetro e soma todos os números pares dentro desse intervalo.
                        function sumOfEven(n) {
                            let sum = 0;
                            for (let i = 2; i <= n; i += 2) { 
                                sum += i;
                            }
                            return sum;
                        }
                        console.log(sumOfEven(5)); 

/*    13. Declare uma função chamada _evensAndOdds_. Ela recebe um número inteiro positivo como parâmetro e conta o número de pares e ímpares no número.
 ```sh
  evensAndOdds(100);
  O número de ímpares é 50.
  O número de pares é 51.
``` */

                        function evensAndOdds(n) {
                            let evens = 0;
                            let odds = 0;
                        
                            for (let i = 1; i <= n; i++) {
                                if (i % 2 === 0) {
                                    evens++;
                                } else {
                                    odds++;
                                }
                            }
                        
                            console.log(`O número de ímpares é ${odds}.`);
                            console.log(`O número de pares é ${evens}.`);
                        }
                        
                        evensAndOdds(100);
                      
                    
/*14. Escreva uma função que receba qualquer número de argumentos e retorne a soma dos argumentos.
                    
                        ```js
                        sum(1, 2, 3) // -> 6
                        sum(1, 2, 3, 4) // -> 10
                        ```
*/                    

                    function sum(...args) {
                        return args.reduce((accumulator, current) => accumulator + current, 0);
                    }

                    console.log(sum(1, 2, 3)); 
                    console.log(sum(1, 2, 3, 4)); 


//                    15. Escreva uma função que gere um _randomUserIp_.

                        function randomUserIp() {
                            return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
                        }

                        console.log(randomUserIp()); 

//                    16. Escreva uma função que gere um _randomMacAddress_.

                    function randomMacAddress() {
                        const hexDigits = '0123456789ABCDEF';
                        let macAddress = '';

                        for (let i = 0; i < 6; i++) {
                            if (i > 0) macAddress += ':';
                            for (let j = 0; j < 2; j++) {
                                macAddress += hexDigits[Math.floor(Math.random() * 16)];
                            }
                        }

                        return macAddress;
                    }

                    console.log(randomMacAddress());

/*                    17. Declare uma função chamada _randomHexaNumberGenerator_. Quando essa função for chamada, ela gera um número hexadecimal aleatório. A função deve retornar o número hexadecimal.
                    
                        ```sh
                        console.log(randomHexaNumberGenerator());
                        '#ee33df'
                        ```
*/
                            function randomHexaNumberGenerator() {
                                const hexDigits = '0123456789abcdef';
                                let hexNumber = '#';

                                for (let i = 0; i < 6; i++) {
                                    hexNumber += hexDigits[Math.floor(Math.random() * 16)];
                                }

                                return hexNumber;
                            }
                            console.log(randomHexaNumberGenerator());



/*                    18. Declare uma função chamada _userIdGenerator_. Quando essa função for chamada, ela gera um ID de sete caracteres. A função deve retornar o ID.
                    
                        ```sh
                        console.log(userIdGenerator());
                        41XTDbE
                        ``` 
*/
                            function userIdGenerator() {
                                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                                let userId = '';

                                for (let i = 0; i < 7; i++) {
                                    userId += chars[Math.floor(Math.random() * chars.length)];
                                }

                                return userId;
                            }

                            console.log(userIdGenerator()); 

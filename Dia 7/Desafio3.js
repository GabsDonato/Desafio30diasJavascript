/* 
### Exercícios: Nível 3

/* 1. Modifique a função _userIdGenerator_. Declare uma função chamada _userIdGeneratedByUser_. Ela não recebe parâmetros, mas solicita dois inputs usando prompt(). Um dos inputs é o número de caracteres e o segundo é o número de IDs que devem ser gerados.

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
    ```*/


function userIdGeneratedByUser() {
    const numChars = parseInt(prompt("Digite o número de caracteres para cada ID:"));
    
    const numIds = parseInt(prompt("Digite o número de IDs a serem gerados:"));
    
}
    function generateRandomId(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }
        return result;
    }

  
    let ids = [];
    for (let i = 0; i < numIds; i++) {
        ids.push(generateRandomId(numChars));
    }
    
 /* 2. Escreva uma função chamada _rgbColorGenerator_ que gere cores RGB.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ``` */

        function rgbColorGenerator(){
        return Math.floor(Math.random() * 256);
    }

    function gerarCorRGB() {
        const r = rgbColorGenerator();
        const g = rgbColorGenerator();
        const b = rgbColorGenerator();
        return `rgb(${r},${g},${b})`;
    }

    const NUM_CORES = 1;

    for (let i = 0; i < NUM_CORES; i++) {
        console.log(gerarCorRGB());
    }

//3. Escreva uma função chamada **_arrayOfHexaColors_** que retorne qualquer número de cores hexadecimais em um array.
        function arrayOfHexaColors(num) {
            const hexColor = () => {
                const randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16);
                return `#${randomColor.padStart(6, '0')}`;
            };

            return Array.from({ length: num }, hexColor);
}

//4. Escreva uma função chamada **_arrayOfRgbColors_** que retorne qualquer número de cores RGB em um array.
            function arrayOfRgbColors(num) {
                const rgbColor = () => {
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);
                    return `rgb(${r},${g},${b})`;
                };

                return Array.from({ length: num }, rgbColor);
            }

//5. Escreva uma função chamada **_convertHexaToRgb_** que converta uma cor hexadecimal para RGB e retorne a cor RGB.

function convertHexaToRgb(hex) {
    hex = hex.replace(/^#/, '');

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return `rgb(${r},${g},${b})`;
}

//6. Escreva uma função chamada **_convertRgbToHexa_** que converta uma cor RGB para hexadecimal e retorne a cor hexadecimal.
        function convertRgbToHex(rgb) {
            // Extrai os valores de R, G e B da string RGB
            const [r, g, b] = rgb.match(/\d+/g).map(Number);

            // Converte os valores decimais para hexadecimais e formata
            const hex = (r << 16 | g << 8 | b).toString(16).padStart(6, '0');

            return `#${hex}`;
        }

//7. Escreva uma função **_generateColors_** que possa gerar qualquer número de cores hexadecimais ou RGB.
        
            function generateColors(num, colorType) {
                if (colorType === 'hex') {
                    return arrayOfHexaColors(num);
                } else if (colorType === 'rgb') {
                    return arrayOfRgbColors(num);
                } else {
                    throw new Error('Invalid color type specified. Use "hex" or "rgb".');
                }
            }

            console.log(arrayOfHexaColors(5)); 
            console.log(arrayOfRgbColors(5)); 
            console.log(convertHexaToRgb('#ff5733')); 
            console.log(convertRgbToHex('rgb(255,87,51)')); 
            console.log(generateColors(3, 'hex'));
            console.log(generateColors(3, 'rgb'));
/*
js
Copy code
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
Chame sua função shuffleArray, que recebe um array como parâmetro e retorna um array embaralhado.
*/

//8. Chame sua função factorial, que recebe um número inteiro como parâmetro e retorna o fatorial do número.
        function factorial(n) {
            if (n < 0) {
                throw new Error('O número deve ser um inteiro não negativo.');
            }
            if (n === 0) return 1;
            return n * factorial(n - 1);
        }

//9. Chame sua função isEmpty, que recebe um parâmetro e verifica se está vazio ou não.
        function isEmpty(value) {
            if (value === null || value === undefined) return true;
            if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
            if (typeof value === 'object') return Object.keys(value).length === 0;
            return false;
        }

//10. Chame sua função sum, que recebe qualquer número de argumentos e retorna a soma.
                function sum(...args) {
                    return args.reduce((acc, curr) => acc + curr, 0);
                }

//11. Escreva uma função chamada sumOfArrayItems, que recebe um array como parâmetro e retorna a soma de todos os itens. Verifique se todos os itens do array são do tipo número. Se não forem, forneça um feedback razoável.
                function sumOfArrayItems(arr) {
                    if (!Array.isArray(arr)) {
                        return 'O parâmetro fornecido não é um array.';
                    }

                    if (arr.some(item => typeof item !== 'number')) {
                        return 'Todos os itens do array devem ser números.';
                    }

                    return arr.reduce((acc, curr) => acc + curr, 0);
                }

//12. Escreva uma função chamada average, que recebe um array como parâmetro e retorna a média dos itens. Verifique se todos os itens do array são do tipo número. Se não forem, forneça um feedback razoável.

                function average(arr) {
                    if (!Array.isArray(arr)) {
                        return 'O parâmetro fornecido não é um array.';
                    }

                    if (arr.some(item => typeof item !== 'number')) {
                        return 'Todos os itens do array devem ser números.';
                    }

                    if (arr.length === 0) {
                        return 'O array está vazio.';
                    }

                    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
                }

/*13. Escreva uma função chamada modifyArray que recebe um array como parâmetro, modifica o quinto item do array e retorna o array. Se o comprimento do array for menor que cinco, deve retornar 'item não encontrado'.
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
*/
                function modifyArray(arr) {
                    if (arr.length < 5) {
                        return 'Item não encontrado';
                    }
                
                    arr[4] = arr[4].toUpperCase();
                    return arr;
                }

                console.log(factorial(5)); 
                console.log(isEmpty('')); 
                console.log(sum(1, 2, 3, 4)); 
                console.log(sumOfArrayItems([1, 2, 3, 4])); 
                console.log(average([1, 2, 3, 4])); 
                console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));

//14. Escreva uma função chamada isPrime, que verifica se um número é primo.
                function isPrime(n) {
                    if (n <= 1) return false;
                    if (n <= 3) return true;
                    if (n % 2 === 0 || n % 3 === 0) return false;

                    for (let i = 5; i * i <= n; i += 6) {
                        if (n % i === 0 || n % (i + 2) === 0) return false;
                    }

                    return true;
                }
                console.log(isPrime(7)); 

//15. Escreva uma função que verifica se todos os itens são únicos no array.
                function areAllItemsUnique(arr) {
                    const set = new Set(arr);
                    return set.size === arr.length;
                }
                console.log(areAllItemsUnique([1, 2, 3, 4, 5]));

//16. Escreva uma função que verifica se todos os itens do array são do mesmo tipo de dado.
                function areAllItemsSameType(arr) {
                    if (!Array.isArray(arr) || arr.length === 0) return true;

                    const type = typeof arr[0];
                    return arr.every(item => typeof item === type);
                }
                console.log(areAllItemsSameType([1, 2, 3]));
                
//17. Nomes de variáveis em JavaScript não suportam caracteres especiais ou símbolos, exceto $ ou _. Escreva uma função isValidVariable que verifique se uma variável é válida ou inválida.
                function isValidVariable(name) {
                    return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(name);
                }
                console.log(isValidVariable('my_var123')); 

/*18. Escreva uma função que retorne um array com sete números aleatórios no intervalo de 0 a 9. Todos os números devem ser únicos.
                
                js
                Copy code
                sevenRandomNumbers()
                [1, 4, 5, 7, 9, 8, 0]
*/               
                function sevenRandomNumbers() {
                    const numbers = new Set();

                    while (numbers.size < 7) {
                        numbers.add(Math.floor(Math.random() * 10));
                    }

                    return Array.from(numbers);
                }
                console.log(sevenRandomNumbers());

//19. Escreva uma função chamada reverseCountries, que recebe um array de países, faz uma cópia do array e retorna o array invertido. */
                function reverseCountries(countries) {
                    if (!Array.isArray(countries)) {
                        return 'O parâmetro fornecido não é um array.';
                    }

                    return [...countries].reverse();
                }
                console.log(reverseCountries(['USA', 'Canada', 'Mexico']));


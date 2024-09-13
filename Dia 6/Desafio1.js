//1. Itere de 0 a 10 usando o loop for, faça o mesmo usando o loop while e o loop do while.
/*for (let i = 0; i <= 10; i++) {
    console.log(i);
};

let i = 0
while (i <= 10) {
    console.log(i)
    i++
}; 

let i = 0
do {
    console.log(i)
    i++
} while (i <= 10);
*/

//2. Itere de 10 a 0 usando o loop for, faça o mesmo usando o loop while e o loop do while.

/*for (let i = 10; i >= 0; i--){
    console.log(i);
};

let i = 10
while (i >= 0) {
    console.log(i)
    i--
}; */

let i = 10
do {
    console.log(i)
    i--
}while (i >= 0);


//3. Itere de 0 a n usando o loop for.
    for (let i = 0; i >= null; i--){
        console.log(i);
    };

//4. Escreva um loop que faça o seguinte padrão usando console.log():

for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += '#';
    }
    console.log(line);
}

/* 5. Use um loop para imprimir o seguinte padrão:

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
   ``` */

   for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i*i}`)
   };


/* 6. Usando um loop, imprima o seguinte padrão:

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
   ``` */

   console.log(" i    i^2   i^3");  

for (let i = 0; i <= 10; i++) {
    let square = i * i;
    let cube = i * i * i;
    console.log(`${i}    ${square}    ${cube}`);
}

//7. Use o loop for para iterar de 0 a 100 e imprimir apenas os números pares.

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};

//8. Use o loop for para iterar de 0 a 100 e imprimir apenas os números ímpares.
for (let i = 0; i <= 100; i++) {
    if(i %2 !== 0){
        console.log(i)
    }
};

//9. Use o loop for para iterar de 0 a 100 e imprimir apenas os números primos.

function isPrime(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true; 

    if (num % 2 === 0 || num % 3 === 0) return false; 

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
};

/* 10. Use o loop for para iterar de 0 a 100 e imprimir a soma de todos os números.

    ```sh
    A soma de todos os números de 0 a 100 é 5050.
    ```  */

    for(let i = 0; i <= 100; i++){
        console.log(`${i} + ${i} = ${i+i}`)
       };

/* 11. Use o loop for para iterar de 0 a 100 e imprimir a soma de todos os pares e a soma de todos os ímpares.

    ```sh
    A soma de todos os pares de 0 a 100 é 2550. E a soma de todos os ímpares de 0 a 100 é 2500.
    ``` */

    let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i; 
    } else {
        sumOdd += i; 
    }
}

const sums = [sumEven, sumOdd];
console.log(sums);


//13. Desenvolva um pequeno script que gere um array de 5 números aleatórios.
/*    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomNumbers = [];

    for (let i = 0; i < 5; i++) {
        randomNumbers.push(getRandomNumber(0, 100));
    }


    console.log(randomNumbers); */

//14. Desenvolva um pequeno script que gere um array de 5 números aleatórios e os números devem ser únicos.
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateUniqueRandomNumbers(size, min, max) {
        const uniqueNumbers = new Set();

        while (uniqueNumbers.size < size) {
            uniqueNumbers.add(getRandomNumber(min, max));
        }

        return Array.from(uniqueNumbers);
    }

    const randomUniqueNumbers = generateUniqueRandomNumbers(5, 0, 100);

    console.log(randomUniqueNumbers);

/* 15. Desenvolva um pequeno script que gere um ID aleatório de seis caracteres:

    ```sh
    5j2khz
    ``` */
    //1. Desenvolva um pequeno script que gere um ID aleatório com qualquer número de caracteres:

    function generateRandomID(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        
        return result;
    }
    
    const randomID = generateRandomID(12);

    console.log(randomID);


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



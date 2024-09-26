/* ### Exercícios: Nível 3

1. Verificar a diferença de velocidade entre os seguintes loops: while, for, for of, forEach 
*/

// Loop Regular for
console.time('Regular for loop');
for (let i = 0; i < paisesAmericaLatina.length; i++) {
    console.log(paisesAmericaLatina[i]);
}
console.timeEnd('Regular for loop');

// Loop while
console.time('While loop');
let j = 0;
while (j < paisesAmericaLatina.length) {
    console.log(paisesAmericaLatina[j]);
    j++;
}
console.timeEnd('While loop');

// Loop for of
console.time('For of loop');
for (const pais of paisesAmericaLatina) {
    console.log(pais);
}
console.timeEnd('For of loop');

// Loop forEach
console.time('forEach loop');
paisesAmericaLatina.forEach(pais => {
    console.log(pais);
});
console.timeEnd('forEach loop')

//1. Declare um _array vazio_;

const vazio = Array()
console.log(vazio);

//2. Declare um array com mais de 5 elementos;
const frutas = ['Morango','Melancia', 'Melão', 'Mexerica', 'Mamão']
console.log('Frutas:', frutas);

//3. Encontre o comprimento do seu array;
let EstadosBR = ['São paulo', 'Rio de janeiro', 'Bahia', 'Minas gerais', 'Goiás','Paraná']
console.log('Estados:', EstadosBR.length);

//4. Obtenha o primeiro item, o item do meio e o último item do array;
let EstadosEUA = ['Califórnia','Texas', 'Flórida','Alasca','Ohio']
console.log(EstadosEUA[0])
console.log(EstadosEUA[2])
console.log(EstadosEUA[4]);

// 5. Declare um array chamado _mixedDataTypes_, coloque diferentes tipos de dados no array e encontre o comprimento do array. O tamanho do array deve ser maior que 5; 
const mixedDataTypes = [
    'Luiz',
     26,
     false,
     {Pais: 'Brasil', cidade: 'São paulo'},
     {Qualidades: ['Cozinheiro','Esportista','Familiar'] }
]
    console.log(mixedDataTypes);

//6. Declare uma variável de array chamada itCompanies e atribua os valores iniciais Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon;
//7. Imprima o array usando _console.log()_;
//8. Imprima o número de empresas no array;
//9. Imprima a primeira empresa, a do meio e a última empresa;
//10. Imprima cada empresa;
//11. Altere o nome de cada empresa para maiúsculas uma por uma e imprima-os;
//Imprima o array como uma frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon são grandes empresas de TI;
//13. Verifique se uma certa empresa existe no array itCompanies. Se existir, retorne a empresa; caso contrário, retorne que a empresa _não foi encontrada_;
//14. Filtre empresas que tenham mais de uma letra 'o' sem usar o método filter;
//15. Ordene o array usando o método _sort()_; 

// Os codigos acima foram atribuidos a uma mesma const (companhias) para não ficar muitos comentarios e linhas foi removido os codigos e atribuido apenas as imagens no README.md para comprovação dos resultados.

//16. Inverta o array usando o método _reverse()_;
/*const num = [1,2,3,4,5]
num.reverse()
console.log(num)*/

//17. Extraia as primeiras 3 empresas do array;

/*var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var FirstThreeCompanies = itCompanies.slice(0 , 3);

console.log(FirstThreeCompanies);  */
  
//18. Extraia as últimas 3 empresas do array; 

/*var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var lastThreeCompanies = itCompanies.slice(-3);

console.log(lastThreeCompanies); */

///19. Extraia a(s) empresa(s) de TI do meio do array;

/* var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var MiddleThreeCompanies = itCompanies.slice(2 , 5);

console.log(MiddleThreeCompanies); */

/*20. Remova a primeira empresa de TI do array;
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var RemoveFirstCompanies = itCompanies.shift();
console.log(itCompanies) */

//21. Remova a(s) empresa(s) de TI do meio do array;
/* O método shift só remove o primeiro elemento de um array, não permitindo remoção de múltiplos elementos nem remoção de elementos de posições específicas que não sejam o início do array. Portanto, não é possível usar shift diretamente para remover empresas do meio do array. 
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.splice(2, 3);
console.log(itCompanies);
*/

//22. Remova a última empresa de TI do array;
/*var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
var RemoveLastCompanies = itCompanies.pop();
console.log(itCompanies) */

//23. Remova todas as empresas de TI;
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);


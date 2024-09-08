//1. Declare uma variável chamada desafio e atribua a ela um valor inicial '30 Dias de JavaScript'.
let desafio = '30 dias de Javascript'
//2. Imprimir uma string no console do browser usando __console.log()__.
let Nome = "Gabriela"
//3. Imprimir o __length__ da string no console do browser usando o __console.log()__.
let nome = 'Gabriela'
console.log(nome.length)
//4. Troque todos os caracteres da string para letras maiúsculas usando o método __toUpperCase()__.
let PrimeiroNome = 'Gabriela'
console.log(PrimeiroNome.toUpperCase())
//5. Troque todos os caracteres da string para letras minúsculas usando o método __toLowerCase()__.
let string = 'JAVASCRIPT'
console.log(string.toLowerCase())
//6. Retirar (Slice) a primeira letra da string usando os métodos __substr()__ ou __substring()__. 
let comida = "Lasanha"
console.log(comida.substring(5,3))
//7. Dividir a frase *Days Of JavaScript* de *30 Days Of JavaScript*.
let dividir = '30, Days, Of, JavaScript'
console.log(dividir.split(','))
//8. Verificar se a string contém a palavra __Script__ usando o método __includes()__.
let contem = '30 dias de Javascript'
console.log(contem.includes('script'))
console.log(contem.includes('Script'))
//9. Separar a __string__ em um __array__ usando o método __split()__.
let sobremesa = 'Pudim'
console.log(sobremesa.split())
//10. Separar a string 30 Dias de JavaScript com espaços usando o método __split()__.
let String = '30 Dias de JavaScript'
console.log(String.split(' '))
//11. "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" __split__ a string com vírgulas e mude-a para um array. 
let RedesSociais = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(RedesSociais.split(','))
//12. Mude 30 Dias de JavaScript para 30 Dias de Python usando o método __replace()__.
let muda = '30 Dias de Javascript'
console.log(muda.replace('Javascript','Python'))
//13.Qual é o caractere no index 15 em "30 Dias de JavaScript' string? Use o método __charAt()__.
let Qual = '30 Dias de Javascript'
console.log(Qual.charAt(15))
//14.Qual é o código do caractere de J em "30 Dias de JavaScript" string usando o método __charCodeAt()__.
let code = '30 Dias de Javascript'
console.log(code.charCodeAt('J'))
//15.Use __indexOf__ para determinar a posição da primeira ocorrência de __a__ em 30 Dias de JavaScript.
let posicao = '30 Dias de JavaScript'
console.log(posicao.indexOf('a'))
//16.Use __lastIndexOf__ para determinar a posição da última ocorrência de __a__ em 30 Dias de JavaScript.
let UltimaPosicao = '30 Dias de JavaScript'
console.log(UltimaPosicao.lastIndexOf('a'))
//17.Use __indexOf__ para encontrar a posição da primeira ocorrência da palavra __because__ na seguinte frase:__'You cannot end a sentence with because because because is a conjunction'__.
let Frase = 'You cannot end a sentence with because because because is a conjunction'
console.log(Frase.indexOf('because'))
//18. Use __lastIndexOf__ para encontrar a posição da última ocorrência da palavra __because__ na seguinte frase:__'You cannot end a sentence with because because because is a conjunction'__.
let UltimaFrase = 'You cannot end a sentence with because because because is a conjunction'
console.log(UltimaFrase.lastIndexOf('because'))
//19.Use __search__ para encontrar a posição da primeira ocorrência da palavra __because__ na seguinte frase:__'You cannot end a sentence with because because because is a conjunction'__.
let Encontrar = 'You cannot end a sentence with because because because is a conjunction'
console.log(Encontrar.search('because'))
//20.Use __trim()__ para remover qualquer espaço adicional no início e no final da string .E.g "   30 Dias de JavaScript   ".
let EG =  "   30 Dias de JavaScript   "
console.log(EG.trim(' '))
//21.Use __startsWith()__ com a string *30 Dias De JavaScript* e faça o resultado ser verdadeiro.
let Verdadeira = '30 Dias De Javascript'
console.log(Verdadeira.startsWith('30'))
//22.Use __endsWith()__ com a string *30 Dias De JavaScript* e faça o resultado ser verdadeiro.
let verdadeiro = '30 Dias De Javascript'
console.log(verdadeiro.endsWith('Javascript'))
//23.Use __match()__ para encontrar todos os __a__'s em 30 Dias De JavaScript.
let encontrar = '30 Dias De Javascript'
console.log(encontrar.match('a'))
//24.Use __concat()__ para unir "30 Dias de" e "JavaScript" para uma única string, "30 Dias de JavaScript".
/* forma de concatenar 
let PrimeiraFrase = '30 Dias de'
let SegundaFrase = ' Javascript'
console.log(PrimeiraFrase + SegundaFrase)*/ 
let Juntar = '30 Dias de'
console.log(Juntar.concat(' Javascript'))
//25.Use __repeat()__ para imprimir 30 Dias De JavaScript 2 vezes.
let repetir = '30 Dias De Javascript '
console.log(repetir.repeat(2))

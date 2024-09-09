//1. Declare as variáveis firstName, lastName, country, city, age, isMarried e year e atribua valores a elas. Use o operador typeof para verificar os diferentes tipos de dados.
let primeiroNome = 'Fabricio';
let ultimoNome = 'Rodrigues';
let Pais = 'EUA';
let Cidade = 'Minnesota';
let Idade = 51;
let Ecasado = false
let Ano = 2021;
console.log(typeof primeiroNome)
console.log(typeof ultimoNome)
console.log(typeof Pais)
console.log(typeof Cidade)
console.log(typeof Idade)
console.log(typeof Ecasado)
console.log(typeof Ano);

//2. Verifique se o tipo de `'10'` é igual a 10.
console.log('10' > 10)

//3. Verifique se `parseInt('9.8')` é igual a 10.
console.log(parseInt('9.8') > 10)

/*4. O valor Booleano é verdadeiro (true) ou falso (false).
1. Escreva três declarações em JavaScript que forneçam valores verdadeiros (truthy).
2. Escreva três declarações em JavaScript que forneçam valores falsos (falsy). */
console.log( 4 > 2) //True
console.log( 4 >= 2) //True
console.log( 1 < 2) //True
console.log( 4 < 2) //False
console.log( 4 == 2) //False
console.log( 4 === '2') //False

/*
5. Descubra o resultado da seguinte expressão de comparação primeiro sem usar console.log(). Depois de decidir o resultado, confirme-o usando console.log().
   1. 4 > 3 TRUE
   2. 4 >= 3 TRUE
   3. 4 < 3  FALSE
   4. 4 <= 3  FALSE
   5. 4 == 4  FALSE
   6. 4 === 4 TRUE
   7. 4 != 4  TRUE
   8. 4 !== 4  TRUE
   9. 4 != '4' TRUE
   10. 4 == '4' TRUE
   11. 4 === '4' FALSE
   12. Encontre o comprimento das palavras "python" e "jargon" e faça uma comparação falsa. */
   console.log(4 > 3)
   console.log(4 >= 3)
   console.log(4 < 3)
   console.log(4 <= 3)
   console.log(4 == 4)
   console.log(4 === 4)
   console.log(4 != 4)
   console.log(4 !== 4)
   console.log(4 != '4')
   console.log(4 == '4')
   console.log(4 === '4')
   console.log('python'.length !== 'jargon'.length);

/*6. Descubra o resultado das seguintes expressões primeiro sem usar console.log(). Depois de decidir o resultado, confirme-o usando console.log().
   1. 4 > 3 && 10 < 12 TRUE
   2. 4 > 3 && 10 > 12 fALSE
   3. 4 > 3 || 10 < 12 TRUE
   4. 4 > 3 || 10 > 12 TRUE
   5. !(4 > 3) fALSE
   6. !(4 < 3) TRUE
   7. !(false) TRUE
   8. !(4 > 3 && 10 < 12) fALSE
   9. !(4 > 3 && 10 > 12) FALSE
   10. !(4 === '4') TRUE
   11. Não há 'on' em ambas as palavras dragon e python.*/

    console.log(4 > 3 && 10 < 12)
    console.log(4 > 3 && 10 > 12)
    console.log(4 > 3 || 10 < 12)
    console.log(4 > 3 || 10 > 12)
    console.log(!(4 > 3))
    console.log(!(4 < 3))
    console.log(!(false))
    console.log(!(4 > 3 && 10 < 12))
    console.log(!(4 > 3 && 10 > 12))
    console.log(!(4 === '4'))

    console.log(!'dragon'.includes('on') ==='python'.includes('on'))

/*
 7. Use o objeto Date para realizar as seguintes atividades:
   1. Qual é o ano atual?
   2. Qual é o mês atual como número?
   3. Qual é a data de hoje?
   4. Qual é o dia da semana hoje como número?
   5. Que horas são agora?
   6. Quantos minutos são agora?
   7. Descubra o número de segundos desde 1º de janeiro de 1970 até agora. */

const YearNow = new Date()
console.log(YearNow.getFullYear());

const MonthNow = new Date()
console.log(MonthNow.getMonth());

const DateNow = new Date()
console.log(DateNow);

const DayNow = new Date()
console.log(DayNow.getDay());

const HoursNow = new Date()
console.log(HoursNow.getHours());

const MinutesNow = new Date()
console.log(MinutesNow.getMinutes());
 
const Now = new Date()
console.log(Now.getTime());







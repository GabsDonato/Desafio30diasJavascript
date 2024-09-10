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
//1. Escreva um script que peça ao usuário para inserir a base e a altura de um triângulo e calcule a área do triângulo (área = 0.5 x b x h).
/* const base = parseFloat(prompt('Inserir a base: '));
const Altura = parseFloat(prompt('Inserir a altura: '));
const area = 0.5 * base * Altura;
console.log("A area do triângulo é:" `${area}`) */

/*2. Escreva um script que peça ao usuário para inserir os lados a, b e c de um triângulo e calcule o perímetro do triângulo (perímetro = a + b + c).

   ```sh
   Insira o lado a: 5
   Insira o lado b: 4
   Insira o lado c: 3
   O perímetro do triângulo é 12
   ``` */
   /*const LadoA = parseFloat(prompt('Inserir o lado a: '));
   const LadoB = parseFloat(prompt('Inserir o lado b: '));
   const LadoC = parseFloat(prompt('Inserir o lado c: '));
   const perímetro = LadoA + LadoB + LadoC;
   console.log(`O perímetro do triângulo é: ${perímetro}`); */

//3. Obtenha o comprimento e a largura usando prompt e calcule a área de um retângulo (área = comprimento x largura) e o perímetro do retângulo (perímetro = 2 x (comprimento + largura)).

/*const comprimento = parseFloat(prompt('Inserir o comprimento: '))
const largura = parseFloat(prompt('Inserir largura: '))
área = comprimento * largura;
perímetro = 2 * (comprimento + largura);
console.log(`O comprimento é ${comprimento} com largura de ${largura} e com o perímetro de ${perímetro}`); */

//4. Obtenha o raio usando prompt e calcule a área de um círculo (área = pi x r x r) e a circunferência de um círculo (c = 2 x pi x r), onde pi = 3.14.

/*pi = 3.14;
const r = parseFloat(prompt('Inserir o raio: '))
area = pi * r * r;
c = 2 * pi * r;
console.log(`A área do círculo é ${area} e a circunferência de um círculo é ${c}`);*/


//5. Calcule a inclinação, o intercepto x e o intercepto y da equação y = 2x - 2.
   /* const m = 2;  
    const b = -2; 

    const xIntercept = -b / m;

    const yIntercept = b;
    console.log(`Inclinação (coeficiente angular): ${m}`);
    console.log(`Intercepto x: ${xIntercept}`);
    console.log(`Intercepto y: ${yIntercept}`); */

//6. A inclinação é m = (y₂ - y₁) / (x₂ - x₁). Encontre a inclinação entre o ponto (2, 2) e o ponto (6, 10).

/*const x1 = 2, y1 = 2;
const x2 = 6, y2 = 10;


const m = (y2 - y1) / (x2 - x1);

// Exibir o resultado
 console.log(`A inclinação entre os pontos (${x1}, ${y1}) e (${x2}, ${y2}) é ${m}`); */

    const mEquacao = 2; 
    const x1 = 2, y1 = 2;
    const x2 = 6, y2 = 10;


    const mPontos = (y2 - y1) / (x2 - x1);


    console.log(`Inclinação da equação y = 2x - 2: ${mEquacao}`);
    console.log(`Inclinação entre os pontos (${x1}, ${y1}) e (${x2}, ${y2}): ${mPontos}`);


    if (mEquacao === mPontos) {
        console.log("As inclinações são iguais.");
    } else {
        console.log("As inclinações são diferentes.");
    };


    function calcularY(x) {
        return x * x + 6 * x + 9;
    }

    const valoresX = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

    console.log('Valores de x e seus respectivos y:');
    valoresX.forEach(x => {
        const y = calcularY(x);
        console.log(`x = ${x}, y = ${y}`);
    });

    const xParaYZero = -3; 

    console.log(`\nO valor de x para o qual y = 0 é x = ${xParaYZero}`);


    const yParaXZero = calcularY(xParaYZero);
    console.log(`Verificação: Para x = ${xParaYZero}, y = ${yParaXZero}`);

/* 9. Escreva um script que solicite ao usuário que insira horas e a taxa por hora. Calcule o pagamento da pessoa.

   ```sh
   Insira as horas: 40
   Insira a taxa por hora: 28
   Seu ganho semanal é 1120
   ``` 
    const Horas = parseFloat(prompt('Insira as Horas: '))
    const Taxas = parseFloat(prompt('Insira as taxas por hora: '))   
    const TaxaPorHora = Horas / Taxas;
    console.log(`Seu ganho semanal é: ${TaxaPorHora}`); */

//Se o comprimento do seu nome for maior que 7, diga que seu nome é longo, caso contrário, diga que seu nome é curto.
/*
const nome = "Gabriela"

if (nome.length >= 7){
    alert('Seu nome é longo')
}
else {
    alert('Seu nome é curto')
} */

/*    11. Compare o comprimento do seu primeiro nome e do seu sobrenome e você deve obter a seguinte saída:

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Seu primeiro nome, Asabeneh, é mais longo que seu sobrenome, Yetayeh.
    ``` */
    const PrimeiroNome = 'Asabeneh'
    const SegundoNome = 'Yetayeh'


    if (PrimeiroNome.length >= SegundoNome.length) {
        console.log(`Seu primeiro nome, ${PrimeiroNome}, é mais longo que seu sobrenome, ${SegundoNome}.`)
    };

    /*12. Declare duas variáveis, _myAge_ e _yourAge_, e atribua a elas valores iniciais e myAge e yourAge.

    ```js
    let myAge = 250
    let yourAge = 25
    ```

    ```sh
    Eu sou 225 anos mais velho que você. 
     ```*/

    let myAge = 250
    let yourAge = 25
    let contar = myAge - yourAge

    if (myAge >= yourAge) {
    console.log(`Eu sou ${contar} mais velho que você`)
}
    else {
        console.log('Eu sou mais novo que você')
    };

    /* 13. Usando prompt, obtenha o ano de nascimento do usuário e, se o usuário tiver 18 anos ou mais, permita que ele dirija; caso contrário, diga ao usuário para esperar uma certa quantidade de anos.

    ```sh
    Insira o ano de nascimento: 1995
    Você tem 25 anos. Você é velho o suficiente para dirigir.

    Insira o ano de nascimento: 2005
    Você tem 15 anos. Você poderá dirigir depois de 3 anos.
    ``` */
    /*
        const anoAtual = new Date().getFullYear();

        const anoDeNascimento = parseInt(prompt('Insira seu ano de nascimento: '), 10);
        const idade = anoAtual - anoDeNascimento;

        if (idade >= 18) {
            console.log(`Você tem ${idade} anos. Você é velho o suficiente para dirigir.`);
        } else {
            const anosParaDirigir = 18 - idade;
            console.log(`Você tem ${idade} anos. Você poderá dirigir depois de ${anosParaDirigir} anos.`);
        } */

/*14. Escreva um script que peça ao usuário para inserir o número de anos. Calcule o número de segundos que uma pessoa pode viver, assumindo que alguém vive apenas cem anos.

            ```sh
            Insira o número de anos que você vive: 100
            Você viveu 3153600000 segundos.
            ``` */
            
        /*const anosVividos = parseFloat(prompt('Insira o número de anos vivido: '));

        
        const diasPorAno = 365.25;  
        const horasPorDia = 24;
        const minutosPorHora = 60;
        const segundosPorMinuto = 60;

        const segundosVividos = anosVividos * diasPorAno * horasPorDia * minutosPorHora * segundosPorMinuto;

        console.log(`Você viveu aproximadamente ${segundosVividos.toFixed(0)} segundos.`); */

       /* 15. Crie um formato de hora legível usando o objeto Date:
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm */

     
  /*  function pad(number) {
        return number < 10 ? '0' + number : number;
    }

    const agora = new Date();

    const ano = agora.getFullYear();
    const mes = pad(agora.getMonth() + 1); 
    const dia = pad(agora.getDate());
    const horas = pad(agora.getHours());
    const minutos = pad(agora.getMinutes());

    // Formatar como YYYY-MM-DD HH:mm
    const formato1 = `${ano}-${mes}-${dia} ${horas}:${minutos}`;

    // Formatar como DD-MM-YYYY HH:mm
    const formato2 = `${dia}-${mes}-${ano} ${horas}:${minutos}`;

    // Formatar como DD/MM/YYYY HH:mm
    const formato3 = `${dia}/${mes}/${ano} ${horas}:${minutos}`;

    console.log('Formato YYYY-MM-DD HH:mm:', formato1);
    console.log('Formato DD-MM-YYYY HH:mm:', formato2);
    console.log('Formato DD/MM/YYYY HH:mm:', formato3); */

    /* 1. Crie um formato de hora legível usando o objeto Date. A hora e o minuto devem ter sempre dois dígitos (7 horas devem ser 07 e 5 minutos devem ser 05):
   1. YYYY-MM-DD HH:mm, ex. 20120-01-02 07:05 */
        function pad(number) {
            return number < 10 ? '0' + number : number;
        }

        
        const agora = new Date();

        
        const ano = agora.getFullYear();
        const mes = pad(agora.getMonth() + 1); 
        const dia = pad(agora.getDate());
        const horas = pad(agora.getHours());
        const minutos = pad(agora.getMinutes());

        const formato = `${ano}-${mes}-${dia} ${horas}:${minutos}`;

        console.log('Formato YYYY-MM-DD HH:mm:', formato);















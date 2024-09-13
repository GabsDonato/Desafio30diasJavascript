// ### Exercícios: Nível 1
//    1. Declare uma função _fullName_ que imprima seu nome completo.

        function fullName(){
            let firstName = 'Gabriela Izabel'
            let lastName = 'Donato De Souza'
            let space = ' '
            let fullName = firstName + space + lastName
            console.log(fullName)
        } 
        fullName();

//2. Declare uma função _fullName_ que receba`firstName` e `lastName` como parâmetros e retorne seu nome completo.

        function NomeCompleto(PrimeiroNome,UltimoNome){
            return `${PrimeiroNome} ${UltimoNome}`
        }

        console.log(NomeCompleto('Gabriela Izabel','Donato de Souza'));

//3. Declare uma função _addNumbers_ que receba dois parâmetros e retorne a soma deles.
          
         function addNumbers(NumOne,NumTwo){
            let soma = NumOne + NumTwo
            return soma
         }

         console.log(addNumbers(30,30));

//4. A área de um retângulo é calculada da seguinte forma: _area = comprimento x largura_. Escreva uma função que calcule _areaOfRectangle_.
         function areaOfRectangle(comprimento,largura){
            let area = comprimento * largura
            return area

         }

         console.log(areaOfRectangle(100,50));

//5. O perímetro de um retângulo é calculado da seguinte forma: _perímetro = 2 x (comprimento + largura)_. Escreva uma função que calcule _perimeterOfRectangle_.
         function perimeterOfRectangle(comprimento,largura){
            let perimetro = 2 * (comprimento + largura)
            return perimetro
         }

         console.log(perimeterOfRectangle(200,100));

//6. O volume de um prisma retangular é calculado da seguinte forma: _volume = comprimento x largura x altura_. Escreva uma função que calcule _volumeOfRectPrism_.
         function volumeOfRectPrism(comprimento,largura,altura){
            let volume = comprimento * largura * altura
            return volume
         }

         console.log(volumeOfRectPrism(100,300,500));

//7. A área de um círculo é calculada da seguinte forma: _area = π x r x r_. Escreva uma função que calcule _areaOfCircle_.
         function areaOfCircle(π,r,r_){
            let area = π * r * r_
            return area
         }

         console.log(areaOfCircle(12,5,15));

//8. A circunferência de um círculo é calculada da seguinte forma: _circunferência = 2πr_. Escreva uma função que calcule _circumOfCircle_.
         function circumOfCircle(radius){
            return 2 * Math.PI * radius;

         }
         const raio = 10
         console.log(circumOfCircle(raio));

//9. A densidade de uma substância é calculada da seguinte forma: _densidade = massa / volume_. Escreva uma função que calcule _density_.
        function calcule_density(massa,volume){
            let densidade = massa / volume
            return densidade

        }

        console.log(calcule_density(15,50));

//10. A velocidade é calculada dividindo a distância total percorrida por um objeto em movimento pelo tempo total gasto. Escreva uma função que calcule a velocidade de um objeto em movimento, _speed_.
        function speed(Distancia,Tempo){
            if (Tempo <= 0) {
                throw new Error("O tempo deve ser maior que zero.");
            }
            return Distancia / Tempo;
        }
        const Distancia = 101;
        const Tempo = 5;
        console.log(`${speed(Distancia, Tempo)}`);

//11. O peso de uma substância é calculado da seguinte forma: _peso = massa x gravidade_. Escreva uma função que calcule _weight_.
        function weight(massa,gravidade){
            let peso = massa * gravidade
            return peso
        }
        const massa = 50
        const gravidade = 30
        console.log(weight(massa,gravidade));

//12. A temperatura em °C pode ser convertida para °F usando a fórmula: _°F = (°C x 9/5) + 32_. Escreva uma função que converta °C para °F, _convertCelsiusToFahrenheit_.
         function convertCelsiusToFahrenheit(Celsius){
            let Fahrenheit = (Celsius * 9 / 5) + 32
            return Fahrenheit
         }
         const Celsius = 25
         console.log(`${convertCelsiusToFahrenheit(Celsius)}`);
/* 13. O índice de massa corporal (IMC) é calculado da seguinte forma: _bmi = peso em Kg / (altura x altura) em m²_. Escreva uma função que calcule _bmi_. O IMC é usado para definir amplamente diferentes grupos de peso em adultos com 20 anos ou mais. Verifique se uma pessoa está _abaixo do peso_, _peso normal_, _acima do peso_ ou _obesa_ com base nas informações a seguir:

    - Os mesmos grupos se aplicam tanto para homens quanto para mulheres.
    - _Abaixo do peso_: IMC é menor que 18,5
    - _Peso normal_: IMC é de 18,5 a 24,9
    - _Acima do peso_: IMC é de 25 a 29,9
    - _Obeso_: IMC é 30 ou mais
*/

         function bmi(peso,altura){
            const imc = peso / (altura * altura)
            if(imc < 18.5){
                return 'Abaixo do peso'
            }  else if (imc >= 18.5 && imc <= 24.9) {
                return 'Peso normal';
            } else if (imc >= 25 && imc <= 29.9) {
                return 'Acima do peso';
            } else if (imc >= 30) {
                return 'Obeso';
            }
           

         }
            const peso = 68.9
            const altura = 1.68
            console.log(`IMC: ${bmi(peso, altura)}`);
            
//14. Escreva uma função chamada _checkSeason_ que receba um parâmetro de mês e retorne a estação: Outono, Inverno, Primavera ou Verão.
         function checkSeason(Month){
            return Month 
         }

         console.log(checkSeason('Summer'));

/* 15. Math.max retorna o maior argumento. Escreva uma função chamada findMax que receba três argumentos e retorne o máximo deles sem usar o método Math.max.

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ``` */
            function findMax(a, b, c) {
                let max = a;
                if (b > max) {
                    max = b;
                } if (c > max) {
                    max = c; 
                }   
                return max;
            }
            console.log(findMax(0, 10, 5));
            console.log(findMax(0, -10, -2));
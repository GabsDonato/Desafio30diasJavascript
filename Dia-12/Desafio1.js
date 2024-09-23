/*
### Exercícios: Nível 1

1. Calcule a renda anual total da pessoa a partir do seguinte texto: "Ele ganha 4000 euros de salário por mês, 10000 euros de bônus anual, 5500 euros de cursos online por mês."
2. As posições de algumas partículas no eixo horizontal x são -12, -4, -3 e -1 na direção negativa, 0 na origem, 4 e 8 na direção positiva. Extraia esses números e encontre a distância entre as duas partículas mais distantes.

```js
pontos = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
pontosOrdenados = [-4, -3, -1, -1, 0, 2, 4, 8]
distância = 12
```

3. Escreva um padrão que identifique se uma string é uma variável JavaScript válida.

    ```sh
    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
     */


    const texto = "Ele ganha 4000 euros de salário por mês, 10000 euros de bônus anual, 5500 euros de cursos online por mês.";
    const salarios = texto.match(/(\d+)/g).map(Number);
    const rendaAnual = (salarios[0] * 12) + salarios[1] + (salarios[2] * 12);
    console.log(rendaAnual); 


    const pontos = [-12, -4, -3, -1, 0, 4, 8];
    const distancia = Math.max(...pontos) - Math.min(...pontos);
    console.log(distancia);


    function is_valid_variable(variable) {
        const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
        return regex.test(variable);
    }
    
    console.log(is_valid_variable('first_name')); 
    console.log(is_valid_variable('first-name')); 
    console.log(is_valid_variable('1first_name')); 
    console.log(is_valid_variable('firstname')); 
    


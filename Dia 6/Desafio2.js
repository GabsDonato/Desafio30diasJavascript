//2. Escreva um script que gere um número hexadecimal aleatório.

function gerarHexadecimal() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
}

const NUM_CODIGOS = 1;

for (let i = 0; i < NUM_CODIGOS; i++) {
    console.log(gerarHexadecimal());
}


/*  3. Escreva um script que gere um número de cor RGB aleatório.

```sh
rgb(240,180,80)
```*/

    function gerarValorRGB() {
        return Math.floor(Math.random() * 256);
    }

    function gerarCorRGB() {
        const r = gerarValorRGB();
        const g = gerarValorRGB();
        const b = gerarValorRGB();
        return `rgb(${r},${g},${b})`;
    }

    const NUM_CORES = 1;

    for (let i = 0; i < NUM_CORES; i++) {
        console.log(gerarCorRGB());
    }

        
/* 4. Usando o array de países acima, crie o seguinte novo array.

    ```sh
    ["ALBÂNIA", "BOLÍVIA", "CANADÁ", "DINAMARCA", "ETIÓPIA", "FINLÂNDIA", "ALEMANHA", "HUNGRIA", "IRLANDA", "JAPÃO", "QUÊNIA"]
    ``` 

    const countries = [
        'Albânia',
        'Bolívia',
        'Canadá',
        'Dinamarca',
        'Etiópia',
        'Finlândia',
        'Alemanha',
        'Hungria',
        'Irlanda',
        'Japão',
        'Quênia'
    ]
    /*const NewCountries = []
    let sum = 0
    for(let i = 0; i < countries.length; i++ ){
    NewCountries.push(countries[i].toUpperCase())
    }

    console.log(NewCountries) */


    /* 5. Usando o array de países acima, crie um array com o comprimento dos nomes dos países.

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```

    const comprimentoNomes = countries.map(pais => pais.length);
    console.log(comprimentoNomes);
        */

       /*6. Use o array de países para criar o seguinte array de arrays:

    ```sh
      [
      ['Albânia', 'ALB', 7],
      ['Bolívia', 'BOL', 7],
      ['Canadá', 'CAN', 6],
      ['Dinamarca', 'DEN', 7],
      ['Etiópia', 'ETH', 8],
      ['Finlândia', 'FIN', 7],
      ['Alemanha', 'GER', 7],
      ['Hungria', 'HUN', 7],
      ['Irlanda', 'IRE', 7],
      ['Islândia', 'ICE', 7],
      ['Japão', 'JAP', 5],
      ['Quênia', 'KEN', 5]
    ]
    ``` 

        function gerarCodigo(pais) {
            return pais.slice(0, 3).toUpperCase();
        }

        const paisesInfo = countries.map(pais => [
            pais,
            gerarCodigo(pais),
            pais.length
        ]);

        console.log(paisesInfo); */

        /* 7. No array de países acima, verifique se há um país ou países contendo a palavra 'land'. Se houver países contendo 'land', imprima-os como um array. Se não houver países contendo a palavra 'land', imprima 'Todos esses países estão sem land'.

            ```sh
            ['Finlândia', 'Irlanda', 'Islândia']
            ``` 
            8. No array de países acima, verifique se há um país ou países que terminam com o sufixo 'ia'. Se houver países que terminam com 'ia', imprima-os como um array. Se não houver países contendo 'ia', imprima 'Esses são os países que terminam sem ia'.

            ```sh
            ['Albânia', 'Bolívia', 'Etiópia']
            ```

           x

        const paisesComIa = countries.filter(pais => pais.toLowerCase().includes('ia'));

        if (paisesComIa.length > 0) {
            console.log(paisesComIa);
        } else {
            console.log('Todos esses países estão sem ia');
        }
        
        9. Usando o array de países acima, encontre o país com o maior número de caracteres.

      ```sh
      Etiópia
      ```

        10. Usando o array de países acima, encontre o país com exatamente 5 caracteres.

            ```sh
            ['Japão', 'Quênia']
            ```
        */

            const paisMaiorNumeroCaracteres = countries.reduce((paisAtual, pais) => {
                return pais.length > paisAtual.length ? pais : paisAtual;
            }, '');
            
            console.log(paisMaiorNumeroCaracteres);

            const paisesCom5Caracteres = countries.filter(pais => pais.length === 5);

            console.log(paisesCom5Caracteres);

            //11. Encontre a palavra mais longa no array de tecnologias web.

            const webTechs = [
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Redux',
                'Node',
                'MongoDB'
              ]

            /*const MaisLongo = webTechs.reduce((webAtual, web) => {
                return web.length > webAtual.length ? web : webAtual;
            }, '');
            console.log(MaisLongo); */

            /* 12. Use o array de tecnologias web para criar o seguinte array de arrays:

            ```sh
            [["HTML", 4], ["CSS", 3], ["JavaScript", 10], ["React", 5], ["Redux", 5], ["Node", 4], ["MongoDB", 7]]
            ```
            */

            function gerarCodigo(web) {
                return web.slice(0, 2).toUpperCase();
            }
    
            const webInfo = webTechs.map(web => [
                web,
                web.length
            ]);
    
            console.log(webInfo);

//13. Um aplicativo criado usando MongoDB, Express, React e Node é chamado de aplicativo MERN stack. Crie o acrônimo MERN usando o array mernStack.

                const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

                const acronimoMERN = mernStack.map(element => element.charAt(0)).join('');

                console.log(acronimoMERN); 

    //14. Itere pelo array ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando um loop for ou for of e imprima os itens.
                    for (let i = 0; i < webTechs.length; i++) {
                        console.log(webTechs[i]);
                    }
//15. Este é um array de frutas, ['banana', 'laranja', 'manga', 'limão'] inverta a ordem usando um loop sem usar o método reverse.
                const fruits = ['banana', 'laranja', 'manga', 'limão']
                for (let i = fruits.length -1; i >= 0; i--){
                    console.log(fruits[i]);
                };
//16. Imprima todos os elementos do array conforme mostrado abaixo.
                const fullStack = [
                    ['HTML', 'CSS', 'JS', 'React'],
                    ['Node', 'Express', 'MongoDB']
                  ]
                fullStack.forEach(item => {
                    console.log(item);
                } 
                )

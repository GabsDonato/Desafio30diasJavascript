Claro! Aqui está a tradução do seu `readme.md`:

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
    ```

### Exercícios: Nível 2

1. Escreva uma função chamada *dezPalavrasMaisFrequentes* que obtenha as dez palavras mais frequentes de uma string.

    ```js
    parágrafo = `Eu amo ensinar. Se você não ama ensinar, o que mais pode amar? Eu amo Python se você não ama algo que pode te dar todas as capacidades para desenvolver uma aplicação, o que mais pode amar.`
    console.log(dezPalavrasMaisFrequentes(parágrafo))
    ```

    ```sh
    [
    {palavra:'amo', contagem:6},
    {palavra:'você', contagem:5},
    {palavra:'pode', contagem:3},
    {palavra:'o que', contagem:2},
    {palavra:'ensinar', contagem:2},
    {palavra:'não', contagem:2},
    {palavra:'mais', contagem:2},
    {palavra:'eu', contagem:2},
    {palavra:'qual', contagem:1},
    {palavra:'para', contagem:1},
    {palavra:'as', contagem:1},
    {palavra:'capacidades', contagem:1},
    {palavra:'desenvolver', contagem:1},
    {palavra:'uma', contagem:1},
    {palavra:'aplicação', contagem:1},
    {palavra:'e', contagem:1},
    {palavra:'se', contagem:1},
    {palavra:'todo', contagem:1},
    {palavra:'te', contagem:1},
    {palavra:'como', contagem:1},
    {palavra:'o', contagem:1}
    ]
    ```

    ```js
    console.log(dezPalavrasMaisFrequentes(parágrafo, 10))
    ```

    ```sh
   [{palavra:'amo', contagem:6},
    {palavra:'você', contagem:5},
    {palavra:'pode', contagem:3},
    {palavra:'o que', contagem:2},
    {palavra:'ensinar', contagem:2},
    {palavra:'não', contagem:2},
    {palavra:'mais', contagem:2},
    {palavra:'eu', contagem:2},
    {palavra:'qual', contagem:1},
    {palavra:'para', contagem:1}
    ]
    ```

### Exercícios: Nível 3

1. Escreva uma função que limpe um texto. Limpe o seguinte texto. Após a limpeza, conte as três palavras mais frequentes na string.

    ```js
    frase = `%Eu $sou@% um %professor%, &e& eu amo%# ensinar%;. Não $há nada; &tão& gratificante quanto educar &e& @empoderar pessoas. ;Eu encontrei o ensino m%ais@ interessante do que qualquer outro %emprego. %Isso@ motiva você a ser um professor!?`
    console.log(limparTexto(frase))
    ```

   ```sh
    Eu sou um professor e eu amo ensinar Não há nada tão gratificante quanto educar e empoderar pessoas Eu encontrei o ensino mais interessante do que qualquer outro emprego Isso motiva você a ser um professor
    ```

2. Escreva uma função que encontre as palavras mais frequentes. Após a limpeza, conte as três palavras mais frequentes na string.

   ```js
   console.log(palavrasMaisFrequentes(textoLimpo))
   [{palavra:'Eu', contagem:3}, {palavra:'ensinar', contagem:2}, {palavra:'professor', contagem:2}]
   ```
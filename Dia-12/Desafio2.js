/* ### Exercícios: Nível 2

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
    */
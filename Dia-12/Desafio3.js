/* ### Exercícios: Nível 3

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
   */ 


   function limparTexto(frase) {
    return frase.replace(/[^\w\s]|_/g, '')
                .replace(/\s+/g, ' ')
                .trim();
}

    const frase = `%Eu $sou@% um %professor%, &e& eu amo%# ensinar%;. Não $há nada; &tão& gratificante quanto educar &e& @empoderar pessoas. ;Eu encontrei o ensino m%ais@ interessante do que qualquer outro %emprego. %Isso@ motiva você a ser um professor!?`;
    const textoLimpo = limparTexto(frase);
    console.log(textoLimpo);


    function palavrasMaisFrequentes(texto) {
        const palavras = texto.toLowerCase().match(/\b\w+\b/g);
        const contagem = {};
    
        palavras.forEach(palavra => {
            contagem[palavra] = (contagem[palavra] || 0) + 1;
        });
    
        const palavrasFrequentes = Object.entries(contagem)
            .map(([palavra, contagem]) => ({ palavra, contagem }))
            .sort((a, b) => b.contagem - a.contagem)
            .slice(0, 3);
    
        return palavrasFrequentes;
    }
    
    console.log(palavrasMaisFrequentes(textoLimpo));
    

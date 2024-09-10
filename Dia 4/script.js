/*1. Obtenha a entrada do usuário usando prompt("Digite sua idade:"). Se o usuário tiver 18 anos ou mais, forneça o feedback: "Você é maior de idade para dirigir". Caso contrário, forneça outro feedback informando quantos anos faltam para ele completar 18 anos.

```sh
Copy code
Digite sua idade: 30
Você é maior de idade para dirigir.

Digite sua idade: 15
Faltam 3 anos para você poder dirigir.
``` */
        
    const idade = parseInt(prompt('Digite sua idade: '));
         if (idade >= 18) {
                console.log('Você é maior de idade para dirigir.');
            } else {
                const anosParaDirigir = 18 - idade;
                console.log(`Faltam ${anosParaDirigir} anos para você poder dirigir.`);
            }

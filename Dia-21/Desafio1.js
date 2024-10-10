/*
## Exercício: Nível 1

1. Crie um arquivo `index.html` e adicione quatro elementos `<p>` como mostrado acima: obtenha o primeiro parágrafo usando **_document.querySelector(tagname)_** e o nome da tag.
2. Obtenha cada um dos parágrafos usando **_document.querySelector('#id')_** e seus respectivos IDs.
3. Obtenha todos os elementos `<p>` como uma NodeList usando **_document.querySelectorAll(tagname)_** e pelo nome da tag.
4. Percorra a NodeList e obtenha o conteúdo de texto de cada parágrafo.
5. Defina o conteúdo de texto do quarto parágrafo como **_Quarto Parágrafo_**.
6. Defina os atributos id e class para todos os parágrafos usando diferentes métodos de definição de atributos. 
*/


const Primeiroparagrafo = document.querySelector('p')

let Primeiro = document.querySelectorAll('#Primeiro-p')
let Segundo = document.querySelectorAll('#Segundo-p')
let Terceiro = document.querySelectorAll('#Terceiro-p')
let Quarto = document.querySelectorAll('#Quarto-p');

const todosOsParagrafos = document.querySelectorAll('p');

todosOsParagrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
})

quarto.textContent = 'Quarto Parágrafo';

todosOsParagrafos.forEach((paragrafo, index) => {
    paragrafo.setAttribute('id', `paragrafo-${index + 1}`);
    paragrafo.className = `classe-${index + 1}`;
});




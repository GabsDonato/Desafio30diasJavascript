/*
## Exercício: Nível 2

1. Altere o estilo de cada parágrafo usando JavaScript (por exemplo, cor, fundo, borda, tamanho da fonte, família da fonte).
2. Selecione todos os parágrafos, percorra cada elemento e defina a cor do primeiro e do terceiro parágrafo como verde, e do segundo e do quarto parágrafo como vermelho.
3. Defina o conteúdo de texto, id e class para cada parágrafo.

 */

const paragrafoUm = document.querySelectorAll('#Primeiro-p p'); 

paragrafoUm.forEach((paragraf, i) => {
  paragraf.style.fontSize = '24px';
  paragraf.style.color = (i % 2 === 0) ? 'green' : 'red';
});

const paragrafoDois = document.querySelectorAll('#Segundo-p p'); 

paragrafoDois.forEach((paragraf, i) => {
  paragraf.style.fontSize = '24px';
  paragraf.style.color = (i % 2 === 0) ? 'blue' : 'red';
});

const paragrafosTres = document.querySelectorAll('#Terceiro-p p');
paragrafosTres.forEach((paragraf, i) => {
  paragraf.style.fontSize = '24px';
  paragraf.style.color = (i % 2 === 0) ? 'purple' : 'orange'; 
});

const paragrafosQuatro = document.querySelectorAll('#Quarto-p p');
paragrafosQuatro.forEach((paragraf, i) => {
  paragraf.style.fontSize = '24px';
  paragraf.style.color = (i % 2 === 0) ? 'brown' : 'yellow'; 
});

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((paragraf, i) => {
  paragraf.style.color = (i === 0 || i === 2) ? 'green' : 'red';


    paragraf.textContent = `Este é o parágrafo ${i + 1}`;
    paragraf.id = `paragrafo-${i + 1}`; 
    paragraf.className = `classe-paragrafo-${i + 1}`;
    });
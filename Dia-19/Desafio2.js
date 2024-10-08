/* 
### Exercícios: Nível 2

1. Crie um closure que tenha três funções internas. 
*/

function Alfabeto(){
    let letras = 'a';
    function Vogais(){
      letras = String.fromCharCode(letras.charCodeAt(0) + 1);
      return letras;
    }
    function Consoantes(){
      return letras
    }
    return {
      Vogais,
      Consoantes,
    };
  }
  const alfabeto = Alfabeto();
  console.log(alfabeto.Vogais());
  console.log(alfabeto.Vogais());
  console.log(alfabeto.Vogais());
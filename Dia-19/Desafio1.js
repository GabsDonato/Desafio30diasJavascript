/* 
### Exercícios: Nível 1

1. Crie um closure que tenha uma função interna.
 
*/

function Contar() {
    let count = 0;
    function Aumentar(){
      count++
      return count
    }
    return Aumentar;
  
  }
  
  const Soma = Contar();
  console.log(Soma())
  console.log(Soma())
  console.log(Soma())
  console.log(Soma())
  console.log(Soma())
  console.log(Soma())
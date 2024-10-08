/*  ### Exercícios: Nível 3

1. Crie uma função `personAccount`. Ela deve ter as variáveis internas `firstname`, `lastname`, `incomes`, `expenses`. Deve conter as funções internas `totalIncome`, `totalExpense`, `accountInfo`, `addIncome`, `addExpense` e `accountBalance`. `Incomes` é um conjunto de receitas e suas descrições, e `expenses` é também um conjunto de despesas e suas descrições. 
*/

function personAccount() {
    let firstName = 'Gabriela';
    let lastName = 'Donato';
    let incomes = 0;
    let expenses = 0;
  
    function totalIncome() {
      let salario = 1800;
      let rendaExtra = 600;
      return salario + rendaExtra;
    }
  
    function totalExpense() {
      let aluguel = 800;
      let remedios = 200;
      return aluguel + remedios;
    }
  
    function accountInfo() {
      let conta = 'poupança'; 
      let nomeDoTitular = firstName + ' ' + lastName; 
      let anoDeNasci = 25; 
      return {
        conta,
        nomeDoTitular,
        anoDeNasci
      };
    }
  
    function addIncome() {
      incomes = totalIncome();
      return incomes;
    }
  
    function addExpense() {
      expenses = totalExpense(); 
      return expenses;
    }
  
    function accountBalance() {
      return incomes - expenses; 
    }
  
    return {
      addIncome,
      addExpense,
      accountInfo,
      accountBalance
    };
  }
  

  const minhaConta = personAccount();
  console.log(minhaConta.addIncome());       
  console.log(minhaConta.addExpense());       
  console.log(minhaConta.accountInfo());     
  console.log(minhaConta.accountBalance());  
  

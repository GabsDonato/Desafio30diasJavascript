/* ### Exercícios: Nível 3
1. Crie um objeto chamado personAccount. Ele terá as propriedades primeiro nome, sobrenome, rendimentos, despesas e métodos para totalIncome, totalExpense, accountInfo, addIncome, addExpense e accountBalance. Rendimentos é um conjunto de rendimentos e suas descrições, e despesas também é um conjunto de despesas e suas descrições.Armazene o objeto estudante no localStorage do seu navegador. 
*/

const personAccount = {
    firstName: 'Rodriogo',
    lastName: 'Fernandez',
    incomes: [
        { amount: 3000, description: 'Salário' },
        { amount: 500, description: 'Freelance' }
    ],
    expenses: [
        { amount: 1000, description: 'Aluguel' },
        { amount: 200, description: 'Supermercado' }
    ],
    totalIncome: function() {
        return this.incomes.reduce((sum, income) => sum + income.amount, 0);
    },
    totalExpense: function() {
        return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    },
    accountInfo: function() {
        return `Nome: ${this.firstName} ${this.lastName}\nRendimentos: ${this.totalIncome()}\nDespesas: ${this.totalExpense()}\nSaldo: ${this.accountBalance()}`;
    },
    addIncome: function(amount, description) {
        this.incomes.push({ amount, description });
    },
    addExpense: function(amount, description) {
        this.expenses.push({ amount, description });
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

localStorage.setItem('personAccount', JSON.stringify(personAccount));



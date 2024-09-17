//Exercícios: Nível 3
//1. Crie um objeto literal chamado `personAccount`. Ele deve ter as propriedades `firstName`, `lastName`, `incomes`, `expenses` 
//e métodos `totalIncome`, `totalExpense`, `accountInfo`, `addIncome`, `addExpense` e `accountBalance`. `Incomes` é um conjunto de rendimentos e suas descrições, e `expenses` é um conjunto de despesas e suas descrições.


const personAccount = {
    firstName: 'Gabriela',
    lastName: 'Donato',
    incomes: {}, 
    expenses: {},

    addIncome: function(description, amount) {
        if (!this.incomes[description]) {
            this.incomes[description] = amount;
        } else {
            this.incomes[description] += amount;
        }
    },

    addExpense: function(description, amount) {
        if (!this.expenses[description]) {
            this.expenses[description] = amount;
        } else {
            this.expenses[description] += amount;
        }
    },

    totalIncome: function() {
        return Object.values(this.incomes).reduce((acc, income) => acc + income, 0);
    },

    totalExpense: function() {
        return Object.values(this.expenses).reduce((acc, expense) => acc + expense, 0);
    },

    accountInfo: function() {
        return `${this.firstName} ${this.lastName}`;
    },

    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

personAccount.addIncome('Salary', 1800);
personAccount.addIncome('Freelancing', 200);
personAccount.addExpense('Rent', 500);
personAccount.addExpense('Groceries', 100);

console.log(personAccount.accountInfo()); 
console.log('Total Income:', personAccount.totalIncome()); 
console.log('Total Expense:', personAccount.totalExpense());
console.log('Account Balance:', personAccount.accountBalance()); 


const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
    }
  ];
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]


  /* 
**Perguntas 2, 3 e 4 são baseadas nos seguintes dois arrays: `users` e `products`:**

a. Crie uma função chamada `signUp` que permita adicionar um usuário à coleção. Se o usuário já existir, informe que ele já possui uma conta.

b. Crie uma função chamada `signIn` que permita ao usuário fazer login na aplicação.

c. A array `products` tem três elementos e cada um deles possui seis propriedades. Crie uma função chamada `rateProduct` que avalie o produto.

d. Crie uma função chamada `averageRating` que calcule a média das avaliações de um produto.

e. Crie uma função chamada `likeProduct`. Essa função ajudará a curtir o produto se ele não tiver sido curtido e a remover o like se ele já tiver sido curtido.

*/

    function addUser(username, email, password) {
        const existingUser = users.find(user => user.username === username || user.email === email);
        if (existingUser) {
        console.log('Usuário já existe.');
        } else {
        const newUser = {
            _id: generateId(), 
            username,
            email,
            password,
            createdAt: new Date().toLocaleString(),
            isLoggedIn: false
        };
        users.push(newUser);
        console.log('Usuário adicionado com sucesso.');
        }
    }
  

    function signIn(username, password) {
        const user = users.find(user => user.username === username);
        if (user) {
            if (user.password === password) {
                user.isLoggedIn = true;
                console.log(`${username} fez login com sucesso.`);
            } else {
                console.log('Senha incorreta.');
            }
        } else {
            console.log('Usuário não encontrado.');
        }
    };


    function rateProduct(productId, userId, rate) {
        const product = products.find(product => product._id === productId);
        if (product) {
            const existingRating = product.ratings.find(rating => rating.userId === userId);
            if (existingRating) {
                console.log('Usuário já avaliou este produto.');
            } else {
                product.ratings.push({ userId, rate });
                console.log('Avaliação adicionada com sucesso.');
            }
        } else {
            console.log('Produto não encontrado.');
        }
    };

    function averageRating(productId) {
        const product = products.find(product => product._id === productId);
        if (product && product.ratings.length > 0) {
            const totalRating = product.ratings.reduce((acc, rating) => acc + rating.rate, 0);
            return totalRating / product.ratings.length;
        } else {
            console.log('Produto não encontrado ou sem avaliações.');
            return null;
        }
    };

    function likeProduct(productId, userId) {
        const product = products.find(product => product._id === productId);
        if (product) {
            const index = product.likes.indexOf(userId);
            if (index === -1) {
                product.likes.push(userId);
                console.log('Produto curtido.');
            } else {
                product.likes.splice(index, 1);
                console.log('Like removido do produto.');
            }
        } else {
            console.log('Produto não encontrado.');
        }
    }
    
    // Teste da função signIn
signIn('Alex', '123123'); 
signIn('Asab', 'wrongpassword'); 

// Teste da função rateProduct
rateProduct('eedfcf', 'ab12ex', 4.5); 
rateProduct('eedfcf', 'fg12cy', 4.0); 

// Teste da função averageRating
console.log(averageRating('eedfcf')); 

// Teste da função likeProduct
likeProduct('hedfcg', 'ab12ex'); 
likeProduct('hedfcg', 'ab12ex'); 

    
    
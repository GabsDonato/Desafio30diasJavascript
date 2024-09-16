💻 **Exercícios**

**Exercícios: Nível 1**

1. Crie um objeto vazio chamado `dog`.
2. Imprima o objeto `dog` no console.
3. Adicione as propriedades `name`, `legs`, `color`, `age` e `bark` ao objeto `dog`. A propriedade `bark` é um método que retorna "woof woof".
4. Obtenha os valores das propriedades `name`, `legs`, `color`, `age` e `bark` do objeto `dog`.
5. Adicione novas propriedades ao objeto `dog`: `breed` e `getDogInfo`.

**Exercícios: Nível 2**

1. Encontre a pessoa que possui mais habilidades no objeto `users`.

2. Conte o número de usuários logados e conte o número de usuários que têm 50 pontos ou mais no seguinte objeto:

```javascript
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
```

3. Encontre as pessoas que são desenvolvedores da stack MERN (MongoDB, Express, React, Node) no objeto `users`.

4. Adicione seu nome ao objeto `users` sem modificar o objeto `users` original.

5. Obtenha todas as chaves ou propriedades do objeto `users`.

6. Obtenha todos os valores do objeto `users`.

7. Use o objeto `countries` para imprimir o nome de um país, sua capital, populações e idiomas.

**Exercícios: Nível 3**

1. Crie um objeto literal chamado `personAccount`. Ele deve ter as propriedades `firstName`, `lastName`, `incomes`, `expenses` e métodos `totalIncome`, `totalExpense`, `accountInfo`, `addIncome`, `addExpense` e `accountBalance`. `Incomes` é um conjunto de rendimentos e suas descrições, e `expenses` é um conjunto de despesas e suas descrições.

**Perguntas 2, 3 e 4 são baseadas nos seguintes dois arrays: `users` e `products`:**

```javascript
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
```

a. Crie uma função chamada `signUp` que permita adicionar um usuário à coleção. Se o usuário já existir, informe que ele já possui uma conta.

b. Crie uma função chamada `signIn` que permita ao usuário fazer login na aplicação.

c. A array `products` tem três elementos e cada um deles possui seis propriedades. Crie uma função chamada `rateProduct` que avalie o produto.

d. Crie uma função chamada `averageRating` que calcule a média das avaliações de um produto.

e. Crie uma função chamada `likeProduct`. Essa função ajudará a curtir o produto se ele não tiver sido curtido e a remover o like se ele já tiver sido curtido.

---
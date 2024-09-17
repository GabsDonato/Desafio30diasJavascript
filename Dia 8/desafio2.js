/* **Exercícios: Nível 2**

1. Encontre a pessoa que possui mais habilidades no objeto `users`.

2. Conte o número de usuários logados e conte o número de usuários que têm 50 pontos ou mais no seguinte objeto:

3. Encontre as pessoas que são desenvolvedores da stack MERN (MongoDB, Express, React, Node) no objeto `users`.
 */

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30,
      countries: ["Brasil",'Brasilia', 215.3 ,'Portugues']
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50,
      countries: ["EUA",'Washington D.C', 333.3 ,'Inglês']
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50,
      countries: ["Índia",'Nova Delhi', 1.417 ,'Hindi, Inglês']
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40, 
      countries: ["França",'Paris', 67.97,'Francês']
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

 /* const userValues = Object.values(users);
  const personWithMostSkills = userValues.reduce((max, user) => {
    return user.skills.length > max.skills.length ? user : max;
}, userValues[0]);

console.log('Pessoa com mais habilidades:', personWithMostSkills); */


const userValues = Object.values(users);
const loggedInCount = userValues.filter(user => user.isLoggedIn).length;
console.log('Número de usuários logados:', loggedInCount);

const highPointsCount = userValues.filter(user => user.points >= 50).length;
console.log('Número de usuários com 50 pontos ou mais:', highPointsCount);


const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

function isMernDeveloper(skills) {
  return mernStack.every(skill => skills.includes(skill));
}

const mernDevelopers = Object.values(users).filter(user => isMernDeveloper(user.skills));

console.log('Desenvolvedores da stack MERN:', mernDevelopers);



//4. Adicione seu nome ao objeto `users` sem modificar o objeto `users` original.

const newUser = {
    Gabriela: {
      email: 'gabrieladonato.souza@gmail.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 25,
      isLoggedIn: false,
      points: 45
    }
  };

  const updatedUsers = Object.assign({}, users, newUser);
  console.log(updatedUsers);

  //5. Obtenha todas as chaves ou propriedades do objeto `users`.

  const chaves = Object.keys(users);
  console.log(chaves);


  //6. Obtenha todos os valores do objeto `users`.

  const valores = Object.values(users);
  console.log(valores);

  //7. Use o objeto `countries` para imprimir o nome de um país, sua capital, populações e idiomas.

  Object.keys(users).forEach(userName => {
    const user = users[userName];
    
    if (user.countries) {
      const [country, capital, population, language] = user.countries;
      
      console.log(`User: ${userName}`);
      console.log(`Country: ${country}`);
      console.log(`Capital: ${capital}`);
      console.log(`Population: ${population} milhões`);
      console.log(`Language: ${language}`);
      console.log('---'); 
    } else {
      console.log(`User: ${userName} does not have country information.`);
      console.log('---');
    }
  });
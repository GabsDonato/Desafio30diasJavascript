/* ### Exercícios: Nível 2
1. Crie um objeto estudante. O objeto estudante terá as chaves e valores de primeiro nome, sobrenome, idade, habilidades, país e matrícula. Armazene o objeto estudante no localStorage do seu navegador.
 */

const Estudante = {
    firstName: 'Rodriogo',
    lastName: 'Fernandez' ,
    age: 34,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    pais: 'Portugal',
    matricula: 12223344
  }
  
  const userText = JSON.stringify(Estudante, undefined, 4)
  localStorage.setItem('Estudante', userText);
  
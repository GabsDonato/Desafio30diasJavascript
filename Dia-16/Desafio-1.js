// Exercícios Nível 1
//1. Converta o array de habilidades para JSON usando JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
const Newskills = JSON.stringify(skills, [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Node',
  'Python',
]);
console.log(Newskills);


//2. Converta a variável idade para JSON
let age = 250;

const txt = JSON.stringify(age, undefined);
console.log(txt);


//3. Converta a variável isMarried para JSON
let isMarried = true

const Ismarried = JSON.stringify(isMarried, undefined);
console.log(Ismarried);

//4. Converta o objeto estudante para JSON
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  };
  const Student = JSON.stringify(student, undefined,4);
  console.log(Student);

//### Exercícios Nível 2

//1. Converta o objeto estudantes para JSON, incluindo apenas as propriedades firstName, lastName e skills 
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  
  }
    const Student = JSON.stringify(student, ['firstName', 'lastName', 'skills']);
    console.log(Student);
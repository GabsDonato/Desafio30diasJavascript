/* **Exercícios: Nível 1**

1. Crie um objeto vazio chamado `dog`.
2. Imprima o objeto `dog` no console.
3. Adicione as propriedades `name`, `legs`, `color`, `age` e `bark` ao objeto `dog`. A propriedade `bark` é um método que retorna "woof woof".
4. Obtenha os valores das propriedades `name`, `legs`, `color`, `age` e `bark` do objeto `dog`.
5. Adicione novas propriedades ao objeto `dog`: `breed` e `getDogInfo`.
 */

const dog = {};
console.log(dog);

dog.name = 'Tito';
dog.legs = 4;
dog.color = 'white, black and brown';
dog.age = 6;
dog.bark = function() {
    return 'woof woof';
};

console.log('Name:', dog.name);
console.log('Legs:', dog.legs);
console.log('Color:', dog.color);
console.log('Age:', dog.age);
console.log('Bark:', dog.bark());

dog.breed = 'Cur';
dog.getDogInfo = function() {
    return `Name: ${this.name}, Breed: ${this.breed}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}`;
};

console.log('Breed:', dog.breed);
console.log('Dog Info:', dog.getDogInfo());
/* ### Exercícios Nível 1

1. Crie uma classe Animal. A classe terá propriedades nome, idade, cor e pernas, e métodos diferentes.
2. Crie classes filhas Cachorro e Gato a partir da classe Animal.
*/

class Animal {
    constructor(nome, idade, cor, propriedadesDePernas) {
      this.nome = nome;
      this.idade = idade;
      this.cor = cor;
      this.propriedadesDePernas = propriedadesDePernas;
    }
  
    fazerBarulho() {
      console.log(`${this.nome} está fazendo barulho.`);
    }
  
    descrever() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade} anos, Cor: ${this.cor}, Propriedades das pernas: ${this.propriedadesDePernas}.`);
    }
  }
  
  class Gato extends Animal {
    fazerBarulho() {
      console.log(`${this.nome} diz: Miau!`);
    }
  }
  
  class Cao extends Animal {
    fazerBarulho() {
      console.log(`${this.nome} diz: Au Au!`);
    }
  }
  
  const gato = new Gato('Dorinha', 3, 'preto', '4 pernas');
  const cao = new Cao('Juju', 5, 'marrom', '4 pernas');
  
  gato.descrever();
  gato.fazerBarulho();
  
  cao.descrever();
  cao.fazerBarulho();
  
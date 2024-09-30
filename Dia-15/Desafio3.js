// ### Exercícios Nível 3

//1. Vamos tentar desenvolver um programa que calcule medidas de tendência central de uma amostra (média, mediana, moda) e medidas de variabilidade (intervalo, variância, desvio padrão). Além dessas medidas, encontre o mínimo, máximo, contagem, percentil e distribuição de frequência da amostra. Você pode criar uma classe chamada Estatísticas e implementar todas as funções que realizam cálculos estatísticos como métodos dessa classe. Confira a saída abaixo.
class Estatistica {
    constructor(amostra) {
      this.amostra = amostra;
      this.amostra.sort((a, b) => a - b); // Ordena a amostra para calcular mediana e moda
    }
  
    count() {
      return this.amostra.length;
    }
  
    sum() {
      return this.amostra.reduce((acc, val) => acc + val, 0);
    }
  
    min() {
      return this.amostra[0];
    }
  
    max() {
      return this.amostra[this.amostra.length - 1];
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const mid = Math.floor(this.count() / 2);
      return this.count() % 2 === 0
        ? (this.amostra[mid - 1] + this.amostra[mid]) / 2
        : this.amostra[mid];
    }
  
    mode() {
      const frequency = {};
      let maxFreq = 0;
      let mode = null;
  
      this.amostra.forEach((num) => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
          maxFreq = frequency[num];
          mode = num;
        }
      });
  
      return { mode, count: maxFreq };
    }
  
    var() {
      const mean = this.mean();
      const squaredDiffs = this.amostra.map(num => Math.pow(num - mean, 2));
      return squaredDiffs.reduce((acc, val) => acc + val, 0) / this.count();
    }
  
    std() {
      return Math.sqrt(this.var());
    }
  
    freqDist() {
      const frequency = {};
      this.amostra.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
      });
  
      return Object.entries(frequency).map(([key, value]) => [parseFloat(key), value]);
    }
  }
  
  // Exemplo de uso
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Estatistica(ages);
  
  console.log('Count:', statistics.count()); // 25
  console.log('Sum: ', statistics.sum()); // 744
  console.log('Min: ', statistics.min()); // 24
  console.log('Max: ', statistics.max()); // 38
  console.log('Range: ', statistics.range()); // 14
  console.log('Mean: ', statistics.mean()); // 30
  console.log('Median: ', statistics.median()); // 27
  console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
  console.log('Variance: ', statistics.var()); // 17.5
  console.log('Standard Deviation: ', statistics.std()); // 4.2
  console.log('Frequency Distribution: ', statistics.freqDist()); // Distribuição de frequência
  
//2. Crie uma classe chamada ContaPessoal. Ela terá as propriedades nome, sobrenome, rendimentos, despesas e os métodos totalRenda, totalDespesa, infoConta, adicionarRenda, adicionarDespesa e saldoConta. Rendas será um conjunto de rendimentos e suas descrições, e despesas também será um conjunto de despesas e suas descrições.



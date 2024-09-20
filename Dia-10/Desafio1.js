/* ### Exercícios: Nível 1*/

//1. Crie um conjunto vazio.
    const ConjVazio = new Set()
    console.log(ConjVazio);

//2. Crie um conjunto contendo os números de 0 a 10 usando um loop.
    const NumerosZeroAdez  = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    SetOfNumeros = new Set()
    for(const Numero of NumerosZeroAdez) {
        SetOfNumeros.add(Numero)
    }
    console.log(SetOfNumeros);

//3. Remova um elemento de um conjunto.
    console.log(NumerosZeroAdez.delete(10)); 
    console.log(NumerosZeroAdez.size); 
    
//4. Limpe um conjunto.
    NumerosZeroAdez.clear()
    console.log(NumerosZeroAdez);

//5. Crie um conjunto com 5 elementos de string a partir de um array.
   const FiveElements = new Set(['Fire','Air','Earth','Water'])
   console.log(FiveElements);

//6. Crie um mapa de países e o número de caracteres de cada país.
        const paises = ['Finlândia', 'Suécia', 'Noruega'];
        const mapNumbers = new Map();

        paises.forEach(pais => {
            mapNumbers.set(pais, pais.length);
        });

        console.log(mapNumbers);          
        console.log(mapNumbers.size);    

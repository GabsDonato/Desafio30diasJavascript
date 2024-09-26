/* ### Exercícios: Nível 1

1. Exibir o array de países como uma tabela
2. Exibir o objeto de países como uma tabela
3. Usar console.group() para agrupar logs

*/

const paisesAmericaLatina = ['Brasil','Argentina','Bolívia','Chile','Peru','Colômbia']
console.table(paisesAmericaLatina);

const paisesAmericaLatinaObject = [
    {
    pais: 'Brasil',
    capital: 'Brasília',
    Idioma: 'Português'
    },
    {
    pais: 'Argentina',
    capital: 'Buenos aires',
    Idioma: 'Espanhol'
    },
    {
    pais: 'Bolívia',
    capital: 'La Paz',
    Idioma: 'Espanhol'
    },
    {
    pais: 'Chile',
    capital: 'Santiago',
    Idioma: 'Espanhol'
    },
    {
    pais: 'Peru',
    capital: 'Lima',
    Idioma: 'Espanhol'
    },
    {
    pais: 'Colômbia',
    capital: 'Bogotá',
    Idioma: 'Espanhol'
    }

]

console.table(paisesAmericaLatinaObject)

console.group('Paises')
console.log(paisesAmericaLatina)
console.log(paisesAmericaLatinaObject)
console.groupEnd()
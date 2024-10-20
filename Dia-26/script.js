document.addEventListener('DOMContentLoaded', () => {
    const paises = [
        { nome: "China", populacao: "1.4 bilhões" },
        { nome: "Índia", populacao: "1.4 bilhões" },
        { nome: "Estados Unidos", populacao: "331 milhões" },
        { nome: "Indonésia", populacao: "273 milhões" },
        { nome: "Paquistão", populacao: "225 milhões" },
        { nome: "Brasil", populacao: "213 milhões" },
        { nome: "Nigéria", populacao: "211 milhões" },
        { nome: "Bangladesh", populacao: "166 milhões" },
        { nome: "Rússia", populacao: "146 milhões" },
        { nome: "México", populacao: "126 milhões" },
    ];

    const paisesBody = document.getElementById('paises-body');

    paises.forEach(pais => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${pais.nome}</td><td>${pais.populacao}</td>`;
        paisesBody.appendChild(row);
    });
});

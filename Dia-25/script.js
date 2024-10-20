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

    const linguas = [
        { nome: "Inglês", falantes: "1.5 bilhões" },
        { nome: "Mandarim", falantes: "1.1 bilhões" },
        { nome: "Hindi", falantes: "600 milhões" },
        { nome: "Espanhol", falantes: "460 milhões" },
        { nome: "Francês", falantes: "280 milhões" },
        { nome: "Árabe", falantes: "274 milhões" },
        { nome: "Bengali", falantes: "265 milhões" },
        { nome: "Português", falantes: "258 milhões" },
        { nome: "Russo", falantes: "258 milhões" },
        { nome: "Urdu", falantes: "170 milhões" },
    ];

    const paisesLista = document.getElementById('paises-lista');
    const linguasLista = document.getElementById('linguas-lista');

    paises.forEach(pais => {
        const li = document.createElement('li');
        li.textContent = `${pais.nome} - População: ${pais.populacao}`;
        paisesLista.appendChild(li);
    });

    linguas.forEach(lngua => {
        const li = document.createElement('li');
        li.textContent = `${lngua.nome} - Falantes: ${lngua.falantes}`;
        linguasLista.appendChild(li);
    });
});

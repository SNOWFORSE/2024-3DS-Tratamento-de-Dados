const url = 'https://raw.githubusercontent.com/SNOWFORSE/json/refs/heads/main/dados.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
    
    const celularMaisUsado = dados.entrevistas[0].modelo;
    const numeroDePessoasQueUsam = dados.entrevistas[0].votos;
    const porcentagem = dados.entrevistas[0].porcentagem;

    console.log(celularMaisUsado);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = `Em uma busca de descobrir os melhores custo-benefício e mais usados em 2024, foi feita uma série de pesquisas em diferentes fontes. Com o auxílio da inteligência artificial do Google, foi possível estimar que o celular mais usado foi <span>${celularMaisUsado}</span> com um total de pessoas usando de aproximadamente <span>${numeroDePessoasQueUsam}</span> com uma porcentagem de <span>${porcentagem}%</span>`;

    const caixa = document.getElementById('caixa-grafico');
    caixa.appendChild(paragrafo);
}

vizualizarInformacoes();

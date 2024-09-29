const url = 'https://raw.githubusercontent.com/SNOWFORSE/json/refs/heads/main/grafico.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
    
    const celularMaisUsado = dados.entrevista.resultados[0].modelo
    const numeroDePessoasQueUsam = dados.entrevista.resultados[0].votos
    const porcentagem = dados.entrevista.resultados[0].porcentagem

    console.log(celularMaisUsado)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = `Em uma busca de descobris os melhores custo-beneficio e mais usados em 2024, foi feita uma série de pesquisas em diferentes fontes. Com o auxilio da inteligência artificial do goole, foi possivel estimas que o celular mais usado foi <span>${celularMaisUsado}</span> com um total de pessoas usando de aproximadamente <span>${numeroDePessoasQueUsam}</span> com uma porcentagem de <span>${porcentagem}%</span>`

    const caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

}

vizualizarInformacoes()
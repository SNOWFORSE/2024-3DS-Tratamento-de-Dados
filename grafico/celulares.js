import { pegarCss } from "./comum.js"

async function graficosTancredo(){
    const url = 'https://raw.githubusercontent.com/SNOWFORSE/json/refs/heads/main/daumnome.json'
    const res = await fetch(url)
    const dados = await res.json()
    const celularesVotados = dados.slice(1).map(celulares => celulares[2])
    const contagemCelulares = celularesVotados.reduce((acc, celularesVotados) => {
        acc[celularesVotados] = (acc[celularesVotados] || 0) + 1 
        return acc
    }, {})

    const valores = Object.values(contagemCelulares)
    const etiqueta = Object.keys(contagemCelulares)

    const data = [
        {
            values: valores,
            labels: etiqueta,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]
    
    const layout = 
    {
        plot_bgcolor: pegarCss('--sage'),
        paper_bgcolor: pegarCss('--sage'),
        font:{
            color: pegarCss('--verde-musgo'),
            family: pegarCss('--fonte-titulo'),
            size: 16,
        }
    }

    const pesquisaTitulo = document.createElement('h3')
    pesquisaTitulo.classList.add('caixa-grafico__titiulo')
    pesquisaTitulo.innerHTML = `Os consoles mais votados no Colégio <span>Tancredo</span>`
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displeyModeBar: false
    }

    Plotly.newPlot(grafico, data, layout, config)

    const caixa = document.getElementById('caixa-grafico')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = ''
    caixa.appendChild(paragrafo)
}
graficosTancredo()
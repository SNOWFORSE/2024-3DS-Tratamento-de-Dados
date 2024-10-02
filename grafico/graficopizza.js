async function criarGraficoPizza() {
    const url = 'https://raw.githubusercontent.com/SNOWFORSE/json/refs/heads/main/graficored.json'
    const res = await fetch(url)
    const dados = await res.json()
    const celular = Object.keys(dados)
    const porcentagem = Object.values(dados)

    const data = [
        {
            x:celular,
            y:porcentagem,
            type: 'pie'
        },
        xaxies: {
            tickfont: configuraEixo
        }
    ]

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}
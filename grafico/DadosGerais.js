const url = 'https://raw.githubusercontent.com/SNOWFORSE/json/refs/heads/main/grafico.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados)
}

vizualizarInformacoes()
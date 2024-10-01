

async function criarGraficoBarra(){
    const url = 'https://raw.githubusercontent.com/SNOWFORSE/json/refs/heads/main/grafico.json'
    const res = await fetch(url)
    const dados = await res.json()

    console.log(dados)
}

criarGraficoBarra()
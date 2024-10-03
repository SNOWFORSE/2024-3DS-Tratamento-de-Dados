import { pegarCss } from "./comum.js";

async function criarGraficoPizza() {
    
    const url = 'https://raw.githubusercontent.com/SNOWFORSE/json/refs/heads/main/grafico.json';
    const res = await fetch(url);
    const dados = await res.json();
    const celular = Object.keys(dados)
    const porcentagem = Object.values(dados)

    const data = [
        {
            keys: celular,
            values: porcentagem,
            type: 'pie',
            marker: {
                colors: celular.map(() => pegarCss(''))
            }
        }
    ];

    const layout = {
        plot_bgcolor: pegarCss('--sage'),
        paper_bgcolor: pegarCss('--sage'),
        title: {
            text: 'Os Celulares Com Melhor Custo Benefício',
            font: {
                color: pegarCss('--verde-musgo'),
                family: pegarCss('--fonte-titulo'),
                size: 50
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

criarGraficoPizza();

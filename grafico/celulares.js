import { pegarCss } from "./comum.js";

async function celularesTancredo() {
    const url = "https://raw.githubusercontent.com/SNOWFORSE/json/refs/heads/main/daumnome.json";
    const res = await fetch(url);
    const dados = await res.json();
    
    const celularesPreferidos = dados.slice(1).map(celular => celular[1]);
    
    const contagemCelular = celularesPreferidos.reduce((acc, celular) => {
        acc[celular] = (acc[celular] || 0) + 1;
        return acc;
    }, {});

    const valores = Object.values(contagemCelular);
    const etiquetas = Object.keys(contagemCelular);

    const data = [
        {
            values: valores,
            labels: etiquetas,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];
    
    const layout = {
        height: 700,
        width: 800,
        plot_bgcolor: pegarCss('--sage'),
        paper_bgcolor: pegarCss('--sage'),
        title: {
            text: 'Os celulares preferidos do Tancredo'
        }
    };

    const pesquisaTitulo = document.createElement('h3');
    pesquisaTitulo.classList.add('caixa-grafico__titulo');
    pesquisaTitulo.innerHTML = `Os celulares mais votados no Colégio <span>Tancredo</span>`;
    
    const grafico = document.createElement('div');
    grafico.className = 'grafico-disco';
    
    const caixaGrafico = document.getElementById('caixa-grafico');
    caixaGrafico.appendChild(pesquisaTitulo);
    caixaGrafico.appendChild(grafico);
    
    const config = {
        responsive: true,
        displayModeBar: false,
    };
    
    Plotly.newPlot(grafico, data, layout, config);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = 'Nota-se que o celular mais votado no colégio Tancredo é igual ao mais votado no mundo. Enquanto os estudantes elegeram, com 48 votos, <span>o Samsung Galaxy A54</span> como o celular mais desejado, já a pesquisa global indicou que <span>o Samsung Galaxy A54</span> também é o celular mais comprado no mundo.';
    caixaGrafico.appendChild(paragrafo);
}

celularesTancredo();

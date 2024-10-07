const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = (dados.tempo_medio - horas) * 100
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

   paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMundo} bilhoẽs</span> de pessoas e que aproximadamente <span> ${pessoasConectadas}bilhões</span> estão conectadas em alguma rede social e passam em média <span> ${horas}horas </span> e ${minutos}minutos conectadas.`
    
    // código omitido

const container = document.getElementById('graficos-container')
container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
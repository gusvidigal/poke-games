//Realiza uma tentativa do pokenexo
function realizarTentativa() {
    //Altera estatísticas
    let statsData = gameData("stats");
    statsData.tentativas.totais += 1;
    statsData.tentativas.pokenexo += 1;
    setGameData("stats", statsData);
    //Aumenta o número de tentativas
    atualizarTentativasPokenexo(pokenexoData(pokenexo.id).tentativas + 1);
    //Aguarda propositalmente
    setTimeout(function () {
        //Verifica se a tentativa foi válida
        let respostaCorreta = false;
        let contador = 0;
        for (; contador < 4; contador++) {
            let resposta = pokenexo.respostas[contador].pokemon;
            if (listasSaoIguais(resposta, pokenexoData(pokenexo.id).selecionados)) {
                respostaCorreta = true;
                break;
            }
        }

        //Limpa o tabuleiro
        removerCelulasSelecionadas();
        //Limpa a lista
        let data = gameData("pokenexo");
        data.jogos[String(pokenexo.id)].selecionados.length = 0;
        setGameData("pokenexo", data);

        //Se a resposta estiver incorreta, para
        if (!respostaCorreta) {
            //Adiciona na string tentativa
            atualizarResumoPokenexo("x", true);
            return;
        }
        //Se estiver correta, inativa as células
        mostrarAcerto(contador);
    }, 150);
}
//Formata o grupo de células a ser mostrado
function formatarCategoria(indiceDaCategoria) {
    let resposta = pokenexo.respostas[indiceDaCategoria];
    let textoPokemon = "";
    //Formata o texto dos pokémon
    for (let i = 0; i < 4; i++) {
        let pokemon = obterPokemonPorId(resposta.pokemon[i]);
        if (pokemon.desc !== "") pokemon.nome += " - " + pokemon.desc;
        if (i < 3) pokemon.nome += ", ";
        //Adiciona no texto
        textoPokemon += pokemon.nome;
    }
    //Formata a cor
    let cor = obterCorDaCategoria(indiceDaCategoria);
    let texto = `
<div class="pn-${cor} pn--category-${pokenexoData(pokenexo.id).acertados.indexOf(indiceDaCategoria) + 1}">
    <p class="pn--category-name bold">${resposta.desc}</p>
    <p class="pn--category-pokemon">${textoPokemon.toUpperCase()}</p>
</div>`
    return texto;
}

//Realiza as funções de adivinhar corretamente
function mostrarAcerto(indiceDaCategoria) {
    //Adiciona o acerto no data
    let data = gameData("pokenexo");
    data.jogos[pokenexo.id].acertados.push(indiceDaCategoria);
    setGameData("pokenexo", data);
    //Insere a categoria
    inserirCategoriaNoTabuleiro(indiceDaCategoria);
    //Adiciona na string tentativa
    atualizarResumoPokenexo(indiceDaCategoria, true);
    //Se for o último acerto
    if (pokenexoData(pokenexo.id).acertados.length === 4) {
        //Determina a vitória
        pokenexoConcluido();
    }
}
//Função a ser executada na vitória
function pokenexoConcluido() {
    //Altera estatísticas
    let statsData = gameData("stats");
    statsData["jogos-concluidos"].totais += 1;
    statsData["jogos-concluidos"].pokenexo += 1;
    //Se foi de primeira
    if (pokenexoData(pokenexo.id).tentativas === 4) {
        statsData.pokenexo["de-primeira"] += 1;
    }
    setGameData("stats", statsData);
    //Seta o jogo como completado
    let data = gameData("pokenexo");
    data.jogos[pokenexo.id].vitoria = true;
    setGameData("pokenexo", data);
}
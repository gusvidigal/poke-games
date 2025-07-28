//Realiza uma tentativa do pokenexo
function realizarTentativa() {
    //Aumenta o número de tentativas
    atualizarTentativasPokenexo(gameData("pokenexo").tentativas + 1);
    //Aguarda propositalmente
    setTimeout(function () {
        //Verifica se a tentativa foi válida
        let respostaCorreta = false;
        let contador = 0;
        for (; contador < 4; contador++) {
            let resposta = pokenexo.respostas[contador].pokemon;
            if (listasSaoIguais(resposta, celulasSelecionadasPokenexo)) {
                respostaCorreta = true;
                break;
            }
        }

        //Limpa o tabuleiro
        removerCelulasSelecionadas();
        //Limpa a lista
        celulasSelecionadasPokenexo.length = 0;

        //Se a resposta estiver incorreta, para
        if (!respostaCorreta) return;
        //Se estiver correta, inativa as células
        mostrarAcerto(contador);
    }, 500);
}
//Formata o grupo de células a ser mostrado
function formatarCategoria(indiceDaCategoria) {
    let resposta = pokenexo.respostas[indiceDaCategoria];
    let textoPokemon = "";
    //Formata o texto dos pokémon
    for (let i = 0; i < 4; i++) {
        let pokemon = obterPokemonPorId(resposta.pokemon[i]);
        let nomePokemonFormatado = camelCase(pokemon.nome);
        if (pokemon.desc !== "") nomePokemonFormatado += " - " + camelCase(pokemon.desc);
        if (i < 3) nomePokemonFormatado += ", ";
        //Adiciona no texto
        textoPokemon += nomePokemonFormatado;
    }
    //Formata a cor
    let cor = "";
    switch (indiceDaCategoria) {
        case 0:
            cor = "laranja";
            break;
        case 1:
            cor = "vermelho";
            break;
        case 2:
            cor = "azul";
            break;
        case 3:
            cor = "verde";
            break;
    }
    let texto = `
<div class="categoria categoria-${gameData("pokenexo").acertados.indexOf(indiceDaCategoria) + 1} ${cor}">
    <p class="nome-categoria fonte-negrito">${resposta.desc.toUpperCase()}</p>
    <p class="pokemon-categoria fonte">${textoPokemon}</p>
</div>`
    return texto;
}

//Realiza as funções de adivinhar corretamente
function mostrarAcerto(indiceDaCategoria) {
    //Adiciona o acerto no gamedata
    let data = gameData("pokenexo");
    data.acertados.push(indiceDaCategoria);
    setGameData("pokenexo", data);
    //Insere a categoria
    inserirCategoriaNoTabuleiro(indiceDaCategoria);
    //Se for o último acerto
    if (gameData("pokenexo").acertados.length === 4) {
        //Determina a vitória
        pokenexoConcluido();
    }
}
//Função a ser executada na vitória
function pokenexoConcluido() {
    //Seta o jogo como completado
    let data = gameData("pokenexo");
    data.vitoria = true;
    setGameData("pokenexo", data);
}
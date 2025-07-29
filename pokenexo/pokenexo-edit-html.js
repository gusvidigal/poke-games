//Seleciona a célula
function alternarCelula(idDaCelula) {
    let celula = document.querySelector(`.${idDaCelula}`);
    //Se já estiver sido selecionada, remove a seleção
    if (celula.classList.contains("celula-selecionada")) {
        celula.classList.remove("celula-selecionada");
        //Remove da lista de seleção
        let indice = celulasSelecionadasPokenexo.indexOf(Number(celula.dataset.poke));
        celulasSelecionadasPokenexo.splice(indice, 1);
    } else {
        celula.classList.add("celula-selecionada");
        //Adiciona na lista de seleção
        celulasSelecionadasPokenexo.push(Number(celula.dataset.poke))
        //Verifica se selecionou quatro
        if (celulasSelecionadasPokenexo.length >= 4) {
            //Realiza uma tentativa
            realizarTentativa();
        }
    }
}
//Limpa o tabuleiro
function removerCelulasSelecionadas() {
    //Para cada célula, remove a seleção
    delClasseDeElemento("#pokenexo .celula", "celula-selecionada", true);
}
//Atualiza o número de tentativas
function atualizarTentativasPokenexo(numero) {
    if (numero !== undefined) {
        //Muda as tentativas
        let data = gameData("pokenexo");
        data.tentativas = numero;
        setGameData("pokenexo", data);
    }
    setarAtributoEmHTML(`#tentativas span`, "innerHTML", String(gameData("pokenexo").tentativas));
}
//Atualiza o número de dicas
function atualizarDicasPokenexo(numero) {
    if (numero !== undefined) {
        //Muda as tentativas
        let data = gameData("pokenexo");
        data.dicas = numero;
        setGameData("pokenexo", data);
    }
    setarAtributoEmHTML(`#dicas span`, "innerHTML", String(gameData("pokenexo").dicas));
}
//Insere a categoria no tabuleiro
function inserirCategoriaNoTabuleiro(indiceDaCategoria) {
    let celulas = [];
    let resposta = pokenexo.respostas[indiceDaCategoria];
    //Obtém as células dos pokémon da categoria acertada
    document.querySelectorAll("#pokenexo .celula").forEach(celula => {
        if (resposta.pokemon.includes(Number(celula.dataset.poke))) celulas.push(celula);
    })
    //Para cada célula, a remove do tabuleiro
    for (let celula of celulas) {
        celula.remove();
    }
    //Insere a categoria no tabuleiro
    document.getElementById("pokenexo").innerHTML += formatarCategoria(indiceDaCategoria);
}
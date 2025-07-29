//Seleciona a célula
function alternarCelula(idDaCelula) {
    let celula = document.querySelector(`.${idDaCelula}`);
    //Se já estiver sido selecionada, remove a seleção
    if (celula.classList.contains("celula-selecionada")) {
        celula.classList.remove("celula-selecionada");
        //Remove da lista de seleção
        let indice = pokenexoData(pokenexo.id).selecionados.indexOf(Number(celula.dataset.poke));
        let data = gameData("pokenexo");
        data.jogos[String(pokenexo.id)].selecionados.splice(indice, 1);
        setGameData("pokenexo", data);
    } else {
        celula.classList.add("celula-selecionada");
        //Adiciona na lista de seleção
        let data = gameData("pokenexo");
        data.jogos[String(pokenexo.id)].selecionados.push(Number(celula.dataset.poke));
        setGameData("pokenexo", data);
        //Verifica se selecionou quatro
        if (pokenexoData(pokenexo.id).selecionados.length >= 4) {
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
        data.jogos[String(pokenexo.id)].tentativas = numero;
        setGameData("pokenexo", data);
    }
    setarAtributoEmHTML(`#tentativas span`, "innerHTML", String(pokenexoData(pokenexo.id).tentativas));
}
//Atualiza o número de dicas
function atualizarDicasPokenexo(numero) {
    if (numero !== undefined) {
        //Muda as tentativas
        let data = gameData("pokenexo");
        data.jogos[String(pokenexo.id)]["n-dicas"] = numero;
        setGameData("pokenexo", data);
    }
    setarAtributoEmHTML(`#dicas span`, "innerHTML", String(pokenexoData(pokenexo.id)["n-dicas"]));
}
//Atualiza o resumo do jogo
function atualizarResumoPokenexo(texto, adicionarTexto) {
    if (texto !== undefined) {
        //Muda as tentativas
        let data = gameData("pokenexo");
        //Se é para substituir
        if (!adicionarTexto) {
            data.jogos[String(pokenexo.id)]["string-tentativas"] = texto;
        } else {
            let emoji;
            switch (texto) {
                case 0:
                    emoji = "🟩";
                    break;
                case 1:
                    emoji = "🟦";
                    break;
                case 2:
                    emoji = "🟧";
                    break;
                case 3:
                    emoji = "🟥";
                    break;
                case "x":
                    emoji = "❌";
                    break;
            }
            data.jogos[String(pokenexo.id)]["string-tentativas"] += emoji;
        }
        setGameData("pokenexo", data);
    }
    setarAtributoEmHTML(`#game-resume p span`, "innerHTML", String(pokenexoData(pokenexo.id)["string-tentativas"]));
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
const pokedexDados = `[
    {
        "id": 1,
        "num": 1,
        "nome": "bulbasaur",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "POISON",
            "KANTO",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bulbasaur.jpg"
    },
    {
        "id": 2,
        "num": 2,
        "nome": "ivysaur",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "POISON",
            "KANTO",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ivysaur.jpg"
    },
    {
        "id": 3,
        "num": 3,
        "nome": "venusaur",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "POISON",
            "KANTO",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/venusaur.jpg"
    },
    {
        "id": 4,
        "num": 3,
        "nome": "venusaur",
        "desc": "mega venusaur",
        "mega": true,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "POISON",
            "KANTO",
            "STARTER",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/venusaur-mega.jpg"
    },
    {
        "id": 5,
        "num": 4,
        "nome": "charmander",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "KANTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/charmander.jpg"
    },
    {
        "id": 6,
        "num": 5,
        "nome": "charmeleon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "KANTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/charmeleon.jpg"
    },
    {
        "id": 7,
        "num": 6,
        "nome": "charizard",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "FLYING",
            "KANTO",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/charizard.jpg"
    },
    {
        "id": 8,
        "num": 6,
        "nome": "charizard",
        "desc": "mega charizard x",
        "mega": true,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "DRAGON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "DRAGON",
            "KANTO",
            "STARTER",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/charizard-mega-x.jpg"
    },
    {
        "id": 9,
        "num": 6,
        "nome": "charizard",
        "desc": "mega charizard y",
        "mega": true,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "FLYING",
            "KANTO",
            "STARTER",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg"
    },
    {
        "id": 10,
        "num": 7,
        "nome": "squirtle",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/squirtle.jpg"
    },
    {
        "id": 11,
        "num": 8,
        "nome": "wartortle",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wartortle.jpg"
    },
    {
        "id": 12,
        "num": 9,
        "nome": "blastoise",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/blastoise.jpg"
    },
    {
        "id": 13,
        "num": 9,
        "nome": "blastoise",
        "desc": "mega blastoise",
        "mega": true,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "STARTER",
            "MEGA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/blastoise-mega.jpg"
    },
    {
        "id": 14,
        "num": 10,
        "nome": "caterpie",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/caterpie.jpg"
    },
    {
        "id": 15,
        "num": 11,
        "nome": "metapod",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/metapod.jpg"
    },
    {
        "id": 16,
        "num": 12,
        "nome": "butterfree",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/butterfree.jpg"
    },
    {
        "id": 17,
        "num": 13,
        "nome": "weedle",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/weedle.jpg"
    },
    {
        "id": 18,
        "num": 14,
        "nome": "kakuna",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kakuna.jpg"
    },
    {
        "id": 19,
        "num": 15,
        "nome": "beedrill",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/beedrill.jpg"
    },
    {
        "id": 20,
        "num": 15,
        "nome": "beedrill",
        "desc": "mega beedrill",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "POISON",
            "KANTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/beedrill-mega.jpg"
    },
    {
        "id": 21,
        "num": 16,
        "nome": "pidgey",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pidgey.jpg"
    },
    {
        "id": 22,
        "num": 17,
        "nome": "pidgeotto",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pidgeotto.jpg"
    },
    {
        "id": 23,
        "num": 18,
        "nome": "pidgeot",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pidgeot.jpg"
    },
    {
        "id": 24,
        "num": 18,
        "nome": "pidgeot",
        "desc": "mega pidgeot",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "FLYING",
            "KANTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pidgeot-mega.jpg"
    },
    {
        "id": 25,
        "num": 19,
        "nome": "rattata",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rattata.jpg"
    },
    {
        "id": 26,
        "num": 19,
        "nome": "rattata",
        "desc": "alolan rattata",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "NORMAL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "DARK",
            "NORMAL",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rattata-alolan.jpg"
    },
    {
        "id": 27,
        "num": 20,
        "nome": "raticate",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/raticate.jpg"
    },
    {
        "id": 28,
        "num": 20,
        "nome": "raticate",
        "desc": "alolan raticate",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "NORMAL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "DARK",
            "NORMAL",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/raticate-alolan.jpg"
    },
    {
        "id": 29,
        "num": 21,
        "nome": "spearow",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/spearow.jpg"
    },
    {
        "id": 30,
        "num": 22,
        "nome": "fearow",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/fearow.jpg"
    },
    {
        "id": 31,
        "num": 23,
        "nome": "ekans",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ekans.jpg"
    },
    {
        "id": 32,
        "num": 24,
        "nome": "arbok",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/arbok.jpg"
    },
    {
        "id": 33,
        "num": 25,
        "nome": "pikachu",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ELECTRIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pikachu.jpg"
    },
    {
        "id": 34,
        "num": 25,
        "nome": "pikachu",
        "desc": "partner pikachu",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ELECTRIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pikachu-lets-go.jpg"
    },
    {
        "id": 35,
        "num": 26,
        "nome": "raichu",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ELECTRIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/raichu.jpg"
    },
    {
        "id": 36,
        "num": 26,
        "nome": "raichu",
        "desc": "alolan raichu",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "PSYCHIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ELECTRIC",
            "PSYCHIC",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/raichu-alolan.jpg"
    },
    {
        "id": 37,
        "num": 27,
        "nome": "sandshrew",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GROUND",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sandshrew.jpg"
    },
    {
        "id": 38,
        "num": 27,
        "nome": "sandshrew",
        "desc": "alolan sandshrew",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "STEEL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ICE",
            "STEEL",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sandshrew-alolan.jpg"
    },
    {
        "id": 39,
        "num": 28,
        "nome": "sandslash",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GROUND",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sandslash.jpg"
    },
    {
        "id": 40,
        "num": 28,
        "nome": "sandslash",
        "desc": "alolan sandslash",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "STEEL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ICE",
            "STEEL",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sandslash-alolan.jpg"
    },
    {
        "id": 41,
        "num": 29,
        "nome": "nidoran♀",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nidoran-f.jpg"
    },
    {
        "id": 42,
        "num": 30,
        "nome": "nidorina",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nidorina.jpg"
    },
    {
        "id": 43,
        "num": 31,
        "nome": "nidoqueen",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "GROUND",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nidoqueen.jpg"
    },
    {
        "id": 44,
        "num": 32,
        "nome": "nidoran♂",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nidoran-m.jpg"
    },
    {
        "id": 45,
        "num": 33,
        "nome": "nidorino",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nidorino.jpg"
    },
    {
        "id": 46,
        "num": 34,
        "nome": "nidoking",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "GROUND",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nidoking.jpg"
    },
    {
        "id": 47,
        "num": 35,
        "nome": "clefairy",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FAIRY",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/clefairy.jpg"
    },
    {
        "id": 48,
        "num": 36,
        "nome": "clefable",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FAIRY",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/clefable.jpg"
    },
    {
        "id": 49,
        "num": 37,
        "nome": "vulpix",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vulpix.jpg"
    },
    {
        "id": 50,
        "num": 37,
        "nome": "vulpix",
        "desc": "alolan vulpix",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ICE",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vulpix-alolan.jpg"
    },
    {
        "id": 51,
        "num": 38,
        "nome": "ninetales",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ninetales.jpg"
    },
    {
        "id": 52,
        "num": 38,
        "nome": "ninetales",
        "desc": "alolan ninetales",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ICE",
            "FAIRY",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ninetales-alolan.jpg"
    },
    {
        "id": 53,
        "num": 39,
        "nome": "jigglypuff",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FAIRY"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "FAIRY",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/jigglypuff.jpg"
    },
    {
        "id": 54,
        "num": 40,
        "nome": "wigglytuff",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FAIRY"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "FAIRY",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wigglytuff.jpg"
    },
    {
        "id": 55,
        "num": 41,
        "nome": "zubat",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zubat.jpg"
    },
    {
        "id": 56,
        "num": 42,
        "nome": "golbat",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/golbat.jpg"
    },
    {
        "id": 57,
        "num": 43,
        "nome": "oddish",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/oddish.jpg"
    },
    {
        "id": 58,
        "num": 44,
        "nome": "gloom",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gloom.jpg"
    },
    {
        "id": 59,
        "num": 45,
        "nome": "vileplume",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vileplume.jpg"
    },
    {
        "id": 60,
        "num": 46,
        "nome": "paras",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "GRASS"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "GRASS",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/paras.jpg"
    },
    {
        "id": 61,
        "num": 47,
        "nome": "parasect",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "GRASS"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "GRASS",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/parasect.jpg"
    },
    {
        "id": 62,
        "num": 48,
        "nome": "venonat",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/venonat.jpg"
    },
    {
        "id": 63,
        "num": 49,
        "nome": "venomoth",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/venomoth.jpg"
    },
    {
        "id": 64,
        "num": 50,
        "nome": "diglett",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GROUND",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/diglett.jpg"
    },
    {
        "id": 65,
        "num": 50,
        "nome": "diglett",
        "desc": "alolan diglett",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "STEEL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GROUND",
            "STEEL",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/diglett-alolan.jpg"
    },
    {
        "id": 66,
        "num": 51,
        "nome": "dugtrio",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GROUND",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dugtrio.jpg"
    },
    {
        "id": 67,
        "num": 51,
        "nome": "dugtrio",
        "desc": "alolan dugtrio",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "STEEL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GROUND",
            "STEEL",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dugtrio-alolan.jpg"
    },
    {
        "id": 68,
        "num": 52,
        "nome": "meowth",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/meowth.jpg"
    },
    {
        "id": 69,
        "num": 52,
        "nome": "meowth",
        "desc": "alolan meowth",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "DARK",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/meowth-alolan.jpg"
    },
    {
        "id": 70,
        "num": 52,
        "nome": "meowth",
        "desc": "galarian meowth",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "STEEL",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/meowth-galarian.jpg"
    },
    {
        "id": 71,
        "num": 53,
        "nome": "persian",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/persian.jpg"
    },
    {
        "id": 72,
        "num": 53,
        "nome": "persian",
        "desc": "alolan persian",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "DARK",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/persian-alolan.jpg"
    },
    {
        "id": 73,
        "num": 54,
        "nome": "psyduck",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/psyduck.jpg"
    },
    {
        "id": 74,
        "num": 55,
        "nome": "golduck",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/golduck.jpg"
    },
    {
        "id": 75,
        "num": 56,
        "nome": "mankey",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIGHTING",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mankey.jpg"
    },
    {
        "id": 76,
        "num": 57,
        "nome": "primeape",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIGHTING",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/primeape.jpg"
    },
    {
        "id": 77,
        "num": 58,
        "nome": "growlithe",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/growlithe.jpg"
    },
    {
        "id": 78,
        "num": 58,
        "nome": "growlithe",
        "desc": "hisuian growlithe",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "ROCK"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "FIRE",
            "ROCK",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/growlithe-hisuian.jpg"
    },
    {
        "id": 79,
        "num": 59,
        "nome": "arcanine",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/arcanine.jpg"
    },
    {
        "id": 80,
        "num": 59,
        "nome": "arcanine",
        "desc": "hisuian arcanine",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "ROCK"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "FIRE",
            "ROCK",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/arcanine-hisuian.jpg"
    },
    {
        "id": 81,
        "num": 60,
        "nome": "poliwag",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/poliwag.jpg"
    },
    {
        "id": 82,
        "num": 61,
        "nome": "poliwhirl",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/poliwhirl.jpg"
    },
    {
        "id": 83,
        "num": 62,
        "nome": "poliwrath",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "FIGHTING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "FIGHTING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/poliwrath.jpg"
    },
    {
        "id": 84,
        "num": 63,
        "nome": "abra",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "PSYCHIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/abra.jpg"
    },
    {
        "id": 85,
        "num": 64,
        "nome": "kadabra",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "PSYCHIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kadabra.jpg"
    },
    {
        "id": 86,
        "num": 65,
        "nome": "alakazam",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "PSYCHIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/alakazam.jpg"
    },
    {
        "id": 87,
        "num": 65,
        "nome": "alakazam",
        "desc": "mega alakazam",
        "mega": true,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "PSYCHIC",
            "KANTO",
            "MEGA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/alakazam-mega.jpg"
    },
    {
        "id": 88,
        "num": 66,
        "nome": "machop",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIGHTING",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/machop.jpg"
    },
    {
        "id": 89,
        "num": 67,
        "nome": "machoke",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIGHTING",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/machoke.jpg"
    },
    {
        "id": 90,
        "num": 68,
        "nome": "machamp",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIGHTING",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/machamp.jpg"
    },
    {
        "id": 91,
        "num": 69,
        "nome": "bellsprout",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bellsprout.jpg"
    },
    {
        "id": 92,
        "num": 70,
        "nome": "weepinbell",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/weepinbell.jpg"
    },
    {
        "id": 93,
        "num": 71,
        "nome": "victreebel",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/victreebel.jpg"
    },
    {
        "id": 94,
        "num": 72,
        "nome": "tentacool",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tentacool.jpg"
    },
    {
        "id": 95,
        "num": 73,
        "nome": "tentacruel",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tentacruel.jpg"
    },
    {
        "id": 96,
        "num": 74,
        "nome": "geodude",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ROCK",
            "GROUND",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/geodude.jpg"
    },
    {
        "id": 97,
        "num": 74,
        "nome": "geodude",
        "desc": "alolan geodude",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "ELECTRIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "ELECTRIC",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/geodude-alolan.jpg"
    },
    {
        "id": 98,
        "num": 75,
        "nome": "graveler",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ROCK",
            "GROUND",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/graveler.jpg"
    },
    {
        "id": 99,
        "num": 75,
        "nome": "graveler",
        "desc": "alolan graveler",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "ELECTRIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "ELECTRIC",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/graveler-alolan.jpg"
    },
    {
        "id": 100,
        "num": 76,
        "nome": "golem",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ROCK",
            "GROUND",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/golem.jpg"
    },
    {
        "id": 101,
        "num": 76,
        "nome": "golem",
        "desc": "alolan golem",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "ELECTRIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "ELECTRIC",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/golem-alolan.jpg"
    },
    {
        "id": 102,
        "num": 77,
        "nome": "ponyta",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ponyta.jpg"
    },
    {
        "id": 103,
        "num": 77,
        "nome": "ponyta",
        "desc": "galarian ponyta",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ponyta-galarian.jpg"
    },
    {
        "id": 104,
        "num": 78,
        "nome": "rapidash",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rapidash.jpg"
    },
    {
        "id": 105,
        "num": 78,
        "nome": "rapidash",
        "desc": "galarian rapidash",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FAIRY"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "FAIRY",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rapidash-galarian.jpg"
    },
    {
        "id": 106,
        "num": 79,
        "nome": "slowpoke",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "PSYCHIC",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slowpoke.jpg"
    },
    {
        "id": 107,
        "num": 79,
        "nome": "slowpoke",
        "desc": "galarian slowpoke",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slowpoke-galarian.jpg"
    },
    {
        "id": 108,
        "num": 80,
        "nome": "slowbro",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "PSYCHIC",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slowbro.jpg"
    },
    {
        "id": 109,
        "num": 80,
        "nome": "slowbro",
        "desc": "mega slowbro",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "PSYCHIC",
            "KANTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slowbro-mega.jpg"
    },
    {
        "id": 110,
        "num": 80,
        "nome": "slowbro",
        "desc": "galarian slowbro",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "PSYCHIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "POISON",
            "PSYCHIC",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slowbro-galarian.jpg"
    },
    {
        "id": 111,
        "num": 81,
        "nome": "magnemite",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "STEEL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ELECTRIC",
            "STEEL",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/magnemite.jpg"
    },
    {
        "id": 112,
        "num": 82,
        "nome": "magneton",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "STEEL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ELECTRIC",
            "STEEL",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/magneton.jpg"
    },
    {
        "id": 113,
        "num": 83,
        "nome": "farfetch'd",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/farfetchd.jpg"
    },
    {
        "id": 114,
        "num": 83,
        "nome": "farfetch'd",
        "desc": "galarian farfetch'd",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIGHTING",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/farfetchd-galarian.jpg"
    },
    {
        "id": 115,
        "num": 84,
        "nome": "doduo",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/doduo.jpg"
    },
    {
        "id": 116,
        "num": 85,
        "nome": "dodrio",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dodrio.jpg"
    },
    {
        "id": 117,
        "num": 86,
        "nome": "seel",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/seel.jpg"
    },
    {
        "id": 118,
        "num": 87,
        "nome": "dewgong",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "ICE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "ICE",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dewgong.jpg"
    },
    {
        "id": 119,
        "num": 88,
        "nome": "grimer",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/grimer.jpg"
    },
    {
        "id": 120,
        "num": 88,
        "nome": "grimer",
        "desc": "alolan grimer",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "DARK"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "POISON",
            "DARK",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/grimer-alolan.jpg"
    },
    {
        "id": 121,
        "num": 89,
        "nome": "muk",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/muk.jpg"
    },
    {
        "id": 122,
        "num": 89,
        "nome": "muk",
        "desc": "alolan muk",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "DARK"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "POISON",
            "DARK",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/muk-alolan.jpg"
    },
    {
        "id": 123,
        "num": 90,
        "nome": "shellder",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shellder.jpg"
    },
    {
        "id": 124,
        "num": 91,
        "nome": "cloyster",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "ICE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "ICE",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cloyster.jpg"
    },
    {
        "id": 125,
        "num": 92,
        "nome": "gastly",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GHOST",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gastly.jpg"
    },
    {
        "id": 126,
        "num": 93,
        "nome": "haunter",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GHOST",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/haunter.jpg"
    },
    {
        "id": 127,
        "num": 94,
        "nome": "gengar",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GHOST",
            "POISON",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gengar.jpg"
    },
    {
        "id": 128,
        "num": 94,
        "nome": "gengar",
        "desc": "mega gengar",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GHOST",
            "POISON",
            "KANTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gengar-mega.jpg"
    },
    {
        "id": 129,
        "num": 95,
        "nome": "onix",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ROCK",
            "GROUND",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/onix.jpg"
    },
    {
        "id": 130,
        "num": 96,
        "nome": "drowzee",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "PSYCHIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/drowzee.jpg"
    },
    {
        "id": 131,
        "num": 97,
        "nome": "hypno",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "PSYCHIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hypno.jpg"
    },
    {
        "id": 132,
        "num": 98,
        "nome": "krabby",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/krabby.jpg"
    },
    {
        "id": 133,
        "num": 99,
        "nome": "kingler",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kingler.jpg"
    },
    {
        "id": 134,
        "num": 100,
        "nome": "voltorb",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ELECTRIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/voltorb.jpg"
    },
    {
        "id": 135,
        "num": 100,
        "nome": "voltorb",
        "desc": "hisuian voltorb",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "GRASS"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "ELECTRIC",
            "GRASS",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/voltorb-hisuian.jpg"
    },
    {
        "id": 136,
        "num": 101,
        "nome": "electrode",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ELECTRIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/electrode.jpg"
    },
    {
        "id": 137,
        "num": 101,
        "nome": "electrode",
        "desc": "hisuian electrode",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "GRASS"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "ELECTRIC",
            "GRASS",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/electrode-hisuian.jpg"
    },
    {
        "id": 138,
        "num": 102,
        "nome": "exeggcute",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "PSYCHIC",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/exeggcute.jpg"
    },
    {
        "id": 139,
        "num": 103,
        "nome": "exeggutor",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "PSYCHIC",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/exeggutor.jpg"
    },
    {
        "id": 140,
        "num": 103,
        "nome": "exeggutor",
        "desc": "alolan exeggutor",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "DRAGON"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "DRAGON",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/exeggutor-alolan.jpg"
    },
    {
        "id": 141,
        "num": 104,
        "nome": "cubone",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GROUND",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cubone.jpg"
    },
    {
        "id": 142,
        "num": 105,
        "nome": "marowak",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GROUND",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/marowak.jpg"
    },
    {
        "id": 143,
        "num": 105,
        "nome": "marowak",
        "desc": "alolan marowak",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "GHOST"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FIRE",
            "GHOST",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/marowak-alolan.jpg"
    },
    {
        "id": 144,
        "num": 106,
        "nome": "hitmonlee",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIGHTING",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hitmonlee.jpg"
    },
    {
        "id": 145,
        "num": 107,
        "nome": "hitmonchan",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIGHTING",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hitmonchan.jpg"
    },
    {
        "id": 146,
        "num": 108,
        "nome": "lickitung",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lickitung.jpg"
    },
    {
        "id": 147,
        "num": 109,
        "nome": "koffing",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/koffing.jpg"
    },
    {
        "id": 148,
        "num": 110,
        "nome": "weezing",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "POISON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/weezing.jpg"
    },
    {
        "id": 149,
        "num": 110,
        "nome": "weezing",
        "desc": "galarian weezing",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "FAIRY"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "POISON",
            "FAIRY",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/weezing-galarian.jpg"
    },
    {
        "id": 150,
        "num": 111,
        "nome": "rhyhorn",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "ROCK"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GROUND",
            "ROCK",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rhyhorn.jpg"
    },
    {
        "id": 151,
        "num": 112,
        "nome": "rhydon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "ROCK"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GROUND",
            "ROCK",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rhydon.jpg"
    },
    {
        "id": 152,
        "num": 113,
        "nome": "chansey",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chansey.jpg"
    },
    {
        "id": 153,
        "num": 114,
        "nome": "tangela",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "GRASS",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tangela.jpg"
    },
    {
        "id": 154,
        "num": 115,
        "nome": "kangaskhan",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kangaskhan.jpg"
    },
    {
        "id": 155,
        "num": 115,
        "nome": "kangaskhan",
        "desc": "mega kangaskhan",
        "mega": true,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MEGA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kangaskhan-mega.jpg"
    },
    {
        "id": 156,
        "num": 116,
        "nome": "horsea",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/horsea.jpg"
    },
    {
        "id": 157,
        "num": 117,
        "nome": "seadra",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/seadra.jpg"
    },
    {
        "id": 158,
        "num": 118,
        "nome": "goldeen",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/goldeen.jpg"
    },
    {
        "id": 159,
        "num": 119,
        "nome": "seaking",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/seaking.jpg"
    },
    {
        "id": 160,
        "num": 120,
        "nome": "staryu",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/staryu.jpg"
    },
    {
        "id": 161,
        "num": 121,
        "nome": "starmie",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "PSYCHIC",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/starmie.jpg"
    },
    {
        "id": 162,
        "num": 122,
        "nome": "mr. mime",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FAIRY"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "PSYCHIC",
            "FAIRY",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/mr-mime.avif"
    },
    {
        "id": 163,
        "num": 122,
        "nome": "mr. mime",
        "desc": "galarian mr. mime",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "PSYCHIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ICE",
            "PSYCHIC",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mr-mime-galarian.jpg"
    },
    {
        "id": 164,
        "num": 123,
        "nome": "scyther",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/scyther.jpg"
    },
    {
        "id": 165,
        "num": 124,
        "nome": "jynx",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ICE",
            "PSYCHIC",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/jynx.jpg"
    },
    {
        "id": 166,
        "num": 125,
        "nome": "electabuzz",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ELECTRIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/electabuzz.jpg"
    },
    {
        "id": 167,
        "num": 126,
        "nome": "magmar",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/magmar.jpg"
    },
    {
        "id": 168,
        "num": 127,
        "nome": "pinsir",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pinsir.jpg"
    },
    {
        "id": 169,
        "num": 127,
        "nome": "pinsir",
        "desc": "mega pinsir",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "BUG",
            "FLYING",
            "KANTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pinsir-mega.jpg"
    },
    {
        "id": 170,
        "num": 128,
        "nome": "tauros",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tauros.jpg"
    },
    {
        "id": 171,
        "num": 128,
        "nome": "tauros",
        "desc": "combat breed",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 1,
        "regiao": "PALDEA",
        "matches": [
            "FIGHTING",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tauros-paldean-combat.jpg"
    },
    {
        "id": 172,
        "num": 128,
        "nome": "tauros",
        "desc": "blaze breed",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "FIRE"
        ],
        "geracao": 1,
        "regiao": "PALDEA",
        "matches": [
            "FIGHTING",
            "FIRE",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tauros-paldean-blaze.jpg"
    },
    {
        "id": 173,
        "num": 128,
        "nome": "tauros",
        "desc": "aqua breed",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "WATER"
        ],
        "geracao": 1,
        "regiao": "PALDEA",
        "matches": [
            "FIGHTING",
            "WATER",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tauros-paldean-aqua.jpg"
    },
    {
        "id": 174,
        "num": 129,
        "nome": "magikarp",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/magikarp.jpg"
    },
    {
        "id": 175,
        "num": 130,
        "nome": "gyarados",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gyarados.jpg"
    },
    {
        "id": 176,
        "num": 130,
        "nome": "gyarados",
        "desc": "mega gyarados",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "DARK"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "DARK",
            "KANTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gyarados-mega.jpg"
    },
    {
        "id": 177,
        "num": 131,
        "nome": "lapras",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "ICE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "ICE",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lapras.jpg"
    },
    {
        "id": 178,
        "num": 132,
        "nome": "ditto",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ditto.jpg"
    },
    {
        "id": 179,
        "num": 133,
        "nome": "eevee",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/eevee.jpg"
    },
    {
        "id": 180,
        "num": 133,
        "nome": "eevee",
        "desc": "partner eevee",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/eevee-lets-go.jpg"
    },
    {
        "id": 181,
        "num": 134,
        "nome": "vaporeon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "WATER",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vaporeon.jpg"
    },
    {
        "id": 182,
        "num": 135,
        "nome": "jolteon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ELECTRIC",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/jolteon.jpg"
    },
    {
        "id": 183,
        "num": 136,
        "nome": "flareon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/flareon.jpg"
    },
    {
        "id": 184,
        "num": 137,
        "nome": "porygon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/porygon.jpg"
    },
    {
        "id": 185,
        "num": 138,
        "nome": "omanyte",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ROCK",
            "WATER",
            "KANTO",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/omanyte.jpg"
    },
    {
        "id": 186,
        "num": 139,
        "nome": "omastar",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ROCK",
            "WATER",
            "KANTO",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/omastar.jpg"
    },
    {
        "id": 187,
        "num": 140,
        "nome": "kabuto",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ROCK",
            "WATER",
            "KANTO",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kabuto.jpg"
    },
    {
        "id": 188,
        "num": 141,
        "nome": "kabutops",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "WATER"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ROCK",
            "WATER",
            "KANTO",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kabutops.jpg"
    },
    {
        "id": 189,
        "num": 142,
        "nome": "aerodactyl",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ROCK",
            "FLYING",
            "KANTO",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/aerodactyl.jpg"
    },
    {
        "id": 190,
        "num": 142,
        "nome": "aerodactyl",
        "desc": "mega aerodactyl",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ROCK",
            "FLYING",
            "KANTO",
            "FOSSIL",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/aerodactyl-mega.jpg"
    },
    {
        "id": 191,
        "num": 143,
        "nome": "snorlax",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "NORMAL",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/snorlax.jpg"
    },
    {
        "id": 192,
        "num": 144,
        "nome": "articuno",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ICE",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ICE",
            "FLYING",
            "KANTO",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/articuno.jpg"
    },
    {
        "id": 193,
        "num": 144,
        "nome": "articuno",
        "desc": "galarian articuno",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "FLYING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "FLYING",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/articuno-galarian.jpg"
    },
    {
        "id": 194,
        "num": 145,
        "nome": "zapdos",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ELECTRIC",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "ELECTRIC",
            "FLYING",
            "KANTO",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zapdos.jpg"
    },
    {
        "id": 195,
        "num": 145,
        "nome": "zapdos",
        "desc": "galarian zapdos",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FIGHTING",
            "FLYING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIGHTING",
            "FLYING",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zapdos-galarian.jpg"
    },
    {
        "id": 196,
        "num": 146,
        "nome": "moltres",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FIRE",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "FIRE",
            "FLYING",
            "KANTO",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/moltres.jpg"
    },
    {
        "id": 197,
        "num": 146,
        "nome": "moltres",
        "desc": "galarian moltres",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DARK",
            "FLYING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DARK",
            "FLYING",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/moltres-galarian.jpg"
    },
    {
        "id": 198,
        "num": 147,
        "nome": "dratini",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "DRAGON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dratini.jpg"
    },
    {
        "id": 199,
        "num": 148,
        "nome": "dragonair",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "DRAGON",
            "KANTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dragonair.jpg"
    },
    {
        "id": 200,
        "num": 149,
        "nome": "dragonite",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "FLYING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "DRAGON",
            "FLYING",
            "KANTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dragonite.jpg"
    },
    {
        "id": 201,
        "num": 150,
        "nome": "mewtwo",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "PSYCHIC",
            "KANTO",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mewtwo.jpg"
    },
    {
        "id": 202,
        "num": 150,
        "nome": "mewtwo",
        "desc": "mega mewtwo x",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "FIGHTING"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "PSYCHIC",
            "FIGHTING",
            "KANTO",
            "LEGENDARY",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mewtwo-mega-x.jpg"
    },
    {
        "id": 203,
        "num": 150,
        "nome": "mewtwo",
        "desc": "mega mewtwo y",
        "mega": true,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "PSYCHIC",
            "KANTO",
            "LEGENDARY",
            "MEGA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mewtwo-mega-y.jpg"
    },
    {
        "id": 204,
        "num": 151,
        "nome": "mew",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 1,
        "regiao": "KANTO",
        "matches": [
            "PSYCHIC",
            "KANTO",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mew.jpg"
    },
    {
        "id": 205,
        "num": 152,
        "nome": "chikorita",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GRASS",
            "JOHTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chikorita.jpg"
    },
    {
        "id": 206,
        "num": 153,
        "nome": "bayleef",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GRASS",
            "JOHTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bayleef.jpg"
    },
    {
        "id": 207,
        "num": 154,
        "nome": "meganium",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GRASS",
            "JOHTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/meganium.jpg"
    },
    {
        "id": 208,
        "num": 155,
        "nome": "cyndaquil",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FIRE",
            "JOHTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cyndaquil.jpg"
    },
    {
        "id": 209,
        "num": 156,
        "nome": "quilava",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FIRE",
            "JOHTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/quilava.jpg"
    },
    {
        "id": 210,
        "num": 157,
        "nome": "typhlosion",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FIRE",
            "JOHTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/typhlosion.jpg"
    },
    {
        "id": 211,
        "num": 157,
        "nome": "typhlosion",
        "desc": "hisuian typhlosion",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "FIRE",
            "GHOST",
            "HISUI",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/typhlosion-hisuian.jpg"
    },
    {
        "id": 212,
        "num": 158,
        "nome": "totodile",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "JOHTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/totodile.jpg"
    },
    {
        "id": 213,
        "num": 159,
        "nome": "croconaw",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "JOHTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/croconaw.jpg"
    },
    {
        "id": 214,
        "num": 160,
        "nome": "feraligatr",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "JOHTO",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/feraligatr.jpg"
    },
    {
        "id": 215,
        "num": 161,
        "nome": "sentret",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sentret.jpg"
    },
    {
        "id": 216,
        "num": 162,
        "nome": "furret",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/furret.jpg"
    },
    {
        "id": 217,
        "num": 163,
        "nome": "hoothoot",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hoothoot.jpg"
    },
    {
        "id": 218,
        "num": 164,
        "nome": "noctowl",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/noctowl.jpg"
    },
    {
        "id": 219,
        "num": 165,
        "nome": "ledyba",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ledyba.jpg"
    },
    {
        "id": 220,
        "num": 166,
        "nome": "ledian",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ledian.jpg"
    },
    {
        "id": 221,
        "num": 167,
        "nome": "spinarak",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "POISON",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/spinarak.jpg"
    },
    {
        "id": 222,
        "num": 168,
        "nome": "ariados",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "POISON",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ariados.jpg"
    },
    {
        "id": 223,
        "num": 169,
        "nome": "crobat",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "POISON",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/crobat.jpg"
    },
    {
        "id": 224,
        "num": 170,
        "nome": "chinchou",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "ELECTRIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "ELECTRIC",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chinchou.jpg"
    },
    {
        "id": 225,
        "num": 171,
        "nome": "lanturn",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "ELECTRIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "ELECTRIC",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lanturn.jpg"
    },
    {
        "id": 226,
        "num": 172,
        "nome": "pichu",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ELECTRIC",
            "JOHTO",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pichu.jpg"
    },
    {
        "id": 227,
        "num": 173,
        "nome": "cleffa",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FAIRY",
            "JOHTO",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cleffa.jpg"
    },
    {
        "id": 228,
        "num": 174,
        "nome": "igglybuff",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "NORMAL",
            "FAIRY"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "FAIRY",
            "JOHTO",
            "BABY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/igglybuff.jpg"
    },
    {
        "id": 229,
        "num": 175,
        "nome": "togepi",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FAIRY",
            "JOHTO",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/togepi.jpg"
    },
    {
        "id": 230,
        "num": 176,
        "nome": "togetic",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FAIRY",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/togetic.jpg"
    },
    {
        "id": 231,
        "num": 177,
        "nome": "natu",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "PSYCHIC",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/natu.jpg"
    },
    {
        "id": 232,
        "num": 178,
        "nome": "xatu",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "PSYCHIC",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/xatu.jpg"
    },
    {
        "id": 233,
        "num": 179,
        "nome": "mareep",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ELECTRIC",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mareep.jpg"
    },
    {
        "id": 234,
        "num": 180,
        "nome": "flaaffy",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ELECTRIC",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/flaaffy.jpg"
    },
    {
        "id": 235,
        "num": 181,
        "nome": "ampharos",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ELECTRIC",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ampharos.jpg"
    },
    {
        "id": 236,
        "num": 181,
        "nome": "ampharos",
        "desc": "mega ampharos",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "DRAGON"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ELECTRIC",
            "DRAGON",
            "JOHTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ampharos-mega.jpg"
    },
    {
        "id": 237,
        "num": 182,
        "nome": "bellossom",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GRASS",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bellossom.jpg"
    },
    {
        "id": 238,
        "num": 183,
        "nome": "marill",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "FAIRY"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "FAIRY",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/marill.jpg"
    },
    {
        "id": 239,
        "num": 184,
        "nome": "azumarill",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "FAIRY"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "FAIRY",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/azumarill.jpg"
    },
    {
        "id": 240,
        "num": 185,
        "nome": "sudowoodo",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ROCK",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sudowoodo.jpg"
    },
    {
        "id": 241,
        "num": 186,
        "nome": "politoed",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/politoed.jpg"
    },
    {
        "id": 242,
        "num": 187,
        "nome": "hoppip",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GRASS",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hoppip.jpg"
    },
    {
        "id": 243,
        "num": 188,
        "nome": "skiploom",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GRASS",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/skiploom.jpg"
    },
    {
        "id": 244,
        "num": 189,
        "nome": "jumpluff",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GRASS",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/jumpluff.jpg"
    },
    {
        "id": 245,
        "num": 190,
        "nome": "aipom",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/aipom.jpg"
    },
    {
        "id": 246,
        "num": 191,
        "nome": "sunkern",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GRASS",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sunkern.jpg"
    },
    {
        "id": 247,
        "num": 192,
        "nome": "sunflora",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GRASS",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sunflora.jpg"
    },
    {
        "id": 248,
        "num": 193,
        "nome": "yanma",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/yanma.jpg"
    },
    {
        "id": 249,
        "num": 194,
        "nome": "wooper",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GROUND"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "GROUND",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wooper.jpg"
    },
    {
        "id": 250,
        "num": 194,
        "nome": "wooper",
        "desc": "paldean wooper",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "GROUND"
        ],
        "geracao": 2,
        "regiao": "PALDEA",
        "matches": [
            "POISON",
            "GROUND",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wooper-paldean.jpg"
    },
    {
        "id": 251,
        "num": 195,
        "nome": "quagsire",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GROUND"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "GROUND",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/quagsire.jpg"
    },
    {
        "id": 252,
        "num": 196,
        "nome": "espeon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "PSYCHIC",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/espeon.jpg"
    },
    {
        "id": 253,
        "num": 197,
        "nome": "umbreon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "DARK",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/umbreon.jpg"
    },
    {
        "id": 254,
        "num": 198,
        "nome": "murkrow",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "DARK",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/murkrow.jpg"
    },
    {
        "id": 255,
        "num": 199,
        "nome": "slowking",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "PSYCHIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "PSYCHIC",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slowking.jpg"
    },
    {
        "id": 256,
        "num": 199,
        "nome": "slowking",
        "desc": "galarian slowking",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "PSYCHIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "POISON",
            "PSYCHIC",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slowking-galarian.jpg"
    },
    {
        "id": 257,
        "num": 200,
        "nome": "misdreavus",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GHOST",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/misdreavus.jpg"
    },
    {
        "id": 258,
        "num": 201,
        "nome": "unown",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "PSYCHIC",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/unown.jpg"
    },
    {
        "id": 259,
        "num": 202,
        "nome": "wobbuffet",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "PSYCHIC",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wobbuffet.jpg"
    },
    {
        "id": 260,
        "num": 203,
        "nome": "girafarig",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "PSYCHIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "PSYCHIC",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/girafarig.jpg"
    },
    {
        "id": 261,
        "num": 204,
        "nome": "pineco",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pineco.jpg"
    },
    {
        "id": 262,
        "num": 205,
        "nome": "forretress",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "STEEL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "STEEL",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/forretress.jpg"
    },
    {
        "id": 263,
        "num": 206,
        "nome": "dunsparce",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dunsparce.jpg"
    },
    {
        "id": 264,
        "num": 207,
        "nome": "gligar",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GROUND",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gligar.jpg"
    },
    {
        "id": 265,
        "num": 208,
        "nome": "steelix",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "GROUND"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "STEEL",
            "GROUND",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/steelix.jpg"
    },
    {
        "id": 266,
        "num": 208,
        "nome": "steelix",
        "desc": "mega steelix",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "GROUND"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "STEEL",
            "GROUND",
            "JOHTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/steelix-mega.jpg"
    },
    {
        "id": 267,
        "num": 209,
        "nome": "snubbull",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FAIRY",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/snubbull.jpg"
    },
    {
        "id": 268,
        "num": 210,
        "nome": "granbull",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FAIRY",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/granbull.jpg"
    },
    {
        "id": 269,
        "num": 211,
        "nome": "qwilfish",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "POISON"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "POISON",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/qwilfish.jpg"
    },
    {
        "id": 270,
        "num": 211,
        "nome": "qwilfish",
        "desc": "hisuian qwilfish",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "POISON"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "DARK",
            "POISON",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/qwilfish-hisuian.jpg"
    },
    {
        "id": 271,
        "num": 212,
        "nome": "scizor",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "STEEL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "STEEL",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/scizor.jpg"
    },
    {
        "id": 272,
        "num": 212,
        "nome": "scizor",
        "desc": "mega scizor",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "STEEL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "STEEL",
            "JOHTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/scizor-mega.jpg"
    },
    {
        "id": 273,
        "num": 213,
        "nome": "shuckle",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "ROCK"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "ROCK",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shuckle.jpg"
    },
    {
        "id": 274,
        "num": 214,
        "nome": "heracross",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FIGHTING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "FIGHTING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/heracross.jpg"
    },
    {
        "id": 275,
        "num": 214,
        "nome": "heracross",
        "desc": "mega heracross",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FIGHTING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "BUG",
            "FIGHTING",
            "JOHTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/heracross-mega.jpg"
    },
    {
        "id": 276,
        "num": 215,
        "nome": "sneasel",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "ICE"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "DARK",
            "ICE",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sneasel.jpg"
    },
    {
        "id": 277,
        "num": 215,
        "nome": "sneasel",
        "desc": "hisuian sneasel",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "POISON"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "FIGHTING",
            "POISON",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sneasel-hisuian.jpg"
    },
    {
        "id": 278,
        "num": 216,
        "nome": "teddiursa",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/teddiursa.jpg"
    },
    {
        "id": 279,
        "num": 217,
        "nome": "ursaring",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ursaring.jpg"
    },
    {
        "id": 280,
        "num": 218,
        "nome": "slugma",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FIRE",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slugma.jpg"
    },
    {
        "id": 281,
        "num": 219,
        "nome": "magcargo",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "ROCK"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FIRE",
            "ROCK",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/magcargo.jpg"
    },
    {
        "id": 282,
        "num": 220,
        "nome": "swinub",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "GROUND"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ICE",
            "GROUND",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/swinub.jpg"
    },
    {
        "id": 283,
        "num": 221,
        "nome": "piloswine",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "GROUND"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ICE",
            "GROUND",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/piloswine.jpg"
    },
    {
        "id": 284,
        "num": 222,
        "nome": "corsola",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "ROCK"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "ROCK",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/corsola.jpg"
    },
    {
        "id": 285,
        "num": 222,
        "nome": "corsola",
        "desc": "galarian corsola",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GHOST",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/corsola-galarian.jpg"
    },
    {
        "id": 286,
        "num": 223,
        "nome": "remoraid",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/remoraid.jpg"
    },
    {
        "id": 287,
        "num": 224,
        "nome": "octillery",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/octillery.jpg"
    },
    {
        "id": 288,
        "num": 225,
        "nome": "delibird",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ICE",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/delibird.jpg"
    },
    {
        "id": 289,
        "num": 226,
        "nome": "mantine",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mantine.jpg"
    },
    {
        "id": 290,
        "num": 227,
        "nome": "skarmory",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "STEEL",
            "FLYING",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/skarmory.jpg"
    },
    {
        "id": 291,
        "num": 228,
        "nome": "houndour",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FIRE"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "DARK",
            "FIRE",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/houndour.jpg"
    },
    {
        "id": 292,
        "num": 229,
        "nome": "houndoom",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FIRE"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "DARK",
            "FIRE",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/houndoom.jpg"
    },
    {
        "id": 293,
        "num": 229,
        "nome": "houndoom",
        "desc": "mega houndoom",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FIRE"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "DARK",
            "FIRE",
            "JOHTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/houndoom-mega.jpg"
    },
    {
        "id": 294,
        "num": 230,
        "nome": "kingdra",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "DRAGON"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "DRAGON",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kingdra.jpg"
    },
    {
        "id": 295,
        "num": 231,
        "nome": "phanpy",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GROUND",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/phanpy.jpg"
    },
    {
        "id": 296,
        "num": 232,
        "nome": "donphan",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "GROUND",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/donphan.jpg"
    },
    {
        "id": 297,
        "num": 233,
        "nome": "porygon2",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/porygon2.jpg"
    },
    {
        "id": 298,
        "num": 234,
        "nome": "stantler",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/stantler.jpg"
    },
    {
        "id": 299,
        "num": 235,
        "nome": "smeargle",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/smeargle.jpg"
    },
    {
        "id": 300,
        "num": 236,
        "nome": "tyrogue",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FIGHTING",
            "JOHTO",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tyrogue.jpg"
    },
    {
        "id": 301,
        "num": 237,
        "nome": "hitmontop",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FIGHTING",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hitmontop.jpg"
    },
    {
        "id": 302,
        "num": 238,
        "nome": "smoochum",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "ICE",
            "PSYCHIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ICE",
            "PSYCHIC",
            "JOHTO",
            "BABY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/smoochum.jpg"
    },
    {
        "id": 303,
        "num": 239,
        "nome": "elekid",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ELECTRIC",
            "JOHTO",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/elekid.jpg"
    },
    {
        "id": 304,
        "num": 240,
        "nome": "magby",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "FIRE"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FIRE",
            "JOHTO",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/magby.jpg"
    },
    {
        "id": 305,
        "num": 241,
        "nome": "miltank",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/miltank.jpg"
    },
    {
        "id": 306,
        "num": 242,
        "nome": "blissey",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "NORMAL",
            "JOHTO",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/blissey.jpg"
    },
    {
        "id": 307,
        "num": 243,
        "nome": "raikou",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ELECTRIC",
            "JOHTO",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/raikou.jpg"
    },
    {
        "id": 308,
        "num": 244,
        "nome": "entei",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FIRE"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FIRE",
            "JOHTO",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/entei.jpg"
    },
    {
        "id": 309,
        "num": 245,
        "nome": "suicune",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "WATER"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "WATER",
            "JOHTO",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/suicune.jpg"
    },
    {
        "id": 310,
        "num": 246,
        "nome": "larvitar",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "GROUND"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ROCK",
            "GROUND",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/larvitar.jpg"
    },
    {
        "id": 311,
        "num": 247,
        "nome": "pupitar",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "GROUND"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ROCK",
            "GROUND",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pupitar.jpg"
    },
    {
        "id": 312,
        "num": 248,
        "nome": "tyranitar",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "DARK"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ROCK",
            "DARK",
            "JOHTO",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tyranitar.jpg"
    },
    {
        "id": 313,
        "num": 248,
        "nome": "tyranitar",
        "desc": "mega tyranitar",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "DARK"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "ROCK",
            "DARK",
            "JOHTO",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tyranitar-mega.jpg"
    },
    {
        "id": 314,
        "num": 249,
        "nome": "lugia",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "PSYCHIC",
            "FLYING",
            "JOHTO",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lugia.jpg"
    },
    {
        "id": 315,
        "num": 250,
        "nome": "ho-oh",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FIRE",
            "FLYING"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "FIRE",
            "FLYING",
            "JOHTO",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ho-oh.jpg"
    },
    {
        "id": 316,
        "num": 251,
        "nome": "celebi",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "PSYCHIC",
            "GRASS"
        ],
        "geracao": 2,
        "regiao": "JOHTO",
        "matches": [
            "PSYCHIC",
            "GRASS",
            "JOHTO",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/celebi.jpg"
    },
    {
        "id": 317,
        "num": 252,
        "nome": "treecko",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "HOENN",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/treecko.jpg"
    },
    {
        "id": 318,
        "num": 253,
        "nome": "grovyle",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "HOENN",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/grovyle.jpg"
    },
    {
        "id": 319,
        "num": 254,
        "nome": "sceptile",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "HOENN",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sceptile.jpg"
    },
    {
        "id": 320,
        "num": 254,
        "nome": "sceptile",
        "desc": "mega sceptile",
        "mega": true,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "DRAGON"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "DRAGON",
            "HOENN",
            "STARTER",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sceptile-mega.jpg"
    },
    {
        "id": 321,
        "num": 255,
        "nome": "torchic",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIRE",
            "HOENN",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/torchic.jpg"
    },
    {
        "id": 322,
        "num": 256,
        "nome": "combusken",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FIGHTING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIRE",
            "FIGHTING",
            "HOENN",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/combusken.jpg"
    },
    {
        "id": 323,
        "num": 257,
        "nome": "blaziken",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FIGHTING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIRE",
            "FIGHTING",
            "HOENN",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/blaziken.jpg"
    },
    {
        "id": 324,
        "num": 257,
        "nome": "blaziken",
        "desc": "mega blaziken",
        "mega": true,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FIGHTING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIRE",
            "FIGHTING",
            "HOENN",
            "STARTER",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/blaziken-mega.jpg"
    },
    {
        "id": 325,
        "num": 258,
        "nome": "mudkip",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mudkip.jpg"
    },
    {
        "id": 326,
        "num": 259,
        "nome": "marshtomp",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER",
            "GROUND"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "GROUND",
            "HOENN",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/marshtomp.jpg"
    },
    {
        "id": 327,
        "num": 260,
        "nome": "swampert",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER",
            "GROUND"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "GROUND",
            "HOENN",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/swampert.jpg"
    },
    {
        "id": 328,
        "num": 260,
        "nome": "swampert",
        "desc": "mega swampert",
        "mega": true,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER",
            "GROUND"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "GROUND",
            "HOENN",
            "STARTER",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/swampert-mega.jpg"
    },
    {
        "id": 329,
        "num": 261,
        "nome": "poochyena",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DARK",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/poochyena.jpg"
    },
    {
        "id": 330,
        "num": 262,
        "nome": "mightyena",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DARK",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mightyena.jpg"
    },
    {
        "id": 331,
        "num": 263,
        "nome": "zigzagoon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zigzagoon.jpg"
    },
    {
        "id": 332,
        "num": 263,
        "nome": "zigzagoon",
        "desc": "galarian zigzagoon",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "NORMAL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DARK",
            "NORMAL",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zigzagoon-galarian.jpg"
    },
    {
        "id": 333,
        "num": 264,
        "nome": "linoone",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/linoone.jpg"
    },
    {
        "id": 334,
        "num": 264,
        "nome": "linoone",
        "desc": "galarian linoone",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "NORMAL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DARK",
            "NORMAL",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/linoone-galarian.jpg"
    },
    {
        "id": 335,
        "num": 265,
        "nome": "wurmple",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wurmple.jpg"
    },
    {
        "id": 336,
        "num": 266,
        "nome": "silcoon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/silcoon.jpg"
    },
    {
        "id": 337,
        "num": 267,
        "nome": "beautifly",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "FLYING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/beautifly.jpg"
    },
    {
        "id": 338,
        "num": 268,
        "nome": "cascoon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cascoon.jpg"
    },
    {
        "id": 339,
        "num": 269,
        "nome": "dustox",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "POISON",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dustox.jpg"
    },
    {
        "id": 340,
        "num": 270,
        "nome": "lotad",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GRASS"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "GRASS",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lotad.jpg"
    },
    {
        "id": 341,
        "num": 271,
        "nome": "lombre",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GRASS"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "GRASS",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lombre.jpg"
    },
    {
        "id": 342,
        "num": 272,
        "nome": "ludicolo",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GRASS"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "GRASS",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ludicolo.jpg"
    },
    {
        "id": 343,
        "num": 273,
        "nome": "seedot",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/seedot.jpg"
    },
    {
        "id": 344,
        "num": 274,
        "nome": "nuzleaf",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "DARK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "DARK",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nuzleaf.jpg"
    },
    {
        "id": 345,
        "num": 275,
        "nome": "shiftry",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "DARK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "DARK",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shiftry.jpg"
    },
    {
        "id": 346,
        "num": 276,
        "nome": "taillow",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "FLYING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/taillow.jpg"
    },
    {
        "id": 347,
        "num": 277,
        "nome": "swellow",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "FLYING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/swellow.jpg"
    },
    {
        "id": 348,
        "num": 278,
        "nome": "wingull",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "FLYING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wingull.jpg"
    },
    {
        "id": 349,
        "num": 279,
        "nome": "pelipper",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "FLYING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pelipper.jpg"
    },
    {
        "id": 350,
        "num": 280,
        "nome": "ralts",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FAIRY"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "FAIRY",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ralts.jpg"
    },
    {
        "id": 351,
        "num": 281,
        "nome": "kirlia",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FAIRY"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "FAIRY",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kirlia.jpg"
    },
    {
        "id": 352,
        "num": 282,
        "nome": "gardevoir",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FAIRY"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "FAIRY",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gardevoir.jpg"
    },
    {
        "id": 353,
        "num": 282,
        "nome": "gardevoir",
        "desc": "mega gardevoir",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FAIRY"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "FAIRY",
            "HOENN",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gardevoir-mega.jpg"
    },
    {
        "id": 354,
        "num": 283,
        "nome": "surskit",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "WATER",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/surskit.jpg"
    },
    {
        "id": 355,
        "num": 284,
        "nome": "masquerain",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "FLYING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/masquerain.jpg"
    },
    {
        "id": 356,
        "num": 285,
        "nome": "shroomish",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shroomish.jpg"
    },
    {
        "id": 357,
        "num": 286,
        "nome": "breloom",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FIGHTING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "FIGHTING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/breloom.jpg"
    },
    {
        "id": 358,
        "num": 287,
        "nome": "slakoth",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slakoth.jpg"
    },
    {
        "id": 359,
        "num": 288,
        "nome": "vigoroth",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vigoroth.jpg"
    },
    {
        "id": 360,
        "num": 289,
        "nome": "slaking",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slaking.jpg"
    },
    {
        "id": 361,
        "num": 290,
        "nome": "nincada",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "GROUND"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "GROUND",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nincada.jpg"
    },
    {
        "id": 362,
        "num": 291,
        "nome": "ninjask",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "FLYING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ninjask.jpg"
    },
    {
        "id": 363,
        "num": 292,
        "nome": "shedinja",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "GHOST"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "GHOST",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shedinja.jpg"
    },
    {
        "id": 364,
        "num": 293,
        "nome": "whismur",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/whismur.jpg"
    },
    {
        "id": 365,
        "num": 294,
        "nome": "loudred",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/loudred.jpg"
    },
    {
        "id": 366,
        "num": 295,
        "nome": "exploud",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/exploud.jpg"
    },
    {
        "id": 367,
        "num": 296,
        "nome": "makuhita",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIGHTING",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/makuhita.jpg"
    },
    {
        "id": 368,
        "num": 297,
        "nome": "hariyama",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIGHTING",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hariyama.jpg"
    },
    {
        "id": 369,
        "num": 298,
        "nome": "azurill",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "NORMAL",
            "FAIRY"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "FAIRY",
            "HOENN",
            "BABY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/azurill.jpg"
    },
    {
        "id": 370,
        "num": 299,
        "nome": "nosepass",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ROCK",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nosepass.jpg"
    },
    {
        "id": 371,
        "num": 300,
        "nome": "skitty",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/skitty.jpg"
    },
    {
        "id": 372,
        "num": 301,
        "nome": "delcatty",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/delcatty.jpg"
    },
    {
        "id": 373,
        "num": 302,
        "nome": "sableye",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "GHOST"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DARK",
            "GHOST",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sableye.jpg"
    },
    {
        "id": 374,
        "num": 302,
        "nome": "sableye",
        "desc": "mega sableye",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "GHOST"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DARK",
            "GHOST",
            "HOENN",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sableye-mega.jpg"
    },
    {
        "id": 375,
        "num": 303,
        "nome": "mawile",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "FAIRY"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "FAIRY",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mawile.jpg"
    },
    {
        "id": 376,
        "num": 303,
        "nome": "mawile",
        "desc": "mega mawile",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "FAIRY"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "FAIRY",
            "HOENN",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mawile-mega.jpg"
    },
    {
        "id": 377,
        "num": 304,
        "nome": "aron",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "ROCK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "ROCK",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/aron.jpg"
    },
    {
        "id": 378,
        "num": 305,
        "nome": "lairon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "ROCK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "ROCK",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lairon.jpg"
    },
    {
        "id": 379,
        "num": 306,
        "nome": "aggron",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "ROCK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "ROCK",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/aggron.jpg"
    },
    {
        "id": 380,
        "num": 306,
        "nome": "aggron",
        "desc": "mega aggron",
        "mega": true,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "HOENN",
            "MEGA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/aggron-mega.jpg"
    },
    {
        "id": 381,
        "num": 307,
        "nome": "meditite",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIGHTING",
            "PSYCHIC",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/meditite.jpg"
    },
    {
        "id": 382,
        "num": 308,
        "nome": "medicham",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIGHTING",
            "PSYCHIC",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/medicham.jpg"
    },
    {
        "id": 383,
        "num": 308,
        "nome": "medicham",
        "desc": "mega medicham",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIGHTING",
            "PSYCHIC",
            "HOENN",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/medicham-mega.jpg"
    },
    {
        "id": 384,
        "num": 309,
        "nome": "electrike",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ELECTRIC",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/electrike.jpg"
    },
    {
        "id": 385,
        "num": 310,
        "nome": "manectric",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ELECTRIC",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/manectric.jpg"
    },
    {
        "id": 386,
        "num": 310,
        "nome": "manectric",
        "desc": "mega manectric",
        "mega": true,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ELECTRIC",
            "HOENN",
            "MEGA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/manectric-mega.jpg"
    },
    {
        "id": 387,
        "num": 311,
        "nome": "plusle",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ELECTRIC",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/plusle.jpg"
    },
    {
        "id": 388,
        "num": 312,
        "nome": "minun",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ELECTRIC",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/minun.jpg"
    },
    {
        "id": 389,
        "num": 313,
        "nome": "volbeat",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/volbeat.jpg"
    },
    {
        "id": 390,
        "num": 314,
        "nome": "illumise",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "BUG",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/illumise.jpg"
    },
    {
        "id": 391,
        "num": 315,
        "nome": "roselia",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "POISON",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/roselia.jpg"
    },
    {
        "id": 392,
        "num": 316,
        "nome": "gulpin",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "POISON",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gulpin.jpg"
    },
    {
        "id": 393,
        "num": 317,
        "nome": "swalot",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "POISON",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/swalot.jpg"
    },
    {
        "id": 394,
        "num": 318,
        "nome": "carvanha",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "DARK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "DARK",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/carvanha.jpg"
    },
    {
        "id": 395,
        "num": 319,
        "nome": "sharpedo",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "DARK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "DARK",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sharpedo.jpg"
    },
    {
        "id": 396,
        "num": 319,
        "nome": "sharpedo",
        "desc": "mega sharpedo",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "DARK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "DARK",
            "HOENN",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sharpedo-mega.jpg"
    },
    {
        "id": 397,
        "num": 320,
        "nome": "wailmer",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wailmer.jpg"
    },
    {
        "id": 398,
        "num": 321,
        "nome": "wailord",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wailord.jpg"
    },
    {
        "id": 399,
        "num": 322,
        "nome": "numel",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "GROUND"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIRE",
            "GROUND",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/numel.jpg"
    },
    {
        "id": 400,
        "num": 323,
        "nome": "camerupt",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "GROUND"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIRE",
            "GROUND",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/camerupt.jpg"
    },
    {
        "id": 401,
        "num": 323,
        "nome": "camerupt",
        "desc": "mega camerupt",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "GROUND"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIRE",
            "GROUND",
            "HOENN",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/camerupt-mega.jpg"
    },
    {
        "id": 402,
        "num": 324,
        "nome": "torkoal",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIRE",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/torkoal.jpg"
    },
    {
        "id": 403,
        "num": 325,
        "nome": "spoink",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/spoink.jpg"
    },
    {
        "id": 404,
        "num": 326,
        "nome": "grumpig",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/grumpig.jpg"
    },
    {
        "id": 405,
        "num": 327,
        "nome": "spinda",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/spinda.jpg"
    },
    {
        "id": 406,
        "num": 328,
        "nome": "trapinch",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GROUND",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/trapinch.jpg"
    },
    {
        "id": 407,
        "num": 329,
        "nome": "vibrava",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "DRAGON"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GROUND",
            "DRAGON",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vibrava.jpg"
    },
    {
        "id": 408,
        "num": 330,
        "nome": "flygon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "DRAGON"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GROUND",
            "DRAGON",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/flygon.jpg"
    },
    {
        "id": 409,
        "num": 331,
        "nome": "cacnea",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cacnea.jpg"
    },
    {
        "id": 410,
        "num": 332,
        "nome": "cacturne",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "DARK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "DARK",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cacturne.jpg"
    },
    {
        "id": 411,
        "num": 333,
        "nome": "swablu",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "FLYING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/swablu.jpg"
    },
    {
        "id": 412,
        "num": 334,
        "nome": "altaria",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "FLYING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/altaria.jpg"
    },
    {
        "id": 413,
        "num": 334,
        "nome": "altaria",
        "desc": "mega altaria",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "FAIRY"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "FAIRY",
            "HOENN",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/altaria-mega.jpg"
    },
    {
        "id": 414,
        "num": 335,
        "nome": "zangoose",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zangoose.jpg"
    },
    {
        "id": 415,
        "num": 336,
        "nome": "seviper",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "POISON",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/seviper.jpg"
    },
    {
        "id": 416,
        "num": 337,
        "nome": "lunatone",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ROCK",
            "PSYCHIC",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lunatone.jpg"
    },
    {
        "id": 417,
        "num": 338,
        "nome": "solrock",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ROCK",
            "PSYCHIC",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/solrock.jpg"
    },
    {
        "id": 418,
        "num": 339,
        "nome": "barboach",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GROUND"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "GROUND",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/barboach.jpg"
    },
    {
        "id": 419,
        "num": 340,
        "nome": "whiscash",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GROUND"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "GROUND",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/whiscash.jpg"
    },
    {
        "id": 420,
        "num": 341,
        "nome": "corphish",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/corphish.jpg"
    },
    {
        "id": 421,
        "num": 342,
        "nome": "crawdaunt",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "DARK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "DARK",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/crawdaunt.jpg"
    },
    {
        "id": 422,
        "num": 343,
        "nome": "baltoy",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GROUND",
            "PSYCHIC",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/baltoy.jpg"
    },
    {
        "id": 423,
        "num": 344,
        "nome": "claydol",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GROUND",
            "PSYCHIC",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/claydol.jpg"
    },
    {
        "id": 424,
        "num": 345,
        "nome": "lileep",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "GRASS"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ROCK",
            "GRASS",
            "HOENN",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lileep.jpg"
    },
    {
        "id": 425,
        "num": 346,
        "nome": "cradily",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "GRASS"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ROCK",
            "GRASS",
            "HOENN",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cradily.jpg"
    },
    {
        "id": 426,
        "num": 347,
        "nome": "anorith",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "BUG"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ROCK",
            "BUG",
            "HOENN",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/anorith.jpg"
    },
    {
        "id": 427,
        "num": 348,
        "nome": "armaldo",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "BUG"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ROCK",
            "BUG",
            "HOENN",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/armaldo.jpg"
    },
    {
        "id": 428,
        "num": 349,
        "nome": "feebas",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/feebas.jpg"
    },
    {
        "id": 429,
        "num": 350,
        "nome": "milotic",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/milotic.jpg"
    },
    {
        "id": 430,
        "num": 351,
        "nome": "castform",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/castform.jpg"
    },
    {
        "id": 431,
        "num": 351,
        "nome": "castform",
        "desc": "sunny form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "FIRE",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/vector/castform-sunny.png"
    },
    {
        "id": 432,
        "num": 351,
        "nome": "castform",
        "desc": "rainy form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/vector/castform-rainy.png"
    },
    {
        "id": 433,
        "num": 351,
        "nome": "castform",
        "desc": "snowy form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ICE",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/vector/castform-snowy.png"
    },
    {
        "id": 434,
        "num": 352,
        "nome": "kecleon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "NORMAL",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kecleon.jpg"
    },
    {
        "id": 435,
        "num": 353,
        "nome": "shuppet",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GHOST",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shuppet.jpg"
    },
    {
        "id": 436,
        "num": 354,
        "nome": "banette",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GHOST",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/banette.jpg"
    },
    {
        "id": 437,
        "num": 354,
        "nome": "banette",
        "desc": "mega banette",
        "mega": true,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GHOST",
            "HOENN",
            "MEGA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/banette-mega.jpg"
    },
    {
        "id": 438,
        "num": 355,
        "nome": "duskull",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GHOST",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/duskull.jpg"
    },
    {
        "id": 439,
        "num": 356,
        "nome": "dusclops",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GHOST",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dusclops.jpg"
    },
    {
        "id": 440,
        "num": 357,
        "nome": "tropius",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GRASS",
            "FLYING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tropius.jpg"
    },
    {
        "id": 441,
        "num": 358,
        "nome": "chimecho",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chimecho.jpg"
    },
    {
        "id": 442,
        "num": 359,
        "nome": "absol",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DARK",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/absol.jpg"
    },
    {
        "id": 443,
        "num": 359,
        "nome": "absol",
        "desc": "mega absol",
        "mega": true,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DARK",
            "HOENN",
            "MEGA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/absol-mega.jpg"
    },
    {
        "id": 444,
        "num": 360,
        "nome": "wynaut",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "HOENN",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wynaut.jpg"
    },
    {
        "id": 445,
        "num": 361,
        "nome": "snorunt",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ICE",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/snorunt.jpg"
    },
    {
        "id": 446,
        "num": 362,
        "nome": "glalie",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ICE",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/glalie.jpg"
    },
    {
        "id": 447,
        "num": 362,
        "nome": "glalie",
        "desc": "mega glalie",
        "mega": true,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ICE",
            "HOENN",
            "MEGA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/glalie-mega.jpg"
    },
    {
        "id": 448,
        "num": 363,
        "nome": "spheal",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ICE",
            "WATER",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/spheal.jpg"
    },
    {
        "id": 449,
        "num": 364,
        "nome": "sealeo",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ICE",
            "WATER",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sealeo.jpg"
    },
    {
        "id": 450,
        "num": 365,
        "nome": "walrein",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ICE",
            "WATER",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/walrein.jpg"
    },
    {
        "id": 451,
        "num": 366,
        "nome": "clamperl",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/clamperl.jpg"
    },
    {
        "id": 452,
        "num": 367,
        "nome": "huntail",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/huntail.jpg"
    },
    {
        "id": 453,
        "num": 368,
        "nome": "gorebyss",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gorebyss.jpg"
    },
    {
        "id": 454,
        "num": 369,
        "nome": "relicanth",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "ROCK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "ROCK",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/relicanth.jpg"
    },
    {
        "id": 455,
        "num": 370,
        "nome": "luvdisc",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/luvdisc.jpg"
    },
    {
        "id": 456,
        "num": 371,
        "nome": "bagon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bagon.jpg"
    },
    {
        "id": 457,
        "num": 372,
        "nome": "shelgon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "HOENN",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shelgon.jpg"
    },
    {
        "id": 458,
        "num": 373,
        "nome": "salamence",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "FLYING",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/salamence.jpg"
    },
    {
        "id": 459,
        "num": 373,
        "nome": "salamence",
        "desc": "mega salamence",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "FLYING",
            "HOENN",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/salamence-mega.jpg"
    },
    {
        "id": 460,
        "num": 374,
        "nome": "beldum",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "PSYCHIC",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/beldum.jpg"
    },
    {
        "id": 461,
        "num": 375,
        "nome": "metang",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "PSYCHIC",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/metang.jpg"
    },
    {
        "id": 462,
        "num": 376,
        "nome": "metagross",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "PSYCHIC",
            "HOENN",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/metagross.jpg"
    },
    {
        "id": 463,
        "num": 376,
        "nome": "metagross",
        "desc": "mega metagross",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "PSYCHIC",
            "HOENN",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/metagross-mega.jpg"
    },
    {
        "id": 464,
        "num": 377,
        "nome": "regirock",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ROCK"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ROCK",
            "HOENN",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/regirock.jpg"
    },
    {
        "id": 465,
        "num": 378,
        "nome": "regice",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ICE"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "ICE",
            "HOENN",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/regice.jpg"
    },
    {
        "id": 466,
        "num": 379,
        "nome": "registeel",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "STEEL"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "HOENN",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/registeel.jpg"
    },
    {
        "id": 467,
        "num": 380,
        "nome": "latias",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "PSYCHIC",
            "HOENN",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/latias.jpg"
    },
    {
        "id": 468,
        "num": 380,
        "nome": "latias",
        "desc": "mega latias",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "PSYCHIC",
            "HOENN",
            "LEGENDARY",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/latias-mega.jpg"
    },
    {
        "id": 469,
        "num": 381,
        "nome": "latios",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "PSYCHIC",
            "HOENN",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/latios.jpg"
    },
    {
        "id": 470,
        "num": 381,
        "nome": "latios",
        "desc": "mega latios",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "PSYCHIC",
            "HOENN",
            "LEGENDARY",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/latios-mega.jpg"
    },
    {
        "id": 471,
        "num": 382,
        "nome": "kyogre",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kyogre.jpg"
    },
    {
        "id": 472,
        "num": 382,
        "nome": "kyogre",
        "desc": "primal kyogre",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "WATER"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "WATER",
            "HOENN",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kyogre-primal.jpg"
    },
    {
        "id": 473,
        "num": 383,
        "nome": "groudon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GROUND"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GROUND",
            "HOENN",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/groudon.jpg"
    },
    {
        "id": 474,
        "num": 383,
        "nome": "groudon",
        "desc": "primal groudon",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GROUND",
            "FIRE"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "GROUND",
            "FIRE",
            "HOENN",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/groudon-primal.jpg"
    },
    {
        "id": 475,
        "num": 384,
        "nome": "rayquaza",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "FLYING",
            "HOENN",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rayquaza.jpg"
    },
    {
        "id": 476,
        "num": 384,
        "nome": "rayquaza",
        "desc": "mega rayquaza",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "FLYING"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "DRAGON",
            "FLYING",
            "HOENN",
            "LEGENDARY",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rayquaza-mega.jpg"
    },
    {
        "id": 477,
        "num": 385,
        "nome": "jirachi",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "STEEL",
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "STEEL",
            "PSYCHIC",
            "HOENN",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/jirachi.jpg"
    },
    {
        "id": 478,
        "num": 386,
        "nome": "deoxys",
        "desc": "normal forme",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "HOENN",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/deoxys.jpg"
    },
    {
        "id": 479,
        "num": 386,
        "nome": "deoxys",
        "desc": "attack forme",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "HOENN",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/deoxys-attack.jpg"
    },
    {
        "id": 480,
        "num": 386,
        "nome": "deoxys",
        "desc": "defense forme",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "HOENN",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/deoxys-defense.jpg"
    },
    {
        "id": 481,
        "num": 386,
        "nome": "deoxys",
        "desc": "speed forme",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 3,
        "regiao": "HOENN",
        "matches": [
            "PSYCHIC",
            "HOENN",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/deoxys-speed.jpg"
    },
    {
        "id": 482,
        "num": 387,
        "nome": "turtwig",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "SINNOH",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/turtwig.jpg"
    },
    {
        "id": 483,
        "num": 388,
        "nome": "grotle",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "SINNOH",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/grotle.jpg"
    },
    {
        "id": 484,
        "num": 389,
        "nome": "torterra",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "GROUND"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "GROUND",
            "SINNOH",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/torterra.jpg"
    },
    {
        "id": 485,
        "num": 390,
        "nome": "chimchar",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "FIRE",
            "SINNOH",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chimchar.jpg"
    },
    {
        "id": 486,
        "num": 391,
        "nome": "monferno",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FIGHTING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "FIRE",
            "FIGHTING",
            "SINNOH",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/monferno.jpg"
    },
    {
        "id": 487,
        "num": 392,
        "nome": "infernape",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FIGHTING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "FIRE",
            "FIGHTING",
            "SINNOH",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/infernape.jpg"
    },
    {
        "id": 488,
        "num": 393,
        "nome": "piplup",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "SINNOH",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/piplup.jpg"
    },
    {
        "id": 489,
        "num": 394,
        "nome": "prinplup",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "SINNOH",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/prinplup.jpg"
    },
    {
        "id": 490,
        "num": 395,
        "nome": "empoleon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER",
            "STEEL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "STEEL",
            "SINNOH",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/empoleon.jpg"
    },
    {
        "id": 491,
        "num": 396,
        "nome": "starly",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/starly.jpg"
    },
    {
        "id": 492,
        "num": 397,
        "nome": "staravia",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/staravia.jpg"
    },
    {
        "id": 493,
        "num": 398,
        "nome": "staraptor",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/staraptor.jpg"
    },
    {
        "id": 494,
        "num": 399,
        "nome": "bidoof",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bidoof.jpg"
    },
    {
        "id": 495,
        "num": 400,
        "nome": "bibarel",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "WATER"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "WATER",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bibarel.jpg"
    },
    {
        "id": 496,
        "num": 401,
        "nome": "kricketot",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kricketot.jpg"
    },
    {
        "id": 497,
        "num": 402,
        "nome": "kricketune",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kricketune.jpg"
    },
    {
        "id": 498,
        "num": 403,
        "nome": "shinx",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shinx.jpg"
    },
    {
        "id": 499,
        "num": 404,
        "nome": "luxio",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/luxio.jpg"
    },
    {
        "id": 500,
        "num": 405,
        "nome": "luxray",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/luxray.jpg"
    },
    {
        "id": 501,
        "num": 406,
        "nome": "budew",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "POISON",
            "SINNOH",
            "BABY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/budew.jpg"
    },
    {
        "id": 502,
        "num": 407,
        "nome": "roserade",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "POISON",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/roserade.jpg"
    },
    {
        "id": 503,
        "num": 408,
        "nome": "cranidos",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ROCK",
            "SINNOH",
            "FOSSIL",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cranidos.jpg"
    },
    {
        "id": 504,
        "num": 409,
        "nome": "rampardos",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ROCK",
            "SINNOH",
            "FOSSIL",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rampardos.jpg"
    },
    {
        "id": 505,
        "num": 410,
        "nome": "shieldon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "STEEL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ROCK",
            "STEEL",
            "SINNOH",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shieldon.jpg"
    },
    {
        "id": 506,
        "num": 411,
        "nome": "bastiodon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "STEEL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ROCK",
            "STEEL",
            "SINNOH",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bastiodon.jpg"
    },
    {
        "id": 507,
        "num": 412,
        "nome": "burmy",
        "desc": "plant cloak",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/burmy.jpg"
    },
    {
        "id": 508,
        "num": 412,
        "nome": "burmy",
        "desc": "sandy cloak",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/burmy-sandy.jpg"
    },
    {
        "id": 509,
        "num": 412,
        "nome": "burmy",
        "desc": "trash cloak",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/burmy-trash.jpg"
    },
    {
        "id": 510,
        "num": 413,
        "nome": "wormadam",
        "desc": "plant cloak",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "GRASS"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "GRASS",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wormadam.jpg"
    },
    {
        "id": 511,
        "num": 413,
        "nome": "wormadam",
        "desc": "sandy cloak",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "GROUND"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "GROUND",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wormadam-sandy.jpg"
    },
    {
        "id": 512,
        "num": 413,
        "nome": "wormadam",
        "desc": "trash cloak",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "STEEL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "STEEL",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wormadam-trash.jpg"
    },
    {
        "id": 513,
        "num": 414,
        "nome": "mothim",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mothim.jpg"
    },
    {
        "id": 514,
        "num": 415,
        "nome": "combee",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/combee.jpg"
    },
    {
        "id": 515,
        "num": 416,
        "nome": "vespiquen",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vespiquen.jpg"
    },
    {
        "id": 516,
        "num": 417,
        "nome": "pachirisu",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pachirisu.jpg"
    },
    {
        "id": 517,
        "num": 418,
        "nome": "buizel",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/buizel.jpg"
    },
    {
        "id": 518,
        "num": 419,
        "nome": "floatzel",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/floatzel.jpg"
    },
    {
        "id": 519,
        "num": 420,
        "nome": "cherubi",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cherubi.jpg"
    },
    {
        "id": 520,
        "num": 421,
        "nome": "cherrim",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cherrim.jpg"
    },
    {
        "id": 521,
        "num": 422,
        "nome": "shellos",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shellos.jpg"
    },
    {
        "id": 522,
        "num": 423,
        "nome": "gastrodon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GROUND"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "GROUND",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gastrodon.jpg"
    },
    {
        "id": 523,
        "num": 424,
        "nome": "ambipom",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ambipom.jpg"
    },
    {
        "id": 524,
        "num": 425,
        "nome": "drifloon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GHOST",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/drifloon.jpg"
    },
    {
        "id": 525,
        "num": 426,
        "nome": "drifblim",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GHOST",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/drifblim.jpg"
    },
    {
        "id": 526,
        "num": 427,
        "nome": "buneary",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/buneary.jpg"
    },
    {
        "id": 527,
        "num": 428,
        "nome": "lopunny",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lopunny.jpg"
    },
    {
        "id": 528,
        "num": 428,
        "nome": "lopunny",
        "desc": "mega lopunny",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FIGHTING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "FIGHTING",
            "SINNOH",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lopunny-mega.jpg"
    },
    {
        "id": 529,
        "num": 429,
        "nome": "mismagius",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GHOST",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mismagius.jpg"
    },
    {
        "id": 530,
        "num": 430,
        "nome": "honchkrow",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "DARK",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/honchkrow.jpg"
    },
    {
        "id": 531,
        "num": 431,
        "nome": "glameow",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/glameow.jpg"
    },
    {
        "id": 532,
        "num": 432,
        "nome": "purugly",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/purugly.jpg"
    },
    {
        "id": 533,
        "num": 433,
        "nome": "chingling",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "PSYCHIC",
            "SINNOH",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chingling.jpg"
    },
    {
        "id": 534,
        "num": 434,
        "nome": "stunky",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "DARK"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "POISON",
            "DARK",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/stunky.jpg"
    },
    {
        "id": 535,
        "num": 435,
        "nome": "skuntank",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "DARK"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "POISON",
            "DARK",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/skuntank.jpg"
    },
    {
        "id": 536,
        "num": 436,
        "nome": "bronzor",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "PSYCHIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "STEEL",
            "PSYCHIC",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bronzor.jpg"
    },
    {
        "id": 537,
        "num": 437,
        "nome": "bronzong",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "PSYCHIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "STEEL",
            "PSYCHIC",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bronzong.jpg"
    },
    {
        "id": 538,
        "num": 438,
        "nome": "bonsly",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "ROCK"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ROCK",
            "SINNOH",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bonsly.jpg"
    },
    {
        "id": 539,
        "num": 439,
        "nome": "mime jr.",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "PSYCHIC",
            "FAIRY"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "PSYCHIC",
            "FAIRY",
            "SINNOH",
            "BABY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/mime-jr.avif"
    },
    {
        "id": 540,
        "num": 440,
        "nome": "happiny",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/happiny.jpg"
    },
    {
        "id": 541,
        "num": 441,
        "nome": "chatot",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chatot.jpg"
    },
    {
        "id": 542,
        "num": 442,
        "nome": "spiritomb",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "DARK"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GHOST",
            "DARK",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/spiritomb.jpg"
    },
    {
        "id": 543,
        "num": 443,
        "nome": "gible",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "GROUND"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "DRAGON",
            "GROUND",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gible.jpg"
    },
    {
        "id": 544,
        "num": 444,
        "nome": "gabite",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "GROUND"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "DRAGON",
            "GROUND",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gabite.jpg"
    },
    {
        "id": 545,
        "num": 445,
        "nome": "garchomp",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "GROUND"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "DRAGON",
            "GROUND",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/garchomp.jpg"
    },
    {
        "id": 546,
        "num": 445,
        "nome": "garchomp",
        "desc": "mega garchomp",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "GROUND"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "DRAGON",
            "GROUND",
            "SINNOH",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/garchomp-mega.jpg"
    },
    {
        "id": 547,
        "num": 446,
        "nome": "munchlax",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/munchlax.jpg"
    },
    {
        "id": 548,
        "num": 447,
        "nome": "riolu",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "FIGHTING",
            "SINNOH",
            "BABY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/riolu.jpg"
    },
    {
        "id": 549,
        "num": 448,
        "nome": "lucario",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "STEEL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "FIGHTING",
            "STEEL",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lucario.jpg"
    },
    {
        "id": 550,
        "num": 448,
        "nome": "lucario",
        "desc": "mega lucario",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "STEEL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "FIGHTING",
            "STEEL",
            "SINNOH",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lucario-mega.jpg"
    },
    {
        "id": 551,
        "num": 449,
        "nome": "hippopotas",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GROUND",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hippopotas.jpg"
    },
    {
        "id": 552,
        "num": 450,
        "nome": "hippowdon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GROUND",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hippowdon.jpg"
    },
    {
        "id": 553,
        "num": 451,
        "nome": "skorupi",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "BUG"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "POISON",
            "BUG",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/skorupi.jpg"
    },
    {
        "id": 554,
        "num": 452,
        "nome": "drapion",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "DARK"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "POISON",
            "DARK",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/drapion.jpg"
    },
    {
        "id": 555,
        "num": 453,
        "nome": "croagunk",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "FIGHTING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "POISON",
            "FIGHTING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/croagunk.jpg"
    },
    {
        "id": 556,
        "num": 454,
        "nome": "toxicroak",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "FIGHTING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "POISON",
            "FIGHTING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/toxicroak.jpg"
    },
    {
        "id": 557,
        "num": 455,
        "nome": "carnivine",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/carnivine.jpg"
    },
    {
        "id": 558,
        "num": 456,
        "nome": "finneon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/finneon.jpg"
    },
    {
        "id": 559,
        "num": 457,
        "nome": "lumineon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lumineon.jpg"
    },
    {
        "id": 560,
        "num": 458,
        "nome": "mantyke",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "WATER",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "FLYING",
            "SINNOH",
            "BABY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mantyke.jpg"
    },
    {
        "id": 561,
        "num": 459,
        "nome": "snover",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "ICE"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "ICE",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/snover.jpg"
    },
    {
        "id": 562,
        "num": 460,
        "nome": "abomasnow",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "ICE"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "ICE",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/abomasnow.jpg"
    },
    {
        "id": 563,
        "num": 460,
        "nome": "abomasnow",
        "desc": "mega abomasnow",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "ICE"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "ICE",
            "SINNOH",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/abomasnow-mega.jpg"
    },
    {
        "id": 564,
        "num": 461,
        "nome": "weavile",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "ICE"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "DARK",
            "ICE",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/weavile.jpg"
    },
    {
        "id": 565,
        "num": 462,
        "nome": "magnezone",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "STEEL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "STEEL",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/magnezone.jpg"
    },
    {
        "id": 566,
        "num": 463,
        "nome": "lickilicky",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lickilicky.jpg"
    },
    {
        "id": 567,
        "num": 464,
        "nome": "rhyperior",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "ROCK"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GROUND",
            "ROCK",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rhyperior.jpg"
    },
    {
        "id": 568,
        "num": 465,
        "nome": "tangrowth",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tangrowth.jpg"
    },
    {
        "id": 569,
        "num": 466,
        "nome": "electivire",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/electivire.jpg"
    },
    {
        "id": 570,
        "num": 467,
        "nome": "magmortar",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "FIRE",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/magmortar.jpg"
    },
    {
        "id": 571,
        "num": 468,
        "nome": "togekiss",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "FAIRY",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/togekiss.jpg"
    },
    {
        "id": 572,
        "num": 469,
        "nome": "yanmega",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "BUG",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/yanmega.jpg"
    },
    {
        "id": 573,
        "num": 470,
        "nome": "leafeon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/leafeon.jpg"
    },
    {
        "id": 574,
        "num": 471,
        "nome": "glaceon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ICE",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/glaceon.jpg"
    },
    {
        "id": 575,
        "num": 472,
        "nome": "gliscor",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GROUND",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gliscor.jpg"
    },
    {
        "id": 576,
        "num": 473,
        "nome": "mamoswine",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "GROUND"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ICE",
            "GROUND",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mamoswine.jpg"
    },
    {
        "id": 577,
        "num": 474,
        "nome": "porygon-z",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/porygon-z.jpg"
    },
    {
        "id": 578,
        "num": 475,
        "nome": "gallade",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FIGHTING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "PSYCHIC",
            "FIGHTING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gallade.jpg"
    },
    {
        "id": 579,
        "num": 475,
        "nome": "gallade",
        "desc": "mega gallade",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FIGHTING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "PSYCHIC",
            "FIGHTING",
            "SINNOH",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gallade-mega.jpg"
    },
    {
        "id": 580,
        "num": 476,
        "nome": "probopass",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "STEEL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ROCK",
            "STEEL",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/probopass.jpg"
    },
    {
        "id": 581,
        "num": 477,
        "nome": "dusknoir",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GHOST",
            "SINNOH",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dusknoir.jpg"
    },
    {
        "id": 582,
        "num": 478,
        "nome": "froslass",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "GHOST"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ICE",
            "GHOST",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/froslass.jpg"
    },
    {
        "id": 583,
        "num": 479,
        "nome": "rotom",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "GHOST"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "GHOST",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rotom.jpg"
    },
    {
        "id": 584,
        "num": 479,
        "nome": "rotom",
        "desc": "heat rotom",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "FIRE"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "FIRE",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rotom-heat.jpg"
    },
    {
        "id": 585,
        "num": 479,
        "nome": "rotom",
        "desc": "wash rotom",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "WATER"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "WATER",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rotom-wash.jpg"
    },
    {
        "id": 586,
        "num": 479,
        "nome": "rotom",
        "desc": "frost rotom",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "ICE"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "ICE",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rotom-frost.jpg"
    },
    {
        "id": 587,
        "num": 479,
        "nome": "rotom",
        "desc": "fan rotom",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "FLYING",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rotom-fan.jpg"
    },
    {
        "id": 588,
        "num": 479,
        "nome": "rotom",
        "desc": "mow rotom",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "GRASS"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "ELECTRIC",
            "GRASS",
            "SINNOH",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rotom-mow.jpg"
    },
    {
        "id": 589,
        "num": 480,
        "nome": "uxie",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "PSYCHIC",
            "SINNOH",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/uxie.jpg"
    },
    {
        "id": 590,
        "num": 481,
        "nome": "mesprit",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "PSYCHIC",
            "SINNOH",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mesprit.jpg"
    },
    {
        "id": 591,
        "num": 482,
        "nome": "azelf",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "PSYCHIC",
            "SINNOH",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/azelf.jpg"
    },
    {
        "id": 592,
        "num": 483,
        "nome": "dialga",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "STEEL",
            "DRAGON"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "STEEL",
            "DRAGON",
            "SINNOH",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dialga.jpg"
    },
    {
        "id": 593,
        "num": 483,
        "nome": "dialga",
        "desc": "origin forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "STEEL",
            "DRAGON"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "STEEL",
            "DRAGON",
            "SINNOH",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dialga-origin.jpg"
    },
    {
        "id": 594,
        "num": 484,
        "nome": "palkia",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "WATER",
            "DRAGON"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "DRAGON",
            "SINNOH",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/palkia.jpg"
    },
    {
        "id": 595,
        "num": 484,
        "nome": "palkia",
        "desc": "origin forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "WATER",
            "DRAGON"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "DRAGON",
            "SINNOH",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/palkia-origin.jpg"
    },
    {
        "id": 596,
        "num": 485,
        "nome": "heatran",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FIRE",
            "STEEL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "FIRE",
            "STEEL",
            "SINNOH",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/heatran.jpg"
    },
    {
        "id": 597,
        "num": 486,
        "nome": "regigigas",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/regigigas.jpg"
    },
    {
        "id": 598,
        "num": 487,
        "nome": "giratina",
        "desc": "altered forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GHOST",
            "DRAGON"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GHOST",
            "DRAGON",
            "SINNOH",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/giratina-altered.avif"
    },
    {
        "id": 599,
        "num": 487,
        "nome": "giratina",
        "desc": "origin forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GHOST",
            "DRAGON"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GHOST",
            "DRAGON",
            "SINNOH",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/giratina-origin.jpg"
    },
    {
        "id": 600,
        "num": 488,
        "nome": "cresselia",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "PSYCHIC",
            "SINNOH",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cresselia.jpg"
    },
    {
        "id": 601,
        "num": 489,
        "nome": "phione",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "WATER"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "SINNOH",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/phione.jpg"
    },
    {
        "id": 602,
        "num": 490,
        "nome": "manaphy",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "WATER"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "WATER",
            "SINNOH",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/manaphy.jpg"
    },
    {
        "id": 603,
        "num": 491,
        "nome": "darkrai",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "DARK"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "DARK",
            "SINNOH",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/darkrai.jpg"
    },
    {
        "id": 604,
        "num": 492,
        "nome": "shaymin",
        "desc": "land forme",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "GRASS"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "SINNOH",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/shaymin-land.avif"
    },
    {
        "id": 605,
        "num": 492,
        "nome": "shaymin",
        "desc": "sky forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "GRASS",
            "FLYING"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "GRASS",
            "FLYING",
            "SINNOH",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shaymin-sky.jpg"
    },
    {
        "id": 606,
        "num": 493,
        "nome": "arceus",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 4,
        "regiao": "SINNOH",
        "matches": [
            "NORMAL",
            "SINNOH",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/arceus.jpg"
    },
    {
        "id": 607,
        "num": 494,
        "nome": "victini",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "PSYCHIC",
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "FIRE",
            "UNOVA",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/victini.jpg"
    },
    {
        "id": 608,
        "num": 495,
        "nome": "snivy",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "UNOVA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/snivy.jpg"
    },
    {
        "id": 609,
        "num": 496,
        "nome": "servine",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "UNOVA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/servine.jpg"
    },
    {
        "id": 610,
        "num": 497,
        "nome": "serperior",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "UNOVA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/serperior.jpg"
    },
    {
        "id": 611,
        "num": 498,
        "nome": "tepig",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIRE",
            "UNOVA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tepig.jpg"
    },
    {
        "id": 612,
        "num": 499,
        "nome": "pignite",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIRE",
            "FIGHTING",
            "UNOVA",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pignite.jpg"
    },
    {
        "id": 613,
        "num": 500,
        "nome": "emboar",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIRE",
            "FIGHTING",
            "UNOVA",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/emboar.jpg"
    },
    {
        "id": 614,
        "num": 501,
        "nome": "oshawott",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "UNOVA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/oshawott.jpg"
    },
    {
        "id": 615,
        "num": 502,
        "nome": "dewott",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "UNOVA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dewott.jpg"
    },
    {
        "id": 616,
        "num": 503,
        "nome": "samurott",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "UNOVA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/samurott.jpg"
    },
    {
        "id": 617,
        "num": 503,
        "nome": "samurott",
        "desc": "hisuian samurott",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER",
            "DARK"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "WATER",
            "DARK",
            "HISUI",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/samurott-hisuian.jpg"
    },
    {
        "id": 618,
        "num": 504,
        "nome": "patrat",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/patrat.jpg"
    },
    {
        "id": 619,
        "num": 505,
        "nome": "watchog",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/watchog.jpg"
    },
    {
        "id": 620,
        "num": 506,
        "nome": "lillipup",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lillipup.jpg"
    },
    {
        "id": 621,
        "num": 507,
        "nome": "herdier",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/herdier.jpg"
    },
    {
        "id": 622,
        "num": 508,
        "nome": "stoutland",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/stoutland.jpg"
    },
    {
        "id": 623,
        "num": 509,
        "nome": "purrloin",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/purrloin.jpg"
    },
    {
        "id": 624,
        "num": 510,
        "nome": "liepard",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/liepard.jpg"
    },
    {
        "id": 625,
        "num": 511,
        "nome": "pansage",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pansage.jpg"
    },
    {
        "id": 626,
        "num": 512,
        "nome": "simisage",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/simisage.jpg"
    },
    {
        "id": 627,
        "num": 513,
        "nome": "pansear",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIRE",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pansear.jpg"
    },
    {
        "id": 628,
        "num": 514,
        "nome": "simisear",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIRE",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/simisear.jpg"
    },
    {
        "id": 629,
        "num": 515,
        "nome": "panpour",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/panpour.jpg"
    },
    {
        "id": 630,
        "num": 516,
        "nome": "simipour",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/simipour.jpg"
    },
    {
        "id": 631,
        "num": 517,
        "nome": "munna",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/munna.jpg"
    },
    {
        "id": 632,
        "num": 518,
        "nome": "musharna",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/musharna.jpg"
    },
    {
        "id": 633,
        "num": 519,
        "nome": "pidove",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pidove.jpg"
    },
    {
        "id": 634,
        "num": 520,
        "nome": "tranquill",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tranquill.jpg"
    },
    {
        "id": 635,
        "num": 521,
        "nome": "unfezant",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/unfezant.jpg"
    },
    {
        "id": 636,
        "num": 522,
        "nome": "blitzle",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ELECTRIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/blitzle.jpg"
    },
    {
        "id": 637,
        "num": 523,
        "nome": "zebstrika",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ELECTRIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zebstrika.jpg"
    },
    {
        "id": 638,
        "num": 524,
        "nome": "roggenrola",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ROCK",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/roggenrola.jpg"
    },
    {
        "id": 639,
        "num": 525,
        "nome": "boldore",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ROCK",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/boldore.jpg"
    },
    {
        "id": 640,
        "num": 526,
        "nome": "gigalith",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ROCK",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gigalith.jpg"
    },
    {
        "id": 641,
        "num": 527,
        "nome": "woobat",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/woobat.jpg"
    },
    {
        "id": 642,
        "num": 528,
        "nome": "swoobat",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/swoobat.jpg"
    },
    {
        "id": 643,
        "num": 529,
        "nome": "drilbur",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GROUND",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/drilbur.jpg"
    },
    {
        "id": 644,
        "num": 530,
        "nome": "excadrill",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "STEEL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GROUND",
            "STEEL",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/excadrill.jpg"
    },
    {
        "id": 645,
        "num": 531,
        "nome": "audino",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/audino.jpg"
    },
    {
        "id": 646,
        "num": 531,
        "nome": "audino",
        "desc": "mega audino",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FAIRY"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "FAIRY",
            "UNOVA",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/audino-mega.jpg"
    },
    {
        "id": 647,
        "num": 532,
        "nome": "timburr",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIGHTING",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/timburr.jpg"
    },
    {
        "id": 648,
        "num": 533,
        "nome": "gurdurr",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIGHTING",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gurdurr.jpg"
    },
    {
        "id": 649,
        "num": 534,
        "nome": "conkeldurr",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIGHTING",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/conkeldurr.jpg"
    },
    {
        "id": 650,
        "num": 535,
        "nome": "tympole",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tympole.jpg"
    },
    {
        "id": 651,
        "num": 536,
        "nome": "palpitoad",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GROUND"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "GROUND",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/palpitoad.jpg"
    },
    {
        "id": 652,
        "num": 537,
        "nome": "seismitoad",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GROUND"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "GROUND",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/seismitoad.jpg"
    },
    {
        "id": 653,
        "num": 538,
        "nome": "throh",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIGHTING",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/throh.jpg"
    },
    {
        "id": 654,
        "num": 539,
        "nome": "sawk",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIGHTING",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sawk.jpg"
    },
    {
        "id": 655,
        "num": 540,
        "nome": "sewaddle",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "GRASS",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sewaddle.jpg"
    },
    {
        "id": 656,
        "num": 541,
        "nome": "swadloon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "GRASS",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/swadloon.jpg"
    },
    {
        "id": 657,
        "num": 542,
        "nome": "leavanny",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "GRASS",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/leavanny.jpg"
    },
    {
        "id": 658,
        "num": 543,
        "nome": "venipede",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "POISON",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/venipede.jpg"
    },
    {
        "id": 659,
        "num": 544,
        "nome": "whirlipede",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "POISON",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/whirlipede.jpg"
    },
    {
        "id": 660,
        "num": 545,
        "nome": "scolipede",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "POISON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "POISON",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/scolipede.jpg"
    },
    {
        "id": 661,
        "num": 546,
        "nome": "cottonee",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FAIRY"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "FAIRY",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cottonee.jpg"
    },
    {
        "id": 662,
        "num": 547,
        "nome": "whimsicott",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FAIRY"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "FAIRY",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/whimsicott.jpg"
    },
    {
        "id": 663,
        "num": 548,
        "nome": "petilil",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/petilil.jpg"
    },
    {
        "id": 664,
        "num": 549,
        "nome": "lilligant",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lilligant.jpg"
    },
    {
        "id": 665,
        "num": 549,
        "nome": "lilligant",
        "desc": "hisuian lilligant",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FIGHTING"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "GRASS",
            "FIGHTING",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lilligant-hisuian.jpg"
    },
    {
        "id": 666,
        "num": 550,
        "nome": "basculin",
        "desc": "red-striped form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/basculin.jpg"
    },
    {
        "id": 667,
        "num": 550,
        "nome": "basculin",
        "desc": "blue-striped form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/basculin-blue-striped.jpg"
    },
    {
        "id": 668,
        "num": 550,
        "nome": "basculin",
        "desc": "white-striped form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/basculin-white-striped.jpg"
    },
    {
        "id": 669,
        "num": 551,
        "nome": "sandile",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "DARK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GROUND",
            "DARK",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sandile.jpg"
    },
    {
        "id": 670,
        "num": 552,
        "nome": "krokorok",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "DARK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GROUND",
            "DARK",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/krokorok.jpg"
    },
    {
        "id": 671,
        "num": 553,
        "nome": "krookodile",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "DARK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GROUND",
            "DARK",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/krookodile.jpg"
    },
    {
        "id": 672,
        "num": 554,
        "nome": "darumaka",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIRE",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/darumaka.jpg"
    },
    {
        "id": 673,
        "num": 554,
        "nome": "darumaka",
        "desc": "galarian darumaka",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ICE",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/darumaka-galarian.jpg"
    },
    {
        "id": 674,
        "num": 555,
        "nome": "darmanitan",
        "desc": "standard mode",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIRE",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/darmanitan.jpg"
    },
    {
        "id": 675,
        "num": 555,
        "nome": "darmanitan",
        "desc": "zen mode",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIRE",
            "PSYCHIC",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/darmanitan-zen.jpg"
    },
    {
        "id": 676,
        "num": 555,
        "nome": "darmanitan",
        "desc": "galarian standard mode",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ICE",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/darmanitan-galarian-standard.jpg"
    },
    {
        "id": 677,
        "num": 555,
        "nome": "darmanitan",
        "desc": "galarian zen mode",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "FIRE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ICE",
            "FIRE",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/darmanitan-galarian-zen.jpg"
    },
    {
        "id": 678,
        "num": 556,
        "nome": "maractus",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/maractus.jpg"
    },
    {
        "id": 679,
        "num": 557,
        "nome": "dwebble",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "ROCK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "ROCK",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dwebble.jpg"
    },
    {
        "id": 680,
        "num": 558,
        "nome": "crustle",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "ROCK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "ROCK",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/crustle.jpg"
    },
    {
        "id": 681,
        "num": 559,
        "nome": "scraggy",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "FIGHTING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/scraggy.jpg"
    },
    {
        "id": 682,
        "num": 560,
        "nome": "scrafty",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "FIGHTING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/scrafty.jpg"
    },
    {
        "id": 683,
        "num": 561,
        "nome": "sigilyph",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sigilyph.jpg"
    },
    {
        "id": 684,
        "num": 562,
        "nome": "yamask",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GHOST",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/yamask.jpg"
    },
    {
        "id": 685,
        "num": 562,
        "nome": "yamask",
        "desc": "galarian yamask",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GROUND",
            "GHOST",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/yamask-galarian.jpg"
    },
    {
        "id": 686,
        "num": 563,
        "nome": "cofagrigus",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GHOST",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cofagrigus.jpg"
    },
    {
        "id": 687,
        "num": 564,
        "nome": "tirtouga",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "WATER",
            "ROCK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "ROCK",
            "UNOVA",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tirtouga.jpg"
    },
    {
        "id": 688,
        "num": 565,
        "nome": "carracosta",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "WATER",
            "ROCK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "ROCK",
            "UNOVA",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/carracosta.jpg"
    },
    {
        "id": 689,
        "num": 566,
        "nome": "archen",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ROCK",
            "FLYING",
            "UNOVA",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/archen.jpg"
    },
    {
        "id": 690,
        "num": 567,
        "nome": "archeops",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ROCK",
            "FLYING",
            "UNOVA",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/archeops.jpg"
    },
    {
        "id": 691,
        "num": 568,
        "nome": "trubbish",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "POISON",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/trubbish.jpg"
    },
    {
        "id": 692,
        "num": 569,
        "nome": "garbodor",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "POISON",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/garbodor.jpg"
    },
    {
        "id": 693,
        "num": 570,
        "nome": "zorua",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zorua.jpg"
    },
    {
        "id": 694,
        "num": 570,
        "nome": "zorua",
        "desc": "hisuian zorua",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "NORMAL",
            "GHOST",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zorua-hisuian.jpg"
    },
    {
        "id": 695,
        "num": 571,
        "nome": "zoroark",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zoroark.jpg"
    },
    {
        "id": 696,
        "num": 571,
        "nome": "zoroark",
        "desc": "hisuian zoroark",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "NORMAL",
            "GHOST",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zoroark-hisuian.jpg"
    },
    {
        "id": 697,
        "num": 572,
        "nome": "minccino",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/minccino.jpg"
    },
    {
        "id": 698,
        "num": 573,
        "nome": "cinccino",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cinccino.jpg"
    },
    {
        "id": 699,
        "num": 574,
        "nome": "gothita",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gothita.jpg"
    },
    {
        "id": 700,
        "num": 575,
        "nome": "gothorita",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gothorita.jpg"
    },
    {
        "id": 701,
        "num": 576,
        "nome": "gothitelle",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gothitelle.jpg"
    },
    {
        "id": 702,
        "num": 577,
        "nome": "solosis",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/solosis.jpg"
    },
    {
        "id": 703,
        "num": 578,
        "nome": "duosion",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/duosion.jpg"
    },
    {
        "id": 704,
        "num": 579,
        "nome": "reuniclus",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/reuniclus.jpg"
    },
    {
        "id": 705,
        "num": 580,
        "nome": "ducklett",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ducklett.jpg"
    },
    {
        "id": 706,
        "num": 581,
        "nome": "swanna",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/swanna.jpg"
    },
    {
        "id": 707,
        "num": 582,
        "nome": "vanillite",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ICE",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vanillite.jpg"
    },
    {
        "id": 708,
        "num": 583,
        "nome": "vanillish",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ICE",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vanillish.jpg"
    },
    {
        "id": 709,
        "num": 584,
        "nome": "vanilluxe",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ICE",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vanilluxe.jpg"
    },
    {
        "id": 710,
        "num": 585,
        "nome": "deerling",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "GRASS",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/deerling.jpg"
    },
    {
        "id": 711,
        "num": 586,
        "nome": "sawsbuck",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "GRASS"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "GRASS",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sawsbuck.jpg"
    },
    {
        "id": 712,
        "num": 587,
        "nome": "emolga",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ELECTRIC",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/emolga.jpg"
    },
    {
        "id": 713,
        "num": 588,
        "nome": "karrablast",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/karrablast.jpg"
    },
    {
        "id": 714,
        "num": 589,
        "nome": "escavalier",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "STEEL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "STEEL",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/escavalier.jpg"
    },
    {
        "id": 715,
        "num": 590,
        "nome": "foongus",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "POISON",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/foongus.jpg"
    },
    {
        "id": 716,
        "num": 591,
        "nome": "amoonguss",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "POISON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "POISON",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/amoonguss.jpg"
    },
    {
        "id": 717,
        "num": 592,
        "nome": "frillish",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GHOST"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "GHOST",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/frillish.jpg"
    },
    {
        "id": 718,
        "num": 593,
        "nome": "jellicent",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GHOST"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "GHOST",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/jellicent.jpg"
    },
    {
        "id": 719,
        "num": 594,
        "nome": "alomomola",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/alomomola.jpg"
    },
    {
        "id": 720,
        "num": 595,
        "nome": "joltik",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "ELECTRIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "ELECTRIC",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/joltik.jpg"
    },
    {
        "id": 721,
        "num": 596,
        "nome": "galvantula",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "ELECTRIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "ELECTRIC",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/galvantula.jpg"
    },
    {
        "id": 722,
        "num": 597,
        "nome": "ferroseed",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "STEEL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "STEEL",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ferroseed.jpg"
    },
    {
        "id": 723,
        "num": 598,
        "nome": "ferrothorn",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "STEEL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "STEEL",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ferrothorn.jpg"
    },
    {
        "id": 724,
        "num": 599,
        "nome": "klink",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "STEEL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/klink.jpg"
    },
    {
        "id": 725,
        "num": 600,
        "nome": "klang",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "STEEL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/klang.jpg"
    },
    {
        "id": 726,
        "num": 601,
        "nome": "klinklang",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "STEEL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/klinklang.jpg"
    },
    {
        "id": 727,
        "num": 602,
        "nome": "tynamo",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ELECTRIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tynamo.jpg"
    },
    {
        "id": 728,
        "num": 603,
        "nome": "eelektrik",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ELECTRIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/eelektrik.jpg"
    },
    {
        "id": 729,
        "num": 604,
        "nome": "eelektross",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ELECTRIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/eelektross.jpg"
    },
    {
        "id": 730,
        "num": 605,
        "nome": "elgyem",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/elgyem.jpg"
    },
    {
        "id": 731,
        "num": 606,
        "nome": "beheeyem",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "PSYCHIC",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/beheeyem.jpg"
    },
    {
        "id": 732,
        "num": 607,
        "nome": "litwick",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GHOST",
            "FIRE",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/litwick.jpg"
    },
    {
        "id": 733,
        "num": 608,
        "nome": "lampent",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GHOST",
            "FIRE",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lampent.jpg"
    },
    {
        "id": 734,
        "num": 609,
        "nome": "chandelure",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GHOST",
            "FIRE",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chandelure.jpg"
    },
    {
        "id": 735,
        "num": 610,
        "nome": "axew",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DRAGON",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/axew.jpg"
    },
    {
        "id": 736,
        "num": 611,
        "nome": "fraxure",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DRAGON",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/fraxure.jpg"
    },
    {
        "id": 737,
        "num": 612,
        "nome": "haxorus",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DRAGON",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/haxorus.jpg"
    },
    {
        "id": 738,
        "num": 613,
        "nome": "cubchoo",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ICE",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cubchoo.jpg"
    },
    {
        "id": 739,
        "num": 614,
        "nome": "beartic",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ICE",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/beartic.jpg"
    },
    {
        "id": 740,
        "num": 615,
        "nome": "cryogonal",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ICE",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cryogonal.jpg"
    },
    {
        "id": 741,
        "num": 616,
        "nome": "shelmet",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shelmet.jpg"
    },
    {
        "id": 742,
        "num": 617,
        "nome": "accelgor",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/accelgor.jpg"
    },
    {
        "id": 743,
        "num": 618,
        "nome": "stunfisk",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "ELECTRIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GROUND",
            "ELECTRIC",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/stunfisk.jpg"
    },
    {
        "id": 744,
        "num": 618,
        "nome": "stunfisk",
        "desc": "galarian stunfisk",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "STEEL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GROUND",
            "STEEL",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/stunfisk-galarian.jpg"
    },
    {
        "id": 745,
        "num": 619,
        "nome": "mienfoo",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIGHTING",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mienfoo.jpg"
    },
    {
        "id": 746,
        "num": 620,
        "nome": "mienshao",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIGHTING",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mienshao.jpg"
    },
    {
        "id": 747,
        "num": 621,
        "nome": "druddigon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DRAGON",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/druddigon.jpg"
    },
    {
        "id": 748,
        "num": 622,
        "nome": "golett",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "GHOST"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GROUND",
            "GHOST",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/golett.jpg"
    },
    {
        "id": 749,
        "num": 623,
        "nome": "golurk",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "GHOST"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GROUND",
            "GHOST",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/golurk.jpg"
    },
    {
        "id": 750,
        "num": 624,
        "nome": "pawniard",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "STEEL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "STEEL",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pawniard.jpg"
    },
    {
        "id": 751,
        "num": 625,
        "nome": "bisharp",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "STEEL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "STEEL",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bisharp.jpg"
    },
    {
        "id": 752,
        "num": 626,
        "nome": "bouffalant",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bouffalant.jpg"
    },
    {
        "id": 753,
        "num": 627,
        "nome": "rufflet",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rufflet.jpg"
    },
    {
        "id": 754,
        "num": 628,
        "nome": "braviary",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/braviary.jpg"
    },
    {
        "id": 755,
        "num": 628,
        "nome": "braviary",
        "desc": "hisuian braviary",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FLYING"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "PSYCHIC",
            "FLYING",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/braviary-hisuian.jpg"
    },
    {
        "id": 756,
        "num": 629,
        "nome": "vullaby",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vullaby.jpg"
    },
    {
        "id": 757,
        "num": 630,
        "nome": "mandibuzz",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "FLYING",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mandibuzz.jpg"
    },
    {
        "id": 758,
        "num": 631,
        "nome": "heatmor",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FIRE",
            "UNOVA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/heatmor.jpg"
    },
    {
        "id": 759,
        "num": 632,
        "nome": "durant",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "STEEL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "STEEL",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/durant.jpg"
    },
    {
        "id": 760,
        "num": 633,
        "nome": "deino",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "DRAGON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "DRAGON",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/deino.jpg"
    },
    {
        "id": 761,
        "num": 634,
        "nome": "zweilous",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "DRAGON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "DRAGON",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zweilous.jpg"
    },
    {
        "id": 762,
        "num": 635,
        "nome": "hydreigon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "DRAGON"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DARK",
            "DRAGON",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hydreigon.jpg"
    },
    {
        "id": 763,
        "num": 636,
        "nome": "larvesta",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "FIRE",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/larvesta.jpg"
    },
    {
        "id": 764,
        "num": 637,
        "nome": "volcarona",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "FIRE",
            "UNOVA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/volcarona.jpg"
    },
    {
        "id": 765,
        "num": 638,
        "nome": "cobalion",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "STEEL",
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "STEEL",
            "FIGHTING",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cobalion.jpg"
    },
    {
        "id": 766,
        "num": 639,
        "nome": "terrakion",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ROCK",
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ROCK",
            "FIGHTING",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/terrakion.jpg"
    },
    {
        "id": 767,
        "num": 640,
        "nome": "virizion",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GRASS",
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GRASS",
            "FIGHTING",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/virizion.jpg"
    },
    {
        "id": 768,
        "num": 641,
        "nome": "tornadus",
        "desc": "incarnate forme",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FLYING",
            "UNOVA",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tornadus.jpg"
    },
    {
        "id": 769,
        "num": 641,
        "nome": "tornadus",
        "desc": "therian forme",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "FLYING",
            "UNOVA",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tornadus-therian.jpg"
    },
    {
        "id": 770,
        "num": 642,
        "nome": "thundurus",
        "desc": "incarnate forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ELECTRIC",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ELECTRIC",
            "FLYING",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/thundurus.jpg"
    },
    {
        "id": 771,
        "num": 642,
        "nome": "thundurus",
        "desc": "therian forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ELECTRIC",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "ELECTRIC",
            "FLYING",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/thundurus-therian.jpg"
    },
    {
        "id": 772,
        "num": 643,
        "nome": "reshiram",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "FIRE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DRAGON",
            "FIRE",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/reshiram.jpg"
    },
    {
        "id": 773,
        "num": 644,
        "nome": "zekrom",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "ELECTRIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DRAGON",
            "ELECTRIC",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zekrom.jpg"
    },
    {
        "id": 774,
        "num": 645,
        "nome": "landorus",
        "desc": "incarnate forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GROUND",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GROUND",
            "FLYING",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/landorus.jpg"
    },
    {
        "id": 775,
        "num": 645,
        "nome": "landorus",
        "desc": "therian forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GROUND",
            "FLYING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "GROUND",
            "FLYING",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/landorus-therian.jpg"
    },
    {
        "id": 776,
        "num": 646,
        "nome": "kyurem",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "ICE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DRAGON",
            "ICE",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kyurem.jpg"
    },
    {
        "id": 777,
        "num": 646,
        "nome": "kyurem",
        "desc": "white kyurem",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "ICE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DRAGON",
            "ICE",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kyurem-white.jpg"
    },
    {
        "id": 778,
        "num": 646,
        "nome": "kyurem",
        "desc": "black kyurem",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "ICE"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "DRAGON",
            "ICE",
            "UNOVA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kyurem-black.jpg"
    },
    {
        "id": 779,
        "num": 647,
        "nome": "keldeo",
        "desc": "ordinary form",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "WATER",
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "FIGHTING",
            "UNOVA",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/keldeo.jpg"
    },
    {
        "id": 780,
        "num": 647,
        "nome": "keldeo",
        "desc": "resolute form",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "WATER",
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "WATER",
            "FIGHTING",
            "UNOVA",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/keldeo-resolute.jpg"
    },
    {
        "id": 781,
        "num": 648,
        "nome": "meloetta",
        "desc": "aria forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "NORMAL",
            "PSYCHIC"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "PSYCHIC",
            "UNOVA",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/meloetta.jpg"
    },
    {
        "id": 782,
        "num": 648,
        "nome": "meloetta",
        "desc": "pirouette forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "NORMAL",
            "FIGHTING"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "NORMAL",
            "FIGHTING",
            "UNOVA",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/meloetta-pirouette.jpg"
    },
    {
        "id": 783,
        "num": 649,
        "nome": "genesect",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "BUG",
            "STEEL"
        ],
        "geracao": 5,
        "regiao": "UNOVA",
        "matches": [
            "BUG",
            "STEEL",
            "UNOVA",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/genesect.jpg"
    },
    {
        "id": 784,
        "num": 650,
        "nome": "chespin",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GRASS",
            "KALOS",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chespin.jpg"
    },
    {
        "id": 785,
        "num": 651,
        "nome": "quilladin",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GRASS",
            "KALOS",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/quilladin.jpg"
    },
    {
        "id": 786,
        "num": 652,
        "nome": "chesnaught",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FIGHTING"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GRASS",
            "FIGHTING",
            "KALOS",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chesnaught.jpg"
    },
    {
        "id": 787,
        "num": 653,
        "nome": "fennekin",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FIRE",
            "KALOS",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/fennekin.jpg"
    },
    {
        "id": 788,
        "num": 654,
        "nome": "braixen",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FIRE",
            "KALOS",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/braixen.jpg"
    },
    {
        "id": 789,
        "num": 655,
        "nome": "delphox",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "PSYCHIC"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FIRE",
            "PSYCHIC",
            "KALOS",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/delphox.jpg"
    },
    {
        "id": 790,
        "num": 656,
        "nome": "froakie",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "WATER",
            "KALOS",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/froakie.jpg"
    },
    {
        "id": 791,
        "num": 657,
        "nome": "frogadier",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "WATER",
            "KALOS",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/frogadier.jpg"
    },
    {
        "id": 792,
        "num": 658,
        "nome": "greninja",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER",
            "DARK"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "WATER",
            "DARK",
            "KALOS",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/greninja.jpg"
    },
    {
        "id": 793,
        "num": 658,
        "nome": "greninja",
        "desc": "ash-greninja",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER",
            "DARK"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "WATER",
            "DARK",
            "KALOS",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/greninja-ash.jpg"
    },
    {
        "id": 794,
        "num": 659,
        "nome": "bunnelby",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "NORMAL",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bunnelby.jpg"
    },
    {
        "id": 795,
        "num": 660,
        "nome": "diggersby",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "GROUND"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "NORMAL",
            "GROUND",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/diggersby.jpg"
    },
    {
        "id": 796,
        "num": 661,
        "nome": "fletchling",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "NORMAL",
            "FLYING",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/fletchling.jpg"
    },
    {
        "id": 797,
        "num": 662,
        "nome": "fletchinder",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FLYING"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FIRE",
            "FLYING",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/fletchinder.jpg"
    },
    {
        "id": 798,
        "num": 663,
        "nome": "talonflame",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FLYING"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FIRE",
            "FLYING",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/talonflame.jpg"
    },
    {
        "id": 799,
        "num": 664,
        "nome": "scatterbug",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "BUG",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/scatterbug.jpg"
    },
    {
        "id": 800,
        "num": 665,
        "nome": "spewpa",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "BUG",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/spewpa.jpg"
    },
    {
        "id": 801,
        "num": 666,
        "nome": "vivillon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FLYING"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "BUG",
            "FLYING",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vivillon.jpg"
    },
    {
        "id": 802,
        "num": 667,
        "nome": "litleo",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "NORMAL"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FIRE",
            "NORMAL",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/litleo.jpg"
    },
    {
        "id": 803,
        "num": 668,
        "nome": "pyroar",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "NORMAL"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FIRE",
            "NORMAL",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pyroar.jpg"
    },
    {
        "id": 804,
        "num": 669,
        "nome": "flabébé",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FAIRY",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/flabebe.jpg"
    },
    {
        "id": 805,
        "num": 670,
        "nome": "floette",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FAIRY",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/floette.jpg"
    },
    {
        "id": 806,
        "num": 671,
        "nome": "florges",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FAIRY",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/florges.jpg"
    },
    {
        "id": 807,
        "num": 672,
        "nome": "skiddo",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GRASS",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/skiddo.jpg"
    },
    {
        "id": 808,
        "num": 673,
        "nome": "gogoat",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GRASS",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gogoat.jpg"
    },
    {
        "id": 809,
        "num": 674,
        "nome": "pancham",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FIGHTING",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pancham.jpg"
    },
    {
        "id": 810,
        "num": 675,
        "nome": "pangoro",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "DARK"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FIGHTING",
            "DARK",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pangoro.jpg"
    },
    {
        "id": 811,
        "num": 676,
        "nome": "furfrou",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "NORMAL",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/furfrou.jpg"
    },
    {
        "id": 812,
        "num": 677,
        "nome": "espurr",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "PSYCHIC",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/espurr.jpg"
    },
    {
        "id": 813,
        "num": 678,
        "nome": "meowstic",
        "desc": "male",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "PSYCHIC",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/meowstic.jpg"
    },
    {
        "id": 814,
        "num": 678,
        "nome": "meowstic",
        "desc": "female",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "PSYCHIC",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/meowstic-female.jpg"
    },
    {
        "id": 815,
        "num": 679,
        "nome": "honedge",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "GHOST"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "STEEL",
            "GHOST",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/honedge.jpg"
    },
    {
        "id": 816,
        "num": 680,
        "nome": "doublade",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "GHOST"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "STEEL",
            "GHOST",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/doublade.jpg"
    },
    {
        "id": 817,
        "num": 681,
        "nome": "aegislash",
        "desc": "shield forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "GHOST"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "STEEL",
            "GHOST",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/aegislash.jpg"
    },
    {
        "id": 818,
        "num": 681,
        "nome": "aegislash",
        "desc": "blade forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "GHOST"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "STEEL",
            "GHOST",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/aegislash-blade.jpg"
    },
    {
        "id": 819,
        "num": 682,
        "nome": "spritzee",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FAIRY",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/spritzee.jpg"
    },
    {
        "id": 820,
        "num": 683,
        "nome": "aromatisse",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FAIRY",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/aromatisse.jpg"
    },
    {
        "id": 821,
        "num": 684,
        "nome": "swirlix",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FAIRY",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/swirlix.jpg"
    },
    {
        "id": 822,
        "num": 685,
        "nome": "slurpuff",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FAIRY",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slurpuff.jpg"
    },
    {
        "id": 823,
        "num": 686,
        "nome": "inkay",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "PSYCHIC"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "DARK",
            "PSYCHIC",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/inkay.jpg"
    },
    {
        "id": 824,
        "num": 687,
        "nome": "malamar",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "PSYCHIC"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "DARK",
            "PSYCHIC",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/malamar.jpg"
    },
    {
        "id": 825,
        "num": 688,
        "nome": "binacle",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "WATER"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ROCK",
            "WATER",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/binacle.jpg"
    },
    {
        "id": 826,
        "num": 689,
        "nome": "barbaracle",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "WATER"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ROCK",
            "WATER",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/barbaracle.jpg"
    },
    {
        "id": 827,
        "num": 690,
        "nome": "skrelp",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "WATER"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "POISON",
            "WATER",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/skrelp.jpg"
    },
    {
        "id": 828,
        "num": 691,
        "nome": "dragalge",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "DRAGON"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "POISON",
            "DRAGON",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dragalge.jpg"
    },
    {
        "id": 829,
        "num": 692,
        "nome": "clauncher",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "WATER",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/clauncher.jpg"
    },
    {
        "id": 830,
        "num": 693,
        "nome": "clawitzer",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "WATER",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/clawitzer.jpg"
    },
    {
        "id": 831,
        "num": 694,
        "nome": "helioptile",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "NORMAL"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ELECTRIC",
            "NORMAL",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/helioptile.jpg"
    },
    {
        "id": 832,
        "num": 695,
        "nome": "heliolisk",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "NORMAL"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ELECTRIC",
            "NORMAL",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/heliolisk.jpg"
    },
    {
        "id": 833,
        "num": 696,
        "nome": "tyrunt",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "DRAGON"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ROCK",
            "DRAGON",
            "KALOS",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tyrunt.jpg"
    },
    {
        "id": 834,
        "num": 697,
        "nome": "tyrantrum",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "DRAGON"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ROCK",
            "DRAGON",
            "KALOS",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tyrantrum.jpg"
    },
    {
        "id": 835,
        "num": 698,
        "nome": "amaura",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "ICE"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ROCK",
            "ICE",
            "KALOS",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/amaura.jpg"
    },
    {
        "id": 836,
        "num": 699,
        "nome": "aurorus",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ROCK",
            "ICE"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ROCK",
            "ICE",
            "KALOS",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/aurorus.jpg"
    },
    {
        "id": 837,
        "num": 700,
        "nome": "sylveon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FAIRY",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sylveon.jpg"
    },
    {
        "id": 838,
        "num": 701,
        "nome": "hawlucha",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "FLYING"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FIGHTING",
            "FLYING",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hawlucha.jpg"
    },
    {
        "id": 839,
        "num": 702,
        "nome": "dedenne",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ELECTRIC",
            "FAIRY",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dedenne.jpg"
    },
    {
        "id": 840,
        "num": 703,
        "nome": "carbink",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ROCK",
            "FAIRY",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/carbink.jpg"
    },
    {
        "id": 841,
        "num": 704,
        "nome": "goomy",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "DRAGON",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/goomy.jpg"
    },
    {
        "id": 842,
        "num": 705,
        "nome": "sliggoo",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "DRAGON",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sliggoo.jpg"
    },
    {
        "id": 843,
        "num": 705,
        "nome": "sliggoo",
        "desc": "hisuian sliggoo",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "DRAGON"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "STEEL",
            "DRAGON",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sliggoo-hisuian.jpg"
    },
    {
        "id": 844,
        "num": 706,
        "nome": "goodra",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "DRAGON",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/goodra.jpg"
    },
    {
        "id": 845,
        "num": 706,
        "nome": "goodra",
        "desc": "hisuian goodra",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "DRAGON"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "STEEL",
            "DRAGON",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/goodra-hisuian.jpg"
    },
    {
        "id": 846,
        "num": 707,
        "nome": "klefki",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "STEEL",
            "FAIRY",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/klefki.jpg"
    },
    {
        "id": 847,
        "num": 708,
        "nome": "phantump",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GHOST",
            "GRASS",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/phantump.jpg"
    },
    {
        "id": 848,
        "num": 709,
        "nome": "trevenant",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GHOST",
            "GRASS",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/trevenant.jpg"
    },
    {
        "id": 849,
        "num": 710,
        "nome": "pumpkaboo",
        "desc": "average size",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GHOST",
            "GRASS",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pumpkaboo.jpg"
    },
    {
        "id": 850,
        "num": 710,
        "nome": "pumpkaboo",
        "desc": "small size",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GHOST",
            "GRASS",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/pumpkaboo.jpg"
    },
    {
        "id": 851,
        "num": 710,
        "nome": "pumpkaboo",
        "desc": "large size",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GHOST",
            "GRASS",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/pumpkaboo.jpg"
    },
    {
        "id": 852,
        "num": 710,
        "nome": "pumpkaboo",
        "desc": "super size",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GHOST",
            "GRASS",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/pumpkaboo.jpg"
    },
    {
        "id": 853,
        "num": 711,
        "nome": "gourgeist",
        "desc": "average size",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GHOST",
            "GRASS",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gourgeist.jpg"
    },
    {
        "id": 854,
        "num": 711,
        "nome": "gourgeist",
        "desc": "small size",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GHOST",
            "GRASS",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/gourgeist.jpg"
    },
    {
        "id": 855,
        "num": 711,
        "nome": "gourgeist",
        "desc": "large size",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GHOST",
            "GRASS",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/gourgeist.jpg"
    },
    {
        "id": 856,
        "num": 711,
        "nome": "gourgeist",
        "desc": "super size",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GRASS"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "GHOST",
            "GRASS",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/gourgeist.jpg"
    },
    {
        "id": 857,
        "num": 712,
        "nome": "bergmite",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ICE",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bergmite.jpg"
    },
    {
        "id": 858,
        "num": 713,
        "nome": "avalugg",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ICE",
            "KALOS",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/avalugg.jpg"
    },
    {
        "id": 859,
        "num": 713,
        "nome": "avalugg",
        "desc": "hisuian avalugg",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "ROCK"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "ICE",
            "ROCK",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/avalugg-hisuian.jpg"
    },
    {
        "id": 860,
        "num": 714,
        "nome": "noibat",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FLYING",
            "DRAGON"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FLYING",
            "DRAGON",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/noibat.jpg"
    },
    {
        "id": 861,
        "num": 715,
        "nome": "noivern",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FLYING",
            "DRAGON"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FLYING",
            "DRAGON",
            "KALOS",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/noivern.jpg"
    },
    {
        "id": 862,
        "num": 716,
        "nome": "xerneas",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FAIRY",
            "KALOS",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/xerneas.jpg"
    },
    {
        "id": 863,
        "num": 717,
        "nome": "yveltal",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DARK",
            "FLYING"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "DARK",
            "FLYING",
            "KALOS",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/yveltal.jpg"
    },
    {
        "id": 864,
        "num": 718,
        "nome": "zygarde",
        "desc": "50% forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "GROUND"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "DRAGON",
            "GROUND",
            "KALOS",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zygarde.jpg"
    },
    {
        "id": 865,
        "num": 718,
        "nome": "zygarde",
        "desc": "10% forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "GROUND"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "DRAGON",
            "GROUND",
            "KALOS",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zygarde-10.jpg"
    },
    {
        "id": 866,
        "num": 718,
        "nome": "zygarde",
        "desc": "complete forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON",
            "GROUND"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "DRAGON",
            "GROUND",
            "KALOS",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zygarde-complete.jpg"
    },
    {
        "id": 867,
        "num": 719,
        "nome": "diancie",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "ROCK",
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ROCK",
            "FAIRY",
            "KALOS",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/diancie.jpg"
    },
    {
        "id": 868,
        "num": 719,
        "nome": "diancie",
        "desc": "mega diancie",
        "mega": true,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "ROCK",
            "FAIRY"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "ROCK",
            "FAIRY",
            "KALOS",
            "MYTHIC",
            "MEGA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/diancie-mega.jpg"
    },
    {
        "id": 869,
        "num": 720,
        "nome": "hoopa",
        "desc": "hoopa confined",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "PSYCHIC",
            "GHOST"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "PSYCHIC",
            "GHOST",
            "KALOS",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hoopa.jpg"
    },
    {
        "id": 870,
        "num": 720,
        "nome": "hoopa",
        "desc": "hoopa unbound",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "PSYCHIC",
            "DARK"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "PSYCHIC",
            "DARK",
            "KALOS",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hoopa-unbound.jpg"
    },
    {
        "id": 871,
        "num": 721,
        "nome": "volcanion",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "FIRE",
            "WATER"
        ],
        "geracao": 6,
        "regiao": "KALOS",
        "matches": [
            "FIRE",
            "WATER",
            "KALOS",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/volcanion.jpg"
    },
    {
        "id": 872,
        "num": 722,
        "nome": "rowlet",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "FLYING",
            "ALOLA",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rowlet.jpg"
    },
    {
        "id": 873,
        "num": 723,
        "nome": "dartrix",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "FLYING",
            "ALOLA",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dartrix.jpg"
    },
    {
        "id": 874,
        "num": 724,
        "nome": "decidueye",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "GHOST"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "GHOST",
            "ALOLA",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/decidueye.jpg"
    },
    {
        "id": 875,
        "num": 724,
        "nome": "decidueye",
        "desc": "hisuian decidueye",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FIGHTING"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "GRASS",
            "FIGHTING",
            "HISUI",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/decidueye-hisuian.jpg"
    },
    {
        "id": 876,
        "num": 725,
        "nome": "litten",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FIRE",
            "ALOLA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/litten.jpg"
    },
    {
        "id": 877,
        "num": 726,
        "nome": "torracat",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FIRE",
            "ALOLA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/torracat.jpg"
    },
    {
        "id": 878,
        "num": 727,
        "nome": "incineroar",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "DARK"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FIRE",
            "DARK",
            "ALOLA",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/incineroar.jpg"
    },
    {
        "id": 879,
        "num": 728,
        "nome": "popplio",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "WATER",
            "ALOLA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/popplio.jpg"
    },
    {
        "id": 880,
        "num": 729,
        "nome": "brionne",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "WATER",
            "ALOLA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/brionne.jpg"
    },
    {
        "id": 881,
        "num": 730,
        "nome": "primarina",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "WATER",
            "FAIRY",
            "ALOLA",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/primarina.jpg"
    },
    {
        "id": 882,
        "num": 731,
        "nome": "pikipek",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "FLYING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pikipek.jpg"
    },
    {
        "id": 883,
        "num": 732,
        "nome": "trumbeak",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "FLYING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/trumbeak.jpg"
    },
    {
        "id": 884,
        "num": 733,
        "nome": "toucannon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "FLYING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/toucannon.jpg"
    },
    {
        "id": 885,
        "num": 734,
        "nome": "yungoos",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/yungoos.jpg"
    },
    {
        "id": 886,
        "num": 735,
        "nome": "gumshoos",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gumshoos.jpg"
    },
    {
        "id": 887,
        "num": 736,
        "nome": "grubbin",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "BUG",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/grubbin.jpg"
    },
    {
        "id": 888,
        "num": 737,
        "nome": "charjabug",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "ELECTRIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "BUG",
            "ELECTRIC",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/charjabug.jpg"
    },
    {
        "id": 889,
        "num": 738,
        "nome": "vikavolt",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "ELECTRIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "BUG",
            "ELECTRIC",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/vikavolt.jpg"
    },
    {
        "id": 890,
        "num": 739,
        "nome": "crabrawler",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FIGHTING",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/crabrawler.jpg"
    },
    {
        "id": 891,
        "num": 740,
        "nome": "crabominable",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "ICE"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FIGHTING",
            "ICE",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/crabominable.jpg"
    },
    {
        "id": 892,
        "num": 741,
        "nome": "oricorio",
        "desc": "baile style",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FIRE",
            "FLYING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/oricorio-baile.avif"
    },
    {
        "id": 893,
        "num": 741,
        "nome": "oricorio",
        "desc": "pom-pom style",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ELECTRIC",
            "FLYING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/oricorio-pom-pom.jpg"
    },
    {
        "id": 894,
        "num": 741,
        "nome": "oricorio",
        "desc": "pa'u style",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "PSYCHIC",
            "FLYING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/oricorio-pau.jpg"
    },
    {
        "id": 895,
        "num": 741,
        "nome": "oricorio",
        "desc": "sensu style",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GHOST",
            "FLYING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/oricorio-sensu.jpg"
    },
    {
        "id": 896,
        "num": 742,
        "nome": "cutiefly",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "BUG",
            "FAIRY",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cutiefly.jpg"
    },
    {
        "id": 897,
        "num": 743,
        "nome": "ribombee",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "BUG",
            "FAIRY",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ribombee.jpg"
    },
    {
        "id": 898,
        "num": 744,
        "nome": "rockruff",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rockruff.jpg"
    },
    {
        "id": 899,
        "num": 744,
        "nome": "rockruff",
        "desc": "own tempo rockruff",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/rockruff.jpg"
    },
    {
        "id": 900,
        "num": 745,
        "nome": "lycanroc",
        "desc": "midday form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/lycanroc-midday.avif"
    },
    {
        "id": 901,
        "num": 745,
        "nome": "lycanroc",
        "desc": "midnight form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lycanroc-midnight.jpg"
    },
    {
        "id": 902,
        "num": 745,
        "nome": "lycanroc",
        "desc": "dusk form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lycanroc-dusk.jpg"
    },
    {
        "id": 903,
        "num": 746,
        "nome": "wishiwashi",
        "desc": "solo form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "WATER",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/wishiwashi-solo.avif"
    },
    {
        "id": 904,
        "num": 746,
        "nome": "wishiwashi",
        "desc": "school form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "WATER",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wishiwashi-school.jpg"
    },
    {
        "id": 905,
        "num": 747,
        "nome": "mareanie",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "WATER"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "POISON",
            "WATER",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mareanie.jpg"
    },
    {
        "id": 906,
        "num": 748,
        "nome": "toxapex",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "WATER"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "POISON",
            "WATER",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/toxapex.jpg"
    },
    {
        "id": 907,
        "num": 749,
        "nome": "mudbray",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GROUND",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mudbray.jpg"
    },
    {
        "id": 908,
        "num": 750,
        "nome": "mudsdale",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GROUND",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mudsdale.jpg"
    },
    {
        "id": 909,
        "num": 751,
        "nome": "dewpider",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "BUG"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "WATER",
            "BUG",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dewpider.jpg"
    },
    {
        "id": 910,
        "num": 752,
        "nome": "araquanid",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "BUG"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "WATER",
            "BUG",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/araquanid.jpg"
    },
    {
        "id": 911,
        "num": 753,
        "nome": "fomantis",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/fomantis.jpg"
    },
    {
        "id": 912,
        "num": 754,
        "nome": "lurantis",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lurantis.jpg"
    },
    {
        "id": 913,
        "num": 755,
        "nome": "morelull",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "FAIRY",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/morelull.jpg"
    },
    {
        "id": 914,
        "num": 756,
        "nome": "shiinotic",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "FAIRY",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shiinotic.jpg"
    },
    {
        "id": 915,
        "num": 757,
        "nome": "salandit",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "FIRE"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "POISON",
            "FIRE",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/salandit.jpg"
    },
    {
        "id": 916,
        "num": 758,
        "nome": "salazzle",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "FIRE"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "POISON",
            "FIRE",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/salazzle.jpg"
    },
    {
        "id": 917,
        "num": 759,
        "nome": "stufful",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FIGHTING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "FIGHTING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/stufful.jpg"
    },
    {
        "id": 918,
        "num": 760,
        "nome": "bewear",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FIGHTING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "FIGHTING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bewear.jpg"
    },
    {
        "id": 919,
        "num": 761,
        "nome": "bounsweet",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bounsweet.jpg"
    },
    {
        "id": 920,
        "num": 762,
        "nome": "steenee",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/steenee.jpg"
    },
    {
        "id": 921,
        "num": 763,
        "nome": "tsareena",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tsareena.jpg"
    },
    {
        "id": 922,
        "num": 764,
        "nome": "comfey",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FAIRY",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/comfey.jpg"
    },
    {
        "id": 923,
        "num": 765,
        "nome": "oranguru",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "PSYCHIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "PSYCHIC",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/oranguru.jpg"
    },
    {
        "id": 924,
        "num": 766,
        "nome": "passimian",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FIGHTING",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/passimian.jpg"
    },
    {
        "id": 925,
        "num": 767,
        "nome": "wimpod",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "WATER"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "BUG",
            "WATER",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wimpod.jpg"
    },
    {
        "id": 926,
        "num": 768,
        "nome": "golisopod",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "WATER"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "BUG",
            "WATER",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/golisopod.jpg"
    },
    {
        "id": 927,
        "num": 769,
        "nome": "sandygast",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GROUND"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GHOST",
            "GROUND",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sandygast.jpg"
    },
    {
        "id": 928,
        "num": 770,
        "nome": "palossand",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GROUND"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GHOST",
            "GROUND",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/palossand.jpg"
    },
    {
        "id": 929,
        "num": 771,
        "nome": "pyukumuku",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "WATER",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pyukumuku.jpg"
    },
    {
        "id": 930,
        "num": 772,
        "nome": "type: null",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "ALOLA",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/type-null.avif"
    },
    {
        "id": 931,
        "num": 773,
        "nome": "silvally",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "ALOLA",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/silvally.jpg"
    },
    {
        "id": 932,
        "num": 774,
        "nome": "minior",
        "desc": "meteor form",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "FLYING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/minior.jpg"
    },
    {
        "id": 933,
        "num": 774,
        "nome": "minior",
        "desc": "core form",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "FLYING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/minior-core.jpg"
    },
    {
        "id": 934,
        "num": 775,
        "nome": "komala",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/komala.jpg"
    },
    {
        "id": 935,
        "num": 776,
        "nome": "turtonator",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "DRAGON"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FIRE",
            "DRAGON",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/turtonator.jpg"
    },
    {
        "id": 936,
        "num": 777,
        "nome": "togedemaru",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "STEEL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ELECTRIC",
            "STEEL",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/togedemaru.jpg"
    },
    {
        "id": 937,
        "num": 778,
        "nome": "mimikyu",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GHOST",
            "FAIRY",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mimikyu.jpg"
    },
    {
        "id": 938,
        "num": 779,
        "nome": "bruxish",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "PSYCHIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "WATER",
            "PSYCHIC",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bruxish.jpg"
    },
    {
        "id": 939,
        "num": 780,
        "nome": "drampa",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "DRAGON"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "NORMAL",
            "DRAGON",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/drampa.jpg"
    },
    {
        "id": 940,
        "num": 781,
        "nome": "dhelmise",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST",
            "GRASS"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GHOST",
            "GRASS",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dhelmise.jpg"
    },
    {
        "id": 941,
        "num": 782,
        "nome": "jangmo-o",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "DRAGON",
            "ALOLA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/jangmo-o.jpg"
    },
    {
        "id": 942,
        "num": 783,
        "nome": "hakamo-o",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "FIGHTING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "DRAGON",
            "FIGHTING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hakamo-o.jpg"
    },
    {
        "id": 943,
        "num": 784,
        "nome": "kommo-o",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "FIGHTING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "DRAGON",
            "FIGHTING",
            "ALOLA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kommo-o.jpg"
    },
    {
        "id": 944,
        "num": 785,
        "nome": "tapu koko",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ELECTRIC",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ELECTRIC",
            "FAIRY",
            "ALOLA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tapu-koko.jpg"
    },
    {
        "id": 945,
        "num": 786,
        "nome": "tapu lele",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "PSYCHIC",
            "FAIRY",
            "ALOLA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tapu-lele.jpg"
    },
    {
        "id": 946,
        "num": 787,
        "nome": "tapu bulu",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GRASS",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "FAIRY",
            "ALOLA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tapu-bulu.jpg"
    },
    {
        "id": 947,
        "num": 788,
        "nome": "tapu fini",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "WATER",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "WATER",
            "FAIRY",
            "ALOLA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tapu-fini.jpg"
    },
    {
        "id": 948,
        "num": 789,
        "nome": "cosmog",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "PSYCHIC",
            "ALOLA",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cosmog.jpg"
    },
    {
        "id": 949,
        "num": 790,
        "nome": "cosmoem",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "PSYCHIC",
            "ALOLA",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cosmoem.jpg"
    },
    {
        "id": 950,
        "num": 791,
        "nome": "solgaleo",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "STEEL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "PSYCHIC",
            "STEEL",
            "ALOLA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/solgaleo.jpg"
    },
    {
        "id": 951,
        "num": 792,
        "nome": "lunala",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "GHOST"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "PSYCHIC",
            "GHOST",
            "ALOLA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lunala.jpg"
    },
    {
        "id": 952,
        "num": 793,
        "nome": "nihilego",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "ULTRABEAST",
        "tipos": [
            "ROCK",
            "POISON"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "POISON",
            "ALOLA",
            "ULTRABEAST",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nihilego.jpg"
    },
    {
        "id": 953,
        "num": 794,
        "nome": "buzzwole",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "ULTRABEAST",
        "tipos": [
            "BUG",
            "FIGHTING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "BUG",
            "FIGHTING",
            "ALOLA",
            "ULTRABEAST",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/buzzwole.jpg"
    },
    {
        "id": 954,
        "num": 795,
        "nome": "pheromosa",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "ULTRABEAST",
        "tipos": [
            "BUG",
            "FIGHTING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "BUG",
            "FIGHTING",
            "ALOLA",
            "ULTRABEAST",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pheromosa.jpg"
    },
    {
        "id": 955,
        "num": 796,
        "nome": "xurkitree",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "ULTRABEAST",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ELECTRIC",
            "ALOLA",
            "ULTRABEAST",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/xurkitree.jpg"
    },
    {
        "id": 956,
        "num": 797,
        "nome": "celesteela",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "ULTRABEAST",
        "tipos": [
            "STEEL",
            "FLYING"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "STEEL",
            "FLYING",
            "ALOLA",
            "ULTRABEAST",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/celesteela.jpg"
    },
    {
        "id": 957,
        "num": 798,
        "nome": "kartana",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "ULTRABEAST",
        "tipos": [
            "GRASS",
            "STEEL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "GRASS",
            "STEEL",
            "ALOLA",
            "ULTRABEAST",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kartana.jpg"
    },
    {
        "id": 958,
        "num": 799,
        "nome": "guzzlord",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "ULTRABEAST",
        "tipos": [
            "DARK",
            "DRAGON"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "DARK",
            "DRAGON",
            "ALOLA",
            "ULTRABEAST",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/guzzlord.jpg"
    },
    {
        "id": 959,
        "num": 800,
        "nome": "necrozma",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "PSYCHIC",
            "ALOLA",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/necrozma.jpg"
    },
    {
        "id": 960,
        "num": 800,
        "nome": "necrozma",
        "desc": "dusk mane necrozma",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "STEEL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "PSYCHIC",
            "STEEL",
            "ALOLA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/necrozma-dusk-mane.jpg"
    },
    {
        "id": 961,
        "num": 800,
        "nome": "necrozma",
        "desc": "dawn wings necrozma",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "GHOST"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "PSYCHIC",
            "GHOST",
            "ALOLA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/necrozma-dawn-wings.jpg"
    },
    {
        "id": 962,
        "num": 800,
        "nome": "necrozma",
        "desc": "ultra necrozma",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "DRAGON"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "PSYCHIC",
            "DRAGON",
            "ALOLA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/necrozma-ultra.jpg"
    },
    {
        "id": 963,
        "num": 801,
        "nome": "magearna",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "STEEL",
            "FAIRY"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "STEEL",
            "FAIRY",
            "ALOLA",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/magearna.jpg"
    },
    {
        "id": 964,
        "num": 802,
        "nome": "marshadow",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "FIGHTING",
            "GHOST"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FIGHTING",
            "GHOST",
            "ALOLA",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/marshadow.jpg"
    },
    {
        "id": 965,
        "num": 803,
        "nome": "poipole",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "ULTRABEAST",
        "tipos": [
            "POISON"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "POISON",
            "ALOLA",
            "ULTRABEAST",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/poipole.jpg"
    },
    {
        "id": 966,
        "num": 804,
        "nome": "naganadel",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "ULTRABEAST",
        "tipos": [
            "POISON",
            "DRAGON"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "POISON",
            "DRAGON",
            "ALOLA",
            "ULTRABEAST",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/naganadel.jpg"
    },
    {
        "id": 967,
        "num": 805,
        "nome": "stakataka",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "ULTRABEAST",
        "tipos": [
            "ROCK",
            "STEEL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ROCK",
            "STEEL",
            "ALOLA",
            "ULTRABEAST",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/stakataka.jpg"
    },
    {
        "id": 968,
        "num": 806,
        "nome": "blacephalon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "ULTRABEAST",
        "tipos": [
            "FIRE",
            "GHOST"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "FIRE",
            "GHOST",
            "ALOLA",
            "ULTRABEAST",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/blacephalon.jpg"
    },
    {
        "id": 969,
        "num": 807,
        "nome": "zeraora",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "ELECTRIC",
            "ALOLA",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zeraora.jpg"
    },
    {
        "id": 970,
        "num": 808,
        "nome": "meltan",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "STEEL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "STEEL",
            "ALOLA",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/meltan.jpg"
    },
    {
        "id": 971,
        "num": 809,
        "nome": "melmetal",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "STEEL"
        ],
        "geracao": 7,
        "regiao": "ALOLA",
        "matches": [
            "STEEL",
            "ALOLA",
            "MYTHIC",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/melmetal.jpg"
    },
    {
        "id": 972,
        "num": 810,
        "nome": "grookey",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GRASS",
            "GALAR",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/grookey.jpg"
    },
    {
        "id": 973,
        "num": 811,
        "nome": "thwackey",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GRASS",
            "GALAR",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/thwackey.jpg"
    },
    {
        "id": 974,
        "num": 812,
        "nome": "rillaboom",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GRASS",
            "GALAR",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rillaboom.jpg"
    },
    {
        "id": 975,
        "num": 813,
        "nome": "scorbunny",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIRE",
            "GALAR",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/scorbunny.jpg"
    },
    {
        "id": 976,
        "num": 814,
        "nome": "raboot",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIRE",
            "GALAR",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/raboot.jpg"
    },
    {
        "id": 977,
        "num": 815,
        "nome": "cinderace",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIRE",
            "GALAR",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cinderace.jpg"
    },
    {
        "id": 978,
        "num": 816,
        "nome": "sobble",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "WATER",
            "GALAR",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sobble.jpg"
    },
    {
        "id": 979,
        "num": 817,
        "nome": "drizzile",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "WATER",
            "GALAR",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/drizzile.jpg"
    },
    {
        "id": 980,
        "num": 818,
        "nome": "inteleon",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "WATER",
            "GALAR",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/inteleon.jpg"
    },
    {
        "id": 981,
        "num": 819,
        "nome": "skwovet",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "NORMAL",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/skwovet.jpg"
    },
    {
        "id": 982,
        "num": 820,
        "nome": "greedent",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "NORMAL",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/greedent.jpg"
    },
    {
        "id": 983,
        "num": 821,
        "nome": "rookidee",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FLYING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FLYING",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rookidee.jpg"
    },
    {
        "id": 984,
        "num": 822,
        "nome": "corvisquire",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FLYING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FLYING",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/corvisquire.jpg"
    },
    {
        "id": 985,
        "num": 823,
        "nome": "corviknight",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FLYING",
            "STEEL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FLYING",
            "STEEL",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/corviknight.jpg"
    },
    {
        "id": 986,
        "num": 824,
        "nome": "blipbug",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "BUG",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/blipbug.jpg"
    },
    {
        "id": 987,
        "num": 825,
        "nome": "dottler",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "PSYCHIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "BUG",
            "PSYCHIC",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dottler.jpg"
    },
    {
        "id": 988,
        "num": 826,
        "nome": "orbeetle",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "PSYCHIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "BUG",
            "PSYCHIC",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/orbeetle.jpg"
    },
    {
        "id": 989,
        "num": 827,
        "nome": "nickit",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DARK",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nickit.jpg"
    },
    {
        "id": 990,
        "num": 828,
        "nome": "thievul",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DARK",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/thievul.jpg"
    },
    {
        "id": 991,
        "num": 829,
        "nome": "gossifleur",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GRASS",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gossifleur.jpg"
    },
    {
        "id": 992,
        "num": 830,
        "nome": "eldegoss",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GRASS",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/eldegoss.jpg"
    },
    {
        "id": 993,
        "num": 831,
        "nome": "wooloo",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "NORMAL",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wooloo.jpg"
    },
    {
        "id": 994,
        "num": 832,
        "nome": "dubwool",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "NORMAL",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dubwool.jpg"
    },
    {
        "id": 995,
        "num": 833,
        "nome": "chewtle",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "WATER",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chewtle.jpg"
    },
    {
        "id": 996,
        "num": 834,
        "nome": "drednaw",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "ROCK"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "WATER",
            "ROCK",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/drednaw.jpg"
    },
    {
        "id": 997,
        "num": 835,
        "nome": "yamper",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ELECTRIC",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/yamper.jpg"
    },
    {
        "id": 998,
        "num": 836,
        "nome": "boltund",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ELECTRIC",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/boltund.jpg"
    },
    {
        "id": 999,
        "num": 837,
        "nome": "rolycoly",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ROCK",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rolycoly.jpg"
    },
    {
        "id": 1000,
        "num": 838,
        "nome": "carkol",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "FIRE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ROCK",
            "FIRE",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/carkol.jpg"
    },
    {
        "id": 1001,
        "num": 839,
        "nome": "coalossal",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "FIRE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ROCK",
            "FIRE",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/coalossal.jpg"
    },
    {
        "id": 1002,
        "num": 840,
        "nome": "applin",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "DRAGON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GRASS",
            "DRAGON",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/applin.jpg"
    },
    {
        "id": 1003,
        "num": 841,
        "nome": "flapple",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "DRAGON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GRASS",
            "DRAGON",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/flapple.jpg"
    },
    {
        "id": 1004,
        "num": 842,
        "nome": "appletun",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "DRAGON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GRASS",
            "DRAGON",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/appletun.jpg"
    },
    {
        "id": 1005,
        "num": 843,
        "nome": "silicobra",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GROUND",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/silicobra.jpg"
    },
    {
        "id": 1006,
        "num": 844,
        "nome": "sandaconda",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GROUND",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sandaconda.jpg"
    },
    {
        "id": 1007,
        "num": 845,
        "nome": "cramorant",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FLYING",
            "WATER"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FLYING",
            "WATER",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cramorant.jpg"
    },
    {
        "id": 1008,
        "num": 846,
        "nome": "arrokuda",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "WATER",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/arrokuda.jpg"
    },
    {
        "id": 1009,
        "num": 847,
        "nome": "barraskewda",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "WATER",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/barraskewda.jpg"
    },
    {
        "id": 1010,
        "num": 848,
        "nome": "toxel",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "BABY",
        "tipos": [
            "ELECTRIC",
            "POISON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ELECTRIC",
            "POISON",
            "GALAR",
            "BABY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/toxel.jpg"
    },
    {
        "id": 1011,
        "num": 849,
        "nome": "toxtricity",
        "desc": "amped form",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "POISON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ELECTRIC",
            "POISON",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/toxtricity.jpg"
    },
    {
        "id": 1012,
        "num": 849,
        "nome": "toxtricity",
        "desc": "low key form",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "POISON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ELECTRIC",
            "POISON",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/toxtricity-low-key.jpg"
    },
    {
        "id": 1013,
        "num": 850,
        "nome": "sizzlipede",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "BUG"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIRE",
            "BUG",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sizzlipede.jpg"
    },
    {
        "id": 1014,
        "num": 851,
        "nome": "centiskorch",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "BUG"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIRE",
            "BUG",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/centiskorch.jpg"
    },
    {
        "id": 1015,
        "num": 852,
        "nome": "clobbopus",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIGHTING",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/clobbopus.jpg"
    },
    {
        "id": 1016,
        "num": 853,
        "nome": "grapploct",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIGHTING",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/grapploct.jpg"
    },
    {
        "id": 1017,
        "num": 854,
        "nome": "sinistea",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GHOST",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sinistea.jpg"
    },
    {
        "id": 1018,
        "num": 855,
        "nome": "polteageist",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GHOST",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/polteageist.jpg"
    },
    {
        "id": 1019,
        "num": 856,
        "nome": "hatenna",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hatenna.jpg"
    },
    {
        "id": 1020,
        "num": 857,
        "nome": "hattrem",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hattrem.jpg"
    },
    {
        "id": 1021,
        "num": 858,
        "nome": "hatterene",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "FAIRY"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "FAIRY",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/hatterene.jpg"
    },
    {
        "id": 1022,
        "num": 859,
        "nome": "impidimp",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FAIRY"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DARK",
            "FAIRY",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/impidimp.jpg"
    },
    {
        "id": 1023,
        "num": 860,
        "nome": "morgrem",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FAIRY"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DARK",
            "FAIRY",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/morgrem.jpg"
    },
    {
        "id": 1024,
        "num": 861,
        "nome": "grimmsnarl",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "FAIRY"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DARK",
            "FAIRY",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/grimmsnarl.jpg"
    },
    {
        "id": 1025,
        "num": 862,
        "nome": "obstagoon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "NORMAL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DARK",
            "NORMAL",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/obstagoon.jpg"
    },
    {
        "id": 1026,
        "num": 863,
        "nome": "perrserker",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "STEEL",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/perrserker.jpg"
    },
    {
        "id": 1027,
        "num": 864,
        "nome": "cursola",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GHOST",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cursola.jpg"
    },
    {
        "id": 1028,
        "num": 865,
        "nome": "sirfetch'd",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIGHTING",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sirfetchd.jpg"
    },
    {
        "id": 1029,
        "num": 866,
        "nome": "mr. rime",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "PSYCHIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ICE",
            "PSYCHIC",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/mr-rime.avif"
    },
    {
        "id": 1030,
        "num": 867,
        "nome": "runerigus",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GROUND",
            "GHOST",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/runerigus.jpg"
    },
    {
        "id": 1031,
        "num": 868,
        "nome": "milcery",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FAIRY",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/milcery.jpg"
    },
    {
        "id": 1032,
        "num": 869,
        "nome": "alcremie",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FAIRY",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/alcremie.jpg"
    },
    {
        "id": 1033,
        "num": 870,
        "nome": "falinks",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIGHTING",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/falinks.jpg"
    },
    {
        "id": 1034,
        "num": 871,
        "nome": "pincurchin",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ELECTRIC",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pincurchin.jpg"
    },
    {
        "id": 1035,
        "num": 872,
        "nome": "snom",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "BUG"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ICE",
            "BUG",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/snom.jpg"
    },
    {
        "id": 1036,
        "num": 873,
        "nome": "frosmoth",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE",
            "BUG"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ICE",
            "BUG",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/frosmoth.jpg"
    },
    {
        "id": 1037,
        "num": 874,
        "nome": "stonjourner",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ROCK",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/stonjourner.jpg"
    },
    {
        "id": 1038,
        "num": 875,
        "nome": "eiscue",
        "desc": "ice face",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ICE",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/eiscue-ice.avif"
    },
    {
        "id": 1039,
        "num": 875,
        "nome": "eiscue",
        "desc": "noice face",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ICE",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/eiscue-noice.jpg"
    },
    {
        "id": 1040,
        "num": 876,
        "nome": "indeedee",
        "desc": "male",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "NORMAL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "NORMAL",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/indeedee-male.jpg"
    },
    {
        "id": 1041,
        "num": 876,
        "nome": "indeedee",
        "desc": "female",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC",
            "NORMAL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "NORMAL",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/indeedee-female.jpg"
    },
    {
        "id": 1042,
        "num": 877,
        "nome": "morpeko",
        "desc": "full belly mode",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "DARK"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ELECTRIC",
            "DARK",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/morpeko-full-belly.avif"
    },
    {
        "id": 1043,
        "num": 877,
        "nome": "morpeko",
        "desc": "hangry mode",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "DARK"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ELECTRIC",
            "DARK",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/morpeko-hangry.jpg"
    },
    {
        "id": 1044,
        "num": 878,
        "nome": "cufant",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "STEEL",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cufant.jpg"
    },
    {
        "id": 1045,
        "num": 879,
        "nome": "copperajah",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "STEEL",
            "GALAR",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/copperajah.jpg"
    },
    {
        "id": 1046,
        "num": 880,
        "nome": "dracozolt",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ELECTRIC",
            "DRAGON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ELECTRIC",
            "DRAGON",
            "GALAR",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dracozolt.jpg"
    },
    {
        "id": 1047,
        "num": 881,
        "nome": "arctozolt",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "ELECTRIC",
            "ICE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ELECTRIC",
            "ICE",
            "GALAR",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/arctozolt.jpg"
    },
    {
        "id": 1048,
        "num": 882,
        "nome": "dracovish",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "WATER",
            "DRAGON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "WATER",
            "DRAGON",
            "GALAR",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dracovish.jpg"
    },
    {
        "id": 1049,
        "num": 883,
        "nome": "arctovish",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "FOSSIL",
        "tipos": [
            "WATER",
            "ICE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "WATER",
            "ICE",
            "GALAR",
            "FOSSIL",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/arctovish.jpg"
    },
    {
        "id": 1050,
        "num": 884,
        "nome": "duraludon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "DRAGON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "STEEL",
            "DRAGON",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/duraludon.jpg"
    },
    {
        "id": 1051,
        "num": 885,
        "nome": "dreepy",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DRAGON",
            "GHOST",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dreepy.jpg"
    },
    {
        "id": 1052,
        "num": 886,
        "nome": "drakloak",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DRAGON",
            "GHOST",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/drakloak.jpg"
    },
    {
        "id": 1053,
        "num": 887,
        "nome": "dragapult",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DRAGON",
            "GHOST",
            "GALAR",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dragapult.jpg"
    },
    {
        "id": 1054,
        "num": 888,
        "nome": "zacian",
        "desc": "hero of many battles",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FAIRY",
            "GALAR",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zacian.jpg"
    },
    {
        "id": 1055,
        "num": 888,
        "nome": "zacian",
        "desc": "crowned sword",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FAIRY",
            "STEEL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FAIRY",
            "STEEL",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zacian-crowned.jpg"
    },
    {
        "id": 1056,
        "num": 889,
        "nome": "zamazenta",
        "desc": "hero of many battles",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIGHTING",
            "GALAR",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zamazenta.jpg"
    },
    {
        "id": 1057,
        "num": 889,
        "nome": "zamazenta",
        "desc": "crowned shield",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FIGHTING",
            "STEEL"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIGHTING",
            "STEEL",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zamazenta-crowned.jpg"
    },
    {
        "id": 1058,
        "num": 890,
        "nome": "eternatus",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "POISON",
            "DRAGON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "POISON",
            "DRAGON",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/eternatus.jpg"
    },
    {
        "id": 1059,
        "num": 890,
        "nome": "eternatus",
        "desc": "eternamax",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "POISON",
            "DRAGON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "POISON",
            "DRAGON",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/home/normal/eternatus-eternamax.png"
    },
    {
        "id": 1060,
        "num": 891,
        "nome": "kubfu",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FIGHTING"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIGHTING",
            "GALAR",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kubfu.jpg"
    },
    {
        "id": 1061,
        "num": 892,
        "nome": "urshifu",
        "desc": "single strike style",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FIGHTING",
            "DARK"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIGHTING",
            "DARK",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/urshifu-single-strike.avif"
    },
    {
        "id": 1062,
        "num": 892,
        "nome": "urshifu",
        "desc": "rapid strike style",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FIGHTING",
            "WATER"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "FIGHTING",
            "WATER",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/urshifu-rapid-strike.jpg"
    },
    {
        "id": 1063,
        "num": 893,
        "nome": "zarude",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "DARK",
            "GRASS"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DARK",
            "GRASS",
            "GALAR",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/zarude.jpg"
    },
    {
        "id": 1064,
        "num": 894,
        "nome": "regieleki",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ELECTRIC",
            "GALAR",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/regieleki.jpg"
    },
    {
        "id": 1065,
        "num": 895,
        "nome": "regidrago",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DRAGON"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "DRAGON",
            "GALAR",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/regidrago.jpg"
    },
    {
        "id": 1066,
        "num": 896,
        "nome": "glastrier",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ICE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "ICE",
            "GALAR",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/glastrier.jpg"
    },
    {
        "id": 1067,
        "num": 897,
        "nome": "spectrier",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "GHOST",
            "GALAR",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/spectrier.jpg"
    },
    {
        "id": 1068,
        "num": 898,
        "nome": "calyrex",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "GRASS"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "GRASS",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/calyrex.jpg"
    },
    {
        "id": 1069,
        "num": 898,
        "nome": "calyrex",
        "desc": "ice rider",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "ICE"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "ICE",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/calyrex-ice-rider.jpg"
    },
    {
        "id": 1070,
        "num": 898,
        "nome": "calyrex",
        "desc": "shadow rider",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "PSYCHIC",
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "GALAR",
        "matches": [
            "PSYCHIC",
            "GHOST",
            "GALAR",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/calyrex-shadow-rider.jpg"
    },
    {
        "id": 1071,
        "num": 899,
        "nome": "wyrdeer",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "PSYCHIC"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "NORMAL",
            "PSYCHIC",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wyrdeer.jpg"
    },
    {
        "id": 1072,
        "num": 900,
        "nome": "kleavor",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "ROCK"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "BUG",
            "ROCK",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kleavor.jpg"
    },
    {
        "id": 1073,
        "num": 901,
        "nome": "ursaluna",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "NORMAL"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "GROUND",
            "NORMAL",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ursaluna.jpg"
    },
    {
        "id": 1074,
        "num": 901,
        "nome": "ursaluna",
        "desc": "bloodmoon",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "NORMAL"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "GROUND",
            "NORMAL",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/ursaluna-bloodmoon.png"
    },
    {
        "id": 1075,
        "num": 902,
        "nome": "basculegion",
        "desc": "male",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "WATER",
            "GHOST",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/basculegion.jpg"
    },
    {
        "id": 1076,
        "num": 902,
        "nome": "basculegion",
        "desc": "female",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "GHOST"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "WATER",
            "GHOST",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/basculegion-female.jpg"
    },
    {
        "id": 1077,
        "num": 903,
        "nome": "sneasler",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "POISON"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "FIGHTING",
            "POISON",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sneasler.jpg"
    },
    {
        "id": 1078,
        "num": 904,
        "nome": "overqwil",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "POISON"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "DARK",
            "POISON",
            "HISUI",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/overqwil.jpg"
    },
    {
        "id": 1079,
        "num": 905,
        "nome": "enamorus",
        "desc": "incarnate forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FAIRY",
            "FLYING"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "FAIRY",
            "FLYING",
            "HISUI",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/avif/enamorus-incarnate.avif"
    },
    {
        "id": 1080,
        "num": 905,
        "nome": "enamorus",
        "desc": "therian forme",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FAIRY",
            "FLYING"
        ],
        "geracao": 8,
        "regiao": "HISUI",
        "matches": [
            "FAIRY",
            "FLYING",
            "HISUI",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/enamorus-therian.jpg"
    },
    {
        "id": 1081,
        "num": 906,
        "nome": "sprigatito",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "PALDEA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sprigatito.jpg"
    },
    {
        "id": 1082,
        "num": 907,
        "nome": "floragato",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "PALDEA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/floragato.jpg"
    },
    {
        "id": 1083,
        "num": 908,
        "nome": "meowscarada",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "GRASS",
            "DARK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "DARK",
            "PALDEA",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/meowscarada.jpg"
    },
    {
        "id": 1084,
        "num": 909,
        "nome": "fuecoco",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FIRE",
            "PALDEA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/fuecoco.jpg"
    },
    {
        "id": 1085,
        "num": 910,
        "nome": "crocalor",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FIRE",
            "PALDEA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/crocalor.jpg"
    },
    {
        "id": 1086,
        "num": 911,
        "nome": "skeledirge",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "FIRE",
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FIRE",
            "GHOST",
            "PALDEA",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/skeledirge.jpg"
    },
    {
        "id": 1087,
        "num": 912,
        "nome": "quaxly",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "WATER",
            "PALDEA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/quaxly.jpg"
    },
    {
        "id": 1088,
        "num": 913,
        "nome": "quaxwell",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "WATER",
            "PALDEA",
            "STARTER",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/quaxwell.jpg"
    },
    {
        "id": 1089,
        "num": 914,
        "nome": "quaquaval",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": true,
        "categoria": "",
        "tipos": [
            "WATER",
            "FIGHTING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "WATER",
            "FIGHTING",
            "PALDEA",
            "STARTER",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/quaquaval.jpg"
    },
    {
        "id": 1090,
        "num": 915,
        "nome": "lechonk",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lechonk.jpg"
    },
    {
        "id": 1091,
        "num": 916,
        "nome": "oinkologne",
        "desc": "male",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/oinkologne.jpg"
    },
    {
        "id": 1092,
        "num": 916,
        "nome": "oinkologne",
        "desc": "female",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/oinkologne-female.jpg"
    },
    {
        "id": 1093,
        "num": 917,
        "nome": "tarountula",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "BUG",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tarountula.jpg"
    },
    {
        "id": 1094,
        "num": 918,
        "nome": "spidops",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "BUG",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/spidops.jpg"
    },
    {
        "id": 1095,
        "num": 919,
        "nome": "nymble",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "BUG",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nymble.jpg"
    },
    {
        "id": 1096,
        "num": 920,
        "nome": "lokix",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "DARK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "BUG",
            "DARK",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/lokix.jpg"
    },
    {
        "id": 1097,
        "num": 921,
        "nome": "pawmi",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ELECTRIC",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pawmi.jpg"
    },
    {
        "id": 1098,
        "num": 922,
        "nome": "pawmo",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "FIGHTING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ELECTRIC",
            "FIGHTING",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pawmo.jpg"
    },
    {
        "id": 1099,
        "num": 923,
        "nome": "pawmot",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "FIGHTING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ELECTRIC",
            "FIGHTING",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pawmot.jpg"
    },
    {
        "id": 1100,
        "num": 924,
        "nome": "tandemaus",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tandemaus.jpg"
    },
    {
        "id": 1101,
        "num": 925,
        "nome": "maushold",
        "desc": "family of four",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/maushold.jpg"
    },
    {
        "id": 1102,
        "num": 925,
        "nome": "maushold",
        "desc": "family of three",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/maushold-family3.png"
    },
    {
        "id": 1103,
        "num": 926,
        "nome": "fidough",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FAIRY",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/fidough.jpg"
    },
    {
        "id": 1104,
        "num": 927,
        "nome": "dachsbun",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FAIRY",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dachsbun.jpg"
    },
    {
        "id": 1105,
        "num": 928,
        "nome": "smoliv",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "NORMAL",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/smoliv.jpg"
    },
    {
        "id": 1106,
        "num": 929,
        "nome": "dolliv",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "NORMAL",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dolliv.jpg"
    },
    {
        "id": 1107,
        "num": 930,
        "nome": "arboliva",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "NORMAL",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/arboliva.jpg"
    },
    {
        "id": 1108,
        "num": 931,
        "nome": "squawkabilly",
        "desc": "green plumage",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "FLYING",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/squawkabilly.jpg"
    },
    {
        "id": 1109,
        "num": 931,
        "nome": "squawkabilly",
        "desc": "blue plumage",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "FLYING",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/squawkabilly-blue.png"
    },
    {
        "id": 1110,
        "num": 931,
        "nome": "squawkabilly",
        "desc": "yellow plumage",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "FLYING",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/squawkabilly-yellow.png"
    },
    {
        "id": 1111,
        "num": 931,
        "nome": "squawkabilly",
        "desc": "white plumage",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "FLYING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "FLYING",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/squawkabilly-white.png"
    },
    {
        "id": 1112,
        "num": 932,
        "nome": "nacli",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ROCK",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/nacli.jpg"
    },
    {
        "id": 1113,
        "num": 933,
        "nome": "naclstack",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ROCK",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/naclstack.jpg"
    },
    {
        "id": 1114,
        "num": 934,
        "nome": "garganacl",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ROCK",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/garganacl.jpg"
    },
    {
        "id": 1115,
        "num": 935,
        "nome": "charcadet",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FIRE",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/charcadet.jpg"
    },
    {
        "id": 1116,
        "num": 936,
        "nome": "armarouge",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "PSYCHIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FIRE",
            "PSYCHIC",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/armarouge.jpg"
    },
    {
        "id": 1117,
        "num": 937,
        "nome": "ceruledge",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIRE",
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FIRE",
            "GHOST",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ceruledge.jpg"
    },
    {
        "id": 1118,
        "num": 938,
        "nome": "tadbulb",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ELECTRIC",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tadbulb.jpg"
    },
    {
        "id": 1119,
        "num": 939,
        "nome": "bellibolt",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ELECTRIC",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bellibolt.jpg"
    },
    {
        "id": 1120,
        "num": 940,
        "nome": "wattrel",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "FLYING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ELECTRIC",
            "FLYING",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wattrel.jpg"
    },
    {
        "id": 1121,
        "num": 941,
        "nome": "kilowattrel",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ELECTRIC",
            "FLYING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ELECTRIC",
            "FLYING",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kilowattrel.jpg"
    },
    {
        "id": 1122,
        "num": 942,
        "nome": "maschiff",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DARK",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/maschiff.jpg"
    },
    {
        "id": 1123,
        "num": 943,
        "nome": "mabosstiff",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DARK",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/mabosstiff.jpg"
    },
    {
        "id": 1124,
        "num": 944,
        "nome": "shroodle",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "POISON",
            "NORMAL",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/shroodle.jpg"
    },
    {
        "id": 1125,
        "num": 945,
        "nome": "grafaiai",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "POISON",
            "NORMAL",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/grafaiai.jpg"
    },
    {
        "id": 1126,
        "num": 946,
        "nome": "bramblin",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "GHOST",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bramblin.jpg"
    },
    {
        "id": 1127,
        "num": 947,
        "nome": "brambleghast",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "GHOST",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/brambleghast.jpg"
    },
    {
        "id": 1128,
        "num": 948,
        "nome": "toedscool",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "GRASS"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GROUND",
            "GRASS",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/toedscool.jpg"
    },
    {
        "id": 1129,
        "num": 949,
        "nome": "toedscruel",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GROUND",
            "GRASS"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GROUND",
            "GRASS",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/toedscruel.jpg"
    },
    {
        "id": 1130,
        "num": 950,
        "nome": "klawf",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ROCK",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/klawf.jpg"
    },
    {
        "id": 1131,
        "num": 951,
        "nome": "capsakid",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/capsakid.jpg"
    },
    {
        "id": 1132,
        "num": 952,
        "nome": "scovillain",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "FIRE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "FIRE",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/scovillain.jpg"
    },
    {
        "id": 1133,
        "num": 953,
        "nome": "rellor",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "BUG",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rellor.jpg"
    },
    {
        "id": 1134,
        "num": 954,
        "nome": "rabsca",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "BUG",
            "PSYCHIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "BUG",
            "PSYCHIC",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/rabsca.jpg"
    },
    {
        "id": 1135,
        "num": 955,
        "nome": "flittle",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "PSYCHIC",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/flittle.jpg"
    },
    {
        "id": 1136,
        "num": 956,
        "nome": "espathra",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "PSYCHIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "PSYCHIC",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/espathra.jpg"
    },
    {
        "id": 1137,
        "num": 957,
        "nome": "tinkatink",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY",
            "STEEL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FAIRY",
            "STEEL",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tinkatink.jpg"
    },
    {
        "id": 1138,
        "num": 958,
        "nome": "tinkatuff",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY",
            "STEEL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FAIRY",
            "STEEL",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tinkatuff.jpg"
    },
    {
        "id": 1139,
        "num": 959,
        "nome": "tinkaton",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FAIRY",
            "STEEL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FAIRY",
            "STEEL",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tinkaton.jpg"
    },
    {
        "id": 1140,
        "num": 960,
        "nome": "wiglett",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "WATER",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wiglett.jpg"
    },
    {
        "id": 1141,
        "num": 961,
        "nome": "wugtrio",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "WATER",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wugtrio.jpg"
    },
    {
        "id": 1142,
        "num": 962,
        "nome": "bombirdier",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FLYING",
            "DARK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FLYING",
            "DARK",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/bombirdier.jpg"
    },
    {
        "id": 1143,
        "num": 963,
        "nome": "finizen",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "WATER",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/finizen.jpg"
    },
    {
        "id": 1144,
        "num": 964,
        "nome": "palafin",
        "desc": "zero form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "WATER",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/palafin.jpg"
    },
    {
        "id": 1145,
        "num": 964,
        "nome": "palafin",
        "desc": "hero form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "WATER",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/palafin-hero.jpg"
    },
    {
        "id": 1146,
        "num": 965,
        "nome": "varoom",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "POISON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "STEEL",
            "POISON",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/varoom.jpg"
    },
    {
        "id": 1147,
        "num": 966,
        "nome": "revavroom",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "POISON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "STEEL",
            "POISON",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/revavroom.jpg"
    },
    {
        "id": 1148,
        "num": 967,
        "nome": "cyclizar",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DRAGON",
            "NORMAL",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cyclizar.jpg"
    },
    {
        "id": 1149,
        "num": 968,
        "nome": "orthworm",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "STEEL",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/orthworm.jpg"
    },
    {
        "id": 1150,
        "num": 969,
        "nome": "glimmet",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "POISON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ROCK",
            "POISON",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/glimmet.jpg"
    },
    {
        "id": 1151,
        "num": 970,
        "nome": "glimmora",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ROCK",
            "POISON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ROCK",
            "POISON",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/glimmora.jpg"
    },
    {
        "id": 1152,
        "num": 971,
        "nome": "greavard",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GHOST",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/greavard.jpg"
    },
    {
        "id": 1153,
        "num": 972,
        "nome": "houndstone",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GHOST",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/houndstone.jpg"
    },
    {
        "id": 1154,
        "num": 973,
        "nome": "flamigo",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FLYING",
            "FIGHTING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FLYING",
            "FIGHTING",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/flamigo.jpg"
    },
    {
        "id": 1155,
        "num": 974,
        "nome": "cetoddle",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ICE",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cetoddle.jpg"
    },
    {
        "id": 1156,
        "num": 975,
        "nome": "cetitan",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "ICE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ICE",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/cetitan.jpg"
    },
    {
        "id": 1157,
        "num": 976,
        "nome": "veluza",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER",
            "PSYCHIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "WATER",
            "PSYCHIC",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/veluza.jpg"
    },
    {
        "id": 1158,
        "num": 977,
        "nome": "dondozo",
        "desc": "",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "WATER",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dondozo.jpg"
    },
    {
        "id": 1159,
        "num": 978,
        "nome": "tatsugiri",
        "desc": "curly form",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DRAGON",
            "WATER",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tatsugiri.jpg"
    },
    {
        "id": 1160,
        "num": 978,
        "nome": "tatsugiri",
        "desc": "droopy form",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DRAGON",
            "WATER",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tatsugiri-droopy.jpg"
    },
    {
        "id": 1161,
        "num": 978,
        "nome": "tatsugiri",
        "desc": "stretchy form",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DRAGON",
            "WATER",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/tatsugiri-stretchy.jpg"
    },
    {
        "id": 1162,
        "num": 979,
        "nome": "annihilape",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "FIGHTING",
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FIGHTING",
            "GHOST",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/annihilape.jpg"
    },
    {
        "id": 1163,
        "num": 980,
        "nome": "clodsire",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "POISON",
            "GROUND"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "POISON",
            "GROUND",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/clodsire.jpg"
    },
    {
        "id": 1164,
        "num": 981,
        "nome": "farigiraf",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL",
            "PSYCHIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PSYCHIC",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/farigiraf.jpg"
    },
    {
        "id": 1165,
        "num": 982,
        "nome": "dudunsparce",
        "desc": "two-segment form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dudunsparce.jpg"
    },
    {
        "id": 1166,
        "num": 982,
        "nome": "dudunsparce",
        "desc": "three-segment form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/dudunsparce.png"
    },
    {
        "id": 1167,
        "num": 983,
        "nome": "kingambit",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DARK",
            "STEEL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DARK",
            "STEEL",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/kingambit.jpg"
    },
    {
        "id": 1168,
        "num": 984,
        "nome": "great tusk",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "GROUND",
            "FIGHTING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GROUND",
            "FIGHTING",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/great-tusk.jpg"
    },
    {
        "id": 1169,
        "num": 985,
        "nome": "scream tail",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "FAIRY",
            "PSYCHIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FAIRY",
            "PSYCHIC",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/scream-tail.jpg"
    },
    {
        "id": 1170,
        "num": 986,
        "nome": "brute bonnet",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "GRASS",
            "DARK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "DARK",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/brute-bonnet.jpg"
    },
    {
        "id": 1171,
        "num": 987,
        "nome": "flutter mane",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "GHOST",
            "FAIRY"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GHOST",
            "FAIRY",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/flutter-mane.jpg"
    },
    {
        "id": 1172,
        "num": 988,
        "nome": "slither wing",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "BUG",
            "FIGHTING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "BUG",
            "FIGHTING",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/slither-wing.jpg"
    },
    {
        "id": 1173,
        "num": 989,
        "nome": "sandy shocks",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "ELECTRIC",
            "GROUND"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ELECTRIC",
            "GROUND",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/sandy-shocks.jpg"
    },
    {
        "id": 1174,
        "num": 990,
        "nome": "iron treads",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "GROUND",
            "STEEL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GROUND",
            "STEEL",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/iron-treads.jpg"
    },
    {
        "id": 1175,
        "num": 991,
        "nome": "iron bundle",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "ICE",
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ICE",
            "WATER",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/iron-bundle.jpg"
    },
    {
        "id": 1176,
        "num": 992,
        "nome": "iron hands",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "FIGHTING",
            "ELECTRIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FIGHTING",
            "ELECTRIC",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/iron-hands.jpg"
    },
    {
        "id": 1177,
        "num": 993,
        "nome": "iron jugulis",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "DARK",
            "FLYING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DARK",
            "FLYING",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/iron-jugulis.jpg"
    },
    {
        "id": 1178,
        "num": 994,
        "nome": "iron moth",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "FIRE",
            "POISON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FIRE",
            "POISON",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/iron-moth.jpg"
    },
    {
        "id": 1179,
        "num": 995,
        "nome": "iron thorns",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "ROCK",
            "ELECTRIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ROCK",
            "ELECTRIC",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/iron-thorns.jpg"
    },
    {
        "id": 1180,
        "num": 996,
        "nome": "frigibax",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "ICE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DRAGON",
            "ICE",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/frigibax.jpg"
    },
    {
        "id": 1181,
        "num": 997,
        "nome": "arctibax",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "ICE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DRAGON",
            "ICE",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/arctibax.jpg"
    },
    {
        "id": 1182,
        "num": 998,
        "nome": "baxcalibur",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "DRAGON",
            "ICE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DRAGON",
            "ICE",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/baxcalibur.jpg"
    },
    {
        "id": 1183,
        "num": 999,
        "nome": "gimmighoul",
        "desc": "chest form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GHOST",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gimmighoul.jpg"
    },
    {
        "id": 1184,
        "num": 999,
        "nome": "gimmighoul",
        "desc": "roaming form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GHOST",
            "PALDEA",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gimmighoul-roaming.jpg"
    },
    {
        "id": 1185,
        "num": 1000,
        "nome": "gholdengo",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "STEEL",
            "GHOST",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/gholdengo.jpg"
    },
    {
        "id": 1186,
        "num": 1001,
        "nome": "wo-chien",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DARK",
            "GRASS"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DARK",
            "GRASS",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/wo-chien.jpg"
    },
    {
        "id": 1187,
        "num": 1002,
        "nome": "chien-pao",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DARK",
            "ICE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DARK",
            "ICE",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chien-pao.jpg"
    },
    {
        "id": 1188,
        "num": 1003,
        "nome": "ting-lu",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DARK",
            "GROUND"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DARK",
            "GROUND",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ting-lu.jpg"
    },
    {
        "id": 1189,
        "num": 1004,
        "nome": "chi-yu",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "DARK",
            "FIRE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DARK",
            "FIRE",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/chi-yu.jpg"
    },
    {
        "id": 1190,
        "num": 1005,
        "nome": "roaring moon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "DRAGON",
            "DARK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "DRAGON",
            "DARK",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/roaring-moon.jpg"
    },
    {
        "id": 1191,
        "num": 1006,
        "nome": "iron valiant",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "FAIRY",
            "FIGHTING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FAIRY",
            "FIGHTING",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/iron-valiant.jpg"
    },
    {
        "id": 1192,
        "num": 1007,
        "nome": "koraidon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "FIGHTING",
            "DRAGON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FIGHTING",
            "DRAGON",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/koraidon.jpg"
    },
    {
        "id": 1193,
        "num": 1008,
        "nome": "miraidon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "ELECTRIC",
            "DRAGON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ELECTRIC",
            "DRAGON",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/miraidon.jpg"
    },
    {
        "id": 1194,
        "num": 1009,
        "nome": "walking wake",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "WATER",
            "DRAGON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "WATER",
            "DRAGON",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/walking-wake.jpg"
    },
    {
        "id": 1195,
        "num": 1010,
        "nome": "iron leaves",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "GRASS",
            "PSYCHIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "PSYCHIC",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/iron-leaves.jpg"
    },
    {
        "id": 1196,
        "num": 1011,
        "nome": "dipplin",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "DRAGON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "DRAGON",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/dipplin.jpg"
    },
    {
        "id": 1197,
        "num": 1012,
        "nome": "poltchageist",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "GHOST",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/poltchageist.jpg"
    },
    {
        "id": 1198,
        "num": 1013,
        "nome": "sinistcha",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "GHOST",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/sinistcha.png"
    },
    {
        "id": 1199,
        "num": 1014,
        "nome": "okidogi",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "POISON",
            "FIGHTING"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "POISON",
            "FIGHTING",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/okidogi.jpg"
    },
    {
        "id": 1200,
        "num": 1015,
        "nome": "munkidori",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "POISON",
            "PSYCHIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "POISON",
            "PSYCHIC",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/munkidori.jpg"
    },
    {
        "id": 1201,
        "num": 1016,
        "nome": "fezandipiti",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "POISON",
            "FAIRY"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "POISON",
            "FAIRY",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/fezandipiti.jpg"
    },
    {
        "id": 1202,
        "num": 1017,
        "nome": "ogerpon",
        "desc": "teal mask",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GRASS"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "PALDEA",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/ogerpon.jpg"
    },
    {
        "id": 1203,
        "num": 1017,
        "nome": "ogerpon",
        "desc": "wellspring mask",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GRASS",
            "WATER"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "WATER",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/ogerpon-wellspring.png"
    },
    {
        "id": 1204,
        "num": 1017,
        "nome": "ogerpon",
        "desc": "hearthflame mask",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GRASS",
            "FIRE"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "FIRE",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/ogerpon-hearthflame.png"
    },
    {
        "id": 1205,
        "num": 1017,
        "nome": "ogerpon",
        "desc": "cornerstone mask",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "GRASS",
            "ROCK"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "ROCK",
            "PALDEA",
            "LEGENDARY",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/ogerpon-cornerstone.png"
    },
    {
        "id": 1206,
        "num": 1018,
        "nome": "archaludon",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "STEEL",
            "DRAGON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "STEEL",
            "DRAGON",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/archaludon.jpg"
    },
    {
        "id": 1207,
        "num": 1019,
        "nome": "hydrapple",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "",
        "tipos": [
            "GRASS",
            "DRAGON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "GRASS",
            "DRAGON",
            "PALDEA",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/hydrapple.png"
    },
    {
        "id": 1208,
        "num": 1020,
        "nome": "gouging fire",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "FIRE",
            "DRAGON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "FIRE",
            "DRAGON",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/gouging-fire.png"
    },
    {
        "id": 1209,
        "num": 1021,
        "nome": "raging bolt",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "ELECTRIC",
            "DRAGON"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ELECTRIC",
            "DRAGON",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/raging-bolt.jpg"
    },
    {
        "id": 1210,
        "num": 1022,
        "nome": "iron boulder",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "ROCK",
            "PSYCHIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "ROCK",
            "PSYCHIC",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/iron-boulder.png"
    },
    {
        "id": 1211,
        "num": 1023,
        "nome": "iron crown",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "PARADOX",
        "tipos": [
            "STEEL",
            "PSYCHIC"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "STEEL",
            "PSYCHIC",
            "PALDEA",
            "PARADOX",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/iron-crown.jpg"
    },
    {
        "id": 1212,
        "num": 1024,
        "nome": "terapagos",
        "desc": "normal form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PALDEA",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/terapagos.jpg"
    },
    {
        "id": 1213,
        "num": 1024,
        "nome": "terapagos",
        "desc": "terastal form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PALDEA",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/terapagos-terastal.jpg"
    },
    {
        "id": 1214,
        "num": 1024,
        "nome": "terapagos",
        "desc": "stellar form",
        "mega": false,
        "dualtype": false,
        "inicial": false,
        "categoria": "LEGENDARY",
        "tipos": [
            "NORMAL"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "NORMAL",
            "PALDEA",
            "LEGENDARY",
            "MONOTYPE"
        ],
        "imagem": "https://img.pokemondb.net/sprites/scarlet-violet/normal/terapagos-stellar.png"
    },
    {
        "id": 1215,
        "num": 1025,
        "nome": "pecharunt",
        "desc": "",
        "mega": false,
        "dualtype": true,
        "inicial": false,
        "categoria": "MYTHIC",
        "tipos": [
            "POISON",
            "GHOST"
        ],
        "geracao": 9,
        "regiao": "PALDEA",
        "matches": [
            "POISON",
            "GHOST",
            "PALDEA",
            "MYTHIC",
            "DUALTYPE"
        ],
        "imagem": "https://img.pokemondb.net/artwork/large/pecharunt.jpg"
    }
]`;
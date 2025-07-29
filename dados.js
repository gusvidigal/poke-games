const indexes = {
    0: "NORMAL",
    1: "FIRE",
    2: "WATER",
    3: "ELECTRIC",
    4: "GRASS",
    5: "ICE",
    6: "FIGHTING",
    7: "POISON",
    8: "GROUND",
    9: "FLYING",
    10: "PSYCHIC",
    11: "BUG",
    12: "ROCK",
    13: "GHOST",
    14: "DRAGON",
    15: "DARK",
    16: "STEEL",
    17: "FAIRY",
    18: "KANTO",
    19: "JOHTO",
    20: "HOENN",
    21: "SINNOH",
    22: "UNOVA",
    23: "KALOS",
    24: "ALOLA",
    25: "GALAR",
    26: "PALDEA",
    27: "HISUI",
    28: "LEGENDARY",
    29: "MYTHIC",
    30: "ULTRABEAST",
    31: "BABY",
    32: "FOSSIL",
    33: "PARADOX",
    34: "STARTER",
    35: "MEGA",
    36: "MONOTYPE",
    37: "DUALTYPE",
};

const imagensDosTipos = {
    NORMAL: `https://archives.bulbagarden.net/media/upload/0/08/NormalIC_SV.png`,
    FIRE: `https://archives.bulbagarden.net/media/upload/a/a2/FireIC_SV.png`,
    WATER: `https://archives.bulbagarden.net/media/upload/d/de/WaterIC_SV.png`,
    ELECTRIC: `https://archives.bulbagarden.net/media/upload/7/77/ElectricIC_SV.png`,
    GRASS: `https://archives.bulbagarden.net/media/upload/7/7b/GrassIC_SV.png`,
    ICE: `https://archives.bulbagarden.net/media/upload/1/13/IceIC_SV.png`,
    FIGHTING: `https://archives.bulbagarden.net/media/upload/0/0f/FightingIC_SV.png`,
    POISON: `https://archives.bulbagarden.net/media/upload/9/9d/PoisonIC_SV.png`,
    GROUND: `https://archives.bulbagarden.net/media/upload/f/f8/GroundIC_SV.png`,
    FLYING: `https://archives.bulbagarden.net/media/upload/d/d7/FlyingIC_SV.png`,
    PSYCHIC: `https://archives.bulbagarden.net/media/upload/9/96/PsychicIC_SV.png`,
    BUG: `https://archives.bulbagarden.net/media/upload/d/d1/BugIC_SV.png`,
    ROCK: `https://archives.bulbagarden.net/media/upload/3/32/RockIC_SV.png`,
    GHOST: `https://archives.bulbagarden.net/media/upload/2/2c/GhostIC_SV.png`,
    DRAGON: `https://archives.bulbagarden.net/media/upload/7/7f/DragonIC_SV.png`,
    DARK: `https://archives.bulbagarden.net/media/upload/3/30/DarkIC_SV.png`,
    STEEL: `https://archives.bulbagarden.net/media/upload/b/b8/SteelIC_SV.png`,
    FAIRY: `https://archives.bulbagarden.net/media/upload/c/c6/FairyIC_SV.png`
};

const infosDoJogo = {
    "pokedoku-2x2": {
        rows: 2,
        cols: 2,
        min_tentativas: 4,
        limite_modo_dificil: 4,
        permissividade_modo_dificil: 1,
    },
    "pokedoku-3x3": {
        rows: 3,
        cols: 3,
        min_tentativas: 9,
        limite_modo_dificil: 5,
        permissividade_modo_dificil: 3,
    },
    "pokedoku-4x4": {
        rows: 4,
        cols: 4,
        min_tentativas: 16,
        limite_modo_dificil: 1,
        permissividade_modo_dificil: 5,
    },
    "pokedoku-single": {
        rows: 3,
        cols: 3,
        min_tentativas: 1,
    },
}

const respostasPokenexo = [
    {
        "id": 1,
        "ordem-inicial": [1, 15, 7, 3, 2, 9, 10, 8, 14, 0, 6, 11, 13, 4, 5, 12],
        "respostas": [
            {
                "desc": "Dragons of Unova",
                "pokemon": [747, 735, 760, 689],
            },
            {
                "desc": "Have Two Arms",
                "pokemon": [682, 648, 162, 89],
            },
            {
                "desc": "Mythic Pokémon",
                "pokemon": [477, 204, 316, 606],
            },
            {
                "desc": "Their Names Start With 'Z'",
                "pokemon": [969, 761, 693, 414],
            }
        ]
    },
    {
        "id": 2,
        "ordem-inicial": [1, 15, 7, 3, 2, 9, 10, 8, 14, 0, 6, 11, 13, 4, 5, 12],
        "respostas": [
            {
                "desc": "Start With Worldwide Companies (Meta, Intel, Apple, Shell)",
                "pokemon": [461, 980, 1004, 123],
            },
            {
                "desc": "Final Stage Steel Pokémon",
                "pokemon": [490, 1139, 462, 845],
            },
            {
                "desc": "Have Evolutions Introduced In Sinnoh",
                "pokemon": [153, 112, 276, 370],
            },
            {
                "desc": "Can Learn HM Surf",
                "pokemon": [46, 355, 517, 368],
            }
        ]
    },
    {
        "id": 3,
        "ordem-inicial": [1, 15, 7, 3, 2, 9, 10, 8, 14, 0, 6, 11, 13, 4, 5, 12],
        "respostas": [
            {
                "desc": "Electric-Flying Pokémon",
                "pokemon": [194, 712, 587, 771]
            },
            {
                "desc": "Have Galarian Forms",
                "pokemon": [192, 113, 684, 68]
            },
            {
                "desc": "Have Long Beaks",
                "pokemon": [196, 1007, 884, 706]
            },
            {
                "desc": "Related To Giovanni (Team Rocket)",
                "pokemon": [71, 201, 43, 150]
            }
        ]
    }
];
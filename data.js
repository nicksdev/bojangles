//CHARACTER

var player= {
    pname: "defaultName",
    role: "warrior",
    level: 1,
    xp: 0,
    str: 10,
    agi: 10,
    maxHealth: 50,
    health: 50,
    maxMana: 50,
    mana: 50,


    equipment: {
        "item0010": {
            itemname: "iron dagger",
            itemtype: "weapon",
            desc: "a small iron dagger with a short dull blade",
            weight: 2,
            minLevel: 0,
            use: "equip",
            minDamage: 1,
            maxDamage: 2,
            attack: 1,
            role: ["wizard", "warrior"],
            moveable: "yes"
        }

    },


    inv: {}

};




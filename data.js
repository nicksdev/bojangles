//CHARACTER

var player = {
    pname: "defaultName",
    role: "warrior",
    level: 2,
    attacks: 2,
    xp: 0,
    str: 10,
    agi: 10,
    maxHealth: 50,
    health: 30,
    maxMana: 50,
    mana: 50,


    // equipment: {
    //     "item0010": {
    //         itemname: "iron dagger",
    //         itemtype: "weapon",
    //         desc: "a small iron dagger with a short dull blade",
    //         weight: 2,
    //         minLevel: 0,
    //         use: "equip",
    //         min: 1,
    //         max: 2,
    //         attack: 1,
    //         role: ["wizard", "warrior"],
    //         moveable: "yes"
    //     },
    //
    //     "item0011": {
    //         itemname: "iron dagger",
    //         itemtype: "weapon",
    //         desc: "a small iron dagger with a short dull blade",
    //         weight: 2,
    //         minLevel: 0,
    //         use: "equip",
    //         min: 1,
    //         max: 2,
    //         attack: 1,
    //         role: ["wizard", "warrior"],
    //         moveable: "yes"
    //     }
    //
    //
    // },

    inv: {
        "item0040": {
            itemname: "healing balm",
            itemtype: "usable",
            desc: "a perfumed ointment that is used for treating wounds",
            weight: 1,
            minLevel: 0,
            use: "cast",
            effect: "heal",
            charges: 3,
            min: 3,
            max: 8,
            role: ["wizard","warrior","priest"],
            moveable: "yes"
        },

        "item0050": {
            itemname: "steel dagger",
            itemtype: "weapon",
            desc: "a small iron dagger with a short dull blade",
            weight: 2,
            minLevel: 12,
            use: "equip",
            min: 1,
            max: 2,
            attack: 1,
            role: ["warrior"],
            moveable: "yes"
        },

    }

};



//GLOBALS

//Equipable items
//This array lists the itemtypes which the main character can equip

const usableTypes = ["weapon", "chest", "legs", "feet", "hands", "ring", "head"];
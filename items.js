


    items = {
    //SPAWNED LIST
        "spawned": {
            "item9010": {
                itemname: "morning star",
                itemlocation: "equipped",
                itemtype: "weapon",
                desc: "a spiked metal ball on a short chain",
                weight: 2,
                minLevel: 0,
                use: "equip",
                min: 1,
                max: 2,
                attack: 1,
                role: ["wizard", "warrior"],
                moveable: "yes"
            },

            "item9011": {
                itemname: "another morning star",
                itemlocation: "room1",
                itemtype: "weapon",
                desc: "a spiked metal ball on a short chain",
                weight: 2,
                minLevel: 0,
                use: "equip",
                min: 1,
                max: 2,
                attack: 1,
                role: ["wizard", "warrior"],
                moveable: "yes"
            },

            "item0020": {
                itemname: "cloth shirt",
                itemlocation: "equipped",
                itemtype: "chest",
                desc: "a flimsy shirt that provides almost no protection",
                weight: 2,
                minLevel: 0,
                use: "equip",
                defence: 1,
                role: ["priest","warrior","wizard"],
                moveable: "yes"
            },

            "item0021": {
                itemname: "leather shirt",
                itemlocation: "inventory",
                itemtype: "chest",
                desc: "a flimsy shirt that provides almost no protection",
                weight: 2,
                minLevel: 0,
                use: "equip",
                defence: 1,
                role: ["priest","warrior","wizard"],
                moveable: "yes"
            },


            "item0050": {
                itemname: "steel dagger",
                itemlocation: "inventory",
                itemtype: "weapon",
                desc: "a small iron dagger with a short dull blade",
                weight: 2,
                minLevel: 2,
                use: "equip",
                min: 1,
                max: 2,
                attack: 1,
                role: ["warrior"],
                moveable: "yes"
            }


        },
        "library": {
            "item5010": {
                itemname: "morning star",
                itemlocation: "",
                itemtype: "weapon",
                desc: "a spiked metal ball on a short chain",
                weight: 2,
                minLevel: 0,
                use: "equip",
                min: 1,
                max: 2,
                attack: 1,
                role: ["wizard", "warrior"],
                moveable: "yes"

            },
            "item9998": {
                itemname: "test2",
                itemlocation: "",
                itemtype: "weapon",
                desc: "a spiked metal ball on a short chain",
                weight: 2,
                minLevel: 0,
                use: "equip",
                min: 1,
                max: 2,
                attack: 1,
                role: ["wizard", "warrior"],
                moveable: "yes"
            },
            "item9997": {
                itemname: "morning star99",
                itemlocation: "",
                itemtype: "weapon",
                desc: "a spiked metal ball on a short chain",
                weight: 2,
                minLevel: 0,
                use: "equip",
                min: 1,
                max: 2,
                attack: 1,
                role: ["wizard", "warrior"],
                moveable: "yes"
            },

            "item0040": {
                itemname: "healing balm",
                itemlocation: "",
                itemtype: "usable",
                desc: "a perfumed ointment that is used for treating wounds",
                weight: 1,
                minLevel: 0,
                use: "cast",
                effect: "heal",
                charges: 2,
                min: 3,
                max: 8,
                role: ["wizard","warrior","priest"],
                moveable: "yes"
            },

            "item0041": {
                itemname: "extra healing balm",
                itemlocation: "",
                itemtype: "usable",
                desc: "a perfumed ointment that is used for treating wounds",
                weight: 1,
                minLevel: 0,
                use: "cast",
                effect: "heal",
                charges: 2,
                min: 3,
                max: 8,
                role: ["wizard","warrior","priest"],
                moveable: "yes"
            }








        }
    };


    effects = {

        "fire bolt": {
            effectname: "fire bolt",
            desc: "",
            type: "damage",
            effectType: "health",
            hitroll: "yes",
            minLevel: 1,
            min: 1,
            max: 6,
            duration: 1,
            attack: 5,
            role: ["wizard"]

        },

        "minor heal": {
            effectname: "minor heal",
            desc: "",
            type: "buff",
            effectType: "health",
            hitroll: "no",
            minLevel: 1,
            min: 1,
            max: 6,
            duration: 1,
            attack: 0,
            role: ["priest"]


        }

    };


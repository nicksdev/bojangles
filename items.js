


    items = {
    //SPAWNED LIST
        "spawned": {

            "item0050": {
                itemname: "steel dagger",
                itemlocation: "player",
                equipped: true,
                itemtype: "weapon",
                desc: "a small iron dagger with a short dull blade",
                weight: 2,
                itemLevel: 2,
                use: "equip",
                min: 1,
                max: 13,
                attack: 1,
                role: ["warrior"],
                moveable: true
            },

            "item0020": {
                itemname: "cloth shirt",
                itemlocation: "player",
                equipped: true,
                itemtype: "chest",
                desc: "a flimsy shirt that provides almost no protection",
                weight: 2,
                itemLevel: 0,
                use: "equip",
                defence: 1,
                role: ["priest","warrior","wizard"],
                moveable: true
            }




        },


        "library": {
            "item5010": {
                itemname: "morning star",
                itemlocation: "",
                equipped: false ,
                itemtype: "weapon",
                desc: "a spiked metal ball on a short chain",
                weight: 2,
                itemLevel: 0,
                use: "equip",
                min: 1,
                max: 2,
                attack: 1,
                role: ["wizard", "warrior"],
                moveable: true
            },

            "item0050": {
                itemname: "steel dagger",
                itemlocation: "",
                equipped: false,
                itemtype: "weapon",
                desc: "a small iron dagger with a short dull blade",
                weight: 2,
                itemLevel: 2,
                use: "equip",
                min: 10,
                max: 30,
                attack: 1,
                role: ["warrior"],
                moveable: true
            },

            "item0020": {
                itemname: "cloth shirt",
                itemlocation: "",
                equipped: false,
                itemtype: "chest",
                desc: "a flimsy shirt that provides almost no protection",
                weight: 2,
                itemLevel: 0,
                use: "equip",
                defence: 1,
                role: ["priest","warrior","wizard"],
                moveable: true
            },

            "item0021": {
                itemname: "leather shirt",
                itemlocation: "",
                equipped: false,
                itemtype: "chest",
                desc: "a flimsy shirt that provides almost no protection",
                weight: 2,
                itemLevel: 0,
                use: "equip",
                defence: 2,
                role: ["warrior","priest"],
                moveable: true
            },

            "item0040": {
                itemname: "healing balm",
                itemlocation: "",
                equipped: false,
                itemtype: "usable",
                desc: "a perfumed ointment that is used for treating wounds",
                weight: 1,
                itemLevel: 0,
                use: "cast",
                effect: "minor heal",
                charges: 2,
                role: ["wizard","warrior","priest"],
                moveable: true
            },
            "item0041": {
                itemname: "extra healing balm",
                itemlocation: "",
                equipped: false,
                itemtype: "usable",
                desc: "a perfumed ointment that is used for treating wounds",
                weight: 1,
                itemLevel: 0,
                use: "cast",
                effect: "heal",
                charges: 2,
                role: ["wizard","warrior","priest"],
                moveable: true
            },

            "item0051": {
                itemname: "old wooden chest",
                itemlocation: "",
                equipped: false,
                itemtype: "containerFixed",
                spawncontents: [
                    ["healing balm",3],
                    ["extra healing balm",1]
                ],
                contents: "",
                locked: false,
                desc: "an old wooden chest",
                weight: 1,
                itemLevel: 0,
                use: "",
                effect: "",
                charges: 0,
                role: ["wizard","warrior","priest"],
                moveable: false
            },


            "item0052": {
                itemname: "red chest",
                itemlocation: "",
                equipped: false,
                itemtype: "containerVariable",
                spawncontents: [],
                lootlist: "Z",
                contents: "",
                locked: false,
                desc: "red chest",
                weight: 1,
                itemLevel: 0,
                use: "",
                effect: "",
                charges: 0,
                role: ["wizard","warrior","priest"],
                moveable: false
            },

            "mobcorpse": {

                itemname: "corpse name",
                itemlocation: "",
                equipped: false,
                itemtype: "chest",
                desc: "a corpse of a dead creature",
                weight: 100,
                itemLevel: 0,
                use: "",
                effect: "",
                charges: 0,
                role: ["wizard","warrior","priest"],
                moveable: true


            }







        }
    };

    effects = {

        "fire bolt": {
            effectname: "fire bolt",
            desc: "",
            type: "firedamage",
            hitroll: "yes",
            itemLevel: 1,
            min: 1,
            max: 6,
            quantity: 1,
            duration: 0,
            attack: 5,
            role: ["wizard"]

        },

        "minor heal": {
            effectname: "minor heal",
            desc: "",
            type: "heal",
            hitroll: "no",
            itemLevel: 1,
            min: 1,
            max: 6,
            quantity: 1,
            duration: 0,
            attack: 0,
            role: ["priest"]
        },

        "hearth heal": {
            effectname: "hearth heal",
            desc: "",
            type: "heal",
            hitroll: "no",
            itemLevel: 1,
            min: 1,
            max: 3,
            quantity: 1,
            duration: 5,
            attack: 0,
            role: ["priest"]
        },

        "major heal": {
            effectname: "minor heal",
            desc: "",
            type: "heal",
            hitroll: "no",
            itemLevel: 1,
            min: 1,
            max: 6,
            quantity: 3,
            duration: 0,
            attack: 0,
            role: ["priest"]
        },

        "bulls strength": {
            effectname: "bulls strength",
            desc: "",
            type: "strength",
            hitroll: "no",
            itemLevel: 1,
            min: 4,
            max: 4,
            quantity: 1,
            duration: 10,
            attack: 0,
            role: ["priest"]
        },


    };

    state = {



        // "label": {
        //     end: "",
        //     target: "",
        //     name: ""
        // }



    };

    mobs = {

        "spawned": {



        },

        "library": {

            //MOB TEMPLATES


            "mob0001": {
                name: "weak goblin",
                location: "",
                type: "mob",
                level: 1,
                attacks: 1,
                str: 30,
                agi: 5,
                armour: 2,
                maxHealth: 2,
                health: 2,
                maxMana: 0,
                mana: 0,
                attackType: ["melee"],
                melee: "claws",
                spells: [],
                special: [],
                lootlist: "Z"
            },

            "mob0002": {
                name: "cave worm",
                location: "",
                type: "mob",
                level: 1,
                attacks: 1,
                str: 10,
                agi: 2,
                armour: 2,
                maxHealth: 2,
                health: 2,
                maxMana: 0,
                mana: 0,
                attackType: ["melee"],
                melee: "bite",
                spells: [],
                special: [],
                lootlist: "Z2"
            },

        },

        "weapons": {
            "claws": {
                    effectname: "claws",
                    desc: "",
                    min: 4,
                    max: 4,
                    attack: 1

            },

            "bite": {
                effectname: "bite",
                desc: "",
                min: 4,
                max: 4,
                attack: 1

            },




        }



    };

    loot = {

        "Z1": {
            length: 5,
            1: "a",
            2: "b",
            3: "c",
            4: "d",
            5: "e"
        },

        "Z2": {
            length: 7,
            1: "a",
            2: "b",
            3: "c",
            4: "d",
            5: "e",
            6: "e",
            7: "e"

        }


    };
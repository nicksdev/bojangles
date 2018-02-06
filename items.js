


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


            //WEAPONS

            "item0050": {
                itemname: "rusty dagger",
                itemlocation: "",
                equipped: false,
                itemtype: "weapon",
                desc: "a small rusty dagger with a short blade",
                weight: 2,
                itemLevel:0,
                use: "equip",
                min: 1,
                max: 3,
                attack: 1,
                role: ["priest","warrior","wizard"],
                moveable: true
            },

            "item0051": {
                itemname: "steel dagger",
                itemlocation: "",
                equipped: false,
                itemtype: "weapon",
                desc: "a small iron dagger with a short dull blade",
                weight: 2,
                itemLevel: 2,
                use: "equip",
                min: 2,
                max: 6,
                attack: 1,
                role: ["priest","warrior","wizard"],
                moveable: true
            },

            "item0052": {
                itemname: "iron shortsword",
                itemlocation: "",
                equipped: false,
                itemtype: "weapon",
                desc: "a short sowrd made of iron",
                weight: 2,
                itemLevel: 1,
                use: "equip",
                min: 1,
                max: 10,
                attack: 1,
                role: ["priest","warrior","wizard"],
                moveable: true
            },

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


            //ARMOUR

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

            "item0022": {
                itemname: "leather boots",
                itemlocation: "",
                equipped: false,
                itemtype: "feet",
                desc: "polished leather boots",
                weight: 2,
                itemLevel: 1,
                use: "equip",
                defence: 1,
                role: ["warrior","priest"],
                moveable: true
            },

            "item0023": {
                itemname: "leather pants",
                itemlocation: "",
                equipped: false,
                itemtype: "legs",
                desc: "pants made of leather",
                weight: 2,
                itemLevel: 1,
                use: "equip",
                defence: 2,
                role: ["warrior","priest"],
                moveable: true
            },

            "item0024": {
                itemname: "iron helm",
                itemlocation: "",
                equipped: false,
                itemtype: "head",
                desc: "a helm made of iron",
                weight: 2,
                itemLevel: 2,
                use: "equip",
                defence: 3,
                role: ["warrior","priest"],
                moveable: true
            },

            "item0025": {
                itemname: "steel breastplate",
                itemlocation: "",
                equipped: false,
                itemtype: "chest",
                desc: "a shining breastplate made of steel",
                weight: 2,
                itemLevel: 3,
                use: "equip",
                defence: 6,
                role: ["warrior","priest"],
                moveable: true
            },


            //MISC

            "item0001": {
                itemname: "gold",
                itemlocation: "",
                equipped: false ,
                itemtype: "money",
                desc: "pieces of gold",
                weight: 0,
                itemLevel: 0,
                use: "",
                min: 1,
                max: 2,
                attack: 1,
                role: [],
                moveable: true
            },

            "item0002": {
                itemname: "pile of gold",
                quantity: 0,
                itemlocation: "",
                equipped: false ,
                itemtype: "money",
                desc: "pieces of gold",
                weight: 0,
                itemLevel: 0,
                use: "",
                min: 1,
                max: 2,
                attack: 1,
                role: [],
                moveable: true
            },


            //MAGIC


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


            //CONTAINERS





            "item0094": {
                itemname: "black chest",
                itemlocation: "",
                equipped: false,
                itemtype: "container",
                spawnFixed: true,
                spawnVari: false,
                fixedContent: [
                    ["healing balm",1,1,,],
                    ["gold",5,10,,],
                    ["steel dagger",1,1,,],
                ],
                variContent: {
                    quantity: 5,
                    lootlist: "Z",
                    lootlevel: 1
                },
                locked: false,
                desc: "a big black chest",
                weight: 1,
                itemLevel: 1,
                use: "",
                effect: "",
                charges: 0,
                role: ["wizard","warrior","priest"],
                moveable: false
            },


            "corpse01": {
                itemname: "corpse01",
                itemlocation: "",
                equipped: false,
                itemtype: "container",
                spawnFixed: true,
                spawnVari: false,
                fixedContent: [
                    ["healing balm",1,1,,],
                    ["gold",5,10,,],
                    ["steel dagger",1,1,,],
                ],
                variContent: {
                    quantity: 5,
                    lootlist: "Z",
                    lootlevel: 1
                },
                locked: false,
                desc: "a big black chest",
                weight: 1,
                itemLevel: 1,
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

        "Z": {


            "1" : [

                ["steel dagger",1,1,1,10],
                ["iron helm",1,1,11,20],
                ["healing balm",1,1,21,70],
                ["leather shirt",1,1,71,80],
                ["steel breastplate",1,1,81,100]

            ]





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
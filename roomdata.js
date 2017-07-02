
rooms = {






    "room0": {
        name: "room name",
        copy:  {
            default: "default copy message for this room",
            contents: "in the room you see ITEMS + MOBS",
            mobAttack: "mob attack message",
            mobsDefeated: "don't use this. When Mobs are dead then corpses should be in the item pool",
            exits: "test exit copy, east west and south"
        },
        hasMobs: true,
        mobsDefeated: false,
        mobs: ["weakGoblin", "caveViper"],
        items: {
            "silver sword": {
                id: 100001,
                name: "silver sword",
                desc: "a light and slim blade with a silvered edge",
                type: "weapon",
                levelReq: 1,
                use: "equip",
                minDamage: 3,
                maxDamage: 10,
                attack: 9,
                class: ["warrior"],
                moveable: true
            },

            "copper mace": {
                id: 100002,
                name: "copper mace",
                desc: "a heavy mace made of copper",
                type: "weapon",
                levelReq: 1,
                use: "equip",
                minDamage: 3,
                maxDamage: 10,
                attack: 9,
                class: ["warrior"],
                moveable: true
            },




        },
        exits:  {
            east: {
                description: "You take the Eastern Exit",
                nextRoom: "room0"
            },
            west: {
                description: "You take the Western Exit",
                nextRoom: "room0"
            },
            south: {
                description: "You take the Southern Exit",
                nextRoom: "room0"
            }
        }

    }








};
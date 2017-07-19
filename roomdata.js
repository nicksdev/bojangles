
rooms = {






    "room0": {
        name: "room name",
        copy:  {
            default: "a default copy message for this room",
            contents: "in the room you see ITEMS + MOBS",
            mobAttack: "mob attack message",
            mobsDefeated: "don't use this. When Mobs are dead then corpses should be in the item pool",
            exits: "test exit copy, east west and south"
        },
        hasMobs: true,
        mobsDefeated: false,
        mobs: ["weakGoblin", "caveViper"],
        items: {
            "item0050": {
                itemname: "silver sword",
                itemtype: "weapon",
                desc: "a light and slim blade with a silvered edge",
                weight: 5,
                minLevel: 2,
                use: "equip",
                twohanded: "no",
                minDamage: 3,
                maxDamage: 10,
                attack: 9,
                role: ["warrior"],
                moveable: true
            },

            "item0051": {
                itemname: "iron mace",
                itemtype: "weapon",
                desc: "a large hunk of iron attached to a large wooden handle",
                weight: 5,
                minLevel: 2,
                use: "equip",
                twohanded: "yes",
                minDamage: 3,
                maxDamage: 10,
                attack: 9,
                role: ["warrior"],
                moveable: true
            },









        },
        exits:  {
            north: {
                desc: "passing through a low tunnel into ",
                nextRoom: "room0"
            },
            west: {
                desc: "You take the Western Exit",
                nextRoom: "room0"
            },
            south: {
                desc: "You take the Southern Exit",
                nextRoom: "room0"
            }
        }

    }








};
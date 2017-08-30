rooms = {






    "room0": {
        name: "room name - room 0",
        copy:  {
            default: "a default copy message for this room",
            contents: "in the room you see ITEMS + MOBS",
            mobAttack: "mob attack message",
            mobsDefeated: "don't use this. When Mobs are dead then corpses should be in the item pool",
            exits: "test exit copy, east west and south"
        },
        hasMobs: true,
        mobsDefeated: false,
        visited: false,
        mobs: ["weakGoblin", "caveViper"],
        items: [
            ["healing balm",1],
            ["extra healing balm",1]
        ],

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
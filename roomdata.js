rooms = {





    "room0": {
        name: "room name - room 0",
        copy:  {
            default: "a default copy message for room 0",
            contents: "in the room you see ITEMS + MOBS",
            mobAttack: "mob attack message",
            mobsDefeated: "don't use this. When Mobs are dead then corpses should be in the item pool",
            exits: "test exit copy, north"
        },
        hasMobs: false,
        mobsDefeated: false,
        visited: false,
        mobs: [],
        items: [
            ["steel dagger",1],
            ["leather shirt",1],
            ["red chest",1],
            ["old wooden chest",1]


        ],

        exits:  {
            north: {
                desc: "passing through a low tunnel into ",
                nextRoom: "room1"
            }


        }

    },

    "room1": {
        name: "room name - room 1",
        copy:  {
            default: "a default copy message for room 1",
            contents: "in the room you see ITEMS + MOBS",
            mobAttack: "mob attack message",
            mobsDefeated: "don't use this. When Mobs are dead then corpses should be in the item pool",
            exits: "test exit copy, south"
        },
        hasMobs: true,
        mobsDefeated: false,
        visited: false,
        mobs: [
            ["weak goblin"],
            ["cave worm"]
        ],
        items: [],
        exits:  {
            south: {
                desc: "You take the Southern Exit",
                nextRoom: "room0"
            }
        }

    }



};
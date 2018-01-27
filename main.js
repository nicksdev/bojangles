//ntest

function game() {

    //document.getElementById("statsDiv").innerHTML = 5 + 6;
    //document.getElementById("consoleDiv").innerHTML += "test2";

    //CORE FUNCTIONS

    var spawnCount = 100001;
    var count = 1;
    var combatArray = [];
    var combatFlag = "";
    var status = "normal";

    function gamewindow() {
        $('#userInput').unbind('keyup');
        $('#userInput').on("keyup", function (event) {
            if (event.which === 13) {
                event.preventDefault();
                input = $(this).val().toLowerCase();
                //console.log(input);
                consolePush(input,"default");
                inputSplit(input);
                //console.log("Location = " + loc["name"]);
                console.log("Status = " + status);
                if (actions.hasOwnProperty(inputAction) === true) {
                    //console.log("Recognised Action: " + inputAction);
                    countOne();
                    actions[inputAction]();
                } else if (move.hasOwnProperty(inputAction) === true) {
                    console.log("Recognised Movement " + inputAction);

                    if (status === "normal") {
                        move[inputAction]();
                    } else if (status === "in combat") {
                        consolePush("You cant leave, you are in combat");
                    }

                }
            }
        });
    }

    function consolePush(copy,style) {
        if (style == null) {
            document.getElementById("consoleDiv").innerHTML += copy + "<br>";
        } else {
            document.getElementById("consoleDiv").innerHTML += '<div class="' + style + '">' + copy + "</div>";
        }
        document.getElementById('userInput').value = "";
        document.getElementById("consoleDiv").scrollTop = document.getElementById("consoleDiv").scrollHeight - document.getElementById("consoleDiv").clientHeight;
    }

    function init(location) {


        if (rooms[loc]["visited"] === false) {
            //Spawn room items
            rooms[loc]["items"].forEach(function (z) {
                spawnNew(z[0], loc, z[1],z[2]);

            });

            //Spawn room mobs
            rooms[loc]["mobs"].forEach(function (z) {
                // console.log(z);
                spawnMob(z[0], loc);

            });

        }

        //Flag room as visited
        rooms[loc]["visited"] = true;

        consolePush(location["copy"]["default"]);

        //Display exits
        consolePush("You can see the following exits: ");
        consolePush(Object.getOwnPropertyNames(rooms[loc]["exits"]),"movement");

        //Display items
        displayItems();


        //Display Mobs
        for (var i = 0; i < mobParse(mobs["spawned"], "location", loc).length; i++) {
            consolePush(mobs["spawned"][mobParse(mobs["spawned"], "location", loc)[i]]["name"], "mobs");
        }

        checkState();

        checkMobs();

    }

    function countOne() {
        count ++;
        console.log("Count = " + count);
        checkState()
    }

    function inputSplit(x) {

        //split userInput into array
        tmp = input.split(" ");

        //assign first word to userInputAction and shortens userInput
        inputAction = tmp.shift();

        //rejoin shortened array
        inputString = tmp.join(" ");

    }

    function dice(minnum,maxnum,freq){
        result = 0;
        for (i = 0; i < freq; i++) {
            x = Math.floor(Math.random() * (maxnum - minnum + 1) + (minnum));
            //x = Math.floor(Math.random() * 4);
            // console.log(x);
            result = result + x;
        }
        return result;
    }

    //OBJECT MANAGEMENT
    function changeLoc(id,loc) {
        console.log(id);
        console.log(items["spawned"][id]);
        items["spawned"][id]["itemlocation"] = loc;

    }

    function getId(obj,itemname) {
        x = _.findKey(obj, {"itemname": itemname});
        y = "none";

        if (x !== null) {
            return x;
        } else {
            return y;
        }

    }

    function getMobId(obj,mobname) {
        x = _.findKey(obj, {"name": mobname});
        y = "none";

        if (x !== null) {
            return x;
        } else {
            return y;
        }

    }

    function objParse(obj,property,value) {
        //check a particular value of an object,
        //find object
        //check objects value
        array = [];
        for(var key in obj) {
            if (obj[key][property] == value) {
                //console.log("Object found");
                // console.log(obj[key][value]);
                //console.log(key);
                array.push(key);
            } else {
                //console.log(obj[key]["itemname"]);
                //console.log("Object not found");

            }
        }
        //console.log(array);
        return array;
    }

    function mobParse(obj,property,value) {
        //check a particular value of an object,
        //find object
        //check objects value
        array = [];
        for(var key in obj) {
            if (obj[key][property] == value) {
                //console.log("Object found");
                // console.log(obj[key][value]);
                //console.log(key);
                array.push(key);
            } else {
                //console.log(obj[key]["itemname"]);
                //console.log("Object not found");

            }
        }
        //console.log(array);
        return array;
    }

    function objParse2(obj,property,value,property2,value2) {
        //check a particular value of an object,
        //find object
        //check objects value
        array = [];
        for(var key in obj) {
            if (obj[key][property] == value && obj[key][property2] == value2) {
                //console.log("Object found");
                // console.log(obj[key][value]);
                //console.log(key);
                array.push(key);
            } else {
                //console.log(obj[key]["itemname"]);
                //console.log("Object not found");

            }
        }
        //console.log(array);
        return array;
    }

    function itemCheck(field,lookup,value,peram) {
        var result = false;
        _.forEach(items["spawned"], function(i) {
            if (result) {
                return;
            }
            if(i[field] === lookup) {
                if(i[peram] == value) {
                    console.log("PASSED");
                    result = true;
                } else {
                    console.log("FAILED");
                    result = false;
                }
            } else {console.log("Object Not Found")}
        });
        console.log("ITEMCHECK = " + result);
        return result;
    }


    // function itemCheck2(field,lookup,value,peram,value2,peram2) {
    //     var result = false;
    //     _.forEach(items["spawned"], function(i) {
    //         if (result) {
    //             return;
    //         }
    //         if(i[field] === lookup) {
    //             if(i[peram] === value) {
    //                     if (i[peram2] === value2) {
    //                         console.log("PASSED");
    //                         result = true;
    //                     }
    //             } else {
    //                 console.log("FAILED");
    //                 result = false;
    //             }
    //         } else {console.log("Object Not Found")}
    //     });
    //     console.log("ITEMCHECK = " + result);
    //     return result;
    // }

    function itemReturn2(obj,peram,value,peram2,value2) {
        // console.log("Running itemReturn2");
        // console.log(obj);
        for(var key in obj) {
            // console.log(key);
            // console.log(obj[key][peram]);
            // console.log(value);
            // console.log(obj[key][peram2]);
            // console.log(value2);
            // console.log(items["spawned"][key]["itemtype"]);
            // console.log(items["spawned"][key]["equipped"]);
            if (obj[key][peram] === value && obj[key][peram2] === value2) {

                // console.log("MATCH");
                return key;
            }
        }
        return null;
    }

    function itemReturn3(obj,peram,value,peram2,value2,peram3,value3) {
        for (var key in obj) {
            if (obj[key][peram] === value && obj[key][peram2] === value2 && obj[key][peram3] === value3) {
                return key;

            }
        }
        return null;
    }

    function fetchValue(obj,field,lookup,peram) {
//      fetchValue(player["equipment"],"itemname",inputString,"role")
        //iterate through obj
        //match name
        //return object
        var result;

        _.forEach(obj, function(i) {
            if(i[field] === lookup) {
                console.log("lookup match");
                result = i[peram];
                return true;
                // console.log("Fetch Object Found");
                // console.log(i);
                // console.log("fetchValue = " + i[peram]);
            }
        });
        return result;
    }

    function invList() {


        return objParse2(items["spawned"],"itemlocation","player","equipped",false)
    }

    function equippedList() {
        return objParse2(items["spawned"],"itemlocation","player","equipped",true)
    }

    function displayItems() {

        consolePush("This room contains: ");
        for (var i = 0; i < objParse(items["spawned"], "itemlocation", loc).length; i++) {
            consolePush(items["spawned"][objParse(items["spawned"], "itemlocation", loc)[i]]["itemname"], "items");
        }

    }

    function displayContents(ident){
        consolePush("The " + inputString + " contains: ");


        for (var i = 0; i < objParse(items["spawned"], "itemlocation", ident).length; i++) {
            consolePush(items["spawned"][objParse(items["spawned"], "itemlocation", ident)[i]]["itemname"], "items");
        }


    }


    //ARRAY MANAGEMENT
    function arraySearch(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                return myArray[i];
            }
        }
         return consolePush("There is no " + inputString + " here", "error");

    }


    //SPAWN STUFF

    // spawnItem = function(item,loc,quantity) {
    //
    //     sourceId = getId(items["library"],item);
    //     //console.log(items["library"][sourceId]["itemtype"]);
    //
    //     if (items["library"][sourceId]["itemtype"] !== "containerFixed") {
    //
    //         //console.log("NOT FIXED CONTAINER");
    //         for (i = 0; i < quantity; i++) {                //Loop handles multiple quantities
    //             console.log("Spawning + " + items["library"][sourceId]["itemname"] + spawnCount);
    //             items["spawned"][spawnCount] = items["library"][sourceId];
    //             items["spawned"][spawnCount]["itemlocation"] = loc;
    //             spawnCount = spawnCount + 5;
    //         }
    //
    //     } else if (items["library"][sourceId]["itemtype"] === "containerFixed") {
    //
    //         //console.log("FIXED CONTAINER");
    //
    //         //Spawn Container of type containerFixed
    //         console.log("Spawning + " + items["library"][sourceId]["itemname"] + spawnCount);
    //         items["spawned"][spawnCount] = items["library"][sourceId];
    //         items["spawned"][spawnCount]["itemlocation"] = loc;
    //         containerID = spawnCount;
    //         spawnCount = spawnCount + 5;
    //
    //
    //         //Spawn contents of the container
    //         items["spawned"][containerID]["spawncontents"].forEach(function (z) {
    //             spawnNew(z[0], containerID, z[1]);
    //         }
    //
    //         );
    //
    //     } else {
    //
    //         console.log("UNRECOGNIZED SPAWNITEM");
    //     }
    //
    // };



    spawnNew = function (item,loc,quantity,min) {

        sourceId = getId(items["library"],item);

        switch(items["library"][sourceId]["itemtype"]) {
            case "containerFixed":
                console.log("Spawning Container Fixed");

                items["spawned"][spawnCount] = jQuery.extend({}, items["library"][sourceId]);
                items["spawned"][spawnCount]["itemlocation"] = loc;
                containerID = spawnCount;
                spawnCount++;

                //Spawn contents of the container
                items["spawned"][containerID]["spawncontents"].forEach(function (z) {
                        spawnNew(z[0], containerID, z[1], z[2]);


                    }
                );
                break;

            case "containerVariable":

                // console.log("Spawning Container Variable");

                items["spawned"][spawnCount] = jQuery.extend({}, items["library"][sourceId]);
                items["spawned"][spawnCount]["itemlocation"] = loc;
                containerID = spawnCount;
                spawnCount++;

                //Spawn contents of the container

                lootlist = items["spawned"][containerID]["lootlist"];
                lootqty = items["spawned"][containerID]["contents"];
                lootlevel = items["spawned"][containerID]["itemLevel"];


                //Iterate over container quantity
                for (z = 0; z<lootqty; z++) {

                    x = Math.floor(Math.random() * 100);
                    //console.log(x);

                    loot[lootlist][lootlevel].forEach(function(k) {

                     //   console.log(x);
                     //   console.log(k[0] + " to " + k[1]);

                        if (x >= k[0] && x <= k[1]) {

                            // console.log("SPAWNING " + k[2] + "CONTAINER CONTENTSs");
                            console.log(items["spawned"][containerID]);
                            spawnNew(k[2],containerID,k[3],k[4]);

                        }

                    }


                    );

                }

                break;

            case "money":
                items["spawned"][spawnCount] = jQuery.extend({}, items["library"]["item0002"]);
                items["spawned"][spawnCount]["itemlocation"] = loc;
                diff = quantity - min;
                value = min + Math.floor(Math.random() * diff);
                items["spawned"][spawnCount]["quantity"] = value;
                spawnCount++;

                break;




            default:

                for (i = 0; i < quantity; i++) {                //Loop handles multiple quantities

                   // console.log("Spawning normal item " + items["library"][sourceId]["itemname"]);
                    items["spawned"][spawnCount] = jQuery.extend({}, items["library"][sourceId]);
                    items["spawned"][spawnCount]["itemlocation"] = loc;
                    spawnCount++;

                }

        }

    }


    // spawnNew2 = function(item,loc,quantity) {
    //
    //
    //     sourceId = getId(items["library"],item);
    //
    //
    //     if (items["library"][sourceId]["itemtype"] !== "containerFixed") {
    //         console.log("Spawning item");
    //
    //         for (i = 0; i < quantity; i++) {                //Loop handles multiple quantities
    //
    //             items["spawned"][spawnCount] = jQuery.extend({}, items["library"][sourceId]);
    //             items["spawned"][spawnCount]["itemlocation"] = loc;
    //             spawnCount++;
    //
    //         }
    //
    //     } else if (items["library"][sourceId]["itemtype"] === "containerFixed") {
    //         console.log("Spawning fixed container");
    //         items["spawned"][spawnCount] = jQuery.extend({}, items["library"][sourceId]);
    //         items["spawned"][spawnCount]["itemlocation"] = loc;
    //         containerID = spawnCount;
    //         spawnCount++;
    //
    //         //Spawn contents of the container
    //         items["spawned"][containerID]["spawncontents"].forEach(function (z) {
    //             spawnNew(z[0], containerID, z[1]);
    //         }
    //         );
    //
    //     } else if (items["library"][sourceId]["itemtype"] === "containerVariable") {
    //
    //         console.log("Spawning variable container");
    //     }
    //
    //
    //
    //     else {
    //
    //
    //         console.log("UNRECOGNIZED SPAWNITEM");
    //     }
    //
    // };

    spawnCorpse = function(name,level) {

        console.log("spawning corpse");
        items["spawned"][spawnCount] = items["library"]["mobcorpse"];
        items["spawned"][spawnCount]["itemlocation"] = loc;
        items["spawned"][spawnCount]["itemname"] = name + " corpse";

        console.log(items["spawned"]);
        spawnCount++;
    };






    function spawnMob(mob,loc) {
        // console.log(mob);
        // console.log(loc);
        // console.log(getMobId(mobs["library"],mob));
        sourceId = getMobId(mobs["library"],mob);
        mobs["spawned"][spawnCount] = mobs["library"][sourceId];
        mobs["spawned"][spawnCount]["location"] = loc;
        mobs["spawned"][spawnCount]["key"] = spawnCount;
        spawnCount ++;
    }


    //STATE STUFF
    function stateSet (category,obtype,source,target) {
        // console.log(obtype);
        // console.log(source);
        // console.log(obtype[source]);
        state[category + count] = Object.create(null);
        state[category + count]["end"] = obtype[source]["duration"] + count;
        state[category + count]["target"] = target;
        state[category + count]["source"] = source;
        state[category + count]["type"] = obtype[source]["type"];

    }

    function checkState() {
        //console.log(Object.keys(state).length);

        if (Object.keys(state).length > 0) {
            console.log("State has objects");

            console.log(state);

            for(var key in state) {
                // console.log(state[key]["type"]);
                // console.log(state[key]["target"]);
                // console.log(state[key]["source"]);

                if (state[key]["end"] <= count) {
                    delete state[key];
                } else {
                    applyEffect(state[key]["type"],state[key]["target"],state[key]["source"]);
                }
            }



        } else {
            //console.log("State is empty")
        }

    }

    function checkMobs() {
        if (mobParse(mobs["spawned"], "location", loc).length >= 1) {
            combatInit();

        }
    }




    //MAGIC & EFFECTS
    function castSpell(spell, target) {

        console.log("Casting " + spell + " on " + target);

        applyEffect(effects[spell]["type"],target,spell);

        if (effects[spell]["duration"] > 0) {
            console.log("Setting state");
            console.log(spell);
            stateSet("effect",effects,spell,target)
            console.log(state);

        }

        //stateSet("effect",effects,"hearth heal","player");


    }

    function applyEffect(effect,target,source) {


        console.log(effect);
        console.log(target);
        console.log(source);
        console.log(effects[effect]["type"]);


        console.log("Applying effect " + effect + " on " + target + " from " + source["itemname"]);



        switch (effects[effect]["type"]) {
            case ("heal"):

                consolePush(player["health"]);

                player["health"] = player["health"] + dice(effects[effect]["min"],effects[effect]["max"],effects[effect]["quantity"]);
                if (player.health > player.maxHealth) {
                    player.health = player.maxHealth;
                    consolePush("Your health is at maximum","error");
                }

                consolePush(player["health"]);


                break;

            case ("firedamage"):

                break;
        }

    }


    //COMBAT

    function combatRound() {

        if (combatArray.length == combatFlag) {
            combatFlag = 0;
        }

        if (combatArray[combatFlag].type === "player") {
            //console.log("PLAYER ATTACK ROUND");
            listMob();
            consolePush("What do you want to do?");

        } else if (combatArray[combatFlag].type === "mob") {
            //console.log("MOB ATTACK ROUND")
            mobAttack();

        } else {
            console.log("ERROR: Unrecognised combatFlag")
        }

    }

    function mobAttack() {

        mob = mobs.spawned[combatArray[combatFlag]["key"]];
        weapon = mobs.weapons[mob[mob["attackType"]]];

        attackInst(mob,player,weapon);

        //console.log("Mob Attack complete");
        combatFlag++;
        combatRound();
    }

    function listMob() {
        //lists the mobs in order from combat array. Strips out player
        //may wish to add entity types other than 'mob' later
        for (var i=0; i < combatArray.length; i++) {
            //console.log(combatArray[i]);
            if (combatArray[i].type === "mob") {
                // console.log(i + " : " + combatArray[i].name);
                consolePush(i + " : " + combatArray[i].name,"mobs")
            }
        }
    }

    function combatInit() {
        consolePush("You are under attack!!!");
        status = "in combat";
        listMob();
        mobPush(mobs["spawned"]);

        //may with to change this to either random, or based on initiative, or based on the combat array order
        //for now player always goes first
        combatFlag = 0;

        combatRound();

    }

    function mobPush(obj) { //Object.keys(mobs.spawned)[1]

        combatArray = [];
        for(var key in obj) {
            //console.log(obj[key]);
            //console.log([key][0]);

            if (obj[key]["location"] === loc)
            combatArray.push(obj[key]);


           // console.log(combatArray);
        }

        combatArray.push(player);
        // console.log(array);


        combatArray.sort(function (a,b) {
           return a.agi - b.agi;
        });

        combatArray.reverse();


        return(combatArray);

    }

    function combatOrder() {
        for (var i = 0; i < combatArray.length; i++) {
            consolePush(i + ": " + combatArray[i]["name"],"mobs");
        }
    }

    function targetObj(x) {  //returns target object
        y = parseInt(x);
        if (isNaN(y) === false) {
            return (typeof combatArray[y] === "undefined"
                ? consolePush("Enter a number between 0 and " + (combatArray.length - 1))
                : combatArray[y]
            );
        } else {
            console.log("ITS A STRING");
            return arraySearch(inputString,combatArray)
        }
    }

    function attackInst(attacker,target,weapon) {
        consolePush(attacker["name"] + " attacks " + target["name"],"combat" + attacker["type"]);
        attackRole = attacker["str"] + weapon["attack"] + dice(1,6,2);
        defenceRole = target["agi"] + target["armour"] + dice(1,6,2);

        if (attackRole > defenceRole) {
            consolePush(attacker["name"] + " HITS!","combat" + attacker["type"]);
            calcDamage(attacker,target,weapon);
        } else {
            consolePush(attacker["name"] + " MISSES!","combat" + attacker["type"]);
        }
    }

    function calcDamage(attacker,target,weapon) {
        damage = (Math.round(attacker["str"]/10 + dice(weapon["min"],weapon["max"],1)) - target["armour"]);
        consolePush(attacker["name"] + " hits " + target["name"] + " for " + damage + " damage","combat" + attacker["type"]);
        target["health"] = target["health"] - damage;
        if (target["health"] <= 0) {
            consolePush(target["name"] + " IS DEAD!!!","combat" + attacker["type"]);
            deathHandler(target);
        }
    }

    function deathHandler(target) {

        console.log("launching deathHandler");

        if (target["name"] === player["name"]) {
            console.log("HANDLING CHARACTER DEATH");
            consolePush("YOU ARE DEAD");
            status = "normal";
            game();

        } else {
            //remove mobs from combatarray and spawned list
            combatArray.splice(combatArray.indexOf(target),1);
            mobId = getMobId(mobs["spawned"],target["name"]);


            console.log(mobs["spawned"][mobId]);

            //delete mobs["spawned"][mobId];

            consolePush(target["name"] + " is a dead body now","error");




            //spawnCorpse()

            //create corpse
            // mobname + corpse












            if (combatArray.length == 1) {

                consolePush("YOU ARE VICTORIOUS!!!!");
                status = "normal";
                console.log(loc);
                rooms[loc]["mobsDefeated"] = true;
                init(rooms[loc]);

            }

        }


    }


    //UNUSED
    function objCheck(obj,field,lookup,value,peram) {
        var result = false;
        _.forEach(obj, function(i) {
            if (result) {
                return;
            }
            if(i[field] === lookup) {
                console.log("Object Found");
                if(i[peram] === value) {
                    console.log("PASSED");
                    result = true;
                } else {
                    console.log("FAILED");
                    result = false;
                }
            } else {console.log("Object Not Found")}
        });
        return result;
    }

    function minusItem(sourceObj,itemname) {
        id = getId(sourceObj,itemname);
        if (typeof id !== "undefined") {
            console.log("id is good");
            //destObj[id] = sourceObj[id];
            delete sourceObj[id];
        } else {
            console.log("id is bad")
        }
    }

    function addItem(sourceObj,itemname,destObj) {
        id = getId(sourceObj,itemname);
        if (typeof id !== "undefined") {
            console.log("id is good");
            destObj[id] = sourceObj[id];
        } else {
            console.log("id is bad")
        }
    }

    function list(object,detail) {
        array = [];
        for(var key in object) {
            array.push(object[key][detail]);
        }
        // console.log(array);
        return(array);
    }

    function list2(object) {
        array = [];
        for(var key in object) {
            array.push(object[key]);
        }
        // console.log(array);
        return(array);
    }

    function updateRoom() {
        objParse(spawned,"itemlocation",loc)
    }

    function fetchValue2(obj,field,lookup,field2,lookup2,peram) {


        var result;

        _.forEach(obj, function(i) {
            if(i[field] === lookup) {
                console.log("lookup1 match");
                if(i[field2] === lookup2) {
                    console.log("lookup1 match");
                    result = i[peram];
                    return true;
                }


                // console.log("Fetch Object Found");
                // console.log(i);
                // console.log("fetchValue = " + i[peram]);
            }
        });
        return result;
    }

    function ownedList() {
        return objParse(items["spawned"],"itemlocation","player")
    }


actions = {

    attack: function () {

      target = targetObj(inputString);
      weapon = items["spawned"][itemReturn2(items["spawned"],"itemtype","weapon","equipped",true)];

        //console.log(itemReturn2(items["spawned"],"itemtype","weapon","equipped",true));

      consolePush("YOU ATTACK THE " + target["name"] + " with your " + weapon["itemname"],"combatPlayer");


      attackInst(player,target,weapon);

      //console.log("Player Attack complete");
      combatFlag++;
      combatRound();

    },

    look: function () {
        consolePush("You look");
        consolePush(rooms[loc]["copy"]["default"]);
        // for (var i = 0; i < objParse(items["spawned"], "itemlocation", loc).length; i++) {
        //     consolePush(items["spawned"][objParse(items["spawned"], "itemlocation", loc)[i]]["itemname"], "items");
        // }

        for (var i = 0; i < mobParse(mobs["spawned"], "location", loc).length; i++) {
            consolePush(mobs["spawned"][mobParse(mobs["spawned"], "location", loc)[i]]["name"], "mobs");
        }

        displayItems()


    },

    char: function () {
        consolePush("NAME :" + player.name);
        consolePush("CLASS :" + player.role);
        consolePush("LEVEL :" + player.level);
        consolePush("ATTACKS :" + player.attacks);
        consolePush("XP :" + player.xp);
        consolePush("STRENGTH :" + player.str);
        consolePush("AGILITY :" + player.agi);
        consolePush("ARMOUR :" + player.armour);
        consolePush("HEALTH :" + player.health);
        consolePush("MANA :" + player.mana);
        consolePush("GOLD :" + player.gold);
    },

    inv: function () {

        consolePush("You have the following equipped:");
        for (var i = 0; i < equippedList().length; i++) {
            consolePush(items["spawned"][equippedList()[i]]["itemname"], "items");
        }

        consolePush("You are carrying the following:");
        for (var i = 0; i < invList().length; i++) {
            consolePush(items["spawned"][invList()[i]]["itemname"], "items");
        }
    },

    pickup: function () {
        // check to see if object exists in room
        if (itemCheck("itemname", inputString, loc, "itemlocation") === true) {
            // check to see if object is moveable
            if (itemCheck("itemname", inputString, true, "moveable") === true) {

                console.log(inputString);
                console.log(getId(items["spawned"], inputString));
                id = getId(items["spawned"], inputString);
                console.log(items["spawned"][id]["itemtype"]);
                type = items["spawned"][getId(items["spawned"], inputString)]["itemtype"];

                switch(type) {
                    case "money":
                        player["gold"] += items["spawned"][getId(items["spawned"], inputString)]["quantity"];
                        consolePush("You pickup " + items["spawned"][getId(items["spawned"], inputString)]["quantity"] + " gold pieces","items");
                        delete items["spawned"][getId(items["spawned"], inputString)];
                        break;

                    default:
                    //move to inventory
                        changeLoc(getId(items["spawned"], inputString), "player")

                }

            } else {
                consolePush("You can't move " + inputString, "error")
            }
        } else {
            consolePush("I don't see " + inputString + " here", "error")
        }
    },

    drop: function () {
        // check to see if object exists in inventory
        // check to if item in unequipped
        //change location to room

    itemID = itemReturn2(items["spawned"],"itemname",inputString,"itemlocation","player");

    if (itemID !== null) {

        if (items["spawned"][itemID]["equipped"] === true) {
            consolePush("Remove the item first","error")
        } else {
            changeLoc(itemID,loc);
            consolePush("You drop the " + items["spawned"][itemID]["itemname"])
        }

    } else {
        consolePush("You don't seem to have " + inputString,"error")
    }

    },

    equip: function () {
        switch (false) {

            case (itemCheck("itemname",inputString,"player","itemlocation")):
                consolePush("You don't have " + inputString,"error");
                break;

            case (equippedList().includes(getId(items["spawned"], inputString)) != true):
                consolePush("Already Equipped", "error");
                break;

            case (itemCheck("itemname", inputString, "equip", "use")):
                consolePush("Not equippable", "error");
                break;
            case (fetchValue(items["spawned"], "itemname", inputString, "role").includes(player["role"])):
                consolePush("Wrong Class", "error");
                break;
            case (fetchValue(items["spawned"], "itemname", inputString, "itemLevel") <= player["level"]):
                consolePush("Wrong Level", "error");
                break;
            default:

                console.log(equippedList());

                equippedList().forEach(function(id) {
                    console.log(items["spawned"][getId(items["spawned"],inputString)]["itemtype"]);
                    if (items["spawned"][getId(items["spawned"],inputString)]["itemtype"] === items["spawned"][id]["itemtype"]) {
                        consolePush("You need to unequip something first","error")
                    } else {
                        items["spawned"][getId(items["spawned"],inputString)]["equipped"] = true;
                        consolePush("You equip the " + items["spawned"][getId(items["spawned"],inputString)]["itemname"])
                    }
                });
        }

    },

    unequip: function () {
        if (equippedList().includes(getId(items["spawned"], inputString)) === true) {
            items["spawned"][getId(items["spawned"],inputString)]["equipped"] = false;
            consolePush("You remove " + inputString);
        } else {
            consolePush("You don't have that item equipped","error")
        }
    },

    test2: function () {

        console.log(items["spawned"]);


    },

    test: function () {



        console.log(loot["W"]);
        console.log(loot["W"]["1"]);





    },

    start: function() {

       consolePush("pickup healing balm");

    },

    cast: function() {
        a = inputString.match(/^(.*?)($| on (.*?)$)/); //breaks userInputString into array 'a'
        a.shift(); //strips the original string from the new array
        thisSpell = a[0];
        target = a[2];

        if (typeof target === "undefined" || target === "self") {
            target = "player"
        }


        castSpell(thisSpell,target);
    },

    use: function() {

        a = inputString.match(/^(.*?)($| on (.*?)$)/); //breaks userInputString into array 'a'
        a.shift(); //strips the original string from the new array
        console.log(a);





        id = getId(items["spawned"], a[0]);


        target = a[2];
        //source =



        // check to see if object is in Inventory
        if (itemCheck("itemname", a[0], "player", "itemlocation") === true) {
            console.log(a[0] + " is in inventory");
            // check to see if object is Usable
            if (itemCheck("itemname", a[0], "usable", "itemtype") === true) {
                console.log(a[0] + " is usable");








                //applyEffect(effect,target,source)

                applyEffect(items["spawned"][id]["effect"],target,items["spawned"][id]);


                if (status === "in combat") {
                    combatFlag++;
                    combatRound();
                }










            } else {
                consolePush(inputString + " is not usable", "error")
            }
        } else {
            consolePush(inputString + " is not in your inventory", "error")
        }
    },

    search: function() {
        if (itemCheck("itemname", inputString, loc, "itemlocation") === true) {
            consolePush("I search the " + inputString);
            displayContents(getId(items["spawned"],inputString));
        } else {
            consolePush("I don't see the " + inputString + " here","error");
        }
    },

    take: function() {
      //take ITEM from CONTAINER

        a = inputString.match(/^(.*?)($| from (.*?)$)/); //breaks userInputString into array 'a'
        a.shift(); //strips the original string from the new array
        object = a[0];
        source = a[2];

        sourceId = getId(items["spawned"],source);
        objId = objParse2(items["spawned"],"itemlocation",sourceId,"itemname",object)[0];

        if (itemCheck("itemname", source, loc, "itemlocation") === true) {
            if (itemCheck("itemname", object, sourceId, "itemlocation") === true) {
                items["spawned"][objId]["itemlocation"] = "player";
                consolePush("You take the " + object + " from the " + source,"items");
            } else {
                consolePush(object + " not found inside " + source,"error");
            }

        } else {
            consolePush("There is no " + source + " here.","error");
        }
    },



    spawn: function() {

        console.log("The following items are spawned: ");
        console.log(items["spawned"]);
        console.log(mobs["spawned"]);


    }


};




move = {
    north: function(){
        if (rooms[loc]["exits"].hasOwnProperty(inputAction) === true){
            consolePush("You go North, " + rooms[loc]["exits"][inputAction]["desc"],"movement");
            loc = rooms[loc]["exits"][inputAction]["nextRoom"];
            init(rooms[loc]);
        } else {
            consolePush("You can't go that way","movement");
        }
    },

    south: function(){
        if (rooms[loc]["exits"].hasOwnProperty(inputAction) === true){
            consolePush("You go South, " + rooms[loc]["exits"][inputAction]["desc"],"movement");
            loc = rooms[loc]["exits"][inputAction]["nextRoom"];
            init(rooms[loc]);
        } else {
            consolePush("You can't go that way","movement");
        }
    },


    east: function(){
        if (rooms[loc]["exits"].hasOwnProperty(inputAction) === true){
            consolePush("You go East, " + rooms[loc]["exits"][inputAction]["desc"],"movement");
            loc = rooms[loc]["exits"][inputAction]["nextRoom"];
            init(rooms[loc]);
        } else {
            consolePush("You can't go that way","movement");
        }
    },


    west: function(){
        if (rooms[loc]["exits"].hasOwnProperty(inputAction) === true){
            consolePush("You go West, " + rooms[loc]["exits"][inputAction]["desc"],"movement");
            loc = rooms[loc]["exits"][inputAction]["nextRoom"];
            init(rooms[loc]);
        } else {
            consolePush("You can't go that way","movement");
        }
    },

    up: function(){
        if (rooms[loc]["exits"].hasOwnProperty(inputAction) === true){
            consolePush("You go Up, " + rooms[loc]["exits"][inputAction]["desc"],"movement");
            loc = rooms[loc]["exits"][inputAction]["nextRoom"];
            init(rooms[loc]);
        } else {
            consolePush("You can't go that way","movement");
        }
    },

    down: function(){
        if (rooms[loc]["exits"].hasOwnProperty(inputAction) === true){
            consolePush("You go Down, " + rooms[loc]["exits"][inputAction]["desc"],"movement");
            loc = rooms[loc]["exits"][inputAction]["nextRoom"];
            init(rooms[loc]);
        } else {
            consolePush("You can't go that way","movement");
        }
    }



};

    window.onload = function () {
        gamewindow();
        //loc = rooms["room0"];
        loc = "room0";
        init(rooms[loc]);
    };

}

window.game = game();

//ntest

function game() {

//CORE FUNCTIONS

    var spawnCount = 100001;

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

                if (actions.hasOwnProperty(inputAction) === true) {
                    //console.log("Recognised Action: " + inputAction);
                    actions[inputAction]();
                } else if (move.hasOwnProperty(inputAction) === true) {
                    console.log("Recognised Movement " + inputAction);
                    move[inputAction]();
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
                spawnItem(z[0], loc, z[1])
            });
        }

        //Flag room as visited
        rooms[loc]["visited"] = true;
        console.log(rooms[loc]["name"] + " is flagged as visited")




        consolePush(location["copy"]["default"]);

        //Display exits
        consolePush("You can see the following exits: ");
        consolePush(Object.getOwnPropertyNames(rooms[loc]["exits"]),"movement");

        //Display items
        consolePush("This room contains: ");
        for (var i = 0; i < objParse(items["spawned"], "itemlocation", loc).length; i++) {
            consolePush(items["spawned"][objParse(items["spawned"], "itemlocation", loc)[i]]["itemname"], "items");
        }
    }

    function inputSplit(x) {

        //split userInput into array
        tmp = input.split(" ");

        //assign first word to userInputAction and shortens userInput
        inputAction = tmp.shift();

        //rejoin shortened array
        inputString = tmp.join(" ");

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

    //Add item to Object
    function addItem(sourceObj,itemname,destObj) {
        id = getId(sourceObj,itemname);
        if (typeof id !== "undefined") {
            console.log("id is good");
            destObj[id] = sourceObj[id];
        } else {
            console.log("id is bad")
        }
    }

    function changeLoc(id,loc) {
        items["spawned"][id]["itemlocation"] = loc

    }

    //Remove item from Object
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

    function getId(obj,itemname) {
        x = _.findKey(obj, {"itemname": itemname});
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

    function itemCheck(field,lookup,value,peram) {
        var result = false;
        _.forEach(items["spawned"], function(i) {
            if (result) {
                return;
            }
            if(i[field] === lookup) {
                if(i[peram] === value) {
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

    //SPAWN STUFF

    spawnItem = function(item,loc,quantity) {


        for (i = 0; i < quantity; i++) {
            sourceId = getId(items["library"],item);
            items["spawned"][spawnCount] = items["library"][sourceId];
            items["spawned"][spawnCount]["itemlocation"] = loc;
            spawnCount ++;
        }




    };


    function applyEffect(effect,target) {

        console.log(effects[effect]);

        if (effects[effect] != undefined)  {

            switch(effects[effect]["type"]) {
                case ("buff"):
                    consolePush("Yep, its a buff spell");
                    break;
                case ("damage"):
                    consolePush("Yep, its a damage spell");
                    break;
                default:
                    consolePush("Unknown Spell Type");
                    break
            }

        } else {
            consolePush("Unknown Spell Type");
        }






    }


actions = {

    look: function () {
        consolePush("You look");
        consolePush(rooms[loc]["copy"]["default"]);
        for (var i = 0; i < objParse(items["spawned"], "itemlocation", loc).length; i++) {
            consolePush(items["spawned"][objParse(items["spawned"], "itemlocation", loc)[i]]["itemname"], "items");
        }
    },

    inv: function () {

        consolePush("You have the following equipped:");
        for (var i = 0; i < objParse(items["spawned"], "itemlocation", "equipped").length; i++) {
            consolePush(items["spawned"][objParse(items["spawned"], "itemlocation", "equipped")[i]]["itemname"], "items");
        }

        consolePush("You are carrying the following:");
        for (var i = 0; i < objParse(items["spawned"], "itemlocation", "inventory").length; i++) {
            consolePush(items["spawned"][objParse(items["spawned"], "itemlocation", "inventory")[i]]["itemname"], "items");
        }
    },

    pickup: function () {
        // check to see if object exists in room
        if (itemCheck("itemname", inputString, loc, "itemlocation") === true) {
            // check to see if object is moveable
            if (itemCheck("itemname", inputString, "yes", "moveable") === true) {
                //move to inventory
                changeLoc(getId(items["spawned"], inputString), "inventory")
            } else {
                consolePush("You can't move " + inputString, "error")
            }
        } else {
            consolePush("I don't see " + inputString + " here", "error")
        }
    },

    drop: function () {
        // check to see if object exists in inventory
        if (itemCheck("itemname", inputString, "inventory", "itemlocation") === true) {
            //move to room
            changeLoc(getId(items["spawned"], inputString), loc)
        } else {
            consolePush(inputString + " is not in your inventory", "error")
        }
    },

    equip: function () {
        switch (false) {
            case (itemCheck("itemname", inputString, "inventory", "itemlocation")):
                consolePush("Not in inventory", "error");
                break;
            case (itemCheck("itemname", inputString, "equip", "use")):
                consolePush("Not equippable", "error");
                break;
            case (fetchValue(items["spawned"], "itemname", inputString, "role").includes(player["role"])):
                consolePush("Wrong Class", "error");
                break;
            case (fetchValue(items["spawned"], "itemname", inputString, "minLevel") <= player["level"]):
                consolePush("Wrong Level", "error");
                break;
            default:

                if (itemCheck("itemlocation", "equipped", items["spawned"][getId(items["spawned"], inputString)]["itemtype"], "itemtype") !== true) {
                    consolePush("Error Free", "error");
                } else {
                    consolePush("You need to remove " + fetchValue2(items["spawned"],"itemlocation","equipped","itemtype",items["spawned"][getId(items["spawned"], inputString)]["itemtype"],"itemname") + " first", "error");
                }
                break;
        }

    },











    unequip: function () {

        //check item is equipped
        if (itemCheck("itemname", inputString, "equipped", "itemlocation") === true) {
            //Move to Inventory
            changeLoc(getId(items["spawned"], inputString), "inventory");
            consolePush("You remove the " + inputString, "default")
        } else {
            consolePush(inputString + " is not currently equipped", "error")
        }
    },

    test2: function () {

        objParse(player["equipment"], "itemname", inputString, "itemname");

    },

    test: function () {
       // console.log(list2(rooms[loc]["exits"]))

    },

    cast: function() {
        a = inputString.match(/^(.*?)($| on (.*?)$)/); //breaks userInputString into array 'a'
        a.shift(); //strips the original string from the new array
        castSpell = a[0];
        target = a[2];
//        select = "mob" + (a[2] - 1);



        applyEffect(castSpell,target);


        console.log(a);
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

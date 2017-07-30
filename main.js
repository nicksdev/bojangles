

function game() {

//CORE FUNCTIONS

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
        consolePush(location["copy"]["default"]);
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
        return x;
    }

    // function getObj(parentObj,itemname) {
    //     _.forEach(parentObj, function(i) {
    //
    //         if(i["itemname"] === itemname) {
    //             console.log("Object Found");
    //             console.log(i);
    //             return(i);
    //
    //         }
    //     });
    // }

    // function objSearch(obj, type, value) {
    //     //checks to see if something exists in an object
    //     console.log(obj);
    //     for(var key in obj) {
    //         if (obj[key][type] === value) {
    //             console.log("Object found");
    //             return true;
    //         } else {
    //             console.log(obj[key][type]);
    //             console.log("Object not found");
    //             return false;
    //         }
    //     }
    // }
    //
    // function objByName(obj,value) {
    //
    //     console.log(obj);
    //     for(var key in obj) {
    //         if (obj[key]["itemname"] === value) {
    //             console.log("Object found");
    //             return true;
    //         } else {
    //             console.log(obj[key]["itemname"]);
    //             console.log("Object not found");
    //             return false;
    //         }
    //     }
    // }

    // function objCheck(obj,item,value) {
    //     //check a particular value of an object,
    //
    //     //find object
    //     //check objects value
    //
    //     for(var key in obj) {
    //         if (obj[key]["itemname"] === item) {
    //             console.log("Object found");
    //             console.log(obj[key][value])
    //             return obj[key][value];
    //         } else {
    //             console.log(obj[key]["itemname"]);
    //             console.log("Object not found");
    //
    //         }
    //     }
    // }

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
            }
        });
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


    // function objCheck2(obj,) {
    //     //console.log(obj);
    //     // console.log(field);
    //     // console.log(value);
    //     var found = false;
    //
    //     _.forEach(obj, function(i) {
    //
    //         console.log(i);
    //         console.log(value);
    //         console.log(i[value]);
    //         console.log(field);
    //
    //
    //         if (found) {
    //             return;
    //         }
    //
    //         if(i["itemname"] === field) {
    //             console.log("Its here!");
    //
    //
    //             console.log(i);
    //             console.log(value);
    //             console.log(i[value]);
    //             console.log(field);
    //
    //             //check field2
    //             if(i[value] === field) {
    //                 console.log("PASSED")
    //             } else {
    //                 console.log("FAILED")
    //             }
    //             found = true;
    //         }
    //     });
    //
    //     return found;
    // }

actions = {

    look: function () {
        consolePush("You look");
        consolePush(loc["copy"]["default"]);
        consolePush(list(loc["items"],"itemname"), "items");
    },

    inv: function() {
        consolePush("You have the following equipped:");
        consolePush(list(player["equipment"],"itemname"),"items");
        consolePush("You are carrying the following:");
        consolePush(list(player["inv"],"itemname"),"items");
    },

    pickup: function() {
        // check to see if object exists in room
        // check to see if object is moveable
            if (objCheck(loc["items"],"itemname",inputString,true,"moveable") === true) {
                consolePush("You pickup " + inputString,"items");
                // add object to char inventory
                addItem(loc["items"],inputString,player["inv"]);
                // remove object from room inventory
                minusItem(loc["items"],inputString);
            } else {
                consolePush("You can't do that","error");
            }
        },

    drop: function () {
        if (objCheck(player["inv"],"itemname",inputString,inputString,"itemname") === true) {
            console.log("Yep inv");
            addItem(player["inv"],inputString,loc["items"]);
            minusItem(player["inv"],inputString);
        } else if (objCheck(player["equipment"],"itemname",inputString,inputString,"itemname") === true) {
            console.log("yep Eq");
            addItem(player["equipment"],inputString,loc["items"]);
            minusItem(player["equipment"],inputString);
        } else {
            console.log("Nope")
        }
    },



    equip: function() {

        // is level ok
        // if slot empty



        // is class ok
        if (fetchValue(player["equipment"],"itemname",inputString,"role").includes(player["role"]) === true) {
            console.log("class ok");
        } else {
            console.log("class not ok");
        }

        //does item exist in inv
        if (objCheck(player["inv"],"itemname",inputString,inputString,"itemname") === true) {
            console.log("Equipping");
            addItem(player["inv"],inputString,player["equipment"]);
            minusItem(player["inv"],inputString);
        }
    },


    unequip: function() {
        if (objCheck(player["equipment"],"itemname",inputString,inputString,"itemname") === true) {
            console.log("unequipping");
            addItem(player["equipment"],inputString,player["inv"]);
            minusItem(player["equipment"],inputString);
        }
    },










    test2: function() {

        //console.log(player["equipment"]);

        player["equipment"]["item0050"] = loc["items"]["item0050"];

        //console.log(player["equipment"]);

    },

    test: function() {

        console.log(fetchValue(player["equipment"],"itemname",inputString,"role"));

//        [1, 2, 3].includes(2);     // true

        console.log(

            fetchValue(player["equipment"],"itemname",inputString,"role").includes(player["role"])



        )

       // console.log(player["equipment"]);
       // console.log(loc["items"]["item0050"]);
       // add(source,itemid,destination)
        //console.log(loc["items"]);
        //console.log(loc["items"]["item0050"]);
        // console.log(_.findKey(loc["items"], {"itemname": "silver sword"}));



//        console.log(getId(loc["items"],inputString));



        //console.log(getId(loc["items"],"silver sword"));
        //add(source,itemname,destination);



       // add(loc["items"],inputString,player["equipment"]);



        //getObj(loc["items"],inputString);


    }
};


move = {
    north: function(){
        if (loc["exits"].hasOwnProperty(inputAction) === true){
            consolePush("You go North, " + loc["exits"][inputAction]["desc"],"movement");
            loc = rooms[loc["exits"][inputAction]["nextRoom"]];
            init(loc);
        } else {
            consolePush("You can't go that way","movement");
        }
    }
};

    window.onload = function () {
        gamewindow();
        loc = rooms["room0"];
        init(loc);
    };

}

window.game = game();

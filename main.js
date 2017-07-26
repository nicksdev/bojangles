

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

    //Add object to something
    function add(source,itemid,destination) {





    }

    function getId(obj,itemname) {

        console.log(loc["items"]);
        console.log(itemname);
        console.log(typeof itemname);

        _.findKey(obj,{"itemname":itemname})


        // _.findKey(loc["items"], {"itemname": "silver sword"})
        //
        // getId(loc["items"],"silver sword")
        //
        // loc["items"]
        // "silver sword"

    }

    //myObject['first name'] = 'John'





    // var users = {
    //     'barney':  { 'age': 36, 'active': true },
    //     'fred':    { 'age': 40, 'active': false },
    //     'pebbles': { 'age': 1,  'active': true }
    // };
    //
    // _.findKey(users, { 'age': 1, 'active': true });
// → 'pebbles'







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


        if (objCheck(loc["items"],"itemname",inputString,true,"moveable") === true) {

            consolePush("You pickup " + inputString,"items");
        } else {
            consolePush("You can't do that","error");
        }

        // check to see if object exists in room
        // check to see if object is moveable
        // add object to char inventory
        // remove object from room inventory







            },


    test: function() {

       // console.log(player["equipment"]);

       // console.log(loc["items"]["item0050"]);

       // add(source,itemid,destination)


       // getId("silver sword",loc["items"]);


        console.log(loc["items"]);
        console.log(loc["items"]["item0050"]);

        console.log(_.findKey(loc["items"], {"itemname": "silver sword"}));

        console.log(getId(loc["items"],"silver sword"));


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



function game() {

//CORE FUNCTIONS

    function gamewindow() {
        $('#userInput').unbind('keyup');
        $('#userInput').on("keyup", function (event) {
            if (event.which === 13) {
                event.preventDefault();
                input = $(this).val().toLowerCase();
                console.log(input);
                consolePush(input,"default");
                inputSplit(input);
                console.log("Location = " + loc["name"]);

                if (actions.hasOwnProperty(inputAction) === true) {
                    console.log("Recognised Action: " + inputAction);
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

    function list(input) {
        z = [];
        for (var key in input) {
        z.push(key);
        }
    return(z);
    }

    function listEq() {



        array = [];
        for(var key in player.equipment) {
            var value = player.equipment[key];
            // console.log(value);
            array.push(value.itemname);
        }



        consolePush(array);



    }


actions = {
    look: function () {
        consolePush("You look");
        consolePush(loc["copy"]["default"]);
        consolePush(list(loc["items"]), "items");
    },

    inv: function() {
        consolePush("You have the following equipped:");
        // console.log(player["equipment"]);
        // console.log(list(player["equipment"]));
        // console.log(listEq(player["equipment"]["itemname"]));
        listEq();
        consolePush(player["equipment"]["itemname"]);

        consolePush("You are carrying the following:");


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

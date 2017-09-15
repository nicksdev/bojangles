/**
 * Created by nick.hughes on 26/08/2017.
 */


function castSpell(spell,target){
    //spell = effect;
    spell.applyMe = function() {

        console.log(this.effectType);
        console.log(this.type); //effect type, eg heal
        console.log(this.duration);

        applyEffect();

        //
        // switch (this.type) {
        //     case ("heal"):
        //         consolePush("Its a Self heal", "error");
        //         consolePush([this.effectType] + " = " + player[this.effectType]);
        //         player[this.effectType] = player[this.effectType] + dice(this.min,this.max,this.quantity);
        //         if (player.health > player.maxHealth) {
        //             player.health = player.maxHealth;
        //             consolePush("Your health is at maximum","error");
        //         }
        //         consolePush([this.effectType] + " = " + player[this.effectType]);
        //
        //
        //
        //
        //         break;
        //     case ("damage"):
        //         consolePush("Its a Self Damage", "error");
        //         break;
        //     case ("buffovertime"):
        //         consolePush("Its a Self Buff Over Time", "error");
        //         //need a game state object
        //         //
        //
        //         break;
        //
        // }




    };
    spell.applyOther = function(target) {
        consolePush("Attacking " + target)
    };

    if (typeof target === "undefined" || target === "self") {
        console.log("Self or Target");
        spell.applyMe();
    }  else {
        spell.applyOther(target);
    }

}


function applyEffect() {
    console.log(this);
    switch (this.type) {
        case ("heal"):
            consolePush("Its a Self heal", "error");
            consolePush([this.effectType] + " = " + player[this.effectType]);
            player[this.effectType] = player[this.effectType] + dice(this.min,this.max,this.quantity);
            if (player.health > player.maxHealth) {
                player.health = player.maxHealth;
                consolePush("Your health is at maximum","error");
            }
            consolePush([this.effectType] + " = " + player[this.effectType]);




            break;
        case ("damage"):
            consolePush("Its a Self Damage", "error");
            break;
        case ("buffovertime"):
            consolePush("Its a Self Buff Over Time", "error");
            //need a game state object
            //

            break;

        default:
            consolePush("EFFECT NOT FOUND", "error");

    }



}

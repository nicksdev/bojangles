/**
 * Created by nick.hughes on 26/08/2017.
 */



function Item(itemname, itemlocation, itemtype, desc, weight, minLevel, use, min, max, attack, role, moveable) {
    this.itemname = itemname;
    this.itemlocation = itemlocation;
    this.itemtype = itemtype;
    this.desc = desc;
    this.weight = weight;
    this.minLevel = minLevel;
    this.use = use;
    this.min = min;
    this.max = max;
    this.attack = attack;
    this.role = role;
    this.moveable = moveable;
}



var spawnItem = function (itemId) {
    new Item(
        items["library"][itemId].itemname,
        items["library"][itemId].itemlocation,
        items["library"][itemId].itemtype,
        items["library"][itemId].desc,
        items["library"][itemId].weight,
        items["library"][itemId].minLevel,
        items["library"][itemId].use,
        items["library"][itemId].min,
        items["library"][itemId].max,
        items["library"][itemId].attack,
        items["library"][itemId].role,
        items["library"][itemId].moveable
    );
    console.log(items["library"][itemId].itemname);
    console.log(items["library"][itemId].itemlocation);
    console.log(items["library"][itemId].itemtype);
    console.log(items["library"][itemId].desc);
    console.log(items["library"][itemId].weight);
    console.log(items["library"][itemId].minLevel);
    console.log(items["library"][itemId].use);
    console.log(items["library"][itemId].min);
    console.log(items["library"][itemId].max);
    console.log(items["library"][itemId].attack);
    console.log(items["library"][itemId].role);
    console.log(items["library"][itemId].moveable);
};

var spawnItem2 = function () {
    new Item(
        items["library"]["item9997"].itemname,
        items["library"]["item9997"].itemlocation,
        items["library"]["item9997"].itemtype,
        items["library"]["item9997"].desc,
        items["library"]["item9997"].weight,
        items["library"]["item9997"].minLevel,
        items["library"]["item9997"].use,
        items["library"]["item9997"].min,
        items["library"]["item9997"].max,
        items["library"]["item9997"].attack,
        items["library"]["item9997"].role,
        items["library"]["item9997"].moveable
    );
};


var spawnItem3 = function () {
    new Item(
        "testitem", "room0", "weapon", "test item", 2, 0, "equip", 1, 2, 1, ["wizard", "warrior"], "yes"
    );
};

spawnTest = function () {
    new Item("testitem","room0","weapon","test item",2,0,"equip",1,2,1,["wizard", "warrior"],"yes");
};





items["spawned"]["item9999"] = new Item("testitem","room0","weapon","test item",2,0,"equip",1,2,1,["wizard", "warrior"],"yes");
items["spawned"]["item9990"] = new Item("testitem","room0","weapon","test item",2,0,"equip",1,2,1,["wizard", "warrior"],"yes");
items["spawned"]["item9991"] = spawnTest();
items["spawned"]["itemTEST"] = spawnItem3();






console.log(items["spawned"]);
console.log(items["library"]["item9998"]);
console.log(items["library"]["item9998"].itemname);

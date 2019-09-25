var Bottle = /** @class */ (function () {
    function Bottle(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    Bottle.prototype.getPrice = function () {
        return this.price;
    };
    return Bottle;
}());
// @ts-ignore
var Cellar = /** @class */ (function () {
    function Cellar(name, price) {
        this.name = name;
        this.price = price;
        this.ArrayBottles = [];
        this.name = name;
        this.price = price;
    }
    Cellar.prototype.addBottle = function (name, price) {
        var b = new Bottle(name, price);
        //this.ArrayBottles[Bottle.length-1].name=name;
        //this.ArrayBottles[Bottle.length-1].price=price;
        this.ArrayBottles[this.ArrayBottles.length] = b;
    };
    Cellar.prototype.getBottle = function (name) {
        return { name: this.name, price: this.price };
    };
    Cellar.prototype.calculSomme = function () {
        var sum = 0;
        for (var i = 0; i < this.ArrayBottles.length; i++) {
            sum += this.ArrayBottles[i].getPrice();
        }
        return sum;
    };
    return Cellar;
}());
var c1 = new Cellar("c1", 10);
console.log(c1.getBottle("c1"));
c1.addBottle("b1", 10);
c1.addBottle("b2", 20);
c1.addBottle("b3", 20.5);
console.log(c1.calculSomme());

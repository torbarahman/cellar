export class Bottle {

  constructor(public name: String, public price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

// @ts-ignore
export class Cellar {
  ArrayBottles: Bottle[] = [];
  id: number;
  constructor(public name: string) {
    this.name = name;
    this.id=Math.round(Math.random()*100);
  }

  addBottle(name: string, price: number) {
    let b=new Bottle(name,price);
    //this.ArrayBottles[Bottle.length-1].name=name;
    //this.ArrayBottles[Bottle.length-1].price=price;
    this.ArrayBottles[this.ArrayBottles.length]=b;
  }

  getBottle(name: string) {
    return {name:name };
  }
  getAllBottles() {
    return this.ArrayBottles;
  }

  calculSomme() {
    var sum = 0;
    for (var i = 0; i < this.ArrayBottles.length; i++) {
      sum += this.ArrayBottles[i].getPrice();
    }
    return sum;
  }
}

let c1 = new Cellar("c1");
console.log(c1.getBottle("c1"));
c1.addBottle("b1", 10);
c1.addBottle("b2", 20);
c1.addBottle("b3", 20.5);
console.log(c1.calculSomme());

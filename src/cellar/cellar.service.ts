import { Body, Injectable } from '@nestjs/common';
import { BottleDTO, CellarDTO } from './cellar.controller';
import { Bottle, Cellar } from './cellar';
@Injectable()
export class CellarService {
  storage: Cellar[] = [];
  getAllCellars(): Cellar[] {
    return this.storage  ;
  }
  createCellar( cellarDto: CellarDTO): void {
    this.storage.push(new Cellar(cellarDto.name ));
  }
  addBotlle( bottleDto: BottleDTO, ce: Cellar): void {
    ce.addBottle(bottleDto.name,bottleDto.price);
  }
  getAllBottles(ce: Cellar):Bottle[]{
    return ce.getAllBottles();
  }
  findById(id: number): Cellar {
    let i: number;
    for (i = 0; i < this.storage.length; i++) {
      if (this.storage[i].id == id) {
        return this.storage[i];
      }
    }
    return (new Cellar("doesnt exist"));
  }
}

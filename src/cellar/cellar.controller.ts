import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../app.service';
import { CellarService } from './cellar.service';
import { Bottle, Cellar } from './cellar';

@Controller('cellars')
export class CellarController {
  constructor(private readonly cellarService: CellarService) {
  }

  @Get()
  getAllCellars(): Cellar[] {
    return this.cellarService.getAllCellars();
  }
  @Get (':id')
  findById(@Param('id') id): Cellar{
    return this.cellarService .findById(id);
  }
  @Get (':id/bottles')
  getAllBottles(@Param('id') id):Bottle[] {
    return this.cellarService.getAllBottles(this.cellarService .findById(id));
  }
  @Post()
  createCellar(@Body() cellarDto: CellarDTO) {
    return this.cellarService.createCellar(cellarDto);
  }
  @Post (':id/bottles')
  addBottle(@Param('id') id,@Body() bottleDto: BottleDTO ) {
    return this.cellarService.addBotlle(bottleDto, this.cellarService .findById(id));
  }
}
export interface CellarDTO {
   name: string ;

}
export interface BottleDTO {
  name: string ;
  price: number;

}

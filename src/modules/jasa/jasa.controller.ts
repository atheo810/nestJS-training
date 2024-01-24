import { Body, Controller, Get, Post } from '@nestjs/common';
import { JasaService } from './jasa.service';
import { jasa as JasaModel } from '@prisma/client';

@Controller('jasa')
export class JasaController {
  constructor(private readonly jasaService: JasaService) {}
  //   function Get Data
  @Get()
  async list(): Promise<JasaModel[]> {
    return this.jasaService.list();
  }

  // @Post()
  // async create(@Body() body: any) {
  //   const { name, description } = body;
  //   return this.jasaService.create(name, description);
  // }
}

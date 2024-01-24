import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { JasaService } from './jasa.service';
import { jasa as JasaModel } from '@prisma/client';

@Controller('jasa')
export class JasaController {
  constructor(private readonly jasaService: JasaService) {}
  //   function Get All Jasa Data
  @Get()
  @HttpCode(200)
  async list(): Promise<JasaModel[]> {
    return this.jasaService.list();
  }

  // get specific jasa data
  @Get(':id')
  @HttpCode(200)
  async byId(@Param('id') id: string): Promise<JasaModel> {
    return this.jasaService.getById(id);
  }

  // function post data
  @Post()
  @HttpCode(201)
  async create(@Body() body: any): Promise<JasaModel> {
    const { name, description } = body;
    return this.jasaService.create(name, description);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { jasa as JasaModel } from '@prisma/client';

@Injectable()
export class JasaService {
  constructor(private prisma: PrismaService) {}
  //   membuat function async list untuk di panggil di controller
  async list(): Promise<JasaModel[]> {
    return await this.prisma.jasa.findMany({});
  }

  //   membuat function async create utnuk di panggil di controller
  async create(name: string, description: string) {
    return await this.prisma.jasa.create({
      data: {
        name,
        description,
      },
    });
  }

  // function byId
  async getById(id: string): Promise<JasaModel> {
    return await this.prisma.jasa.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // function update jasa
  async updateJasa(
    id: string,
    name: string,
    description: string,
  ): Promise<JasaModel> {
    return await this.prisma.jasa.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        description,
      },
    });
  }

  // delete function jasa
  async remove(id: string) {
    return await this.prisma.jasa.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}

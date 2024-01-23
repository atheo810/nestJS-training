import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class JasaService {
  constructor(private prisma: PrismaService) {}

  //   membuat function async list untuk di panggil di controller
  async list() {
    return await this.prisma.jasa.findMany();
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
}

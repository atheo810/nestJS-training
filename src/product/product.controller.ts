import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { JsonArray, JsonObject } from '@prisma/client/runtime/library';
import { Response, Request } from 'express';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

@Controller('product')
export class ProductController {
  @Get()
  async findAll(): Promise<JsonArray> {
    const result = await prisma.product.findMany();
    return result;
  }
  @Post()
  @HttpCode(201)
  async create(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<Response> {
    const result = await prisma.product.create({
      data: {
        name: request.body.name,
        description: request.body.description,

        qty: parseInt(request.body.qty),
      },
    });
    return response.json(result);
  }
  @Put()
  update(): string {
    return 'update';
  }
  @Delete()
  remove(): string {
    return 'removed data';
  }
}

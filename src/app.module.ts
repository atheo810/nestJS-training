import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JasaModule } from './modules/jasa/jasa.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [JasaModule, PrismaModule],
})
export class AppModule {}

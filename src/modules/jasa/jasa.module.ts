import { Module } from '@nestjs/common';
import { JasaController } from './jasa.controller';
import { JasaService } from './jasa.service';

@Module({
  controllers: [JasaController],
  providers: [JasaService],
  exports: [JasaService],
})
export class JasaModule {}

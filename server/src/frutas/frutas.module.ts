import { Module } from '@nestjs/common';
import { FrutasService } from './frutas.service';
import { FrutasController } from './frutas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fruta, FrutaSchema } from './schemas/frutas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Fruta.name, schema: FrutaSchema }]),
  ],
  controllers: [FrutasController],
  providers: [FrutasService],
})
export class FrutasModule {}

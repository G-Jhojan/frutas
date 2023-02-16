import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrutasModule } from './frutas/frutas.module';

@Module({
  imports: [
    FrutasModule,
    MongooseModule.forRoot(
      'mongodb+srv://jhojan:root@mongodbatlas.ugsejmt.mongodb.net/db?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

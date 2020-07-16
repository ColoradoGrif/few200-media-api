import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { MediaModule } from './media/media.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/media'), MediaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

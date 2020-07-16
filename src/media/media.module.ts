import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Media, MediaSchema } from './schema/media';
import { CommandModule } from 'nestjs-command';
import { MediaSeed } from './seeds/media.seed';

@Module({
  controllers: [MediaController],
  providers: [MediaService, MediaSeed],
  imports: [
    MongooseModule.forFeature([{ name: Media.name, schema: MediaSchema }]),
    CommandModule,
  ],
})
export class MediaModule {}

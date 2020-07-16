import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';
import { MediaModule } from './media/media.module';

(async () => {
  const app = await NestFactory.createApplicationContext(MediaModule, {
    logger: true, // no logger
  });
  app
    .select(CommandModule)
    .get(CommandService)
    .exec();
})();

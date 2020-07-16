import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { MediaService } from '../media.service';

@Injectable()
export class MediaSeed {
  constructor(private mediaService: MediaService) {}

  @Command({
    command: 'create:media',
    describe: 'Seed the Media',
    autoExit: true,
  })
  async create(): Promise<void> {
    console.log('Seeding..');
    await this.mediaService.create({
      title: 'Magic for Humans',
      recommendedBy: 'Bill',
      note: 'On Netflix',
      format: 'show',
    });
    await this.mediaService.create({
      title: 'Twin Peaks: The Return',
      recommendedBy: 'Jeff',
      note: 'Amazon Prime',
      format: 'show',
    });
    await this.mediaService.create({
      title: 'Parks',
      recommendedBy: 'Gretchen',
      note: 'iOS App',
      format: 'game',
    });
    console.log('Done!');
  }
}

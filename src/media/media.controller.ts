import {
  Controller,
  Post,
  Body,
  Get,
  Res,
  HttpStatus,
  Response,
  HttpException,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaCreate, MediaResponse } from './models/media.model';

@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @Post()
  async create(@Body() model: MediaCreate): Promise<MediaResponse> {
    if (model.title.toLowerCase() === 'riverdale') {
      await new Promise((_, rej) =>
        setTimeout(() => {
          rej(new HttpException('Not THAT show', 400));
        }, 3000),
      );
    } else {
      return await this.mediaService.create(model);
    }
  }

  @Get()
  async getAll(): Promise<{ data: MediaResponse[] }> {
    const response = { data: await this.mediaService.findAll() };

    return new Promise<{ data: MediaResponse[] }>(res => {
      setTimeout(() => res(response), 3000);
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Post('/consumed')
  async markConsumed(@Body() model: MediaResponse) {
    console.log('Got ', model);
    const ok = await this.mediaService.markConsumed(model);
    if (!ok) {
      throw new HttpException('No Media with that id', 404);
    }
  }
}

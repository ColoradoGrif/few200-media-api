import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Media } from './schema/media';
import { Model } from 'mongoose';
import { MediaCreate, MediaResponse } from './models/media.model';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media.name) private mediaModel: Model<Media>) {}

  async create(media: MediaCreate): Promise<MediaResponse> {
    const createdMedia = new this.mediaModel(media);
    const mediaResponse = await createdMedia.save();
    return this.makeResponse(mediaResponse);
  }

  async findAll(): Promise<MediaResponse[]> {
    const media = await this.mediaModel.find().exec();
    const response = media.map(this.makeResponse);
    return response;
  }

  async markConsumed(media: MediaResponse): Promise<boolean> {
    let stored: Media;
    try {
      stored = await this.mediaModel.findById(media.id);
    } catch {
      return false;
    }
    console.log('Stored', stored);

    stored.consumedOn = new Date().toISOString();
    await stored.save();
    return true;
  }

  private makeResponse(m: Media): MediaResponse {
    return {
      id: m._id,
      title: m.title,
      format: m.format,
      note: m.note,
      consumedOn: m.consumedOn,
      recommendedBy: m.recommendedBy,
    } as MediaResponse;
  }
}

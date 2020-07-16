import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema()
export class Media extends Document {
  @Prop()
  title: string;
  @Prop()
  format: string;
  @Prop()
  recommendedBy: string;
  @Prop()
  note: string;
  @Prop()
  consumedOn: null | string;
}
export const MediaSchema = SchemaFactory.createForClass(Media);

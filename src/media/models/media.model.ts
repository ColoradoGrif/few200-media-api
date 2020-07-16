export class MediaCreate {
  title: string;
  format: string;
  recommendedBy: string;
  note: string;
}

export class MediaResponse {
  id: string;
  format: string;
  recommendedBy: string;
  note: string;
  consumedOn: null | string;
}

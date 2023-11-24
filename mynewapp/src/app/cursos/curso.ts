export class curso {
  id: number;
  title: string;
  platform: string;
  launchYear: number;
  offersCertificate: boolean;
  description: string;
  image: string;
  durationHours: number;

  constructor(
    id: number,
    title: string,
    platform: string,
    launchYear: number,
    offersCertificate: boolean,
    description: string,
    image: string,
    durationHours: number,
  ) {
    this.id = id;
    this.title = title;
    this.platform = platform;
    this.launchYear = launchYear
    this.offersCertificate = offersCertificate
    this.description = description;
    this.image = image;
    this.durationHours = durationHours
  }
}

export interface ISlideObj {
  title: string;
  text: string;
  imageURL?: string;
  color: string;
  backgroundColor: string;
  link: string;
}

export type ISlide = ISlideObj | string;

export interface ISlidesRepository {
  getSlides: () => Promise<ISlide[]>;
}

import { NextApiRequest, NextApiResponse } from 'next';

import { ISlidesRepository } from 'tools/types/api-slider-type';
import { ISlide } from 'tools/types/api-slider-type';
import { slides } from 'mock-data/slide-data';

class MockSlidesRepo implements ISlidesRepository {
  async getSlides(): Promise<ISlide[]> {
    return slides;
  }
}

const fakeApiSlidesRepo = new MockSlidesRepo();

export default async function (req: NextApiRequest, res: NextApiResponse<ISlide[]>): Promise<void> {
  try {
    const slides = await fakeApiSlidesRepo.getSlides();
    res.status(200).send(slides);
  } catch (err) {
    res.status(500).end(err);
  }
}

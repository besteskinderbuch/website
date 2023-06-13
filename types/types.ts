type BaseData = {
  id: string;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  tags: Array<string>;
  content: string;
};

type Story = BaseData & {
  neededSubscription: boolean;
  image: Image;
  rating: number;
  ageRange: AgeRange;
  premium: boolean;
  audio: Audio;
};

type Audio = {
  src: string;
};

type Image = {
  src: string;
  alt: string;
};

type AgeRange = {
  min: number;
  max: number;
};

type Article = BaseData & {
  preview: boolean;
}


export { Story, AgeRange, Image, Audio, Article, BaseData };

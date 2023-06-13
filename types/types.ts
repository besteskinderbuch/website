type Story = {
  id: string;
  title: string;
  href: string;
  neededSubscription: boolean;
  image: Image;
  rating: number;
  ageRange: AgeRange;
  description: string;
  premium: boolean;
  audio: Audio;
  date: string;
  datetime: string;
  tags: Array<string>;
  content: string;
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

export { Story, AgeRange, Image, Audio };

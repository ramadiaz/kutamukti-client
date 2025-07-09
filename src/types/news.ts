export type NewsImages = {
  image_url: string;
};

export type NewsAuthor = {
  name: string
}

export type News = {
  uuid: string;
  title: string;
  content: string;
  raw_text: string;
  slug: string;
  thumbnail_url: string;
  images: NewsImages[];
  created_at: string;
  author: NewsAuthor;
};

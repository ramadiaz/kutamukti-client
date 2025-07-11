export type ImagesGalleryType = {
  uuid: string;
  title: string;
  created_at: string;
  images: ImagesType[];
};

export type ImagesType = {
  gallery_uuid: string;
  image_url: string;
  description: string;
};

export type UMKM = {
  uuid: string;
  name: string;
  description: string;
  is24_hours: boolean;
  location: string;
  langitude: number;
  latitude: number;
  open_at: number;
  close_at: number;
};

export type UMKMProduct = {
  uuid: string;
  umkm_uuid: string;
  name: string;
  description: string;
  variation: string;
  price: number;
  umkm: UMKM;
  images: UMKMImage[];
};

export type UMKMImage = {
  image_url: string;
};

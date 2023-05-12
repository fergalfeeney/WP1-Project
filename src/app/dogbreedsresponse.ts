export interface DogBreedResponse {
    id: number;
    breed: string;
    origin: string;
    url: string;
    img: string;
    meta: {
      height: {
        dogs: string;
        bitches: string;
      },
      weight: {
        dogs: string;
        bitches: string;
      },
      coat: string;
      img_src_set: {
        "1.5x": string;
        "2x": string;
      },
      life_span: string;
      other_names: string;
      common_nicknames: string;
      colour: string;
      litter_size: string;
      notes: string;
      breed_status: string;
      foundation_stock: string;
    };

    Error?: string;
  }
  
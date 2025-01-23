export type TProduct = {
  _id: string;
  data: {
    product_name: string | null;
    price: number | null;
    model_number: string | null;
    category: string | null;
    dimension: string | null;
    unit_of_measurement: string | null;
    condition: string | null;
    brand: string | null;
    weight: string | null;
    size: string | null;
    hns_code: string | null;
    material_Category: string | null;
    description: string | null;
    currency: string | null;
    instock: number | null;
  };
  mainImg: {
    url: string | null;
    publicid: string | null;
    originalname: string | null;
  };
  imgs: {
    url: string | null;
    publicid: string | null;
  }[];
  pdf: string | null;
  instock: number;
};

export type TProductResponse = {
  data: TProduct[];
  meta: {
    page: number;
    limit: number;
    last_page: number;
  };
};

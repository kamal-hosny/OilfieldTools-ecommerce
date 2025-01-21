export type TProduct = {
    _id: string;
    data: {
      product_name: string | null;
      price: number;
      model_number: string | null;
      category: string | null;
      dimension: string | null;
      unit_of_measurement: string | null;
      condition: string | null;
      brand: string | null;
      weight: string | null;
      size: string | null;
      hns_code: string | null;
      material_category: string | null;
      description: string | null;
      currency: string | null;
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
  
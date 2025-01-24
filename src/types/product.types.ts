export type TProduct = {
  _id: string;
  data: {
    product_name: string | null;
    price: number | null;
    model_number: string | null;
    category: string | null;
    Dimension: string | null; 
    Unit_of_Measurement: string | null; 
    condition: string | null;
    brand: string | null;
    weight: string | null;
    size: string | null;
    HNS_code: string | null; 
    material_Category: string | null; 
    instock: string | number | null;
    Description: string | null; 
    Currency: string | null;
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
  instock: number; // هذا حقل إضافي
};

export type TProductResponse = {
  data: {
    data: TProduct[]; 
    
  };
  meta: {
    page: number;
    limit: number;
    last_page: number;
  };
};

interface IProduct {
  id: string;
  name: string;
  price: number;
  images: string[];
  types: IProductType[];
  sale: boolean;
  rating: number;
  view: number;
  description: string;
  category_id: string;
}
interface IProductType {
  name: string;
  price_extra: number;
  price_sale: number;
  price_update: number;
  colors: ITypeColor[];
}
interface ITypeColor {
  name: string;
  image: string;
  price_extra: number;
  quantity: number;
}


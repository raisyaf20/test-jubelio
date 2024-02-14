type DataProduct = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  qty?: number;
};

type ResponseGetProducts = {
  limit: number;
  products: DataProduct[];
  skip: number;
  total: number;
};

import { Router } from 'express';
import { productRoutes } from '../modules/products/product.route';

export const router = Router();

const allRoutes = [
  {
    path: '/product',
    route: productRoutes,
  },
];
allRoutes.map((ele) => router.use(ele.path, ele.route));

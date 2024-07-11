import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { productServices } from './product.service';

const createProductIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.createProduct(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Product Created successfully!',
    data: result,
  });
});

const getAllProductsFromDb = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.allProducts();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'All Product fetch successfully!',
    data: result,
  });
});

export const productController = { createProductIntoDb, getAllProductsFromDb };

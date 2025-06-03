const productService = require('../services/productService');
const { AppError } = require('../utils/AppError');

class ProductController {
    async getAllProducts(req, res, next) {
        try {
            const products = await productService.getAllProducts();

            res.status(200).json({
                success: true,
                count: products.length,
                data: products
            });
        } catch (error) {
            next(error);
        }
    }

    async getProductById(req, res, next) {
        try {
            const { id } = req.params;

            if (!id) {
                throw new AppError('Product ID is required', 400);
            }

            const product = await productService.getProductById(id);

            if (!product) {
                throw new AppError(`Product with ID ${id} not found`, 404);
            }

            res.status(200).json({
                success: true,
                data: product
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ProductController();
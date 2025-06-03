const productData = require('../data/productData');

class ProductService {
    async getAllProducts() {
        try {
            return await productData.findAll();
        } catch (error) {
            throw new Error(`Failed to fetch products: ${error.message}`);
        }
    }

    async getProductById(id) {
        try {
            if (!id) {
                throw new Error('Product ID is required');
            }

            return await productData.findById(id);
        } catch (error) {
            throw new Error(`Failed to fetch product: ${error.message}`);
        }
    }
}

module.exports = new ProductService();
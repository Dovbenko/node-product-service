const initialProducts = require('./initialProducts');

class ProductData {
    constructor() {
        this.products = [...initialProducts];
    }

    async findAll() {
        // Simulate async operation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([...this.products]);
            }, 0);
        });
    }

    async findById(id) {
        // Simulate async operation
        return new Promise((resolve) => {
            setTimeout(() => {
                const product = this.products.find(p => p.id === id);
                resolve(product || null);
            }, 0);
        });
    }
}

module.exports = new ProductData();
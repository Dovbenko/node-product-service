const { v4: uuidv4 } = require('uuid');

// In-memory storage for products
let products = [
    {
        id: uuidv4(),
        name: 'Wireless Headphones',
        price: 99.99
    },
    {
        id: uuidv4(),
        name: 'Coffee Maker',
        price: 129.99
    },
    {
        id: uuidv4(),
        name: 'Running Shoes',
        price: 79.99
    },
    {
        id: uuidv4(),
        name: 'Desk Lamp',
        price: 45.99
    },
    {
        id: uuidv4(),
        name: 'Smartphone Case',
        price: 24.99
    }
];

class ProductData {
    async findAll() {
        // Simulate async operation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([...products]);
            }, 0);
        });
    }

    async findById(id) {
        // Simulate async operation
        return new Promise((resolve) => {
            setTimeout(() => {
                const product = products.find(p => p.id === id);
                resolve(product || null);
            }, 0);
        });
    }
}

module.exports = new ProductData();
const { v4: uuidv4 } = require('uuid');

const initialProducts = [
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

module.exports = initialProducts; 
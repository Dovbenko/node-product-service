# Product Service API

A RESTful API service for managing products built with Node.js and Express.js.

## Features

- ✅ GET /products - Get all products
- ✅ GET /products/:id - Get product by ID
- ✅ UUID for unique identifiers
- ✅ Error handling middleware
- ✅ In-memory data storage
- ✅ CORS enabled
- ✅ Health check endpoint

## Installation

```bash
npm install
```

## Running the Application

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start on http://localhost:3000

## API Endpoints

### Health Check
```
GET /health
```

### Get All Products
```
GET /products
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": "uuid-here",
      "name": "Wireless Headphones",
      "price": 99.99
    }
  ]
}
```

### Get Product by ID
```
GET /products/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid-here",
    "name": "Wireless Headphones",
    "price": 99.99
  }
}
```

## Project Structure

```
src/
├── app.js              # Main application file
├── routes/             # Route definitions
│   └── productRoutes.js
├── controllers/        # Request handlers
│   └── productController.js
├── services/          # Business logic
│   └── productService.js
├── data/              # Data access layer
│   └── productData.js
├── middleware/        # Custom middleware
│   └── errorMiddleware.js
└── utils/             # Utility functions
    └── AppError.js
```

## Error Handling

The API includes comprehensive error handling:
- 404 for non-existent products
- 400 for bad requests
- 500 for server errors
- Detailed error messages in development mode

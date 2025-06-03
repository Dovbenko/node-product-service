const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const { errorHandler, notFoundHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware to log HTTP requests
app.use(morgan("tiny"));

// Routes
app.use('/', productRoutes);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Product Service is running',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
    console.log(`Products API: http://localhost:${PORT}/products`);
});

module.exports = app;
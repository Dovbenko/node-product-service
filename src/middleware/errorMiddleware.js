const { AppError } = require('../utils/AppError');

const notFoundHandler = (req, res, next) => {
    const error = new AppError(`Route ${req.originalUrl} not found`, 404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    // Log error for development
    if (process.env.NODE_ENV !== 'production') {
        console.error('Error:', err);
    }

    // Default error response
    if (!error.statusCode) {
        error.statusCode = 500;
        error.message = 'Internal Server Error';
    }

    res.status(error.statusCode).json({
        success: false,
        error: {
            message: error.message,
            ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
        }
    });
};

module.exports = {
    notFoundHandler,
    errorHandler
};

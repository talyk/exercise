const AppError = require('../models/apperror');

exports.insertSecretValidator = (req, res, next) => {
    if (!req.body.name || !req.body.data)
        return next(new AppError("Missing required arguments", 400));
    return next();
};

exports.getSecretValidator = (req, res, next) => {
    if (!req.params.id)
        return next(new AppError("Missing required arguments", 400));
    return next();
};
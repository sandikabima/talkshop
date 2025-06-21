module.exports = (schemas) => async (req, res, next) => {
    try {
        if (schemas.body) {
            req.body = await schemas.body.validateAsync(req.body, { abortEarly: false });
        }
        if (schemas.query) {
            req.query = await schemas.query.validateAsync(req.query, { abortEarly: false });
        }
        if (schemas.params) {
            req.params = await schemas.params.validateAsync(req.params, { abortEarly: false });
        }
        next();
    } catch (error) {
        error.statusCode = 400;
        error.message = "Validation Error";
        error.errors = error.details?.map((err) => err.message);
        next(error);
    }
};

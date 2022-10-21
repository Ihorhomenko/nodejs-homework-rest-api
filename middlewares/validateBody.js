const validateBody = schema => {
    const func = async(req, res, next)=> {
        const {error} = schema.validate(req.body);
        if(error) {
            const errorValid = new Error(error.message)
            errorValid.status = 400;
            throw  next(errorValid);
        }
        next()
    }

    return func;
}

module.exports = validateBody
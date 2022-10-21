const {isValidObjectId} = require("mongoose")


const isValidId = (req, res, next) => {
    const {contactId} = req.params;
    const result = isValidObjectId(contactId);
    if(!result) {
        const error = new Error("Invalid id format")
        error.status = 400;
        throw next(error);
        
    }
    next()
}

module.exports = isValidId
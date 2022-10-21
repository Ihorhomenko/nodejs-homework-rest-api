const Contact = require('../../models/contacts')
const {validateSchemas} = require("../../helpers")

const updateContact = async(req, res, next)=> {
    try {
        const {error} = validateSchemas.schemaContact.validate(req.body);
                if(error) {
                const error = new Error("Bad Request")
                error.status = 400;
                throw error;
                }
        const {contactId} = req.params;
        const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
        if(!result){
        const error = new Error("Not found")
        error.status = 404;
        throw error;
    }
    res.json(result)
    } catch (error) {
        next(error)
    }
    
}

module.exports = updateContact;
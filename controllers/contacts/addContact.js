const Contact = require("../../models/contacts")
const {validateSchemas} = require("../../helpers")


const addContact = async(req, res, next)=> {
        try{
                const {error} = validateSchemas.schemaContact.validate(req.body);
                if(error) {
                const error = new Error("Bad Request")
                error.status = 400;
                throw error;
    }
                const result = await Contact.create(req.body);
                res.status(201).json(result)
        } catch (error) {
                next(error)
        }

}

module.exports = addContact;
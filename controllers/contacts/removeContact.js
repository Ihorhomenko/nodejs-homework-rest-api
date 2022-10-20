const Contact = require('../../models/contacts')

const removeContact = async(req, res, next)=> {
    try {
        const {contactId} = req.params;
        const result = await Contact.findByIdAndRemove(contactId);
        console.log(result)
        if(!result){
        const error = new Error("Not found")
        error.status = 404;
        throw error;
    }
    res.json({
        message: "Delete success"
    })
    } catch (error) {
        next(error)
    }
    
}

module.exports = removeContact
const Contact = require("../../models/contacts")


const updateFavorite = async(req, res)=> {
    const {contactId} = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
    if(!result){
        const error = new Error("Not found")
        error.status = 404;
        throw error;
    }
    res.json(result)
}

module.exports = updateFavorite;
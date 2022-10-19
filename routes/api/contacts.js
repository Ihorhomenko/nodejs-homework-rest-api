const express = require('express')


const ctrl = require("../../controllers/contacts")

const router = express.Router()


router.get('/', async (req, res, next) => {
  try {
    const result = await ctrl.getAllContacts;
    res.json(result)
} catch (error) {
    next(error)
}
})

// router.get('/:contactId', async (req, res, next) => {
//   try {
//     const {contactId} = req.params;
//     const result = await contacts.getContactById(contactId);
//     if(!result){
//         const error = new Error("Not found")
//         error.status = 404;
//         throw error;
//     }
//     res.json(result)
// } catch (error) {
//     next(error)
// }
// })

router.post('/', async (req, res, next) => {
  try {
const result = await ctrl.addContact;
    res.status(201).json(result)
} catch (error) {
    next(error);
}
})

// router.delete('/:contactId', async (req, res, next) => {
//   try {
//     const {contactId} = req.params;
//     const result = await contacts.removeContact(contactId);
//     if(!result){
//       const error = new Error("Not found")
//       error.status = 404;
//       throw error;
//     }
//     res.json({
//         message: "Delete success"
//     })
// } catch (error) {
//     next(error);
// }
// })

// router.put('/:contactId', async (req, res, next) => {
//   try {
//     const {error} = schema.validate(req.body);
//     if(error) {
//       const error = new Error("Bad Request")
//       error.status = 400;
//       throw error;
//     }
//     const {contactId} = req.params;
//     const result = await contacts.updateContact(contactId, req.body);
//     if(!result){
//       const error = new Error("Not found")
//       error.status = 404;
//       throw error;
//     }
//     res.json(result)
// } catch (error) {
//     next(error);
// }
// })

module.exports = router

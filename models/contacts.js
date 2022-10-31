const {Schema, model} = require("mongoose")

const {handleErrors} = require("../helpers")


const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
}, {versionKey: false, timestamps: true})

contactSchema.post("save", handleErrors);

const Contact = model("contacts", contactSchema)

module.exports = Contact

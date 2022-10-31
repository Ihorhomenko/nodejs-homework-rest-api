const User = require("../../models/users")

const updateSubscription = async(req, res)=> {
    const {_id} = req.user;
    const result = await User.findByIdAndUpdate(_id, req.body, {new: true});
    if(!result){
        const error = new Error("Not found")
        error.status = 404;
        throw error;
    }
    res.json(result)
}

module.exports = updateSubscription;
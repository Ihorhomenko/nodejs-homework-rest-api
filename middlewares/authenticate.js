const jwt = require("jsonwebtoken");

const User = require("../models/users");

const {RequestError} = require("../helpers");

const {SECRET_KEY} = process.env;

const authenticate = async (req, res, next) => {
    try{
        const {authorization = ""} = req.headers;
        const [bearer, token] = authorization.split(" ");
        if(bearer !== "Bearer" || !token) {
            throw RequestError(401);
        }
        const {id} = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if(!user || user.token !== token) {
            throw RequestError(401);
        }
        req.user = user;
        next()
    }
    catch(err){
        if(!err.status) {
            err.status = 401;
        }
        next(err);
    }
}

module.exports = authenticate
const path = require("path")
const User = require("../../models/users")
const fs = require("fs/promises");
const Jimp = require('jimp');

const avatarDir = path.join(__dirname, "../../", "public", "avatars")


const updateAvatar = async (req, res) => {
    const {_id} = req.user;
    const { path: temporaryName, originalname } = req.file;
    const extension = originalname.split(".").pop();
    const fileName = `${_id}.${extension}`
    const avatarWay = path.join(avatarDir, fileName)
    await fs.rename(temporaryName, avatarWay)
    Jimp.read(avatarWay)
        .then(avatar => {
            return avatar
            .resize(250, 250)
        })
        .catch(err => {
            console.log(err)
        });
    const avatarURL = path.join("avatars", fileName)
    await User.findByIdAndUpdate(_id, {avatarURL})

    res.status(200).json({
        avatarURL,
    })
}

module.exports = updateAvatar;
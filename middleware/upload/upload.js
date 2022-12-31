const multer = require('multer')
// upload

const uploadSingleImage = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) { // lưu ở đâu
            cb(null, './public')
        },
        filename: function (req, file, cb) { // đặt lại tên file
            cb(null, Date.now() + "-" + file.originalname)
        }

    })
    const upload = multer({

        store: storage,

        fileFilter: (req, file, cb) => {
            const extensionImageList = ['.png', '.jpg']
            const extent = file.originalname.slice(-4);
            const check = extensionImageList.includes(extent);
            console.log(check)
            if (check) {
                cb(null, true)
            } else {
                cb('error', false)
            }
        }
    });
    return upload.single('avatar')
}

const uploadAvatar = (req, res) => {
    res.send('upload thanh cong')
}


module.exports = {
    uploadSingleImage,
    uploadAvatar
}
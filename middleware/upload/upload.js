const multer = require('multer')
const {bucketFireBase, BUCKET} = require("../../service/firebase");

// upload với multer vào DiskStore

const uploadSingleImageDiskStore = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) { // lưu ở đâu1
            cb(null, './public')
        },
        filename: function (req, file, cb) { // đặt lại tên file
            cb(null,file.originalname)
        }
    });
    const upload = multer({

        storage: storage,

        fileFilter: (req, file, cb) => {
            const extensionImageList = ['.xlsx']
            const extent = file.originalname.slice(-5);
            const check = extensionImageList.includes(extent);
            console.log('check', check)
            if (check) {
                cb(null, true)
            } else {
                cb('error', new Error('anh khong hop le'))
            }
        }
    });

    return upload.single('dataExcel')
}

// Upload với multer vào cloud store

const checkFileUploadType = () => {
    const storage = multer.memoryStorage();

    const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            console.log(file)
            const extensionImageList = ['.png', '.jpg']
            const extent = file.originalname.slice(-4);
            const check = extensionImageList.includes(extent);
            console.log('check', check)
            if (check) {
                cb(null, true)
            } else {
                cb('error', new Error('anh khong hop le'))
            }
        },

    });

    return upload.single('avatar')
}
const uploadSaveStoreCloud = (req, res, next) => {

    const imageUpload = req.file

    const imageUploadAddTime = Date.now() + "-" + imageUpload.originalname

    const blobImage = bucketFireBase.file(imageUploadAddTime)

    const blobWriter = blobImage.createWriteStream({
        metadata: {
            contentType: imageUpload.mimetype
        }
    })
    blobWriter.on('error', (err) => {
        console.log(err)
    })

    blobWriter.on('finish', async () => {
        try {
            await blobImage.makePublic()
            req.file.firebaseUrl = `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${imageUploadAddTime}?alt=media`
            next();
        } catch (e) {
            req.status(403).send({
                message: 'upload khong thanh cong'
            })
        }
    })
    blobWriter.end(req.file.buffer)
}



// Upload file excel
const checkFileUploadTypeExcel = () => {
    const storage = multer.memoryStorage();

    const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            console.log(file)
            const extensionImageList = ['.xlsx']
            const extent = file.originalname.slice(-5);
            const check = extensionImageList.includes(extent);
            console.log('check', check)
            if (check) {
                cb(null, true)
            } else {
                cb('error', new Error('Đây không file excel'))
            }
        },

    });

    return upload.single('dataExcel')
}
const uploadXLSXSaveStoreCloud = (req, res, next) => {

    const XLSXUpload = req.file

    const imageUploadAddTime = Date.now() + "-" + XLSXUpload.originalname

    const blobImage = bucketFireBase.file(imageUploadAddTime)

    const blobWriter = blobImage.createWriteStream({
        metadata: {
            contentType: XLSXUpload.mimetype
        }
    })
    blobWriter.on('error', (err) => {
        console.log(err)
    })

    blobWriter.on('finish', async () => {
        try {
            await blobImage.makePublic()
            req.file.firebaseUrl = `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${imageUploadAddTime}`
            next();
        } catch (e) {
            req.status(403).send({
                message: 'Upload không thành công'
            })
        }
    })
    blobWriter.end(req.file.buffer)
}

module.exports = {
    uploadSaveStoreCloud,
    checkFileUploadType,
    checkFileUploadTypeExcel,
    uploadXLSXSaveStoreCloud,
    uploadSingleImageDiskStore
}

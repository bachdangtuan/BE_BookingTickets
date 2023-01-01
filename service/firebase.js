const admin = require('firebase-admin')
const serviceAccount = require("./key/AuthAccountFireBase.json");

const BUCKET = "admindangtuan-95db6.appspot.com"
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: BUCKET
});
const destinationFilename = "member";

const bucketFireBase = admin.storage().bucket()



module.exports = {bucketFireBase, BUCKET};
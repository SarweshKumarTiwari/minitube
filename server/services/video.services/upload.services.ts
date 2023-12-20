import multer from "multer";
const storage=multer.diskStorage({
    destination(req, file, callback) {
        callback(null,"./public/tmp")
    },
    filename(req, file, callback) {
        callback(null,JSON.stringify(Date.now())+"."+file.mimetype.split("/")[1]);
    },
})

export const uploadFile=multer({storage})
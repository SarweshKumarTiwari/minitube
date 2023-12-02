import cloudinary from "./cloudinary.service"
import fs from "fs"
export default async function uplodOnCloudinary(filePath?:string) {
    try {
        console.log("uploading");
        if (!filePath) {
            throw new Error("No files provided")
        }
        const response=await cloudinary.uploader.upload(filePath,{resource_type:"auto"});
        fs.unlinkSync(filePath);
        return response;
    } catch (error) {
        fs.unlinkSync(filePath as string);
        console.log(error)
        return null;
    }
}
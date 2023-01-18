import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
    image:[],
    caption:{
        type:String,
    },
    category:{
        type:String
    },
    dateOfUpload:{
        type:String
    }
})
const Gallery = mongoose.model('gallery',gallerySchema);
export default Gallery;
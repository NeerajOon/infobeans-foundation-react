import Registration from "../model/registrationModel.js";

//registration
export const registration = async (req,res,next)=>{
    try {
        let docs = req.files.map(file=>file.filename);
        req.body.docs = docs;
        req.body.is_varified = 0;
        const result = await Registration.create(req.body);
        return res.status(200).json({status:true,result}); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false}); 
    }
}
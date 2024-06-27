import mongoose from "mongoose"

export const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI!,{
        dbName: "wd-compiler",
        } );
        console.log("Mongo Connected")
    }catch(error){
        console.log("Mongo Not Connected");
    }

};
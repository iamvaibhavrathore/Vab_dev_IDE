//Creting models in typescript is different from javascript

import mongoose from "mongoose";

//create interface for typescript
interface ICodeSchema{
    fullCode:{
        html:string;
        css:string;
        javascript:string;
    }
}

//mongoose schema
const CodeSchema = new mongoose.Schema<ICodeSchema>({
    fullCode:{
        html:String,
        css:String,
        javascript:String,
    },
});

export const Code = mongoose.model("Code", CodeSchema);
 import { Schema, model } from "mongoose";

const  maintenanceSchema  = new Schema({
    description :  {type: String,trim:true},
    make:{type: String,trim:true},
    model:{type: String,trim:true}, 
    estimatedate:{type: String,trim:true}, 
    image:{type: String,trim:true},
    km:{type: Number,trim:true},
    user:{type: String,trim:true},
    inMaintenance:{type: Boolean,trim:true},
},{
    versionKey:false,
    timestamps:true
})

export default model('Maintenance', maintenanceSchema);
import mongoose,{ConnectionOptions}  from "mongoose";
import config from './config';

(async ()=>{
    try{
        const mongooseOptions: ConnectionOptions= {
            useUnifiedTopology: true,
            useNewUrlParser:true,
        }
        const uriDB=`mongodb+srv://${config.MONGO_USR}:${config.MONGO_PWR}@cluster0.wzvn5.mongodb.net/${config.MONGO_DB}?retryWrites=true&w=majority`
        
        const db =  await mongoose.connect(uriDB,mongooseOptions);
        console.log("Connection made! connnected to: ", db.connection.name);
    }catch(e){
        console.log(e); 
    }  
})()


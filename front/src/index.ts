import app from "./app";
import "./database"

app.listen (app.get('port'),()=>{
    console.log("Starting server... init on port" , app.get('port'));
})
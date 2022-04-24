import express, { Express,Request, Response } from "express";
import dotenv from "dotenv";

//Configuration the .env file
dotenv.config();

// Create Express app

const app:Express = express();
const port:string | number = process.env.PORT || 3100;

//Define the first Route app
app.get('/',(req:Request , res:Response)=>{
    //Send Hello world

    res.send('Welcome to APP RESTFULL: Express + TS + Jest + Nodemon Swagger + Mongoose')
});

app.get("/hello",(req:Request , res:Response)=>{
    
    let {name = 'anonimo'} = req.query;
    //Send Welcome 

         res.status(200).json({
            data : {
                message : `Bienvenido ${name}`
            }
        });
});

app.get('/bye',(req:Request, res:Response)=> {
    //Send Good Bye
    res.status(200).json({
        data : {
            message : "Goodbye, world"
        }
    });
});

//Execute app and Listen Request To PORT 

app.listen(port,() => {
    console.log(`EXPRESS SERVER : Running at http://localhost:${port}`)
})
import { BasicResponse } from "@/controller/types";
import express,{ Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

//Router from Express
let helloRouter = express.Router();

//GET --> http://localhost:3100/api/hello?name=eze

helloRouter.route('/',)
    .get(async ( req:Request, res:Response )=>{
        //Obtener query params

        let name:any = req?.query?.name; 
        LogInfo(`Query Params ${name}`)
        //Controller instance to execute method
        const controller:HelloController = new HelloController();
        //Obtain Response
        const response: BasicResponse  = await controller.getMessage(name);
        //Send to the client the response
        return res.send(response);  
    })

    export default helloRouter;  
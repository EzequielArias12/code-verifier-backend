import {  BasicGoodBye } from "@/controller/types";
import express,{ Request, Response } from "express";
import { GoodByeController } from "../controller/GoodByeController";
import { LogInfo } from "../utils/logger";

//Router from Express
let goodByeRouter = express.Router();

//GET --> http://localhost:3100/api/Goodbye?name=eze

goodByeRouter.route('/',)
    .get(async ( req:Request, res:Response )=>{
        //Obtener query params

        let name:any = req?.query?.name; 
        LogInfo(`Query Params ${name}`)
        //COntroller instance to execute method
        const controller:GoodByeController = new GoodByeController();
        //Obtain Response
        const response: BasicGoodBye  = await controller.getMessage(name);
        //Send to the client the response
        return res.send(response);  
    })

    export default goodByeRouter;  
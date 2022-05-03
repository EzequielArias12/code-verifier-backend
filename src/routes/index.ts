/*
 * Root Router
    Redirections to Router
 */

import express ,{ Request, Response} from 'express';
import helloRouter from './HelloRouter';
import goodByeRouter from './GoodByeRouter';
import { LogInfo } from  '../utils/logger';


//Server instance
let server = express();

//Router instance
let rootRouter = express.Router();

//Activate for request to http://localhost:3100/api

//GET : http://localhost:3100/api/
rootRouter.get('/',(req:Request , res:Response)=>{
    //Send Hello world
    LogInfo('GET:http://localhost:3100/api')
    res.send('Welcome to APP RESTFULL: Express + TS + Jest + Nodemon Swagger + Mongoose')
});

//Redirections To Routers & Controllers
server.use('/',rootRouter); // http://localhost:3100/api
server.use('/hello',helloRouter); // http://localhost:3100/api/hello --> HelloRouter
//Add more routes to the app 
server.use('/goodbye',goodByeRouter);   // http://localhost:3100/api/goodbye

export default server;
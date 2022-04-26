import express,{ Express, Request, response, Response} from 'express';
//Enviroments
import dotenv from 'dotenv';

//Security
import cors from 'cors';
import helmet from 'helmet';

//TODO HTTPS

//Root Router
import router from '../routes';

// Create Express app

const server:Express = express();
const port:string | number = process.env.PORT || 3100;

//Define SERVER to use "/api" and use rootRouter from 'index.ts' in routes
//Fom this point onover : http://localhost:3100/api/
server.use('/api',router)

//TODO Mongoose Connection

//Security Config
server.use(helmet());
server.use(cors());

//Content Type: config
server.use(express.urlencoded({ extended: true, limit : '50mb' }));
server.use(express.json({limit : '50mb'}));

//* Redirections Config
// http://localhost:3100/ ---> http://localhost:3100/api/

server.get('/',(req:Request ,res:Response)=>{
    res.redirect('/api')
});

export default server;
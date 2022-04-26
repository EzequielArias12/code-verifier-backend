import dotenv from 'dotenv';
import server from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';

//Configuration the .env file
dotenv.config();

const port = process.env.PORT || 3100;

//Execute Server 

server.listen(port, () => {
    LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`);
});

//Control server error

server.on('error',(error)=>{
    LogError(`[SERVER ERROR]: ${error}`);
});
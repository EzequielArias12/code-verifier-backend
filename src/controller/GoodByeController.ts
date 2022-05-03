import {  BasicGoodBye } from "./types"
import { IHelloController } from "./interfaces";
import { LogSuccess } from '../utils/logger';


export class GoodByeController implements IHelloController {
    public async getMessage(name?: string): Promise<BasicGoodBye> {
        LogSuccess('[/api/goodbye] Get Request');

        let x : any =  new Date();
        let m : number = x.getMonth();
        let d : number = x.getDate();
        let y : number = x.getFullYear();
        
        let actualDate = `${d} - ${m} - ${y}`

        return {
            message : `Goodbye ${name || "anonimus"}`,
            fecha : actualDate
        }
 }
} 
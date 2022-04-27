import { BasicGoodBye, BasicResponse } from "../types";


export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IGoodBye{
    getMessage(name?:string): Promise<BasicGoodBye>
}
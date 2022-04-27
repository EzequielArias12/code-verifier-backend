/*
* Basic JSON response for Controllers
*/

export type BasicResponse = {
    message : string
}

/*
* Error response for Controller
*/

export type ErroResponse = {
    error : string,
    message : string
}


export type BasicGoodBye = {
    message : string,
    fecha :  string
}
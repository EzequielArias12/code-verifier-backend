import mongoose from 'mongoose';

export const kataSchema = () => {

    let kataSchema = new mongoose.Schema( 
        {
            name : String,
            description : String,
            level : Number,
            user : { 
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Users',
                required : true
            }
        }
    )
    return mongoose.model('katas',kataSchema );
}
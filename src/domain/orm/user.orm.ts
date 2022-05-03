import { userEntity} from '../entities/User.entity';
import { LogError, LogSuccess } from '@/utils/logger';

//CRUD

/**
 * Method to obtain all User from collection ""
 */
export const GetAllUser = async ():Promise<any[] | undefined>  => {
    try {
        let userModel = userEntity();

        //search all user

        return await userModel.find({isDelete: false});
    } catch (error) {
        LogError(`[ORM ERROR]: Getting All Users ${error}`);
    }

}

//TODO
//get user by id
//Get user by email
//delete user by id
//create new user 
//update user by id
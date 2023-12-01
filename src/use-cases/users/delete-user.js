import UserDB  from '../../models/user-db.js';
import { Role } from '../../middlewares/types.js'

const deleteUserUseCase = () => {
  return async function get(id,info){
    
      if(info.role != Role.Admin){
        throw new Error('Not Authorize')
      } 

      const updateUser = await UserDB.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set:{
            active: false
          }
        })
      
      if(!updateUser){
        throw new Error(updateUser)
      }

      return {
        msg: `User ${id} deleted successfully`
    };
  };
};

export default deleteUserUseCase;
import UserDB from '../../models/user-db.js';

const getUserUseCase = () => {
  return async function get(id){

      return UserDB.findById(id)
  };
};

export default getUserUseCase;
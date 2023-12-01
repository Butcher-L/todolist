import UserDB from '../../models/user-db.js';

const getUsersUseCase = () => {
  return async function getAll(info){
    const {first, order, next} = info.query

      return UserDB.find({})
      .skip(next)
      .limit(first)
      .sort({dateTimeCreated:order});
  };
};

export default getUsersUseCase;
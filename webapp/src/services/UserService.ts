import api from './config/api';
import { User } from '../model/User';

const createUser = async(user: User) => {
  const response = await api.post('user', user);
  return response.data;
}

export default { createUser };
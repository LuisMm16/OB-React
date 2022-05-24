import axios from '../utils/axios.config';

export const getRandomJoke = async () => {
  const response = await axios.get('/jokes/random');
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error('Server error')
  }
}
import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-93386-default-rtdb.firebaseio.com/'
})
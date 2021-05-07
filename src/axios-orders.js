import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-714df-default-rtdb.firebaseio.com/'
});

export default instance;
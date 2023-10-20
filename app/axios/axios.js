import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'',
    timeout:'2000',
})

export default axiosInstance
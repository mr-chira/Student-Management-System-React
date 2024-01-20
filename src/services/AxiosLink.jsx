import axios from 'axios';
import {getItem} from '../common/utils/storage/storage';

const token = getItem('309|EbonvLfb3MVWsscZiuDHWM4tDSLLonFGJGR6I52C4bab1e79');

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: { Authorization : `Bearer ${token}` },
});

export default instance;
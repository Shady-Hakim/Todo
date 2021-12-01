import axios from 'axios';
import {api} from '../config';

function fetchData(endPoint) {
    return axios.get(`${api}/${endPoint}`);
}
export default fetchData;

import axios from 'axios';

export default function () {
    return {
        type: 'FETCH_LOGIN',
        payload: axios.get('/login')
    }
}